from django.db import models

# Create your models here.


class Movies(models.Model):
    def __str__(self):
        return self.title

    title = models.CharField(max_length=255)
    year = models.CharField(max_length=255)
    summary = models.TextField(default="")
    time = models.CharField(max_length=255)
    genres = models.CharField(max_length=255)
    date = models.CharField(max_length=255)

    poster = models.TextField(default="")
    trailer_href = models.TextField(default="")
    trailer_img = models.TextField(default="")


class Dramas(models.Model):
    def __str__(self):
        return self.title

    title = models.CharField(max_length=255)
    summary = models.TextField(default="")
    time = models.CharField(max_length=255)
    genres = models.CharField(max_length=255)
    date = models.CharField(max_length=255)

    poster = models.TextField(default="")
    trailer_href = models.TextField(default="")
    trailer_img = models.TextField(default="")
