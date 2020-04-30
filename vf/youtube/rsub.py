import requests
from bs4 import BeautifulSoup

url = 'https://kr.noxinfluencer.com/youtube-channel-rank/top-250-vn-all-youtuber-sorted-by-subs-weekly'

response = requests.get(url)

html = response.text

soup = BeautifulSoup(html, 'html.parser')

def rsub():

    rank_list=[]
    for rank in range(1, 50+1):
        rank_list.append(rank)

    images = soup.select('.avatar')

    image_list = []
    for i in images:
        image_list.append(i.get('src').strip())
    # print(image_list)

    links = soup.select('.star-avatar')
    link_list = []
    for link in links:
        link_list.append(link['href'].strip('/youtube/channel/'))
    link_list = list(filter(None, link_list))
    # print(link_list)

    names = soup.select('.kol-name')
    name_list = []
    for name in names:
        name_list.append(name.get('title'))
    # print(name_list)

    categories = soup.select('.category-text')
    category_list = []
    for category in categories:
        category_list.append(category.get_text())
    # print(category_list)

    subs = soup.select('.followerNum .num')
    sub_list = []
    for sub in subs:
        sub_list.append(sub.get_text())
    # print(sub_list)

    views = soup.select('.avgView .num')
    view_list = []
    for view in views:
        view_list.append(view.get_text())
    # print(view_list)
    image_list = filter(None, image_list)
    x = zip(rank_list,image_list,link_list,name_list,category_list,sub_list,view_list)
    return list(x)


# print(ranking())
