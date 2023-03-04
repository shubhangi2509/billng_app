from django.contrib import admin
from .models import Product,ProductCategory,GST,Offer

# Register your models here.



class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ['product_id','product_name','product_cost_per_quantity','product_offer']
admin.site.register(Product,ProductAdmin)  




class ProductCategoryAdmin(admin.ModelAdmin):
    model = ProductCategory
    list_display = ['catogery_name']
admin.site.register(ProductCategory,ProductCategoryAdmin)  




class GstAdmin(admin.ModelAdmin):
    model = GST
    list_display = ['cgst','sgst','igst']
admin.site.register(GST,GstAdmin)



class OfferAdmin(admin.ModelAdmin):
    model = Offer
    list_display = ['offer_name']
admin.site.register(Offer,OfferAdmin)    
