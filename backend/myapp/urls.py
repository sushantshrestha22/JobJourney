from django.urls import path,re_path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('home/',views.home,name='home'),
    path('register/',views.register,name='register'),
    path('jobpost/',views.Jobp,name='Jobp'),
    # re_path(r'^.*$', views.index, name='index'),
    path('api/job/',views.job_list,name='job_list'),

    

   
]