from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Podcast(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    author = models.ManyToManyField(Author)
    language = models.CharField(max_length=50)
    category = models.ManyToManyField(Category)
    duration = models.DurationField()
    release_date = models.DateField()
    url = models.URLField()
    image = models.ImageField(upload_to='podcast_images/', null=True, blank=True)

    def __str__(self):
        return self.title
