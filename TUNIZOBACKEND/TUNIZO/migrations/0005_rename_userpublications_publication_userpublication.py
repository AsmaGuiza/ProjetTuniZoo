# Generated by Django 4.1.4 on 2022-12-25 19:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TUNIZO', '0004_alter_tunizoouser_followers'),
    ]

    operations = [
        migrations.RenameField(
            model_name='publication',
            old_name='UserPublications',
            new_name='UserPublication',
        ),
    ]
