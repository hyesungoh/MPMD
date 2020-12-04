from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class MpmdApi(APIView):
    def get(self, request):
        s = {'name': "hyesung", 'age': 20}
        return Response(s)
    