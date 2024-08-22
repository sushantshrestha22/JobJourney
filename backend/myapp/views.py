from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User,auth
from django.contrib import messages
from .models import Jobpost
from django.http import JsonResponse
from .algorithm import *

# Create your views here.

#homepage
def index(request):
    return render(request,'index.html') #to render index.html from frontend

#register logic
def register(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm = request.POST.get('confirm')

        if password != confirm:
            return JsonResponse({'success': False, 'error': 'Passwords do not match'})

        if User.objects.filter(username=email).exists():
            return JsonResponse({'success': False, 'error1': 'Email already exists'})

        user = User.objects.create_user(username=email, password=password)
        user.save()
        return JsonResponse({'success': True, 'redirect': '/'})

    return redirect('/register')



#login logic
def home(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = auth.authenticate(username=email, password=password)
        if user is not None:
            auth.login(request, user)
            return JsonResponse({'success': True, 'redirect_url': '/home'}) 
            # return redirect('/home')  # Redirect to the desired page after login
        else:
           return JsonResponse({'success': False, 'message':'Invalid Credentials!!'}) # Redirect to the login page on failure
    else:
        return redirect('/home')  # Render the login template for GET request


#JobPost logic goes here
def Jobp(request):
    if request.method == 'POST':
        company_name=request.POST.get('companyname')
        job_name = request.POST.get('jobname')
        location = request.POST.get('location')
        description = request.POST.get('description')
        salary = request.POST.get('salary')
        experience_level = request.POST.get('experience')
        skills = request.POST.get('skill')
        language = request.POST.get('language')
        job_type = request.POST.get('jobtype')

        job_post=Jobpost(
            company_name=company_name,
            job_name=job_name,
            location=location,
            description=description,
            salary=salary,
            experience_level=experience_level,
            skills=skills,
            language=language,
            job_type=job_type)
        job_post.save()
        return redirect('/jobSearch')
    else:
        return redirect('/')
    

#job_list API that takes all data store in JobPost
def job_list(request):
    jobs=Jobpost.objects.all().values()
    job_list=list(jobs)

    key_func=lambda job:(job['job_name'].upper(),job['skills'].upper(),job['location'].upper()) #sorted by skills and location

    timsort(job_list,key_func)


    return JsonResponse(job_list,safe=False)


#indexing
# def update_index(request):
#     if request.method == 'POST':
#         jobs = Jobpost.objects.all().values()
#         job_list = list(jobs)

#         key_funcs = [
#             lambda job: job['job_name'],
#             lambda job: job['location'],
#             lambda job: job['skills']
#         ]

#         # index = create_index(job_list, key_funcs)

#         # Implement saving index to cache or database if needed
#         # Example: cache.set('job_index', index)

#         return JsonResponse({'status': 'Index updated successfully'})

#     return JsonResponse({'error': 'Invalid request method'}, status=400)

#indexing
# def search_jobs(request):
#     if request.method == 'POST':
#         jobtitle = request.POST.get('jobtitle', '').lower()
#         location = request.POST.get('location', '').lower()
#         skill = request.POST.get('skill', '').lower()

#         # Retrieve the index from the database or cache (implement retrieval mechanism)
#         # Example: index = cache.get('job_index')

#         jobs = Jobpost.objects.all().values()
#         job_list = list(jobs)
#         key_funcs = [
#             lambda job: job['job_name'],
#             lambda job: job['location'],
#             lambda job: job['skills']
#         ]
#         index = create_index(job_list, key_funcs)

#         results = set()
#         if jobtitle:
#             results.update(search_index(index, jobtitle))
#         if location:
#             results.update(search_index(index, location))
#         if skill:
#             results.update(search_index(index, skill))

#         results = list(results)
#         filtered_jobs = [job_list[i] for i in results]

#         return JsonResponse(filtered_jobs, safe=False)

#     return JsonResponse({'error': 'Invalid request method'}, status=400)



