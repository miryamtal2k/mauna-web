from django.db import models

class Article(models.Model):
    title_fr = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, help_text="A URL-friendly version of the title.")
    content_fr = models.TextField()
    publication_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    tags = models.ManyToManyField('Tag')
    main_image = models.ImageField()
    
    # Add other fields as needed

    def __str__(self):
        return self.title

class Tag(models.Model):
    name_fr = models.CharField(max_length=255)


    def __str__(self):
        return self.name_fr

class Category(models.Model):
    name_fr = models.CharField(max_length=255)


    def __str__(self):
        return self.name_fr
