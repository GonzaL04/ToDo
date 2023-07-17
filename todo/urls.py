from django.urls import include, path
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from todo import views

router = routers.DefaultRouter()
router.register(r'todo', views.TasksViews, 'todo')


urlpatterns = [
    path('tasks/', include(router.urls)),
    path('docs/', include_docs_urls(title="API DJREST"))
]
