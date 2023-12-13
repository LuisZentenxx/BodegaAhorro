from sqlite3 import IntegrityError
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import User
from .serializers import (
    RegisterUserSerializer,
    MyTokenObtainPairSerializer,
    UserSerializer,
)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_solo_user(request, pk):
    user = User.objects.get(pk=pk)
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(["PUT"])
def edit_profile(request, email):
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.user == user:
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_401_BAD_UNAUTHORIZED)


@api_view(["GET"])
def search(request):
    query = request.query_params.get("query")
    if query is None:
        query = ""
    user = User.objects.filter(email__icontains=query)
    serializer = UserSerializer(user, many=True)
    return Response({"users": serializer.data})


@api_view(["DELETE"])
def delete_user(request, pk):
    user = User.objects.get(pk=pk)
    if request.user.is_staff:
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(["GET"])
def get_users(request):
    if request.user.is_staff:
        users = User.objects.exclude(email="admin@admin.com")
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)


@api_view(["POST"])
def register(request):
    try:
        data = request.data
        user = User.objects.create(
            email=data["email"], name=data["name"], password=make_password(data["password"])
        )
        serializer = RegisterUserSerializer(user, many=False)
        return Response(serializer.data)
    except IntegrityError as e:
        return JsonResponse({'error': 'El correo ya ha sido registrado'}, status=409)

@api_view(["POST"])
def resetView(request):
    return Response()

class LoginView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
