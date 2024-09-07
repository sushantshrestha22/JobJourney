from django.db import models
import json


# Create your models here.
class Jobpost(models.Model):
    company_name=models.CharField(max_length=100,default="Default Company")
    job_name=models.CharField(max_length=100,null=True)
    location=models.CharField(max_length=100,null=True)
    description=models.TextField(null=True)
    salary=models.CharField(max_length=50,null=True)
    experience_level=models.CharField(max_length=100,null=True)
    skills=models.TextField(null=True)
    language=models.CharField(max_length=100,blank=True,null=True)#optional field
    job_type=models.CharField(max_length=100)
    requirement=models.IntegerField(default=0)
    email=models.EmailField(null=True)
    phone=models.IntegerField(default=0)
    is_approved=models.BooleanField(default=False)

    def set_skills(self, skills_list):
        self.skills = json.dumps(skills_list)

    def __str__(self):
        return self.job_name
 

class ResourcePython(models.Model):
    title = models.CharField(max_length=200)  # Field for the title of the topic
    description = models.TextField()           # Field for a detailed description
    link = models.URLField(blank=True)         # Field for a URL link, optional

    def __str__(self):
        return self.title
    
class ResourceReact(models.Model):
    title = models.CharField(max_length=200) 
    description = models.TextField()           
    link = models.URLField(blank=True)         

    def __str__(self):
        return self.title

class Tracking(models.Model):
    title=models.CharField(max_length=20)
    company=models.CharField(max_length=20)
    status=models.CharField(max_length=20)
    contact=models.IntegerField()
    date=models.DateField()
    note=models.TextField()

    def __str__(self) -> str:
        return self.title
    
    

# Resume
class Resume(models.Model):
    # Basic Personal Information
    first_name = models.CharField(max_length=100,null=True)
    last_name = models.CharField(max_length=100,null=True)
    contact_number = models.CharField(max_length=15,null=True)
    email = models.EmailField(null=True)
    location = models.CharField(max_length=255,null=True)
    language = models.JSONField(default=list,null=True)  # Stores list of languages
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female'), ('others', 'Others')])
    description = models.TextField(null=True)

    # Education Information
    education_start_date = models.DateField(null=True)
    education_end_date = models.DateField(null=True)
    institution = models.CharField(max_length=255,null=True)
    degree = models.CharField(max_length=255,null=True)

    # Work Experience Information
    work_experience_start_date = models.DateField(null=True)
    work_experience_end_date = models.DateField(null=True)
    company = models.CharField(max_length=255,null=True)
    position = models.CharField(max_length=255,null=True)
    work_description = models.TextField(null=True)

    # Skills and Hobbies
    skills = models.JSONField(default=list)  # Stores list of skills
    hobbies = models.JSONField(default=list)  # Stores list of hobbies

    # Project Information
    project_link = models.URLField(null=True)

    # File upload
    profile_image = models.ImageField(upload_to='profile_images/',null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
