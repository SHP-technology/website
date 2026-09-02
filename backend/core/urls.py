from django.contrib import admin
from django.urls import path, include
from content.views import root_api_index

urlpatterns = [
    path('', root_api_index, name='root-index'),
    path('admin/', admin.site.urls),
    path('api/', include('content.urls')),
]
