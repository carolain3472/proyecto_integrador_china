from django.urls import path, include
from .views import UsuariosList
from rest_framework import routers
from .views import LoginView
from .views import RegisterUserView


from rest_framework.documentation import include_docs_urls

router= routers.DefaultRouter()
 #Aplicacion o clase desde donde, vista, nombre
router.register('listaUser', UsuariosList, 'usuarioList1' )



urlpatterns = [
    path('usuario/', include(router.urls)),
    path('docs/', include_docs_urls(title="modulo API")),
    path('login_view/', LoginView.as_view(), name='login_view'),
    path('register/', RegisterUserView.as_view(), name='register'),

]