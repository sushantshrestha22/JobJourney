# Generated by Django 5.0.7 on 2024-09-11 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0018_alter_resume_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='profile_image',
            field=models.ImageField(null=True, upload_to='img/profiles_images'),
        ),
    ]