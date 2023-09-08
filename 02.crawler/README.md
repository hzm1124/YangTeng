# 爬虫任务 - 2023.08.22（临时指北）
## 1. 基础工具
### 1.1. Python
#### 1.1.1. 简介
- [Python](https://python.org)
- [Python教程_1](https://www.liaoxuefeng.com/wiki/1016959663602400/1016959856222624)
- [Python教程_2](https://www.runoob.com/python3/python3-tutorial.html)
- [路径长度error](https://blog.csdn.net/weixin_43658159/article/details/127454046)

#### 1.1.2. Pip换源
- 临时换源：`-i`参数  
    > 清华：`pip install 'package' -i https://pypi.tuna.tsinghua.edu.cn/simple`  
    > 阿里云：`pip install 'package' -i http://mirrors.aliyun.com/pypi/simple`  
    > 中科大：`pip install 'package' -i http://pypi.mirrors.ustc.edu.cn/simple`  
    > 华为：`pip install 'package' -i https://repo.huaweicloud.com/repository/pypi/simple`  
    > 腾讯：`pip install 'package' -i http://mirrors.cloud.tencent.com/pypi/simple`
- 永久换源：自行百度

#### 1.1.3. Library包
- |名称|安装方法|参考|
  |:-:|:-|:-|
  |virtualenv|`pip install virtualenv`|[教程](https://www.liaoxuefeng.com/wiki/1016959663602400/1019273143120480)|
  |jupyter notebook|`pip install notebook`|[官网](https://jupyter.org)|
  |jupyter_contrib_nbextensions|`pip install jupyter_contrib_nbextensions`|`jupyter contrib nbextension install --user` -> `Hinterland`、`Highlight selected word`、`AddBefore`、`AutoSaveTime`、`Go to Current Running Cells`<br /><br />`pip install jupyterthemes` -> `!jt -h` -> `!jt -t chesterish -f roboto -fs 11 -ofs 10 -T -N -kl`|
  |pandas|`pip install pandas`|[官网](https://pandas.pydata.org/getting_started.html)|
  |openpyxl|`pip install openpyxl`|[Tutorial](https://openpyxl.readthedocs.io/en/stable/tutorial.html)|
  |pillow|`pip install pillow`|[官网](https://pillow.readthedocs.io/en/latest)|
  |requests|`pip install requests`|[教程](https://www.liaoxuefeng.com/wiki/1016959663602400/1183249464292448)|
  |BeautifulSoup|`pip install bs4`||
  |selenium|`pip install selenium`|[官网](https://www.selenium.dev/zh-cn/documentation/webdriver/getting_started)<br />[chromedriver](https://chromedriver.chromium.org/home)<br />[下载](https://chromedriver.storage.googleapis.com/index.html)|
  |gevent|`pip install gevent`||
  |tqdm|`pip install tqdm`|[官网](https://pypi.org/project/tqdm/)|
- 升级：`pip install 'package' --upgrade`

### 1.2. JavaScript
#### 1.2.1. 简介
- [JavaScript教程_1](https://www.runoob.com/js/js-tutorial.html)
- [JavaScript教程_2](https://www.liaoxuefeng.com/wiki/1022910821149312)

#### 1.2.2. Tampermonkey
- [Tampermonkey](https://www.tampermonkey.net)
- [Tampermonkey教程_1](https://www.bilibili.com/video/BV1yT411L7n7)
- [Tampermonkey教程_2](https://www.bilibili.com/video/BV19W4y1h7KM)

### 1.3. HTML
#### 1.3.1. 简介
- [HTML教程](https://www.runoob.com/html/html-tutorial.html)

#### 1.3.2. Tomcat
- 待补充，暂时先自行百度

## 2. 知识补充
- [Regular Expression（正则表达式）](https://github.com/ziishaned/learn-regex)
- [XPath（XML Path Language）](https://www.runoob.com/xpath/xpath-tutorial.html)
- 协程[1](https://blog.csdn.net/qq_45476428/article/details/108782593)、[2](https://blog.csdn.net/freeking101/article/details/53097420)
- [Postman](https://www.postman.com/downloads)（[教程](https://www.bilibili.com/video/BV1hP4y177gS)）

## 3. 爬虫入门
### 3.1. 目录获取
1. JavaScript：`文本` -> `JSON (JavaScript Object Notation)` -> `Blob (Binary Large Object)`
2. Python：`文本` -> `JSON` -> `DataFrame`

### 3.2. 内容爬取
- [b站](https://www.bilibili.com/video/BV1bL4y1V7q1)
- [书](https://www.ituring.com.cn/book/2847)

### 3.3. 爬虫提速
- [多进程 vs 多线程 vs 协程](https://blog.csdn.net/weixin_51656605/article/details/113694044)

### 3.4. 反爬机制
- 基于身份识别的反爬
- 基于爬虫行为的反爬
- 基于数据加密的反爬

### 3.5. 反反爬
#### 3.5.1. [反反爬教程](https://www.bilibili.com/video/BV1cy4y1V771)

#### 3.5.2. [`User-Agent`](https://sspai.com/post/75349)
- |爬取方法|代码示例|
  |:-:|:-|
  |requests|`headers = {'User-Agent': 'UA'}`<br /><br />`requests.get(url, headers=headers)`|
  |selenium|`from selenium.webdriver import ChromeOptions`<br /><br />`option = ChromeOptions()`<br />`option.add_argument('user-agent=UA')`<br /><br />`from selenium.webdriver import Chrome`<br />`from selenium.webdriver.chrome.service import Service`<br /><br />`browser = Chrome(service=Service('chromedriver'), options=option)`|
- |序号|`User-Agent` Pool|
  |:-:|:-|
  |01.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.90 Safari/537.36`|
  |02.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.16 Safari/537.36`|
  |03.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5672.63 Safari/537.36`|
  |04.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5672.24 Safari/537.36`|
  |05.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.49 Safari/537.36`|
  |06.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.28 Safari/537.36`|
  |07.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.5563.64 Safari/537.36`|
  |08.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.5563.41 Safari/537.36`|
  |09.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.5563.19 Safari/537.36`|
  |10.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.77 Safari/537.36`|
  |11.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.30 Safari/537.36`|
  |12.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.74 Safari/537.36`|
  |13.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.25 Safari/537.36`|
  |14.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.71 Safari/537.36`|
  |15.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.22 Safari/537.36`|
  |16.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.62 Safari/537.36`|
  |17.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.18 Safari/537.36`|
  |18.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5249.61 Safari/537.36`|
  |19.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5249.21 Safari/537.36`|
  |20.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.52 Safari/537.36`|
  |21.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.19 Safari/537.36`|
  |22.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36`|
  |23.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.29 Safari/537.36`|
  |24.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.20 Safari/537.36`|
  |25.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36`|
  |26.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.24 Safari/537.36`|
  |27.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36`|
  |28.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36`|
  |29.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.27 Safari/537.36`|
  |30.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36`|
  |31.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.15 Safari/537.36`|
  |32.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36`|
  |33.|`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.20 Safari/537.36`|

#### 3.5.3. Referer
- |爬取方法|代码示例|
  |:-:|:-|
  |requests|`headers = {'Referer': 'Referer'}`<br /><br />`requests.get(url, headers=headers)`|

#### 3.5.4. ~~Cookie~~

#### 3.5.5. 代理池
- [快代理](https://www.kuaidaili.com/) -> 隧道代理
- |爬取方法|代码示例|
  |:-:|:-|
  |requests|`proxies = {'http': 'http://username:password@tunnelhost:tunnelport',`<br />&emsp;&emsp;&emsp;&emsp;&emsp;`'https': 'http://username:password@tunnelhost:tunnelport'}`<br /><br />`requests.get(url, proxies=proxies)`|
  |selenium|`from selenium.webdriver import ChromeOptions`<br /><br />`option = ChromeOptions()`<br />`option.add_argument('--proxy-server=http://tunnelhost:tunnelport')`<br /><br />`from selenium.webdriver import Chrome`<br />`from selenium.webdriver.chrome.service import Service`<br /><br />`browser = Chrome(service=Service('chromedriver'), options=option)`|
- |发票类型|发票抬头|纳税人识别号|
  |:-:|:-:|:-:|
  |企业增值税普通发票/电子普通发票|福建扬腾创新信息科技有限公司|91350100MA338EEKXY|

### 3.6. 常爬网站
- |网址|爬前操作|目录字段|内容字段|爬取方法|
  |:-|:-|:-|:-|:-:|
  |01. [RockAuto](https://www.rockauto.com/en/parts/melling,timing+chain+&+component+kit,5756)||***`Url`***、`Part_Number`|1. `Manufacturer`、`Vehicle`、`Alternate_OE_Part_Numbers`、`Note_1`、`Note_2`、***`Url`***、***`Info`***、`Src`<br />2. ***`Info`***、`Kit_No`、`Kit_Quantity`、`Kit_Note`、`Kit_Manufacturer`、`Kit_Part_Number`、***`Kit_Info`***<br />3. ***`Kit_Info`***、`Kit_OE`、`Kit_Src`|selenium|
  |02. [Dorman](https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&q=Climate%2520Control%2520Module&start=0&num=100)|`100 records per page`|***`Url`***、`Part_Number`、`Part_Type`、`Application_Summary`|1. `OE_Numbers`、***`Url`***、***`vehicle_url`***、`Src`、`其他Specifications`<br />2. ***`vehicle_url`***、`Vehicle`|requests|
  |03. [eBay](https://www.ebay.de/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=nb-parts-de&store_cat=0&store_name=nbpartsersatzteile&_oac=1&_nkw=bremsscheiben)|1. `Sort` -> `Price + Shipping: highest first`<br />2. `Items per page` -> `240`<br />(_ul=US、_sop=16、_ipg=240、_stpos=91710、orig_cvip=true)|***`Item_Number`***、`Url`|***`Item_Number`***、`Title`、`Price`、`Sold`、`Vehicle`、`Src`、`其他ItemSpecifics`|requests|
  |04. [Cardone](https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/?limit=96&sort=alphaasc)|1. `Show` -> `96`<br />2. `Sort By:` -> `A to Z`|`Title`、`Vehicle`、***`Url`***|1. ***`Url`***、***`Part_Number`***、`Src`、`其他General`<br />2. ***`Part_Number`***、`OE_Numbers`|requests + Tomcat|
  |05. [Standard](https://www.standardbrand.com/en/products/sensors/sensors/anti-lock-brake-abs-sensors)|1. 在官网找出[`iframe`](https://ecatalog.smpcorp.com/V2/STD/#/partsearch/searchText/ABS%20Speed%20Sensor?type=p&view=pp)：`title="E-Cat Frame"`，设置`View 96`、`Part  (A-Z)`<br />2. 在详情页找出[`详情api`](https://ecatalog.smpcorp.com/V2/STD/api/part/partselect?part=ALS417&func=PART&vid=)：`https://ecatalog.smpcorp.com/V2/STD/api/part/partselect?part=` + `Part_Number` + `&func=PART`<br />3. 在详情页找出[`图片api`](https://ecatalog.smpcorp.com/V2/STD/api/image/getallimages?partNum=ALS417&brand=STI&zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960)：`https://ecatalog.smpcorp.com/V2/STD/api/image/getallimages?partNum=` + `Part_Number` + `&brand=` + `Brand` + `&zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960`|***`Part_Number`***、`Url`|***`Part_Number`***、`POP`、`Per_Car`、`Part_Type`、`Vehicle`、`Src`、`其他partSpecs`|requests|
  |06. [CARiD](https://www.carid.com/search/NGK+Laser+Iridium+Spark+Plugs/code-ccb8ce4eee843e4eb433d7a9a8931e0d/queryId-420738fe115bb7ad7af949d2688d7e1a/?redirect=1/sort-price-desc)|`Sort by` -> `Price High to Low`|***`Url`***|***`Url`***、`Title`、`mpn`、`Brand`、`Part_Number`、`UPC`、`Vehicle`、`Src`、`其他Specifications`|selenium|
  |07. [Summit](https://www.summitracing.com/search?PageSize=100&SortBy=SKU&SortOrder=Ascending&keyword=LS%20Oil%20Pan)|1. `Records Per Page` -> `100 Records Per Page`<br />2. `Sort By` -> `Part Number (a-z)`|`Part_Number`、`Title`、`Description`、***`Url`***|***`Url`***、`Price`、`Src`、`其他Overview`|selenium|
  |08. [SpectraPremium](https://ecat.spectrapremium.com/en/parts?line=oil_pans&year=&make=&model=&submodel=&universal=0&hide-exclusives-canadian-market=0&sort=part-number&limit=50)|1. `Sort by part #`<br />2. `Number of results` -> `50`|`Part_Number`、***`Url`***|1. ***`Url`***、`Src`、`其他Part_Specifications`<br />2. ***`Url`***、`Vehicle`|requests|
  |09. [Denniskirk](https://www.denniskirk.com/atv/cv-axle/brandasc.srt/100.ipp)|1. `Results per Page` -> `100`<br />2. `Sort by` -> `Brand: A-Z`|`Title`、`Brand`、`Price`、***`Url`***|***`Url`***、`OE`、`Vehicle`、`Src`、`其他Specifications`|Tomcat|
  |10. [FourSeasons](https://www.4s.com/en/ecatalog?part=blower&type=p&search=s)|1. 在官网找出[`iframe`](https://ecatalog.smpcorp.com/v2/fs/#/partsearch/searchText/blower?type=p&search=s)：`title="eCatFrame"`，设置`View 96`、`Part  (A-Z)`<br />2. 在详情页找出[`详情api`](https://ecatalog.smpcorp.com/v2/fs/api/part/partselect?part=35001&func=PART&vid=)：`https://ecatalog.smpcorp.com/v2/fs/api/part/partselect?part=` + `Part_Number` + `&func=PART`<br />4. 在详情页找出[`图片api`](https://ecatalog.smpcorp.com/v2/fs/api/image/getallimages?partNum=35001&brand=FS&zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960)：`https://ecatalog.smpcorp.com/v2/fs/api/image/getallimages?partNum=` + `Part_Number` + `&brand=` + `Brand` + `&zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960`|***`Part_Number`***、`Url`|***`Part_Number`***、`POP`、`Per_Car`、`Part_Type`、`Vehicle`、`Src`、`其他partSpecs`|requests|
  |11. [Amazon](https://www.amazon.com/stores/page/0195C224-966C-45B3-8971-DF02D7217AEC/search?ingress=2&visitId=65dccac2-1687-4d2f-962e-024be8560dcb&ref_=ast_bln&terms=blower)|`Sort by:` -> `Price: High to Low`|`Title`、`Star`、`Count`、`Price`、***`Url`***、`Src`|***`Url`***、`其他productDetails`|selenium|
  |12. [AutoteileDirekt](https://www.autoteiledirekt.de/suche.html?keyword=NISSENS&categories%5B%5D=447)||`Part_Number`、`Title`、`Price`、***`Url`***|***`Url`***、`OE`、`Vehicle`、`Src`、`tecdoc`|Tomcat|
  |13. [1AAuto](https://www.1aauto.com/search?q=brake+calipers)|`A-Z`|`Title`、***`Url`***、`Brand`|1. ***`Url`***、***`vehicle_url`***、`Src`<br />2. ***`vehicle_url`***、`OE`、`Vehicle`|requests|
  |14. [Rotomaster](https://rotomaster.com/search.php?search_query=Turbocharger&section=product&_bc_fsnf=1&Part+Type=Turbocharger)|1. `VIEW AS` -> `3`<br />2. `SHOW` -> `30 items per page`<br />3. `SORT BY` -> `A to Z`|***`Url`***|`Title`、`Price`、***`Url`***、`Src`|selenium|
  |15. [TurbochargerPros](https://www.turbochargerpros.com/search_result.asp?w=garrett#/filter:brand:Garrett)||***`Url`***|`Title`、`Price`、`Vehicle`、***`Url`***、`Src`|selenium|

## 4. 附录
1. [selenium常用配置](https://blog.csdn.net/m0_56676945/article/details/129215165)
2. [selenium配置大全](https://peter.sh/experiments/chromium-command-line-switches)
3. [selenium等待机制](https://blog.csdn.net/biggbang/article/details/121511531)
4. [eBay网站开发者API](https://developer.ebay.com/devzone/shopping/docs/CallRef/GetSingleItem.html)
5. [正则表达式测试网站](https://www.whatsmyip.org/regular-expression-tester)
6. [JSON解析](https://www.json.cn)
7. [Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)