from rest_framework import serializers
from ..models import Especes


class EspeceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especes
        fields =['Name','Description','Image']