from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
from django.contrib import messages

# Create your views here.

def index(request):
    pass

def register(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        email=request.POST['email']
        password2=request.POST['password2']
        if password2==password:
            if User.objects.filter(email=email).exits():
                messages.info(request,"Email Already Exits")
                return redirect('register')
            elif User.objects.filter(username=username):
                messages.info(request,'Username already exits')
                return redirect('register')
            else:
                user=User.objects.create_user(username=username,email=email,password=password)
                user.save()
                return redirect('login')
        else:
            messages.info(request,'Password not same')
            return redirect('register')
    else:
        return render(request,'register.html')

def login(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=auth.authenticate(
            username=username,
            password=password
        )
        if user is not None:
            auth.login(request,user)
            return redirect('/')
        else:
            messages.info(request,'Credential invalid')
            return redirect('login')
    else:
        return render(request,'login.html')