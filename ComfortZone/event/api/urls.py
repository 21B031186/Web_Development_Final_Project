from django.urls import path

from event.api.views import *

urlpatterns = [
    path('category/', CategoryAPIListView.as_view()),
    path('home/', EventAPIListView.as_view()),
    path('home/<int:pk>/', EventRetrieveUpdateDestroyAPIView.as_view()),
    path('category/<int:pk>/', CategoryItemsAPIView.as_view()),
    path('favorites/', FavoritesAPIView.as_view()),
    path('like/<int:pk>/', like),
]