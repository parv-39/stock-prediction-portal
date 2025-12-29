from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        password = serializers.CharField(write_only=True)
        model = User
        fields = ['username','email','password']

    def create(self, validated_data):
        #User.objects.create = save the password in a plain text
        #User.objects.create_user = automatically has the password
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )
        # user = User.objects.create_user(**validated_data)
        return user