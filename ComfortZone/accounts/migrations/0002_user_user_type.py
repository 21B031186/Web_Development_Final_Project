# Generated by Django 4.2 on 2023-05-04 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user_type',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
