from django.db import models
from ckeditor.fields import RichTextField

class Article(models.Model):
    title_fr = models.CharField(max_length=255)
    title_en = models.CharField(max_length=255)

    slug = models.SlugField(unique=True, help_text="A URL-friendly version of the title.")
    content_fr = RichTextField() 
    content_en = RichTextField() 

    publication_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    tags = models.ManyToManyField('Tag')
    main_image = models.ImageField()
    
    # Add other fields as needed

    def __str__(self):
        return self.title_fr

class Tag(models.Model):
    name_fr = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)


    def __str__(self):
        return self.name_fr

class Category(models.Model):
    name_fr = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)


    def __str__(self):
        return self.name_fr
