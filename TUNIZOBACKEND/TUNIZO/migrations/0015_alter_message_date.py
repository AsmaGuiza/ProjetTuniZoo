# Generated by Django 4.1.4 on 2023-01-17 10:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TUNIZO', '0014_alter_message_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 1, 17, 11, 34, 32, 470369)),
        ),
    ]