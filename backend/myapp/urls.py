from django.urls import path,re_path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('home/',views.home,name='home'),
    path('register/',views.register,name='register'),
    path('JobPost/',views.JobPost,name='JobPosts'),
    # re_path(r'^.*$', views.index, name='index'),
    # path('api/go/',views.go,name='go'),

    

   
]