from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),

    # Rest Framework Urls
    path('api/account/', include('accounts.api.urls', 'accounts_api')),
]
