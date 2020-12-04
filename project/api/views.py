from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from selenium import webdriver
from bs4 import BeautifulSoup
import requests

from .models import Movies as Movies_model

def refresh_movies():
    # 저장된 영화들 삭제
    Movies_model.objects.all().delete()

    url = "https://imdb8.p.rapidapi.com/title/get-most-popular-movies"
    querystring = {"purchaseCountry": "US",
                    "homeCountry": "US", "currentCountry": "US"}
    headers = {
        'x-rapidapi-key': "af7d132985msh0c409f9426fcad6p1c448bjsn2754439d750f",
        'x-rapidapi-host': "imdb8.p.rapidapi.com"
    }
    response = requests.request(
        "GET", url, headers=headers, params=querystring)

    movies_list = eval(response.text)
    # 위 api는 '/title/12345" 와 같은 url을 넘겨줌
    BASE_URL = "https://www.imdb.com"

    driver = webdriver.Chrome('chromedriver')
    response = []
    for movie_url in movies_list:
        # api로 가져온 영화 url을 BASE_URL과 합친 후 셀레니움을 이용하여 엶
        driver.get(BASE_URL + movie_url)
        # 페이지 소스를 bs를 이용하여 html로 파싱
        page_source = driver.page_source
        html = BeautifulSoup(page_source, "html.parser")

        title_wrapper = html.find("div", {"class": "title_wrapper"})
        
        title = title_wrapper.find("h1").text

        # h1 태그에 년도가 포함되어 있어 길이를 이용하여 슬라이싱 후 띄어쓰기 부분 replace
        try:
            year = title_wrapper.find("span", {"id": "titleYear"}).text
            title = title[0: len(title) - len(year)-1]
        except:
            year = ""
        title.replace("\xa0", "")

        subtext = title_wrapper.find("div", {"class": "subtext"})
        try:
            time = subtext.find("time").text.replace("\n", "").strip()
        except:
            time = ""

        try:
            summary = html.find("div", {"class": "summary_text"}).text.replace("\n","").replace("EN","").strip()      
        except:
            summary = ""

        # 장르와 개봉 날짜가 같은 a 태그에 존재
        genres_and_date = subtext.find_all("a")
        # 맨 마지막 요소가 개봉 날짜인 것을 이용하여 저장
        GAD_LEN = len(genres_and_date)
        genres = []
        date = ""
        for i in range(GAD_LEN):
            if i == GAD_LEN-1:
                date = genres_and_date[i].text.replace("\n", "")
            else:
                genres.append(genres_and_date[i].text)

        try:
            poster = html.find("div", {"class": "poster"}).find("img")["src"]
        except:
            poster = "none"

        temp_movie = Movies_model()
        temp_movie.title = title
        temp_movie.year = year
        temp_movie.summary = summary
        temp_movie.time = time
        temp_movie.genres = genres
        temp_movie.date = date
        temp_movie.poster = poster
        temp_movie.save()

    driver.close()

        # temp_dict = {"title": title,
        #             "year": year,
        #             "time": time,
        #             "genres": genres,
        #             "date": date,
        #             "poster": poster}

# Create your views here.
class Header(APIView):
    def get(self, request):
        return Response()


class Movies(APIView):
    def get(self, request):
        


        response = [{'name': "hyesung", 'age': 20}, {'name': "ohs", 'age': 23}]
        return Response(response)


class Dramas(APIView):
    def get(self, request):

        response = [{'name': "hyesung", 'age': 20}, {'name': "ohs", 'age': 23}]
        return Response(response)
