from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.exceptions import ValidationError
from django.db import models

"""
    Clase personalizada de administrador de usuario.

    Esta clase se utiliza para crear y gestionar usuarios en el sistema.
    Proporciona métodos para crear usuarios y superusuarios, configurar campos adicionales y 
    guardar los cambios en la base de datos.

    Atributos:
        None

    Métodos:
        - create_user(username, email, password, **extra_fields): 
        Crea y guarda un usuario con el nombre de usuario, correo electrónico y contraseña especificados.
        - create_superuser(username, email, password, **extra_fields): 
        Crea y guarda un superusuario con el nombre de usuario, correo electrónico y contraseña especificados.

    Ejemplo de uso:

    # Crear un usuario
    user = MyUserManager().create_user(username='john', email='john@example.com', password='password')

    # Crear un superusuario
    superuser = MyUserManager().create_superuser(username='admin', email='admin@example.com', password='admin123')
    """

class MyUserManager(BaseUserManager):
    """
        funcion: create_user
        descripcion: 
            Crea y guarda un usuario con el nombre de usuario, correo electrónico y contraseña especificados.
            Los campos adicionales pueden ser proporcionados como argumentos con nombre.
            Si no se proporcionan los campos adicionales 'is_staff' e 'is_superuser', se establecerán en True por defecto.
            Si no se proporciona un nombre de usuario o correo electrónico, se lanzará un ValueError.
        entradas:
            puntero
            nombre de usuario
            correo electrónico
            contraseña 

    """
    def create_user(self, username, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
       
        if not username:
            raise ValueError('El nombre de usuario es requerido')
        if not email:
            raise ValueError('El correo electrÃ³nico es requerido')

        user = self.model(username=username, email=email, **extra_fields)
        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()
        user.save()
        return user

    def create_superuser(self, username, email, password, **extra_fields):
        """
        funcion: create_superuser
        descripcion: 
            Crea y guarda un superusuario con el nombre de usuario, correo electrónico y contraseña especificados.
            Los campos adicionales pueden ser proporcionados como argumentos con nombre.
            Si no se proporcionan los campos adicionales 'is_staff' e 'is_superuser', se establecerán en True por defecto.
            Utiliza el método create_user para crear el superusuario.
        entradas: 
            entradas:
            puntero
            nombre de usuario
            correo electrónico
            contraseña 
            
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        return self.create_user(username, email, password, **extra_fields)

"""
    Clase de modelo personalizada para representar un usuario personalizado.

    Esta clase extiende la clase AbstractUser proporcionada por Django para agregar campos personalizados y funcionalidades adicionales.

    Atributos:
        - email (EmailField): Campo de correo electrónico del usuario. No puede ser nulo y debe ser único en la base de datos.
        - profile_picture (ImageField): Campo de imagen de perfil del usuario. Se almacena en la carpeta 'profile_pictures/'. Tiene un valor predeterminado de un ícono de imagen.
        - total_quiz (IntegerField): Campo que representa el total de cuestionarios realizados por el usuario. Tiene un valor predeterminado de 0.
        - total_categorias (CharField): Campo que representa las categorías totales a las que pertenece el usuario. Tiene un valor predeterminado vacío.

    Relaciones:
        None

    Métodos:
        - __str__(): Retorna una representación en cadena del objeto del usuario.
        - save(*args, **kwargs): Guarda el objeto del usuario en la base de datos. Si el usuario es un superusuario y es una nueva instancia, se establece una contraseña predeterminada.

    Ejemplo de uso:

    # Crear un nuevo usuario personalizado
    user = CustomUser(username='john', email='john@example.com', password='password', total_quiz=10)

    # Acceder a los campos personalizados
    print(user.total_quiz)  # Imprime: 10
    print(user.total_categorias)  # Imprime: ''
"""

class CustomUser(AbstractUser):
    email = models.EmailField(null=False, unique=True, error_messages={
        'unique': 'Ya hay un usuario registrado con este email'})
    profile_picture = models.ImageField(upload_to='profile_pictures/', default="https://cdn-icons-png.flaticon.com/512/105/105544.png", max_length=500)

    PROGRESO_DEFAULT = {
        'datos': 0,
        'xia': 0,
        'shang': 0,
        'zhou': 0,
        'qin': 0,
        'han': 0,
        'arquitectura': 0
    }

    PROGRESO_CULTURA_DEFAULT = {
        'datos_cultura': 0,
        'tradiciones': 0,
        'artesanias': 0,
        'festividades': 0,
        'vestimenta': 0,
        'creencias': 0,
    }

    PROGRESO_CONTRIBUCIONES_DEFAULT = {
        'datos_contribuciones': 0,
        'brujula': 0,
        'polvora': 0,
        'papel': 0,
        'imprenta': 0,
        'acupuntura': 0,
    }


    progreso_historia = models.JSONField(default=PROGRESO_DEFAULT)
    progreso_contribuciones= models.JSONField(default= PROGRESO_CONTRIBUCIONES_DEFAULT)
    progreso_cultura = models.JSONField(default=PROGRESO_CULTURA_DEFAULT)
    
    
    total_quiz = models.IntegerField(default=0)
    total_categorias = models.CharField(default=' ', max_length=50)


    objects = MyUserManager()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    
    REQUIRED_FIELDS = [
        'email'
    ]

    """
        Retorna una representación en cadena del objeto del usuario.

        Parámetros:
            None

        Retorna:
            - username (str): Nombre de usuario del usuario.
    """

    def __str__(self):
        return self.username
    
    """
        Guarda el objeto del usuario en la base de datos.
        Si el usuario es un superusuario y es una nueva instancia, se establece una contraseña predeterminada.

        Parámetros:
            - *args: Argumentos posicionales adicionales.
            - **kwargs: Argumentos con nombre adicionales.

        Retorna:
            None
    """

    def save(self, *args, **kwargs):
        if self.is_superuser and not self.pk:
            password = self.password
            if not password:
                password = '1234'
                self.set_password(password)
        super().save(*args, **kwargs)
