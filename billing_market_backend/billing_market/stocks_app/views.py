from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from . models import Product
from .serializers import StockSerializer

# Create your views here.



class StockAPI(APIView):
    def get(self,request): 
        products = Product.objects.all()
        serializer = StockSerializer(products,many=True)
        return Response(data=serializer.data)
    

    def post(self,request):
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            obj = serializer.save()
            gst = obj.product_gst.cgst + obj.product_gst.sgst
            print(gst)
            gst_in_rupees = (gst/100) * obj.product_cost_per_quantity
            obj.product_cost_with_gst = obj.product_cost_per_quantity + gst_in_rupees
            print(obj.product_cost_with_gst)
            obj.product_total_cost = obj.product_quantity * obj.product_cost_with_gst
            obj.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors)
    


class  StockDetailAPI(APIView):

    def get(self,request,pk=None):
        obj = get_object_or_404(Product,pk=pk)
        serializer = StockSerializer(obj)
        return Response(data=serializer.data)
    


    def delete(self,request,pk=None):
        obj = get_object_or_404(Product,pk=pk)
        obj.delete()
        return Response(data=None)



    def put(self,request,pk=None):
        obj = get_object_or_404(Product,pk=pk)
        serializer= StockSerializer(data=request.data,instance=obj)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors) 
    


    def patch(self,request,pk=None):
        obj = get_object_or_404(Product,pk=pk)
        serializer = StockSerializer(data=request.data,instance=obj,partial=True)
        if serializer.is_valid():
            obj = serializer.save()
            gst = obj.product_gst.cgst + obj.product_gst.sgst
            print(gst)
            gst_in_rupees = (gst/100) * obj.product_cost_per_quantity
            obj.product_cost_with_gst = obj.product_cost_per_quantity + gst_in_rupees
            print(obj.product_cost_with_gst)
            obj.product_total_cost = obj.product_quantity * obj.product_cost_with_gst
            obj.save()
            serializer = StockSerializer(obj)
            return Response(data=serializer.data)
        return Response(data=serializer.errors) 

    

    

    

    

