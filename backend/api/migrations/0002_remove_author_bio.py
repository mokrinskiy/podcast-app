# Generated by Django 4.2.5 on 2023-12-02 07:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='author',
            name='bio',
        ),
    ]