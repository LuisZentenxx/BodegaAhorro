from django.db import models
from django.utils import timezone
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin, UserManager)

# Crear usuarios normales y superusuarios con configuraciones personalizadas.
class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Debes tener un email')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        return self._create_user(email, password, **extra_fields)

# Modelo de usuario personalizado
class User(AbstractBaseUser, PermissionsMixin):
    email = models.CharField(max_length=100, unique = True)
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    avatar = models.ImageField(default="avatar.png")
    date_joined = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    objects = CustomUserManager()
    
    # Establece el campo email como el nombre de usuario, y REQUIRED_FIELDS = [] indica que no se requieren campos adicionales al crear un usuario.
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    # Por defecto los objetos de este modelo se ordenarán por la fecha de unión en orden descendente.
    class Meta:
        ordering = ["-date_joined"]
        