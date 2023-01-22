from django.db import models



class Publication(models.Model):
    class TYPEPUB(models.TextChoices):
        type1 = "0", "Photo"
        type2 = "1", "Video"
        type3="2","Texte"
    TYPEPUB = models.CharField(
        max_length=2,
        choices=TYPEPUB.choices,
        default=TYPEPUB.type3
    )
    UserNamePublication=models.TextField(max_length=200 ,blank=True)
    Description=models.TextField(max_length=200)
    Likes=models.IntegerField()
    Image=models.ImageField(upload_to='src/' , blank=True)
