from django.urls import path,re_path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('home/',views.home,name='home'),
    path('register/',views.register,name='register'),
    path('jobpost/',views.Jobp,name='Jobp'),
    path('resume/',views.resume,name='resume'),
    path('resource/',views.resource,name='resource'),
    path('jobSearch/',views.jobsearch,name='jobsearch'),
    # re_path(r'^.*$', views.index, name='index'),
    path('api/job/',views.job_list,name='job_list'),
    #  path('api/update-index/', views.update_index, name='update_index'),
    # path('api/search-jobs/', views.search_jobs, name='search_jobs'),

    

   
]