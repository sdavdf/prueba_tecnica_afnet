from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from registro import views

# Definición del enrutador
router = routers.DefaultRouter()
router.register(r'registro', views.RegistroVista, 'registro')

# Definición de las rutas de la aplicación
urlpatterns = [
    # Rutas para la API
    path("api/v1/", include(router.urls)),
    
    # Ruta para la documentación de la API
    path("docs/", include_docs_urls(title="Registro API")),
]
