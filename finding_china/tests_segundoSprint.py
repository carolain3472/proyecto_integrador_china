from django.test import TestCase
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import CustomUser
from django.urls import reverse_lazy
from finding_china.views import RegisterUserView
from rest_framework.authtoken.models import Token
from .serializer import UsuarioSerializer

""" PRUEBAS UNITARIAS DEL SEGUNDO SPRINT """

"""
   Clase SecondUserViewTestCase

    Esta clase se utiliza para especificar un conjunto de pruebas unitarias y funcionales de los métodos realizados para el desarrollo.

    Atributos:
        None

    Métodos:
        None
"""

class SecondUserViewTestCase(TestCase):

    def setUp(self):
        self.client = APIClient()

    """Método de prueba test_login_with_invalid_credentials:

           Objetivo: Verificar si usuario tiene credenciales invalidas.
           Método: test_login_with_invalid_credentials()
           Resultado esperado: Se espera que la respuesta tenga un código de estado HTTP 401 (Unauthorized), 
           indicando que el usuario no esta autorizado para ingresar.
           """

    def test_login_with_invalid_credentials(self):
        url = reverse('default:login_view')
        data = {
            'username': 'user_invalid',
            'password': 'invalid_password',
        }

        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, 403)  # Verifica que la respuesta tenga el código de estado correcto (401 Unauthorized)

        # Verificar que la respuesta no contenga el token y los datos del usuario
        self.assertNotIn('token', response.data)
        self.assertNotIn('user', response.data)

    def setUp(self):
            self.client = APIClient()
            self.registered_user = self.create_registered_user()  # Crear y guardar el usuario registrado

    def create_registered_user(self):
            # Crear un usuario registrado para utilizar en la prueba de inicio de sesión
            User = CustomUser
            registered_user = User.objects.create_superuser(
                username='Test',
                password='password',
                email='test@example.com',
                profile_picture='http://imagen.jpg'
            )
            return registered_user
    
    """Método de prueba test_update_password_empty():

           Objetivo: Verificar si usuario esta tratando de actualizar la contraseña con un campo vacio.
           Método: test_update_password_empty()
           Resultado esperado: Se espera que la respuesta tenga un código de estado HTTP 400 (BAD REQUEST), 
           indicando que el usuario no puede guardar una contraseña vacia.
           """

    def test_update_password_empty(self):
        # Iniciar sesión para obtener un token de acceso válido
        login_url = reverse('default:login_view')
        login_data = {
            'username': self.registered_user.username,
            'password': 'password',
        }
        login_response = self.client.post(login_url, login_data, format='json')
        self.assertEqual(login_response.status_code, 200)
        token = login_response.data['token']

        # Configurar el encabezado de autenticación con el token
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {token}')

        # Llamar a la vista de actualizar contraseña con una contraseña en blanco
        update_password_url = reverse('default:update_contra')
        new_password = ' '  # Contraseña en blanco
        update_password_data = {
            'username': self.registered_user.username,
            'password': new_password,
        }
        update_password_response = self.client.post(update_password_url, update_password_data, format='json')
        self.assertEqual(update_password_response.status_code, 400)  # Verificar que se reciba un error 400 BAD REQUEST

        # Verificar que la contraseña del usuario no se haya actualizado
        updated_user = CustomUser.objects.get(username=self.registered_user.username)
        self.assertFalse(updated_user.check_password(new_password))
    

    """Método de prueba test_update_password:

           Objetivo: Verificar que un usuario pueda actualizar su contraseña correctamente mediante una solicitud POST a la vista de actualización de contraseña.
           Método: test_update_password()
           Resultado esperado: Se espera que la respuesta tenga un código de estado HTTP 200 (OK), indicando que la actualización de la contraseña fue exitosa. 
           Además, se espera que la contraseña del usuario se haya actualizado correctamente en la base de datos."""

    def test_update_password(self):
        # Iniciar sesión para obtener un token de acceso válido
        login_url = reverse('default:login_view')
        login_data = {
            'username': self.registered_user.username,
            'password': 'password',
        }
        login_response = self.client.post(login_url, login_data, format='json')
        self.assertEqual(login_response.status_code, 200)
        token = login_response.data['token']

        # Configurar el encabezado de autenticación con el token
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {token}')

        # Llamar a la vista de actualizar contraseña
        update_password_url = reverse('default:update_contra')
        new_password = 'new_password'
        update_password_data = {
            'username': self.registered_user.username,
            'password': new_password,
        }
        update_password_response = self.client.post(update_password_url, update_password_data, format='json')
        self.assertEqual(update_password_response.status_code, 200)

        # Verificar que la contraseña del usuario se haya actualizado correctamente
        updated_user = CustomUser.objects.get(username=self.registered_user.username)
        self.assertTrue(updated_user.check_password(new_password))

    
    """Método de prueba test_update_profile:

           Objetivo: Verificar que un usuario pueda actualizar su foto de perfil correctamente mediante una solicitud POST a la vista de actualización de foto de perfil.
           Método: test_update_profile()
           Resultado esperado: Se espera que la respuesta tenga un código de estado HTTP 200 (OK), indicando que la actualización de la contraseña fue exitosa. 
           Además, se espera que la foto de perfil nueva coincida con la foto que existe en la base de datos."""

    def test_update_profile(self):
        # Iniciar sesión para obtener un token de acceso válido
        login_url = reverse('default:login_view')
        login_data = {
            'username': self.registered_user.username,
            'password': 'password',
        }
        login_response = self.client.post(login_url, login_data, format='json')
        self.assertEqual(login_response.status_code, 200)
        token = login_response.data['token']

        # Configurar el encabezado de autenticación con el token
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {token}')

        # Llamar a la vista de actualizar foto de perfil
        update_profile_url = reverse('default:editProfile')
        #Se envia una nueva dirección de foto de perfil que contiene una imagen
        new_profile = 'https://img.freepik.com/foto-gratis/elemento-artesania-mano-papel-corazon-rojo_53876-128923.jpg?w=2000'
        update_profile_data = {
            'username': self.registered_user.username,
            'foto': new_profile,
        }
        update_profile_response = self.client.post(update_profile_url, update_profile_data, format='json')
        self.assertEqual(update_profile_response.status_code, 200)

        # Verificar que la imagen del usuario se haya actualizado correctamente
        updated_user = CustomUser.objects.get(username=self.registered_user.username)
        self.assertEqual(updated_user.profile_picture, new_profile)

    """Método de prueba test_password_no_length:

           Objetivo: Verificar que un usuario no actualice su contraseña con una que tenga menos de 4 caracteres.
           Método: test_password_no_length()
           Resultado esperado: Se espera que la respuesta tenga un código de estado HTTP 400 (BAD REQUEST), 
           indicando que la contraseña no esta entre las permitidas. 
    """

    def test_password_no_length(self):
        # Iniciar sesión para obtener un token de acceso válido
        login_url = reverse('default:login_view')
        login_data = {
            'username': self.registered_user.username,
            'password': 'password',
        }
        login_response = self.client.post(login_url, login_data, format='json')
        self.assertEqual(login_response.status_code, 200)
        token = login_response.data['token']

        # Configurar el encabezado de autenticación con el token
        self.client.credentials(HTTP_AUTHORIZATION=f'Token {token}')

        # Llamar a la vista de actualizar contraseña con una contraseña que tenga menos de 4 caracteres
        update_password_url = reverse('default:update_contra')
        new_password = 'abc'  # Contraseña con menos de 6 caracteres
        update_password_data = {
            'username': self.registered_user.username,
            'password': new_password,
        }
        update_password_response = self.client.post(update_password_url, update_password_data, format='json')
        self.assertEqual(update_password_response.status_code, 400)  # Verificar que se reciba un error 400 BAD REQUEST

        # Verificar que la contraseña del usuario no se haya actualizado
        updated_user = CustomUser.objects.get(username=self.registered_user.username)
        self.assertFalse(updated_user.check_password(new_password))
















