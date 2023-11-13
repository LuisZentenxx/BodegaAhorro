from rest_framework import serializers
from .models import Order, Orderitem


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderitem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')
    order_items = serializers.SerializerMethodField(read_only=True)
  
    class Meta:
        model = Order
        fields = '__all__'

    def get_order_items(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items, many=True)
        return serializer.data
