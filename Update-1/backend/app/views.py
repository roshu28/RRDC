from django.shortcuts import render, redirect, get_object_or_404
from .models import Card
from .forms import CardForm

def create_card(request):
    if request.method == 'POST':
        form = CardForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')  # Redirect to the index page after creation
    else:
        form = CardForm()
    return render(request, 'create_card.html', {'form': form})

def edit_card(request, card_id):
    card = get_object_or_404(Card, id=card_id)
    if request.method == 'POST':
        form = CardForm(request.POST, instance=card)
        if form.is_valid():
            form.save()
            return redirect('index')  # Redirect to the index page after editing
    else:
        form = CardForm(instance=card)
    return render(request, 'edit_card.html', {'form': form})

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def products(request):
    return render(request, 'products.html')

def pricing(request):
    return render(request, 'pricing.html')

def contact(request):
    return render(request, 'contact.html')

def faq(request):
    return render(request, 'faq.html')
