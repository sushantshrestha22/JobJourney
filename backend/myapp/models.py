from django.db import models

# Create your models here.
class Jobpost(models.Model):
    company_name=models.CharField(max_length=100,default="Default Company")
    job_name=models.CharField(max_length=100)
    location=models.CharField(max_length=100)
    description=models.TextField()
    salary=models.CharField(max_length=50)
    experience_level=models.CharField(max_length=100)
    skills=models.CharField(max_length=50)
    language=models.CharField(max_length=100,blank=True,null=True)#optional field
    job_type=models.CharField(max_length=100)
    is_approved=models.BooleanField(default=False)

    def __str__(self):
        return self.job_name

class Resume(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    contactnumber = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=255)
    language = models.JSONField(default=list)  # or ArrayField if using PostgreSQL
    gender = models.CharField(max_length=10)
    description = models.TextField(blank=True, null=True)
    experience = models.JSONField(default=list)  # or ArrayField if using PostgreSQL
    education = models.JSONField(default=list)  # or ArrayField if using PostgreSQL
    skills = models.JSONField(default=list)  # or ArrayField if using PostgreSQL
    hobbies = models.JSONField(default=list)  # or ArrayField if using PostgreSQL
    project = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    

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
    

