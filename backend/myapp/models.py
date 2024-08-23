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

    def __str__(self):
        return self.job_name

