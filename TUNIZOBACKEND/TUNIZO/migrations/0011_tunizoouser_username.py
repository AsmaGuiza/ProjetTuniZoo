# Generated by Django 4.1.4 on 2022-12-29 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TUNIZO', '0010_publication_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='tunizoouser',
            name='UserName',
            field=models.TextField(blank=True, max_length=200, unique=True),
        ),
    ]