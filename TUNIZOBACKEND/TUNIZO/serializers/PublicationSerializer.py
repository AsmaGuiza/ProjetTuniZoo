from rest_framework import serializers
from ..models import Publication


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        depth = 2
        fields =['UserNamePublication','Description','Likes','TYPEPUB','Image']