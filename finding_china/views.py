

from django.shortcuts import render,redirect
from rest_framework import generics
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.generic.edit import FormView
from django.contrib.auth import login,logout,authenticate
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import AllowAny

from .serializer import UsuarioSerializer
from rest_framework import viewsets


from .models import CustomUser

#JWT y  O2 de validacion de token 
class UsuariosList(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = (IsAuthenticated,)
    authentication_class = (TokenAuthentication,)


class Login(FormView):
    template_name = "login_user.html"
    form_class = AuthenticationForm
    success_url = reverse_lazy('default:usuarioList1-list')

    @method_decorator(csrf_protect)
    @method_decorator(never_cache)
    def dispatch(self,request,*args,**kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(self.get_success_url())
        else:
            return super(Login,self).dispatch(request,*args,*kwargs)

    def form_valid(self,form):
        user = authenticate(username = form.cleaned_data['username'], password = form.cleaned_data['password'])
        token,_ = Token.objects.get_or_create(user = user)
        if token:
            login(self.request, form.get_user())
            return super(Login,self).form_valid(form)
        
class Logout(APIView):
    def post(self, request, format=None):
        username = request.data.get('username')

        try:
            # Buscar al usuario por nombre de usuario en la base de datos
            user = CustomUser.objects.get(username=username)
            
            # Eliminar el token de acceso del usuario
            Token.objects.filter(user=user).delete()
            
            return Response(status=status.HTTP_200_OK)
        except CustomUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
class UpdateProfile(APIView):
    def post(self, request):
        username= request.data.get('username')
        profile= request.data.get('foto')
        
        try:
            # Buscar al usuario por nombre de usuario en la base de datos
            user = CustomUser.objects.get(username=username)
            token_exists = Token.objects.filter(user=user).exists()

            if token_exists:
                user.profile_picture=profile
                print(user.profile_picture)
                user.save()
                return Response(status=status.HTTP_200_OK)
            else:
                # El token no está asociado al usuario
                return Response(status=status.HTTP_404_NOT_FOUND)


        except CustomUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        

class UpdateContraseña(APIView):
    def post(self, request):
        username= request.data.get('username')
        password= request.data.get('password')
        
        try:
            # Buscar al usuario por nombre de usuario en la base de datos
            user = CustomUser.objects.get(username=username)

            token_exists = Token.objects.filter(user=user).exists()

            if token_exists:
                user.set_password(password)
                print("Nueva contraseña")
                print(password)
                user.save()
                return Response(status=status.HTTP_200_OK)
            else:
                # El token no está asociado al usuario
                return Response(status=status.HTTP_404_NOT_FOUND)


        except CustomUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            # Buscar al usuario por cédula en la base de datos
            usuario = CustomUser.objects.get(username=username)

            # Verificar la contraseña del usuario
            if usuario.check_password(password):
                # Autenticar al usuario y generar un token de autenticación
                user = authenticate(username=username, password=password)
                if user is not None:
                    login(request, user)
                    token, _ = Token.objects.get_or_create(user=user)

        

                    user_data = {
                        'id': user.id,
                        'username': user.username,
                        'email': user.email,
                        'profile_picture': user.profile_picture.url if user.profile_picture else None,
                        # Agrega más campos de información del usuario si es necesario
                    }
                  
                
                    return Response({'valid': True, 'token': token.key, 'user': user_data})

        except CustomUser.DoesNotExist:
            raise AuthenticationFailed('Las credenciales proporcionadas son inválidas.')

        return Response({'valid': False})
    
class RegisterUserView(APIView):
    permission_classes = [AllowAny]  # Permite el acceso sin autenticación
    authentication_classes = []  # No se requiere autenticación

    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        foto=  request.data.get("foto") 
        username= request.data.get('nombre')
        email= request.data.get('email1')
        password= request.data.get('contraseña')

        try:


            print('Entró')
            print(foto)
            superuser = CustomUser.objects.create_superuser(
                    username=username,
                    password=password,
                    email=email,
                    profile_picture=foto
        )
        
                #user = CustomUser.objects.create_superuser(**serializer.validated_data)
            superuser.is_staff = True
            superuser.is_superuser = True
         
            return Response(status=status.HTTP_200_OK)
        except:
             return Response(status=status.HTTP_404_NOT_FOUND)