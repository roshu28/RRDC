from django.db import models

class Card(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)
    services = models.CharField(max_length=100)
    about = models.TextField()
    location = models.CharField(max_length=100)
    logo_url = models.URLField()
    whatsapp_url = models.URLField()
    instagram_url = models.URLField()
    facebook_url = models.URLField()
    linkedin_url = models.URLField()
    custom_url = models.URLField()
    map_url = models.URLField()

    def __str__(self):
        return self.name