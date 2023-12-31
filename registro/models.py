from django.db import models

class Registro(models.Model):
    """
    Modelo que representa un registro de información.
    Cada registro tiene un nombre completo, email, número de documento, fecha de nacimiento
    y fecha de creación.
    """
    nombre_completo = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    numero_documento = models.CharField(max_length=20, unique=True)
    fecha_nacimiento = models.DateField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """
        Método que devuelve una representación de cadena del objeto Registro.
        Utiliza el campo 'email' como representación.
        """
        return self.email
