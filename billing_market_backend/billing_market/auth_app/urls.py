from django.urls import path
from .views import EmployeeUserAPI,ChangePasswordView

urlpatterns = [
    path('register/', EmployeeUserAPI.as_view()),
    path('api/change-password/', ChangePasswordView.as_view(), name='change-password')
]