import json
import re 
import random 
import pathlib
import datetime as dt

from collections import OrderedDict
from utils import extract_info, list_check

NAVER_BASE_URL = 'https://entertain.naver.com'
NAVER_READ_URL = NAVER_BASE_URL + '/home'

ARTICLE_URL_TAGS = '#ent_body > #wrap > #content > .ct_wrp > .left_cont > .home_hdline_grid > .hdline_type_lst > .lst_item > .thumb_area'
ARTICLE_BASE_TAGS = '#ent_body > #wrap > #content > .end_ct > .end_ct_area'
ARTICLE_REPORTER_TAGS = ARTICLE_BASE_TAGS + '> .article_journalist > .article_journalist_inner > .journalistcard > .journalistcard_inner > \
    .journalistcard_item > .journalistcard_item_inner > .journalistcard_summary > .journalistcard_summary_inner > .journalistcard_summary_top > \
    .journalistcard_summary_info > .journalistcard_summary_link > .journalistcard_summary_name'
ARTICLE_CONTENTS_TAGS = ARTICLE_BASE_TAGS + '> .end_body_wrp'
ARTICLE_COPYRIGHT_TAGS = ARTICLE_BASE_TAGS + '> .copyright >.c_inner > .c_text'

JSON_PATH = str(pathlib.Path(__file__).resolve().parent.parent/ "src" /"json") + "/article.json"

def get_url(): 
    news_info = extract_info(NAVER_READ_URL, ARTICLE_URL_TAGS)
    news_id_list = [data['href']for data in news_info]
    news_url_list = [NAVER_BASE_URL +  id for id in news_id_list]
    news_url = news_url_list[random.randint(0,1)]    
    return news_url

class NewsScraperInit():
    
    def __init__(self):
        self.url = get_url()

    def _get_title(self)->str:
        title_information = extract_info(self.url,ARTICLE_BASE_TAGS)
        list_check(title_information)
        
        for title_info in title_information:
            info_title = title_info.find('h2',{'class':'end_tit'}).text
            title = info_title.strip()
        return title

    def _get_reporter(self)->str:
        reporter_information = extract_info(self.url, ARTICLE_REPORTER_TAGS)
        reporter = reporter_information[0].text
        return reporter

    def _get_contents(self)->str:
        contents_information = extract_info(self.url, ARTICLE_CONTENTS_TAGS)

        del_list = ['img','script']
        for d_con in del_list:
            if contents_information[0].find(d_con):
                contents_information[0].find(d_con).decompose()

        parsing_contents=str(contents_information[0])
        content = re.sub('<.+?>','',parsing_contents,0).strip()
        return content
        
    def _get_copyright(self)->str:
        copyright = extract_info(self.url,ARTICLE_COPYRIGHT_TAGS)
        copyright = copyright[0].text
        copyright = copyright.split('ⓒ')[1].split('.')[0].strip()
        return copyright


class NewsScraper(NewsScraperInit):
    def __init__(self):
        super().__init__()
        self.title = self._get_title()
        self.reporter = self._get_reporter()
        self.contents = self._get_contents()
        self.copyright = self._get_copyright()
    
    def print_info(self):
        print_data ={
            'title': self.title,
            'reporter':self.reporter,
            'content':self.contents,
            'copyright':self.copyright 
        }

        for key in print_data.keys():
            print(f'[{key}]: {print_data[key]}')
        return None

    # def mk_json(self):
        # x = dt.datetime.now()
        # now_time = x.strftime("%Y%m%d")

        # json_data = {}
        # json_data[now_time]=[]
        # json_data[now_time].append({
        #     'title': self.title,
        #     'reporter':self.reporter,
        #     'content':self.content,
        #     'copyright':self.copyright
        # })

        # with open(JSON_PATH+'/article.json','w',encoding='utf-8') as f:
        #     json.dump(json_data,f,indent='\t')
        pass  
# def write_to_json(resource):
#     with open('data.json','w') as f:
#         json.dump(resource, f)



    