from django.test import TestCase
from django.urls import reverse
from .models import Card

class CardViewTests(TestCase):
    def setUp(self):
        self.card = Card.objects.create(
            name="John Doe",
            contact="1234567890",
            services="Web Development",
            about="About John Doe",
            location="New York",
            logo_url="http://example.com/logo.png",
            whatsapp_url="http://example.com/whatsapp",
            instagram_url="http://example.com/instagram",
            facebook_url="http://example.com/facebook",
            linkedin_url="http://example.com/linkedin",
            custom_url="http://example.com/custom"
        )

    def test_create_card_view(self):
        response = self.client.post(reverse('create_card'), {
            'logo_url': 'http://example.com/logo.png',
            'name': 'Jane Doe',
            'contact': '0987654321',
            'services': 'Graphic Design',
            'about': 'About Jane Doe',
            'location': 'Los Angeles',
            'whatsapp_url': 'http://example.com/whatsapp',
            'instagram_url': 'http://example.com/instagram',
            'facebook_url': 'http://example.com/facebook',
            'linkedin_url': 'http://example.com/linkedin',
            'custom_url': 'http://example.com/custom'
        })
        self.assertEqual(response.status_code, 302)  # Check for redirect
        self.assertTrue(Card.objects.filter(name='Jane Doe').exists())

    def test_edit_card_view(self):
        response = self.client.post(reverse('edit_card', args=[self.card.id])), {
            'logo_url': 'http://example.com/new_logo.png',
            'name': 'John Doe Updated',
            'contact': '1234567890',
            'services': 'Updated Services',
            'about': 'Updated About',
            'location': 'Updated Location',
            'whatsapp_url': 'http://example.com/whatsapp',
            'instagram_url': 'http://example.com/instagram',
            'facebook_url': 'http://example.com/facebook',
        }