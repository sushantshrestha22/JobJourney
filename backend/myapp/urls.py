from django.urls import path
from . import views

urlpatterns = [
    # path('register',views.register,name='register'),
    # path('/',views.login,name='login'),
    path('',views.index),
    path('home/',views.home),
    path('register/',views.register)
   
]