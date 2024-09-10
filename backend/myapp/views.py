from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User,auth
from django.contrib import messages
from .models import *
from django.http import JsonResponse, QueryDict
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
import re
import json
from .algorithm import *
from django.views.decorators.http import require_http_methods



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
        skills = request.POST.getlist('skill',[])
        language = request.POST.get('language')
        job_type = request.POST.get('jobtype')
        requirement=request.POST.get('requirement')
        email=request.POST.get('email')
        phone=request.POST.get('Phone')


        job_post=Jobpost(
            company_name=company_name,
            job_name=job_name,
            location=location,
            description=description,
            salary=salary,
            experience_level=experience_level,
            # skills=skills,
            language=language,
            job_type=job_type,
            requirement=requirement,
            email=email,
            phone=phone,
            is_approved=False)
        job_post.set_skills(skills)
        job_post.save()
        return redirect('/jobSearch')
    else:
        return redirect('/')
    

#job_list API that takes all data store in JobPost
def job_list(request):
    jobs=Jobpost.objects.filter(is_approved=True).values()
    job_list=list(jobs)

     # Convert 'skills' from string to list if necessary
    for job in job_list:
        if isinstance(job['skills'], str):
            # Convert the string representation of list back to list
            job['skills'] = eval(job['skills'])  # Use eval cautiously; consider safer alternatives

    key_func=lambda job:(job['job_name'].upper(),str(job['skills']).upper(),job['location'].upper()) #sorted by skills and location

    timsort(job_list,key_func)


    return JsonResponse(job_list,safe=False)

def jobsearch(request):
    return redirect('/jobSearch')


#resume 
def resume(request):
      if request.method == 'POST':
        first_name = request.POST.get('firstname')
        last_name = request.POST.get('lastname')
        contact_number = request.POST.get('contactnumber')
        email = request.POST.get('email')
        location = request.POST.get('location')
        gender = request.POST.get('gender')
        description = request.POST.get('description')
        project_link = request.POST.get('project')
        
        # Handle file upload
        profile_image = request.POST.get('profile_image')

        # Deserialize JSON fields
        language =request.POST.get('language')
        skills = request.POST.get('skill')
        hobbies =request.POST.get('hobbies')

        # Education and work experience
        education_start_date = request.POST.get('startDate')
        education_end_date = request.POST.get('endDate')
        institution = request.POST.get('institution')
        degree = request.POST.get('degree')
        
        work_experience_start_date = request.POST.get('startDate1')
        work_experience_end_date = request.POST.get('endDate1')
        company = request.POST.get('company')
        position = request.POST.get('position')
        work_description = request.POST.get('wdescription')

        # Create Resume instance and save to the database
        resume_instance = Resume(
            first_name=first_name,
            last_name=last_name,
            contact_number=contact_number,
            email=email,
            location=location,
            language=language,
            gender=gender,
            description=description,
            skills=skills,
            hobbies=hobbies,
            project_link=project_link,
            profile_image=profile_image,
            education_start_date=education_start_date,
            education_end_date=education_end_date,
            institution=institution,
            degree=degree,
            work_experience_start_date=work_experience_start_date,
            work_experience_end_date=work_experience_end_date,
            company=company,
            position=position,
            work_description=work_description
        )
        resume_instance.save()
        return redirect('/resumeTemplate')


def resume_api(request):
    resum=Resume.objects.all().values()
    resumee=list(resum)
    return JsonResponse(resumee,safe=False)   



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

def create(request):
    if request.method=='POST':
        title=request.POST.get('title')
        company=request.POST.get('company')
        status=request.POST.get('status')
        contact=request.POST.get('contact')
        date=request.POST.get('date')
        note=request.POST.get('note')

        track=Tracking.objects.create(
            title=title,
            company=company,
            status=status,
            contact=contact,
            date=date,
            note=note
        )
        track.save()
        return redirect('/tracking')
    
    

def tracking(request):
    return redirect('/tracking')

def tracking_api(request):
    trace=Tracking.objects.all().values()
    track=list(trace)
    return JsonResponse(track,safe=False)


def track_api(request,id):
    tracker=Tracking.objects.get(id=id)
    track={
            'id':tracker.id,
            'title':tracker.title,
            'company':tracker.company,
            'contact':tracker.contact,
            'status':tracker.status,
            'date':tracker.date,
            'note':tracker.note,
        }
    return JsonResponse(track,safe=False)
    

   
    
def details(request):
    return redirect('/details')



def resumeTemplate(request):
    return redirect('/resumeTemplate')

def track_api(request,id):
    tracker=Tracking.objects.get(id=id)
    track={
        'id':tracker.id,
        'title':tracker.title,
        'company':tracker.company,
        'contact':tracker.contact,
        'status':tracker.status,
        'date':tracker.date,
        'note':tracker.note,
    }
    return JsonResponse(track,safe=False)


def edit(request,id):
    data = Tracking.objects.get(id=id)
    
    if request.method == 'PUT':  # Use PUT since you're updating data
        
            # Parse JSON data from the request body
            body = json.loads(request.body.decode('utf-8'))
            
            title = body.get('title')
            company = body.get('company')
            status = body.get('status')
            contact = body.get('contact')
            date = body.get('date')
            note = body.get('note')
            
            # Update the fields if data is present
            if title: data.title = title
            if company: data.company = company
            if status: data.status = status
            if contact: data.contact = contact
            if date: data.date = date
            if note: data.note = note
            
            # Save the updated object
            data.save()

            return JsonResponse({"success": True, "message": "Update successful!"})
    

def delete(request,id):
        data = Tracking.objects.get(id=id)
        data.delete()
        

       





