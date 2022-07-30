import json
from urllib.request import urlopen
from bs4 import BeautifulSoup
import requests

def extract_info(url, select_tag=None):
    if requests.get(url).status_code == 200:
        html = urlopen(url)
        soup = BeautifulSoup(html, 'html.parser')
        info = soup.select(select_tag)
    return info    

def list_check(target_list):
    if not target_list:
        print(f'{target_list} list is empty!')
