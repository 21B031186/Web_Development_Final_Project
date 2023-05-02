from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db.models import CharField, FloatField, TextField, IntegerField, DateField, ManyToManyField, BooleanField
from django.db.models.fields.related import ForeignKey
from accounts.models import User


class Category(models.Model):
    name = CharField(max_length=255)
    photo = CharField(max_length=700)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Events(models.Model):
    title = CharField(max_length=255)
    desc = TextField()
    info = TextField()
    photo = CharField(max_length=800)
    like = IntegerField(default=0)
    date = DateField(auto_now=True)
    category = ForeignKey(Category, on_delete=models.CASCADE)
    user = ForeignKey(User, on_delete=models.CASCADE, related_name='events', default=1)

    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

    def __str__(self):
        return self.title


class LikeUser(models.Model):
    user = ForeignKey(User, on_delete=models.CASCADE)
    event = ForeignKey(Events, on_delete=models.CASCADE, related_name='liked_events')
    user_liked = BooleanField(default=False)

    class Meta:
        verbose_name = 'Like'
        verbose_name_plural = 'Likes'

    def __str__(self):
        return f"{self.user} liked {self.event}"
