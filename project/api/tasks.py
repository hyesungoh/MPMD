from __future__ import absolute_import, unicode_literals
from celery.decorators import task

from .views import refresh_movies, refresh_dramas

@task(name="task_refresh_movies")
def task_refresh_movies():
    return refresh_movies()

@task(name="task_refresh_dramas")
def task_refresh_dramas():
    return refresh_dramas()