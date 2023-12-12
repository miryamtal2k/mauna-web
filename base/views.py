from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

def home_view(request):
    return render(request, 'base/here.html')

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
            return render(request, 'base/here.html')
    return render(request, 'base/here.html')

