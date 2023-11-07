from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.utils.text import slugify

from . models import Producto
from . serializers import ProductSerializer
from backend.pagination import CustomPagination

#Obtener todos los productos
@api_view(['GET'])
def get_products(request):
    products = Producto.objects.all()
    pagination = CustomPagination()
    paginated_products = pagination.paginate_queryset(products, request)
    serializer = ProductSerializer(paginated_products, many=True)
    return pagination.get_paginated_response(serializer.data)

#Obtener un producto mediante su nombre
@api_view(['GET'])
def get_product(request, slug):
    products = Producto.objects.get(slug=slug)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)

#Obtener un producto mediante su id
@api_view(['GET'])
def get_product_admin(request, id):
    products = Producto.objects.get(id=id)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)

#Crear un producto si tienes permisos de admin.
@api_view(['POST'])
def create_product(request):
    if request.user.is_staff:
        serializer = ProductSerializer(data= request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            category = serializer.validated_data['category']
            s = name + category
            slug = slugify(s)
            if serializer.Meta.model.objects.filter(slug=slug).exists():
                return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            serializer.save(user=request.user, slug=slug)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)

#Editar un producto si tienes permisos de admin.
@api_view(['PUT'])
def edit_product(request, pk):
    products = Producto.objects.get(pk=pk)
    if request.user.is_staff:
        serializer = ProductSerializer(products, data= request.data)
        if serializer.is_valid():
            serializer.save()
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