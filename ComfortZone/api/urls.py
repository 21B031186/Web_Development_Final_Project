from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import *

urlpatterns = [
    path('category/', CategoryAPIListView.as_view()),
    path('home/', EventAPIListView.as_view()),
    path('home/<int:pk>/', EventRetrieveUpdateDestroyAPIView.as_view()),
    path('category/<int:pk>/', CategoryItemsAPIView.as_view()),
    path('favorites/', FavoritesAPIView.as_view()),
    path('like/<int:pk>/', like),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]