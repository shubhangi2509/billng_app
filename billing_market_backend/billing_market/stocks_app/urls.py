from django.urls import path

from.views import StockAPI,StockDetailAPI



urlpatterns = [
    path('stock/',StockAPI.as_view()),
    path('stock/<int:pk>/',StockDetailAPI.as_view())
]
