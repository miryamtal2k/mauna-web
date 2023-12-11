from django.urls import include, path
from . import views

urlpatterns = [
    # path('', include(router.urls)),
    path('',views.home_view, name='home'),
    path('submit_form/',views.submit_form, name="submit_form"),
    path('privacy-policy/', views.privacy_policy, name="privacy_policy"),

]