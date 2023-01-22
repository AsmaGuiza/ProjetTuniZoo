from django.db import models


class Adoption(models.Model):
    UserAdoption=models.ForeignKey("TUNIZO.TuniZooUser", on_delete=models.CASCADE)
    EspeceAdopted=models.ForeignKey("TUNIZO.Especes", on_delete=models.CASCADE)