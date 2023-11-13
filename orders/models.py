from django.db import models
from users.models import User
from productos.models import Producto

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    total_price = models.CharField(max_length=250, blank=True)
    is_delivered = models.BooleanField(default=False)
    delivered_at = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Orderitem(models.Model):
    product = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    email = models.CharField(max_length=250, blank=True)
    quantity = models.IntegerField(null=True, blank=True, default=0)
    price = models.CharField(max_length=250, blank=True)