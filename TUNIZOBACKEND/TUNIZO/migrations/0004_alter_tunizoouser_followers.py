# Generated by Django 4.1.4 on 2022-12-25 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TUNIZO', '0003_alter_tunizoouser_sexe'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tunizoouser',
            name='Followers',
            field=models.ManyToManyField(blank=True, to='TUNIZO.tunizoouser'),
        ),
    ]
