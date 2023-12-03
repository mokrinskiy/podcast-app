from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class PodcastSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)
    author = AuthorSerializer(many=True)

    class Meta:
        model = Podcast
        fields = '__all__'
