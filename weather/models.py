# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import *
from django.db import models

# Create your models here.
class weatherData(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    temperature = models.IntegerField()
    pressure = models.IntegerField()
    humidity = models.IntegerField()
    max_temp = models.IntegerField()
    min_temp = models.IntegerField()
    date = models.DateField(null=True,blank=True)

