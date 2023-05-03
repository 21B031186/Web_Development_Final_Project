from rest_framework import serializers
from event.models import *
from django.contrib.auth import authenticate



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'
        # read_only_fields = ('desc', 'info', 'photo', 'category')

from rest_framework import serializers

class CommentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    post_id = serializers.IntegerField(source='post.id')
    author_id = serializers.IntegerField(source='author.id')
    text = serializers.CharField(max_length=500)
    created = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Comment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.text = validated_data.get('text', instance.text)
        instance.save()
        return instance