import json
from tkinter.ttk import Separator
from urllib.request import urlopen
from bs4 import BeautifulSoup, SoupStrainer
import requests, lxml
import random 
import re 

NAVER_BASE_URL = 'https://entertain.naver.com'
NAVER_READ_URL = NAVER_BASE_URL + '/home'

ARTICLE_URL_TAGS = '#ent_body > #wrap > #content > .ct_wrp > .left_cont > .home_hdline_grid > .hdline_type_lst > .lst_item > .thumb_area'
ARTICLE_BASE_TAGS = '#ent_body > #wrap > #content > .end_ct > .end_ct_area'
ARTICLE_CONTENTS_TAGS = ARTICLE_BASE_TAGS + '> .end_body_wrp'

def write_to_json(resource):
    with open('data.json','w') as f:
        json.dump(resource, f)


def extract_info(url, select_tag=None):
    if requests.get(url).status_code == 200:
        html = urlopen(url)
        soup = BeautifulSoup(html, 'html.parser')
        info = soup.select(select_tag)
    return info    

def get_url(): 
    news_info = extract_info(NAVER_READ_URL, ARTICLE_URL_TAGS)
    news_id_list = [data['href']for data in news_info]
    news_url_list = [NAVER_BASE_URL +  id for id in news_id_list]
    
    return news_url_list



def get_title(url):
    title_information = extract_info(url,ARTICLE_BASE_TAGS)
    
    for title_info in title_information:
        info_title = title_info.find('h2',{'class':'end_tit'}).text
        title = info_title.lstrip()
    
    return title

# def get_contents(content):
#     strainer = SoupStrainer('div',{'id':'articeBody'})
#     contents = BeautifulSoup(content,"lxml",parse_only=strainer)
#     print('Contents')
#     print(contents)
#     if contents is None:
#         raise ValueError("There is no any news article contents.")
    
#     for child in contents.find_all():
#         if child.name != "br":
#             child.clear()
    
#     contents = contents.get_text(separator="\n").strip()
#     contents = "\n".join([line.strip() for line in content.splitlines() if line.strip()])

#     return contents


        
def get_contents(url):
    # contents_list = []
    contents = extract_info(url, ARTICLE_CONTENTS_TAGS + ' > .article_body font1 size3 > .class_div_main image')
    print(contents)

    for child in contents.find_all():
        if child.name != "br":
            child.clear()
    
    contents = contents.get_text(Separator="\n").strip()
    contents = "\n".join([line.strip() for line in contents.splitlines() if line.strip()])

    return contents

        
def get_copyright(url):
    copyright_information = extract_info(url, ARTICLE_BASE_TAGS + '.copyright > .c_inner >.c_text')
    copyright = copyright_information.text
    return copyright


def main():
    url_list = get_url()
    ran_ind = random.randrange(0,2)
    url = url_list[ran_ind]

    print(url)
    
    title = get_title(url)
    print(title)
    contents = get_contents(url)
    print(contents)
    # copyright = get_copyright(url)
    # print(copyright)

if __name__ == '__main__':
    main()
