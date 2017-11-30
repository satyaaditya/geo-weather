from django.conf.urls import url
from . import views
app_name = 'weather'

urlpatterns = [
        url(r'home',views.homepage),
        url(r'weather',views.weather),
        url(r'forecast',views.forecast),
]