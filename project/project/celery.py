from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
app = Celery('project')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))



app.conf.beat_schedule = {
    'refresh_movies_every_12hours': {
        'task': 'task_refresh_movies',  # 해당 name의 task를 실행
        # 'schedule': 43200.0,  # 12시간
        'schedule': 30.0,
    },
}
