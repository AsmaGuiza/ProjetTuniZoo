from django.db import models
from django.contrib.auth.models import User


class TuniZooUser(models.Model):
    class SEXE(models.TextChoices):
            FE = "1", "FEMALE"
            MA = "2", "MALE"
    Sexe = models.CharField(
        max_length=2,
        choices=SEXE.choices,
        default=SEXE.FE
    )
    Followers=models.ManyToManyField("TUNIZO.TuniZooUser",blank=True)
    User=models.ForeignKey(User, on_delete=models.CASCADE)
    UserName=models.TextField(max_length=200,unique=True,blank=True)
