from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('event/', include('event.api.urls')),
    path('api/', include('accounts.urls'))

    # Rest Framework Urls
    # path('account/', include('accounts.urls', 'accounts_api')),
]
