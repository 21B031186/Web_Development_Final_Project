from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('event/', include('event.api.urls')),

    # Rest Framework Urls
    path('event/account/', include('accounts.api.urls', 'accounts_api')),
]
