from django.db import models


class Commentaire(models.Model):
   
    UserCommentaire=models.ForeignKey("TUNIZO.TuniZooUser", on_delete=models.CASCADE)
    Description=models.TextField(max_length=200)
    Likes=models.IntegerField()
    Publication=models.ForeignKey("TUNIZO.Publication", on_delete=models.CASCADE)