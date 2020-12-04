from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

import requests


# Create your views here.
class MpmdApi(APIView):
    def get(self, request):
        # url = "https://imdb8.p.rapidapi.com/title/get-most-popular-movies"

        # querystring = {"purchaseCountry": "US",
        #             "homeCountry": "US", "currentCountry": "US"}
        # headers = {
        #     'x-rapidapi-key': "af7d132985msh0c409f9426fcad6p1c448bjsn2754439d750f",
        #     'x-rapidapi-host': "imdb8.p.rapidapi.com"
        # }

        # response = requests.request("GET", url, headers=headers, params=querystring)

        response = [{'name': "hyesung", 'age': 20}, {'name': "ohs", 'age': 23}]
        return Response(response)
