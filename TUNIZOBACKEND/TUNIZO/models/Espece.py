from django.db import models


class Especes(models.Model):
    class TYPES(models.TextChoices):
        type1 = "0", "Annimal"
        type2 = "1", "Tree"
    TYPES = models.CharField(
        max_length=2,
        choices=TYPES.choices,
        default=TYPES.type1
    )
    Name=models.CharField(max_length=30,unique=True)
    Refuge=models.CharField(max_length=100, default='S.O.S ANIMALS')
    Description=models.TextField(max_length=200)
    Image=models.ImageField(upload_to='src/' )