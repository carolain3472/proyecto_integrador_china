from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.exceptions import ValidationError
from django.db import models

class MyUserManager(BaseUserManager):
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
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        return self.create_user(username, email, password, **extra_fields)

class CustomUser(AbstractUser):

    email = models.EmailField(null=False, unique=True, error_messages={
        'unique': 'Ya hay un usuario registrado con este email'})
    profile_picture = models.ImageField(upload_to='profile_pictures/', default="https://cdn-icons-png.flaticon.com/512/105/105544.png", max_length=500)
    
    total_quiz = models.IntegerField(default=0)
    total_categorias = models.CharField(default=' ')


    objects = MyUserManager()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    
    REQUIRED_FIELDS = [
        'email'
    ]

    def __str__(self):
        return self.username

    def save(self, *args, **kwargs):
        if self.is_superuser and not self.pk:
            password = self.password
            if not password:
                password = '1234'
                self.set_password(password)
        super().save(*args, **kwargs)