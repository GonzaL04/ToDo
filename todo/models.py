from django.db import models

# Create your models here.

class Tasks(models.Model):
    title = models.CharField(max_length=150, null=False)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title