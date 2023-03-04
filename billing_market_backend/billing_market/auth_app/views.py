from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import EmployeeUserSerializer
from .models import EmployeeUser
from django.conf import settings
from django.core.mail import send_mail
from rest_framework_simplejwt.authentication import JWTAuthentication
from auth_app.permissions import EmployeeRegistrationPermissions
from .serializers import ChangePasswordSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


class EmployeeUserAPI(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [EmployeeRegistrationPermissions]

    def post(self, request):
        serializer = EmployeeUserSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)

            first_name = serializer.data.get('first_name')
            email = serializer.data.get('email')

            subject = 'User Registration Mail'
            message = f'Congratulation {first_name}!!,\n'\
                        'you are successfully registerd for Billing Market app!'
            email_form = settings.EMAIL_HOST_USER
            recipient_list = [email]
            send_mail(subject, message, email_form, recipient_list)
            return Response(data=serializer.data, status=201)
        return Response(data=serializer.errors,status=400)

class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    def get_object(self, queryset=None):
        obj = self.request.user
        return obj
    
    
    
    def put(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response, status=205)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)