from rest_framework import serializers
from event.models import *
from django.contrib.auth import authenticate


class CategoriesSerializer(serializers.Serializer):
    name = serializers.CharField()
    photo = serializers.CharField()


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'
        # read_only_fields = ('desc', 'info', 'photo', 'category')
