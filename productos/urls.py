from django.urls import path
from . import views 

urlpatterns = [
    path('search/', views.search),
    path('', views.get_products),
    path('post/', views.create_product),
    path('get/<slug:slug>/', views.get_product),
    path('get/admin/<int:id>/', views.get_product_admin),
    path('edit/<int:pk>/', views.edit_product),
    path('delete/<int:pk>/', views.delete_product),

    path('review/<int:pk>/', views.ReviewList.as_view()),
    path('review/<int:pk>/', views.ReviewDetail.as_view()),
]

