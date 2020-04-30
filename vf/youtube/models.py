from django.db import models
from django.utils import timezone
# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    phone = models.IntegerField()
    contents = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.contents