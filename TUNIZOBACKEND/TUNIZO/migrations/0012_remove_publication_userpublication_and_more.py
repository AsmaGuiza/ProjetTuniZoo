# Generated by Django 4.1.4 on 2022-12-31 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TUNIZO', '0011_tunizoouser_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publication',
            name='UserPublication',
        ),
        migrations.AddField(
            model_name='publication',
            name='UserNamePublication',
            field=models.TextField(blank=True, max_length=200),
        ),
    ]
