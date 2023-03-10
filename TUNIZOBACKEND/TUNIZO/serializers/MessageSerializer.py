from rest_framework import serializers
from ..models import Message


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        depth = 1

        fields =['MsgReceiver','MsgSender','Description','date']