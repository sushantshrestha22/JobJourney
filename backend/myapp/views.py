from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User,auth
from django.contrib import messages
from .models import UserLogin

# Create your views here.

def index(request):
    return render(request,'index.html') #to render index.html in frontend

#register logic
def register(request):
    if request.method=='POST':
        email=request.POST.get('email')
        password=request.POST.get('password')
        confirm=request.POST.get('confirm')

        if confirm==password:
            if User.objects.filter(email=email).exists():
                messages.info(request,"Email Already Exists")
                return redirect('register')
            
            else:
                user=User.objects.create_user(username=email,password=password)
                user.save()
                return redirect('/')
        else:
            messages.info(request,'Password not same')
            return redirect('/register')
    else:
        return render(request,'/register')



#login logic

def home(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = auth.authenticate(username=email, password=password)
        
        if user is not None:
            auth.login(request, user)
            messages.success(request, 'Login successful!')
            return redirect('/mainpage')  # Redirect to the desired page after login
        else:
            messages.info(request, 'Invalid credentials')
            return redirect('/')  # Redirect to the login page on failure
    else:
        return render(request, '/')  # Render the login template for GET request




def mainpage(request):
    return HttpResponse("MainPage")

# def register(request):


# def login(request):
#     