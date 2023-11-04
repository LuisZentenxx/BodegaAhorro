from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from . models import Producto
from . serializers import ProductSerializer

#Obtener todos los productos
@api_view(['GET'])
def get_products(request):
    products = Producto.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

#Obtener un producto mediante su nombre
@api_view(['GET'])
def get_product(request, name):
    products = Producto.objects.get(name=name)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)

#Crear un producto si tienes permisos de admin.
@api_view(['POST'])
def create_product(request):
    if request.user.is_staff:
        serializer = ProductSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)

#Editar un producto si tienes permisos de admin.
@api_view(['POST'])
def edit_product(request, pk):
    product = Producto.objects.get(pk=pk)
    if request.user.is_staff:
        serializer = ProductSerializer(product, data= request.data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)

#Eliminar un producto si tienes permisos de admin.
@api_view(['DELETE'])
def delete_product(request, pk):
    product = Producto.objects.get(pk=pk)
    if request.user.is_staff:
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)