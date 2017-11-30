# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from rest_framework.authtoken.models import Token

from models import weatherData

# Create your views here.
def login_form(request):
    return render(request,'weather/login_page.html',{})

def homepage(request):
    return render(request,'weather/homepage.html',{})

def weather(request):
    return render(request,'weather/current_weather.html',{})

def forecast(request):
    return render(request,'weather/forecast.html',{})
@csrf_exempt
def get_auth_token(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        # the password verified for the user
        if user.is_active:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key
            login(request, user)
            return redirect('/weather/home',method = "GET")
    else:
        return HttpResponse("incorrect credentials")