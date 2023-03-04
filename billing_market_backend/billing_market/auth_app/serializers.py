from rest_framework import serializers
from .models import EmployeeUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User


class EmployeeUserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    password = serializers.CharField(write_only=True)
    class Meta:
        model = EmployeeUser
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'dob', 'contact', 'email', 'address', 'city', 'pincode', 'user_role')

    def create(self, validated_data):
        return EmployeeUser.objects.create_user(**validated_data)

    def validate_password(self, value):
        if len(value) < 8 or len(value) > 16:
            raise serializers.ValidationError('password must contain 8 to 16 charecters')
        if value.islower() or value.isupper():
            raise serializers.ValidationError('password must contain least 1 uppercase and 1 lower charecters')
        if value.isalpha():
            raise serializers.ValidationError('password must contain least 1 digit')
        if value.isalnum():
            raise serializers.ValidationError('password must contain 1 special charecters')
        return value
    
    def validate_first_name(self, value):
        # if len(value) < 3 or len(value) > 20:
        #     raise serializers.ValidationError(' must contain 3 to 20 charecters')
        # if not value.istitle():
        #     raise serializers.ValidationError('first letter must be capital')
        import re 
        pattern = '^[A-Z]{1}[a-z]{2,19}$'
        if not re.match(pattern, value):
            raise serializers.ValidationError("Please enter first name that starts with Capital letter and must be between 3 to 20 characters")
        return value

    def validate_last_name(self, value):
        if len(value) < 3 or len(value) > 20:
            raise serializers.ValidationError(' must contain 3 to 20 charecters')
        if not value.istitle():
            raise serializers.ValidationError('first letter must be capital')
        return value      
    
    def validate_address(self, value):
        if len(value) < 10 or len(value) > 200:
            raise serializers.ValidationError(' must contain 3 to 20 charecters')
        return value
    
    def validate_city(self, value):
        if len(value) < 4 or len(value) > 20:
            return serializers.ValidationError(' must contain 4 to 20 charecters')
        if not value.istitle():
            raise serializers.ValidationError('first letter must be capital')
        return value
    
    def validate_pincode(self, value):
        if not len(value) == 6:
            raise serializers.ValidationError('pin-code must contain 6 digit')
        if not value.isdigit():
            raise serializers.ValidationError('all characters must be digit')
        return value


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self,user):
        data = super().validate(user)
        print(self.user)
        data['role'] = self.user.user_role
        return data

class ChangePasswordSerializer(serializers.Serializer):
    model = User

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    
    def validate_password(self, value):
        if len(value) < 8 or len(value) > 16:
            raise serializers.ValidationError('password must contain 8 to 16 charecters')
        if value.islower() or value.isupper():
            raise serializers.ValidationError('password must contain least 1 uppercase and 1 lower charecters')
        if value.isalpha():
            raise serializers.ValidationError('password must contain least 1 digit')
        if value.isalnum():
            raise serializers.ValidationError('password must contain 1 special charecters')
        return value
