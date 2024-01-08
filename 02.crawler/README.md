# 爬虫任务 - 2023.12.01（临时指北）
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
  |01. [RockAuto](https://www.rockauto.com/en/parts/melling,timing+chain+&+component+kit,5756)||***`Url`***、`No.`、`Part_Number`|1. `$_序号`、`Manufacturer`、`Part_Number`、`$_Vehicle`、`Alternate_OE_Part_Numbers`、`Note_1`、`Note_2`、`$_Pic`、***`Url`***、***`Info`***、`Src`、`Type_Code`、***`Part_Key`***<br />2. ***`Part_Key`***、`Vehicle`<br />3. ***`Info`***、`其他Specifications`<br />4. ***`Info`***、`Kit_序号`、`Kit_Quantity`、`Kit_Note`、`Kit_Manufacturer`、`Kit_Part_Number`、`$_Kit_Vehcile`、`$_Kit_Alternate_OE_Part_Numbers`、`$_Kit_Pic`、***`Kit_Info`***、`$_Kit_Src`、`Kit_Type_Code`、`Kit_Part_Key`、***`Kit_JOIN`***<br />5. ***`Kit_JOIN`***、`Kit_Vehicle`<br />6. ***`Kit_Info`***、`Kit_Alternate_OE_Part_Numbers`、`Kit_Src`|requests|
  |02. [Dorman](https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&parttype=Fuel%2520Filler%2520Neck&start=0&num=100)|`100 records per page`|***`Url`***、`No.`|1. `$_序号`、`$_Part_Number`、`Type`、`Description`、`Application_Summary`、`$_Vehicle`、`OE`、`$_Pic`、***`Url`***、***`Vehicle_Url`***、`Src`、`其他Specifications`<br />2. ***`Vehicle_Url`***、`Vehicle`|requests|
  |03. [eBay](https://www.ebay.com/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=zamo-zuan&store_cat=0&store_name=zamozuan&_oac=1&_nkw=motor%20mount)|1. `Sort` -> `Price + Shipping: highest first`<br />2. `Items per page` -> `240`<br /><br />价格分批筛选、_ul=US、_sop=16、_ipg=240、_stpos=91710、orig_cvip=true|***`Item_Number`***、`No.`|`$_序号`、***`Item_Number`***、`Title`、`Price`、`Sold`、`Vehicle`、`$_Pic`、`Url`、`Src`、`其他ItemSpecifics`|requests|
  |04. [Cardone](https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/?limit=96&sort=alphaasc)|1. `Show` -> `96`<br />2. `Sort By:` -> `A to Z`|`Menu`、***`Part_Number`***、`Url`、`Application_Summary`|`$_序号`、`Part_Type`、***`Part_Number`***、`Title`、`Application_Summary`、`Vehicle`、`OE`、`$_Pic`、`$_Url`、`Src`、`其他General`、`其他Technical`|requests + Tomcat|
  |05. [Standard](https://www.standardbrand.com/en/ecatalog?part=Accelerator%20Pedal%20Sensor%20(APS)&type=p)|1. 在官网找出[`iframe`](https://ecatalog.smpcorp.com/V2/STD/#/partsearch/searchText/Accelerator%20Pedal%20Sensor%20(APS)?type=p)：`id="eCatFrame"`，设置`View 96`、`Part  (A-Z)`<br />2. 在`iframe`找出[`目录api`](https://ecatalog.smpcorp.com/V2/STD/api/part/partsearch?filterType=n&searchType=p&imageSize=80&limit=1&sort=3&catFilter=-All-&yearFilter=-All-&makeFilter=-All-&modelFilter=-All-&engineFilter=-All-&attrCodeFilter=-All-&attrValueFilter=-All-&plkEngineMakeFilter=-All-&plkEngineModelFilter=-All-&plkEngineDispFilter=-All-&filter=Accelerator%20Pedal%20Sensor%20(APS)&start=0)：`https://ecatalog.smpcorp.com/V2/STD/api/part/partsearch?filterType=n&searchType=p&imageSize=80&limit=1&sort=3&catFilter=-All-&yearFilter=-All-&makeFilter=-All-&modelFilter=-All-&engineFilter=-All-&attrCodeFilter=-All-&attrValueFilter=-All-&plkEngineMakeFilter=-All-&plkEngineModelFilter=-All-&plkEngineDispFilter=-All-&filter=` + `Filter` + `&start=` + `Start`<br />3. 在详情页找出[`详情api`](https://ecatalog.smpcorp.com/V2/STD/api/part/partselect?func=PART&vid=&part=APK100)：`https://ecatalog.smpcorp.com/V2/STD/api/part/partselect?func=PART&vid=&part=` + `Part_Number`<br />4. 在详情页找出[`图片api`](https://ecatalog.smpcorp.com/V2/STD/api/image/getallimages?zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960&partNum=APK100&brand=STD)：`https://ecatalog.smpcorp.com/V2/STD/api/image/getallimages?zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960&partNum=` + `Part_Number` + `&brand=` + `Brand`|***`Part_Number`***、`No.`|1. `$_序号`、***`Part_Number`***、`Part_Type`、`Part_Type_Long`、`Brand`、`Pop`、`Per_Car`、`Vehicle`、`$_Pic`、`Url`、`$_Src`、`其他partSpecs`<br />2. ***`Part_Number`***、`Src`|requests|
  |06. [CARiD](https://www.carid.com/search/NGK+Laser+Iridium+Spark+Plugs/code-ccb8ce4eee843e4eb433d7a9a8931e0d/queryId-420738fe115bb7ad7af949d2688d7e1a/?redirect=1/sort-price-desc)|`Sort by` -> `Price High to Low`|***`Url`***|***`Url`***、`Title`、`mpn`、`Brand`、`Part_Number`、`UPC`、`Vehicle`、`Src`、`其他Specifications`|Selenium|
  |07. [Summit](https://www.summitracing.com/search?PageSize=100&SortBy=SKU&SortOrder=Ascending&keyword=LS%20Oil%20Pan)|1. `Records Per Page` -> `100 Records Per Page`<br />2. `Sort By` -> `Part Number (a-z)`|`Part_Number`、`Title`、`Description`、***`Url`***|***`Url`***、`Price`、`Src`、`其他Overview`|Selenium|
  |08. [SpectraPremium](https://ecat.spectrapremium.com/en/parts?line=oil_pans&year=&make=&model=&submodel=&universal=0&hide-exclusives-canadian-market=0&sort=part-number&limit=50)|1. `Sort by part #`<br />2. `Number of results` -> `50`|`Menu`、***`Url`***、`Type`|1. `$_序号`、`Part_Number`、`$_Type`、`$_Vehicle`、***`Url`***、`Src`、`其他Part_Specifications`<br />2. ***`Url`***、`Vehicle`|requests|
  |09. [Denniskirk](https://www.denniskirk.com/atv/cv-axle/brandasc.srt/100.ipp)|1. `Results per Page` -> `100`<br />2. `Sort by` -> `Brand: A-Z`|`Title`、`Brand`、`Price`、***`Url`***|***`Url`***、`OE`、`Vehicle`、`Src`、`其他Specifications`|Tomcat|
  |10. [FourSeasons](https://www.4s.com/en/ecatalog?part=blower&type=p&search=s)|1. 在官网找出[`iframe`](https://ecatalog.smpcorp.com/v2/fs/#/partsearch/searchText/blower?type=p&search=s)：`title="eCatFrame"`，设置`View 96`、`Part  (A-Z)`<br />2. 在详情页找出[`详情api`](https://ecatalog.smpcorp.com/v2/fs/api/part/partselect?part=35001&func=PART&vid=)：`https://ecatalog.smpcorp.com/v2/fs/api/part/partselect?part=` + `Part_Number` + `&func=PART`<br />4. 在详情页找出[`图片api`](https://ecatalog.smpcorp.com/v2/fs/api/image/getallimages?partNum=35001&brand=FS&zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960)：`https://ecatalog.smpcorp.com/v2/fs/api/image/getallimages?partNum=` + `Part_Number` + `&brand=` + `Brand` + `&zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960`|***`Part_Number`***、`Url`|***`Part_Number`***、`POP`、`Per_Car`、`Part_Type`、`Vehicle`、`Src`、`其他partSpecs`|requests|
  |11. [Amazon](https://www.amazon.com/stores/page/0195C224-966C-45B3-8971-DF02D7217AEC/search?ingress=2&visitId=65dccac2-1687-4d2f-962e-024be8560dcb&ref_=ast_bln&terms=blower)|`Sort by:` -> `Price: High to Low`|***`Url`***、`No.`|1. `$_序号`、***`ASIN`***、`Title`、`Price`、`About`、`$_Pic`、`Url`、`Src`、`其他productDetails`<br />2. ***`ASIN`***、`标识`、`PASIN`、`品牌`、`品牌链接`、`大类BSR`、`BSR增长数`、`BSR增长率`、`父体月销量`、`父体月销量增长率`、`月销售额`、`月销售额增长率`、`价格`、`Q&A数`、`毛利率`、`FBA运费`、`评分数`、`月度留评率`、`评分`、`月内新增评分数`、`上架时间_1`、`上架时间_2`、`配送方式`、`类目路径`、`中文类目名`、`小类BSR`、`小类目`、`小类目链接`、`重量_1`、`重量_2`、`体积_1`、`体积_2`、`LQS`、`变体数`、`SKU`、`卖家数`、`BuyBox卖家`、`BuyBox卖家链接`|Tomcat|
  |12. [AutoteileDirekt](https://www.autoteiledirekt.de/suche.html?keyword=Radlagersatz%20SKF&brand%5B0%5D=50&pg=122)||***`Url`***、`No.`|1. `$_序号`、`Title`、`Subtitle`、`Price`、`Kit`、`Vehicle`、`OE`、`$_Pic`、***`Url`***、`Src`、`其他Desc`、`其他TecDoc`<br />2. `Pic`|Tomcat|
  |13. [1AAuto](https://www.1aauto.com/search?q=brake+calipers)|`A-Z`|`Title`、***`Url`***、`Brand`|1. ***`Url`***、***`vehicle_url`***、`Src`<br />2. ***`vehicle_url`***、`OE`、`Vehicle`|requests|
  |14. [Rotomaster](https://rotomaster.com/search.php?search_query=Turbocharger&section=product&_bc_fsnf=1&Part+Type=Turbocharger)|1. `VIEW AS` -> `3`<br />2. `SHOW` -> `30 items per page`<br />3. `SORT BY` -> `A to Z`|***`Url`***|`Title`、`Price`、***`Url`***、`Src`|Selenium|
  |15. [TurbochargerPros](https://www.turbochargerpros.com/search_result.asp?w=garrett#/filter:brand:Garrett)||***`Url`***、`No.`|`$_序号`、`Title`、`Vehicle`、`$_Pic`、***`Url`***、`Src`、`其他Specifications`|requests|
  |16. [ATPAutoteile](https://www.atp-autoteile.de/de/search/n-243/o-1/b-1-592/bremsbelaege-bestprice-atec)|`Sortieren nach` -> `Preis absteigend`|`Menu`、***`Url`***、`Kit`|`$_序号`、`Title`、`OE`、`$_Kit`、`$_Pic`、***`Url`***、`Src`、`其他No.`|requests|
  |17. [Mevotech](https://www.mevotech.com/part/CMK100003)|从`RockAuto`爬下来`Part_Number`，再去`Mevotech`官网获取`Vehicle`||`Part_Number`、`Vehicle`|requests|
  |18. [Cub](https://www.cubelec.com.tw/switch-parts-en.php?ID=2)|账号：CUBTPMS<br />密码：CUBTPMS|`No.`、`Part_Number`、`Name`、`OE`、`Vehicle`、`Pic`、`Date`、`Url`、`Src`|||
  |19. [Auveco](https://www.auveco.com/polypropylene-compartment-box-6800-series?category=1c9e8880-f81b-41ec-ad11-38f3a6d3488f)|1. `Display Type` -> `2`<br />2. `Results per Page` -> `72`<br />3. `Sort by` -> `Item Number`|***`Url`***、`No.`|`$_序号`、`Title`、`Item_Number`、`UPC`、`Kit`、`$_Pic`、***`Url`***、`Src`、`其他Attribute`、`其他Specifications`|requests|
  |20. [MotoRAD](https://motorad.com/products/?categories=thermostat%2Ccoolant-housing&subcategories=thermostat-assembly-failsafe%2Cthermostat-assembly%2Cpower-sport-thermostat%2Cfail-safe-thermostat-w-housing%2Cstandard-failsafe%2Cegr-thermostat%2Chd-thermostat-w-housing%2Cstandard-naked-thermostat%2Chd-thermostat%2Cultrastat%2Cthermostat-kit-failsafe%2Cthermostat-w-housing%2Cthermostat%2Cthermostat-kit%2Cwater-pump-thermostat-assembly%2Chigh-flow-thermostat%2Cthermostat-kit-ultrastat%2Ceconomy-thermostat%2Cwater-outlet-coolant-housing)||`Page`、***`Part_Number`***|1. `$_序号`、***`Part_Number`***、`Category`、`Type`、`Description`、`$_Vehicle`、`OE`、`$_Pic`、***`Url`***、`Src`、`其他Attribute`、`其他Specifications`<br />2. ***`Part_Number`***、`Vehicle`|requests|
  |21. [SpectrePerformance](https://www.spectreperformance.com/cross-reference/stp)||1. `No.`、***`Url_1`***<br />2. ***`Url_1`***、***`Url`***、`$_No.`|`$_序号`、`Part_Number`、`Title`、`Information`、`Vehicle`、`分列OE`、`$_Pic`、***`Url`***、`Src`、`其他Specifications`|Tomcat|
  |22. [CentricParts](https://www.centricparts.com/partFinder/page/index/?p=1&product_list_limit=25&product_list_order=part_number)|1. `Sort By` -> `Part Number`<br />2. `Show` -> `25 per page`|`Menu`、***`Url`***、***`Sku`***、`Src`|`$_序号`、***`Sku`***、`Status`、`Title`、`Summary`、`Vehicle`、`$_Pic`、***`Url`***、`$_Src`、`其他Attribute`、`其他Details`|requests|
  |23. [KaKaPart](http://www.kakapart.com/)|从`CentricParts`爬下来`Sku`，再去`KaKaPart`官网获取`分列OE`||`Sku`、`分列OE`|requests|
  |24. [Agility](https://apdi.autocaredata.com/)|从`RockAuto`爬下来`Part_Number`，再去`Agility`官网获取`Vehicle`和`Src`||`Part_Number`、`Vehicle`|requests|

## 4. 附录
1. [selenium常用配置](https://blog.csdn.net/m0_56676945/article/details/129215165)
2. [selenium配置大全](https://peter.sh/experiments/chromium-command-line-switches)
3. [selenium等待机制](https://blog.csdn.net/biggbang/article/details/121511531)
4. [eBay网站开发者API](https://developer.ebay.com/devzone/shopping/docs/CallRef/GetSingleItem.html)
5. [正则表达式测试网站](https://www.whatsmyip.org/regular-expression-tester)
6. [JSON解析](https://www.json.cn)
7. [Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)