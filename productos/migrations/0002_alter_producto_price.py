# Generated by Django 4.2.7 on 2023-11-13 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='price',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]