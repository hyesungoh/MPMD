from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.Header.as_view()),
    path('movies', views.Movies.as_view()),
    path('dramas', views.Dramas.as_view()),
]