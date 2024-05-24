from datetime import datetime
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .models import *
def home_view(request):
    return render(request, 'base/home.html')

def onboarding_view(request):
    return render(request, 'base/onboarding.html')



def articles_view(request):
    current_date = datetime.now().date()  # Get current date

    # Articles coming soon (published tomorrow or later)
    coming_soon_articles = Article.objects.filter(
        publication_date__date__gt=current_date)

    # Articles already available (published today or earlier)
    already_available_articles = Article.objects.filter(
        publication_date__date__lte=current_date)

    context = {
        'coming_soon_articles': coming_soon_articles,
        'already_available_articles': already_available_articles,
    }

    return render(request, 'base/articles.html', context)


def article_view(request):
    return render(request, 'base/article.html')

from django.shortcuts import render, get_object_or_404
from .models import Article

def fullarticle_view(request, slug):
    article = get_object_or_404(Article, slug=slug)
    return render(request, 'base/full-article.html', {'article': article})


def privacy_policy(request):
    return render(request, 'base/privacypolicy.html')

def submit_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        firstName = request.POST.get('firstName')
        email = request.POST.get('email')
        if name and firstName and email:
            # Customize your email content and sender here
            message = f"New beta tester: {name} {firstName}, Email: {email}"
            send_mail(
                'New Beta Tester',
                message,
                settings.DEFAULT_FROM_EMAIL,  # Replace with your email address
                [email],  # Replace with recipient email address
                fail_silently=False,
            )
            return render(request, 'base/home.html')
    return render(request, 'base/home.html')

from django.http import JsonResponse

def assetlinks(request):
    response = [
        {
            "relation": [
                "delegate_permission/common.handle_all_urls"
            ],
            "target": {
                "namespace": "android_app",
                "package_name": "com.ai_mauna.mauna",
                "sha256_cert_fingerprints": [
                    "F2:9D:8A:C4:D1:43:53:0C:9A:2C:2A:31:6A:1D:6E:65:A8:1C:04:91:71:C8:E4:BE:DF:10:92:78:24:F4:F7:5E"
                ]
            }
        }
    ]
    return JsonResponse(response, safe=False)
