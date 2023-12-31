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
    path('cate/<str:category>/', views.get_product_by_cate),
    path('review/<int:pk>/', views.create_review),
]

