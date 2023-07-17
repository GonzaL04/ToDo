from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TasksSerializer
from .models import Tasks

# Create your views here.

class TasksViews(viewsets.ModelViewSet):
    serializer_class = TasksSerializer
    queryset = Tasks.objects.all()