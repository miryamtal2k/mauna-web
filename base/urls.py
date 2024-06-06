from django.urls import include, path
from . import views

urlpatterns = [
    # path('', include(router.urls)),
    path('',views.home_view, name='home'),
    path('articles',views.articles_view, name='articles'),
    path('onboarding',views.onboarding_view, name='onboarding'),

    path('article/<slug:slug>/', views.fullarticle_view, name='article_detail'),
    path('articles',views.articles_view, name='articles'),

    path('submit_form/',views.submit_form, name="submit_form"),
    path('privacy-policy/', views.privacy_policy, name="privacy_policy"),
    path('faqs/', views.faqs, name="faqs"),
    path('terms-conditions/', views.terms_conditions, name="terms_conditions"),

    path('.well-known/assetlinks.json', views.assetlinks, name='assetlinks'),


]