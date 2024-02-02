from django.urls import include, path
from . import views

urlpatterns = [
    # path('', include(router.urls)),
    path('',views.home_view, name='home'),
    path('articles',views.articles_view, name='articles'),
    path('article',views.article_view, name='article'),

    path('submit_form/',views.submit_form, name="submit_form"),
    path('privacy-policy/', views.privacy_policy, name="privacy_policy"),

]