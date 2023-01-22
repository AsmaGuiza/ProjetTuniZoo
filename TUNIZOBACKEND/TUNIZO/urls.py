from django.urls import path,include
from rest_framework import routers
from .models import Especes,Publication,Message,TuniZooUser,Adoption,Donation,Commentaire
from .views import EspecesViewSet,DonationViewSet,AdoptionViewSet,MessageViewSet,TunizooUserViewSet,PublicationViewSet,CommentaireViewSet
router=routers.DefaultRouter()

router.register("Especes",EspecesViewSet)
router.register("Publication",PublicationViewSet)
router.register("Message",MessageViewSet)
router.register("Adoption",AdoptionViewSet)
router.register("TuniZooUser",TunizooUserViewSet)
router.register("Donation",DonationViewSet)
router.register("Commentaire",CommentaireViewSet)


urlpatterns = [
    path('',include(router.urls))
]