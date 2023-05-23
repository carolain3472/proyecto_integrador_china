"""
URL configuration for china project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from finding_china.views import Login,Logout, UpdateProfile

urlpatterns = [
    path('admin/', admin.site.urls),
    path('china/', include(('finding_china.urls', 'default'))),
    path('api_generate_token/', views.obtain_auth_token), #SOlo es aceptado por el método post
    path('login_user/',Login.as_view(), name = 'login'),
    path('logout/', Logout.as_view()),
    path('update/',UpdateProfile.as_view(), name='update'),


]
