from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics

from rest_framework.viewsets import ViewSet

from accounts.models import User
from event.api.serializers import EventSerializer,CategorySerializer,CommentSerializer
from event.models import Events, LikeUser, Category, Comment


class EventAPIListView(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    # def post(self, request, *args, **kwargs):
    #     data = request.data.copy()
    #     data['user'] = request.user.id
    #     serializer = EventSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #

class EventRetrieveUpdateDestroyAPIView(APIView):
    permission_classes = (AllowAny,)
    def get_object(self, pk):
        try:
            return Events.objects.get(id=pk)
        except Events.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):
        self.permission_classes = (AllowAny,)
        instance = self.get_object(pk)
        serializer = EventSerializer(instance)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        self.permission_classes = (IsAuthenticated,)
        instance = self.get_object(pk)
        serializer = EventSerializer(instance=instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,pk):
        self.permission_classes = (IsAuthenticated,)
        instance = self.get_object(pk)
        serializer = EventSerializer(instance=instance)
        if(instance.user == request.user):
            instance.delete()
            return Response(serializer.data)
        else:
            return Response({"Error":"You can't remove this event"})




class CategoryAPIListView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset,many=True)
        return Response(serializer.data)

class CategoryItemsAPIView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        events = Events.objects.filter(category_id=pk)
        serializer = EventSerializer(instance=events, many=True)
        return Response(serializer.data)

class FavoritesAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        liked_events = Events.objects.filter(liked_events__user=request.user, liked_events__user_liked=True)
        serializer = EventSerializer(instance=liked_events, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def my_events(request):
    if request.method == 'GET':
        events = Events.objects.filter(user=request.user)
        serializer = EventSerializer(instance=events,many = True)
        return Response(serializer.data)

@api_view(['GET'])
def comments(request):
    if request.method == "GET":
        comments = Comment.objects.all()
        serializer = CommentSerializer(instance=comments,many=True)
        return Response(serializer.data)
