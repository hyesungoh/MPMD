from rest_framework import serializers
from .models import Movies, Dramas

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = '__all__'

class DramaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dramas
        fields = '__all__'
        
    