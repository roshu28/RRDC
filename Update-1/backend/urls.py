from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('products/', views.products, name='products'),
    path('pricing/', views.pricing, name='pricing'),
    path('contact/', views.contact, name='contact'),
    path('faq/', views.faq, name='faq'),
    path('create_card/', views.create_card, name='create_card'),
    path('edit_card/<int:card_id>/', views.edit_card, name='edit_card'),
]
