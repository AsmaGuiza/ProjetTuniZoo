from django.db import models


class Donation(models.Model):
    UserDonation=models.ForeignKey("TUNIZO.TuniZooUser", on_delete=models.CASCADE)
    Montant=models.IntegerField()
