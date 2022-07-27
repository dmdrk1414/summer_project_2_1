from urllib.request import urlopen
from bs4 import BeautifulSoup
import random 
import re 

NAVER_READ_URL ='https://entertain.naver.com/home'

def extract_url():
    html = urlopen(NAVER_READ_URL)
    soup = BeautifulSoup(html, 'html.parser')
    news_list = soup.select('#ent_body > #wrap > div.content >  ')

def naver_news_scrape():
    pass
    




if __name__ == '__main__':
    pass
