from django.db import models
from datetime import datetime


class Message(models.Model):
   
    MsgReceiver=models.ForeignKey("TUNIZO.TuniZooUser", on_delete=models.CASCADE,related_name="receiver")
    MsgSender=models.ForeignKey("TUNIZO.TuniZooUser", on_delete=models.CASCADE,related_name="sender")
    Description=models.TextField(max_length=200)
    date=models.DateTimeField(default=datetime.now())