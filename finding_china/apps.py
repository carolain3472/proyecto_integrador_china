from django.apps import AppConfig

"""
Clase: FindingChinaConfig
Descripcion: 
    subclase de AppConfig, que se utiliza para configurar una aplicación en Django.
    Al definir esta clase, podemos personalizar diferentes aspectos de tu aplicación.

Atributos: 
    default_auto_field:  especifica el tipo de campo automático que se utilizará por defecto para
    las nuevas clases de modelo en tu aplicación. En este caso, se utiliza django.db.models.BigAutoField, 
    un campo automático de gran tamaño.

    name: Especifica el nombre de tu aplicación. 
"""

class FindingChinaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'finding_china'
