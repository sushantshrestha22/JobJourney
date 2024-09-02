from django.contrib import admin
from .models import Jobpost

# Register your models here.
@admin.register(Jobpost)
class JobpostAdmin(admin.ModelAdmin):
    list_display=['job_name', 'company_name', 'location','description' , 'is_approved']
    list_filter = ('is_approved',)
    actions = ['approve_jobs']

    def approve_jobs(self, request, queryset):
        queryset.update(is_approved=True)
    approve_jobs.short_description = "Approve selected job posts"
