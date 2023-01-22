from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Especes,Publication,Message,TuniZooUser,Adoption,Donation,Commentaire
from .serializers import EspeceSerializer,CommentaireSerializer,TuniZooUserSerializer,PublicationSerializer,MessageSerializer,DonationSerializer,AdoptionSerializer
from rest_framework.authentication import TokenAuthentication
# Create your views here.
class EspecesViewSet(viewsets.ModelViewSet):
    serializer_class = EspeceSerializer
    queryset=Especes.objects.all()
    authentication_classes=(TokenAuthentication,)

class PublicationViewSet(viewsets.ModelViewSet):
    serializer_class = PublicationSerializer
    queryset=Publication.objects.all()
    authentication_classes=(TokenAuthentication,)
    @action(detail=False,methods=['POST'])
    def getPubByUser(self,request):
        try:
            User = request.data['User']
            Pub = Publication.objects.filter(UserNamePublication = User)
            print(Pub)
            PubSer = PublicationSerializer(Pub,many=True,context={'request': request})
                        
            return Response({"Pub": PubSer.data}, status=status.HTTP_200_OK)
        except Exception as e :
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)


class TunizooUserViewSet(viewsets.ModelViewSet):
    serializer_class = TuniZooUserSerializer
    queryset=TuniZooUser.objects.all()
    
class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset=Message.objects.all()
    authentication_classes=(TokenAuthentication,)
    @action(detail=False,methods=['POST'])
    def getByUser(self,request):
        try:
            sender = request.data['Sender']
            senderUser = TuniZooUser.objects.get(UserName = sender)
            sentMessages  = Message.objects.filter(MsgSender = senderUser)
            receivedMessages  = Message.objects.filter(MsgReceiver = senderUser)

            print(sentMessages)
            print(receivedMessages)

            sentMessagesSer = MessageSerializer(sentMessages,many=True)
            receivedMessagesSer = MessageSerializer(receivedMessages,many=True)
            
            return Response({"SentMessages": sentMessagesSer.data,"ReceivedMessages": receivedMessagesSer.data}, status=status.HTTP_200_OK)
        except Exception as e :
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
    @action(detail=False,methods=['POST'])
    def getUserReceivedMessages(self,request):
        try:

            User = TuniZooUser.objects.get(UserName = request.data["user"])
            receivedMessages  = Message.objects.filter(MsgReceiver = User)

            print(receivedMessages)

            receivedMessagesSer = MessageSerializer(receivedMessages,many=True)
            
            return Response({"ReceivedMessages": receivedMessagesSer.data}, status=status.HTTP_200_OK)
        except Exception as e :
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
        

class AdoptionViewSet(viewsets.ModelViewSet):
    serializer_class = AdoptionSerializer
    queryset=Adoption.objects.all()
    authentication_classes=(TokenAuthentication,)

class DonationViewSet(viewsets.ModelViewSet):
    serializer_class = DonationSerializer
    queryset=Donation.objects.all()
    authentication_classes=(TokenAuthentication,)

class CommentaireViewSet(viewsets.ModelViewSet):
    serializer_class = CommentaireSerializer
    queryset=Commentaire.objects.all()
    authentication_classes=(TokenAuthentication,)

