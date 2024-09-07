from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User,auth
from django.contrib import messages
from .models import *
from django.http import JsonResponse
# from .serializers import ResumeSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
import re
import json
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
        
        # Regular expression for a strong password:
        # - At least 8 characters
        # - Contains at least one uppercase letter
        # - Contains at least one lowercase letter
        # - Contains at least one digit
        # - Contains at least one special character
        pattern = r'^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
        if not re.match(pattern, password):
            return JsonResponse({
                'success': False, 
                'error2': 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.'
            })


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
            job_type=job_type,
            is_approved=False)
        job_post.save()
        return redirect('/jobSearch')
    else:
        return redirect('/')
    

#job_list API that takes all data store in JobPost
def job_list(request):
    jobs=Jobpost.objects.filter(is_approved=True).values()
    job_list=list(jobs)

    key_func=lambda job:(job['job_name'].upper(),job['skills'].upper(),job['location'].upper()) #sorted by skills and location

    timsort(job_list,key_func)


    return JsonResponse(job_list,safe=False)

def jobsearch(request):
    return redirect('/jobSearch')


#resume 
def resume(request):
    if request.method=='POST':
        firstname=request.POST.get('firstname')
        lastname=request.POST.get('lastname')
        contactnumber=request.POST.get('contactnumber')
        email=request.POST.get('email')
        location=request.POST.get('location')
        language = request.POST.get('language', [])  # list of selected languages
        gender = request.POST.get('gender')
        description = request.POST.get('description')
        experience = request.POST.get('experience', [])  # list of experience entries
        education = request.POST.get('education', [])  # list of education entries
        skills = request.POST.get('skill', [])  # list of skills
        hobbies = request.POST.get('hobbies', [])  # list of hobbies
        project = request.POST.get('project')

        resumes=Resume(
            firstname=firstname,
            lastname=lastname,
            contactnumber=contactnumber,
            email=email,
            location=location,
            language=language,
            gender=gender,
            description=description,
            experience=experience,
            education=education,
            skills=skills,
            hobbies=hobbies,
            project=project
        )
        resumes.save()
        return redirect('/home')
    
    else:
        return redirect('/')



def resource(request):
    return redirect('/resource')

def python_api(request):
    py=ResourcePython.objects.all().values()
    pyth=list(py)
    return JsonResponse(pyth,safe=False)

def react_api(request):
    re=ResourceReact.objects.all().values()
    react=list(re)
    return JsonResponse(react,safe=False)

def tracking(request):
    if request.method=='POST':
        title=request.POST.get('title')
        company=request.POST.get('company')
        status=request.POST.get('status')
        contact=request.POST.get('date')
        note=request.POST.get('note')

        track=Tracking.objects.create(
            title=title,
            company=company,
            status=status,
            contact=contact,
            note=note
        )
        track.save()
        return redirect('tracking')
    

def tracking_api(request):
    trace=Tracking.objects.all().values()
    track=list(trace)
    return JsonResponse(track,safe=False)