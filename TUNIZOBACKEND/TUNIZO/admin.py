from django.contrib import admin
from .models import Especes,TuniZooUser,Commentaire,Publication,Message,Adoption,Donation
# Register your models here.
admin.site.register(Especes)
admin.site.register(TuniZooUser)
admin.site.register(Publication)
admin.site.register(Commentaire)
admin.site.register(Message)
admin.site.register(Adoption)
admin.site.register(Donation)


