from django.urls import path, include
from .views import UsuariosList
from rest_framework import routers
from .views import LoginView
from .views import RegisterUserView
from .views import UpdateProfile
from .views import UpdateContraseña


from rest_framework.documentation import include_docs_urls

router= routers.DefaultRouter()
 #Aplicacion o clase desde donde, vista, nombre
router.register('listaUser', UsuariosList, 'usuarioList1' )



urlpatterns = [
    path('usuario/', include(router.urls)),
    path('docs/', include_docs_urls(title="modulo API")),
    path('login_view/', LoginView.as_view(), name='login_view'),
    path('register/', RegisterUserView.as_view(), name='register'),
    path('editProfile/' ,UpdateProfile.as_view(), name='editProfile'),
     path('update_contra/',UpdateContraseña.as_view(), name='update_contra'),


]
