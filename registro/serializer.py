from rest_framework import serializers
from .models import Registro

class RegistroSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Registro.
    Convierte instancias del modelo Registro en representaciones JSON y viceversa.
    """
    class Meta:
        model = Registro
        fields = '__all__'
