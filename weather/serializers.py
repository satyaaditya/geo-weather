from rest_framework import serializers
from weather.models import *

class WeatherDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = weatherData
        fields = ('id','user','temperature','pressure','humidity','max_temp','min_temp','date')
