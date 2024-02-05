from django.contrib import admin
from .models import *

admin.site.register(Category)
admin.site.register(Tag)


class ArticleAdmin(admin.ModelAdmin):
  list_display = ("title_fr",)
  prepopulated_fields = {"slug": ("title_fr")}
  
admin.site.register(Article, ArticleAdmin)