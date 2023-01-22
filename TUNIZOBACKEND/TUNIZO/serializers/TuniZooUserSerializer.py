from rest_framework import serializers
from ..models import TuniZooUser


class TuniZooUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TuniZooUser
        depth = 1
        fields =['Sexe','Followers','User']