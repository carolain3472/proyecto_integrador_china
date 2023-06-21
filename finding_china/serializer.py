from rest_framework import serializers
from .models import CustomUser

"""
    Serializador para convertir objetos del modelo CustomUser en representaciones JSON.

    Esta clase se utiliza para serializar y deserializar objetos del modelo CustomUser en formato JSON.
    Define los campos y opciones de serialización utilizando la clase base ModelSerializer proporcionada por Django REST Framework.

    Atributos:
        None

    Métodos:
        None

    Ejemplo de uso:

    # Crear un serializador de usuario
    serializer = UsuarioSerializer()

    # Serializar un objeto CustomUser
    user_data = {
        'username': 'john',
        'email': 'john@example.com',
        'total_quiz': 10
    }
    serialized_user = serializer(data=user_data)
    if serialized_user.is_valid():
        json_data = serialized_user.data
        print(json_data)  # Imprime: {'username': 'john', 'email': 'john@example.com', 'total_quiz': 10}
"""
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model= CustomUser
        fields= '__all__'