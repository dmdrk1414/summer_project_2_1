## Naver 연애 뉴스 Scraper

실시간 Naver 연애 뉴스의 2개의 기사를 랜덤으로 하나를 선택해 json으로 만들어준다. 
![article_img](./image.png)


```python
from scraper import NewsScraper

example = NewsScraper()
# print data info 
example.print_info()
```

**output**

```python
[title]: 첫방송 '오늘의 웹툰' 김세정, 만두귀로 강렬 등장 박호산 업어치기로 웹툰회사 취직[SS리뷰]
[reporter]: 박효실 기자
[content]: SBS금토극 ‘오늘의 웹툰’ ... (기사 전체)
[copyright]: 스포츠서울
```