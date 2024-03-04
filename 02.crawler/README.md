# 爬虫任务 - 2024.02.19（临时指北）
## 1. 基础工具
### 1.1. Python
#### 1.1.1. 简介
- [Python](https://python.org)
- [Python教程_1](https://www.runoob.com/python3/python3-tutorial.html)
- [Python教程_2](https://www.liaoxuefeng.com/wiki/1016959663602400/1016959856222624)
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
- [参考](https://www.runoob.com/jsp/eclipse-jsp.html)

## 2. 知识补充
- [Regular Expression（正则表达式）](https://github.com/ziishaned/learn-regex)
- [XPath（XML Path Language）](https://www.runoob.com/xpath/xpath-tutorial.html)
- [协程教程_1](https://blog.csdn.net/qq_45476428/article/details/108782593)
- [协程教程_2](https://blog.csdn.net/freeking101/article/details/53097420)
- [Postman官网](https://www.postman.com/downloads)
- [Postman教程](https://www.bilibili.com/video/BV1hP4y177gS)

## 3. 爬虫入门
### 3.1. 目录获取
1. JavaScript：`Array` -> `JSON (JavaScript Object Notation)` -> `Blob (Binary Large Object)`
2. Python：`文本` -> `JSON` -> `DataFrame`

### 3.2. 内容爬取
- [b站教程](https://www.bilibili.com/video/BV1bL4y1V7q1)
- [参考书籍](https://www.ituring.com.cn/book/2847)

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

#### 3.5.3. ~~Referer~~
- |爬取方法|代码示例|
  |:-:|:-|
  |requests|`headers = {'Referer': 'Referer'}`<br /><br />`requests.get(url, headers=headers)`|

#### 3.5.4. ~~Cookie~~

#### 3.5.5. 网络代理
- [快代理](https://www.kuaidaili.com/) -> 隧道代理
- |爬取方法|代码示例|
  |:-:|:-|
  |requests|`proxies = {'http': 'http://username:password@tunnelhost:tunnelport',`<br />&emsp;&emsp;&emsp;&emsp;&emsp;`'https': 'http://username:password@tunnelhost:tunnelport'}`<br /><br />`requests.get(url, proxies=proxies)`|
  |selenium|`from selenium.webdriver import ChromeOptions`<br /><br />`option = ChromeOptions()`<br />`option.add_argument('--proxy-server=http://tunnelhost:tunnelport')`<br /><br />`from selenium.webdriver import Chrome`<br />`from selenium.webdriver.chrome.service import Service`<br /><br />`browser = Chrome(service=Service('chromedriver'), options=option)`|
- |发票类型|发票抬头|纳税人识别号|
  |:-:|:-:|:-:|
  |企业增值税普通发票/电子普通发票|福建扬腾创新信息科技有限公司|91350100MA338EEKXY|

### 3.6. 常爬网站
- |网址|爬前操作|目录字段|内容字段||
  |:-|:-|:-|:-|:-:|
  |01. [RockAuto](https://www.rockauto.com/en/parts/melling,timing+chain+&+component+kit,5756)||`序号`、`Manufacturer`、`Category`、`Type`、`Part_Number`、`$_Vehcile`、`$_OE`、`$_Note_1`、`$_Note_2`、`$_Pic`、`$_Url`、`$_Info`、`$_Src`、`$_Part_Type`、`$_Part_Key`、***`JOIN_MPN`***|1. ***`JOIN_MPN`***、`OE`、`Note_1`、`Note_2`、`$_Pic`、`Url`、***`Info`***、`Src`、`Part_Type`、`Part_Key`<br />2. ***`JOIN_MPN`***、`Vehicle`<br />3. ***`Info`***、`其他Specifications`<br />4. ***`Info`***、`Kit_序号`、`Kit_Manufacturer`、`Kit_Note`、`Kit_Part_Number`、`$_Kit_Vehcile`、`$_Kit_OE`、`$_Kit_Note_1`、`$_Kit_Note_2`、`$_Kit_Pic`、`$_Kit_Url`、`$_Kit_Info`、`$_Kit_Src`、`$_Kit_Part_Type`、`$_Kit_Part_Key`、***`Kit_JOIN_MPN`***<br />5. ***`Kit_JOIN_MPN`***、`Kit_OE`、`Kit_Note_1`、`Kit_Note_2`、`$_Kit_Pic`、`Kit_Url`、***`Kit_Info`***、`Kit_Src`、`Kit_Part_Type`、`Kit_Part_Key`<br />6. ***`Kit_JOIN_MPN`***、`Kit_Vehicle`<br />7. ***`Kit_Info`***、`Kit_其他Specifications`|requests|
  |02. [Dorman](https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&parttype=Fuel%2520Filler%2520Neck&start=0&num=100)|`100 records per page`|<b><font color=red>1. Menu</font></b><sup>【Tampermonkey】</sup><br /><font color=blue>输入：</font>`Param_Amount`<sub>[参数]</sub><br /><font color=blue>输出：</font>`Page`、`No.`、`Url`|<b><font color=red>2. Part</font></b><sup>【requests】</sup><br /><font color=blue>输入：</font><u>`No.`</u><sub>[Menu]</sub>、<u>`Url`</u><sub>[Menu]</sub><br /><font color=blue>输出：</font><u>`序号`</u>、`Part_Number`、`Type`、`Description`、`Application_Summary`、`Vehicle_1`<sup>(n)</sup>、`Vehicle_2`<sup>(n)</sup>、`OE`、`Pic`<sup>(n)</sup>、<u>`Url`</u>、`Vehicle_Url`、`Src`、`其他Specifications`<br /><br /><b><font color=red>3. Vehicle</font></b><sup>【requests】</sup><br/><font color=blue>输入：</font><u>`Vehicle_Url`</u><sub>[Part]</sub><br /><font color=blue>输出：</font><u>`Vehicle_Url`</u>、`Vehicle_1`<sup>(y)</sup>、`Vehicle_2`<sup>(y)</sup>|yes|
  |03. [eBay](https://www.ebay.com/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=zamo-zuan&store_cat=0&store_name=zamozuan&_oac=1&_nkw=motor%20mount)|1. `Sort` -> `Price + Shipping: highest first`<br />2. `Items per page` -> `240`<br /><br />1. 在目录找出[`详情api`](https://www.ebay.com/itm/304981523908?_ul=US&_stpos=91710&orig_cvip=true)：`https://www.ebay.com/itm/` + `Item_Number` + `?_ul=US&_stpos=91710&orig_cvip=true`<br />2. 在详情页找出[`车型api`](https://www.ebay.com/g/api/finders?module_groups=PART_FINDER&referrer=VIEWITEM&offset=0&module=COMPATIBILITY_TABLE)：`https://www.ebay.com/g/api/finders` + `?module_groups=PART_FINDER&referrer=VIEWITEM&offset=` + `Param_Offset` + `&module=COMPATIBILITY_TABLE`<br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Payload`：`{"scopedContext":{"catalogDetails":{"itemId":"` + `Item_Number` + `","categoryId":"` + `Category_Id` + `","marketplaceId":"` + `Market_Id` + `"}}}`<br /><br />`US参数_1` -> `https://www.ebay.com/itm/`、`?_ul=US&_stpos=91710&orig_cvip=true`<br />`DE参数_1` -> `https://www.ebay.de/itm/`、`?_ul=DE&_stpos=10115&orig_cvip=true`<br />`AU参数_1` -> `.`、`?_ul=AU&_stpos=2019&orig_cvip=true`<br /><br />`US参数_2` -> `https://www.ebay.com/g/api/finders`<br />`DE参数_2` -> `https://www.ebay.de/g/api/finders`<br />`AU参数_2` -> `.`|<b><font color=red>1. Menu</font></b><sup>【Tampermonkey】</sup><br /><font color=blue>输出：</font>`Page`、`No.`、`Item_Number`|<b><font color=red>2. Item</font></b><sup>【requests】</sup><br /><font color=blue>输入：</font>`Param_Market`<sub>[参数]</sub>、<u>`No.`</u><sub>[Menu]</sub>、<u>`Item_Number`</u><sub>[Menu]</sub><br /><font color=blue>输出：</font><u>`序号`</u>、<u>`Item_Number`</u>、`Title`、`Subtitle`、`Price`、`Available`、`Sold`、`Vehicle_1`<sup>(n)</sup>、`Vehicle_2`<sup>(n)</sup>、`Pic`<sup>(n)</sup>、`Url`、`Description_Url`、`Src`、`Vehicle_Page`、`Category_Id`、`Market_Id`、`Country`、`Language`、`Locale`、`其他ItemSpecifics`<br /><br /><b><font color=red>3. Vehicle</font></b><sup>【requests】</sup><br /><font color=blue>输入：</font>`Param_Market`<sub>[参数]</sub>、<u>`Item_Number`</u><sub>[Item]</sub>、`Vehicle_Page`<sub>[Item]</sub>、`Category_Id`<sub>[Item]</sub>、`Market_Id`<sub>[Item]</sub><br /><font color=blue>输出：</font><u>`Item_Number`</u>、`Vehicle_1`<sup>(y)</sup>、`Vehicle_2`<sup>(y)</sup><br /><br /><b><font color=red>4. Description</font></b><sup>【requests】</sup><br /><font color=blue>输入：</font><u>`Description_Url`</u><sub>[Item]</sub><br /><font color=blue>输出：</font><u>`Description_Url`</u>、`卖家描述页信息`|yes|
  |04. [Cardone](https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/?limit=96&sort=alphaasc&page=1)|1. `Show` -> `96`<br />2. `Sort By:` -> `A to Z`<br /><br />1. 在目录找出[`目录api`](https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/?limit=96&sort=alphaasc&page=1)：`https://www.cardone.com/` + `Type` + `/?limit=96&sort=alphaasc&page=` + `Page`<br />2. 在详情页找出[`车型api`](https://productdesk-api.cellacore.net/legacy/cardone/Vehicle/Recommendation/?q=(productSKU.keyword:40-1000)&size=5000&useCache=true&auth=mXWIhUuYvk3hklMcdwLi4lwVd3s6VASw)：`https://productdesk-api.cellacore.net/legacy/cardone/Vehicle/Recommendation/?q=(productSKU.keyword:` + `Part_Number` + `)&size=5000&useCache=true&auth=mXWIhUuYvk3hklMcdwLi4lwVd3s6VASw`<br />3. 在详情页找出[`OE api`](https://productdesk-api.cellacore.net/legacy/cardone/FinishedGood/?q=productDeskItemNumber.keyword:40-1000&size=1&useCache=true&auth=mXWIhUuYvk3hklMcdwLi4lwVd3s6VASw)：`https://productdesk-api.cellacore.net/legacy/cardone/FinishedGood/?q=productDeskItemNumber.keyword:` + `Part_Number` + `&size=1&useCache=true&auth=mXWIhUuYvk3hklMcdwLi4lwVd3s6VASw`<br /><br /><br />|<b><font color=blue>1. Menu</font></b><br />`Page`、<b><font color=red>`No.`</font></b>、<b><font color=red>`Url`</font></b>|<b><font color=blue>2. Part</font></b><br /><b><font color=red>`序号`</font></b>、`Part_Type`、<b><font color=red>`Part_Number`</font></b>、`Brand`、`Title`、`Application_Summary`、<font color=orange>`Vehicle_1`</font>、<font color=orange>`Vehicle_2`</font>、<font color=orange>`OE`</font>、<font color=orange>`Pic`</font>、`Url`、`Src`、`其他Specifications`<br /><b><font color=blue><br />3. Vehicle</font></b><br /><b><font color=red>`No.`</font></b>、<b><font color=purple>`Vehicle_1`</font></b>、<b><font color=purple>`Vehicle_2`</font></b><br /><b><font color=blue><br />4. OE</font></b><br /><b><font color=red>`No.`</font></b>、<b><font color=purple>`OE`</font></b>|JavaScript|
  |05. [Standard](https://www.standardbrand.com/en/ecatalog?part=Accelerator%20Pedal%20Sensor%20(APS)&type=p)|1. 在官网找出[`iframe`](https://ecatalog.smpcorp.com/V2/STD/#/partsearch/searchText/Accelerator%20Pedal%20Sensor%20(APS)?type=p)：`id="eCatFrame"`，设置`View 96`、`Part  (A-Z)`<br />2. 在`iframe`找出[`目录api`](https://ecatalog.smpcorp.com/V2/STD/api/part/partsearch?filterType=n&searchType=p&imageSize=80&limit=1&sort=3&catFilter=-All-&yearFilter=-All-&makeFilter=-All-&modelFilter=-All-&engineFilter=-All-&attrCodeFilter=-All-&attrValueFilter=-All-&plkEngineMakeFilter=-All-&plkEngineModelFilter=-All-&plkEngineDispFilter=-All-&filter=Accelerator%20Pedal%20Sensor%20(APS)&start=0)：`https://ecatalog.smpcorp.com/V2/STD/api/part/partsearch?filterType=n&searchType=p&imageSize=80&limit=1&sort=3&catFilter=-All-&yearFilter=-All-&makeFilter=-All-&modelFilter=-All-&engineFilter=-All-&attrCodeFilter=-All-&attrValueFilter=-All-&plkEngineMakeFilter=-All-&plkEngineModelFilter=-All-&plkEngineDispFilter=-All-&filter=` + `Filter` + `&start=` + `Start`<br />3. 在详情页找出[`详情api`](https://ecatalog.smpcorp.com/V2/STD/api/part/partselect?func=PART&vid=&part=APK100)：`https://ecatalog.smpcorp.com/V2/STD/api/part/partselect?func=PART&vid=&part=` + `Part_Number`<br />4. 在详情页找出[`图片api`](https://ecatalog.smpcorp.com/V2/STD/api/image/getallimages?zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960&partNum=APK100&brand=STD)：`https://ecatalog.smpcorp.com/V2/STD/api/image/getallimages?zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960&partNum=` + `Part_Number` + `&brand=` + `Brand`|***`Part_Number`***、`No.`|1. `$_序号`、***`Part_Number`***、`Part_Type`、`Part_Type_Long`、`Brand`、`Pop`、`Per_Car`、`Vehicle`、`$_Pic`、`Url`、`$_Src`、`其他partSpecs`<br />2. ***`Part_Number`***、`Src`|requests|
  |06. [CARiD](https://www.carid.com/search/NGK+Laser+Iridium+Spark+Plugs/code-ccb8ce4eee843e4eb433d7a9a8931e0d/queryId-420738fe115bb7ad7af949d2688d7e1a/?redirect=1/sort-price-desc)|`Sort by` -> `Price High to Low`|`Menu`、***`Url`***、`Sku`、`Title`、`Src`|`$_序号`、`$_Sku`、`$_Title`、`Vehicle`、`$_Pic`、***`Url`***、`$_Src`、`其他Descriptions`、`其他Specifications`|requests|
  |07. [Summit](https://www.summitracing.com/search?PageSize=100&SortBy=SKU&SortOrder=Ascending&keyword=LS%20Oil%20Pan)|1. `Records Per Page` -> `100 Records Per Page`<br />2. `Sort By` -> `Part Number (a-z)`|`Menu`、***`Url`***|`$_序号`、`Part_Number`、`Title`、`Description`、`$_Pic`、***`Url`***、`Src`、`其他Overview`|selenium|
  |08. [SpectraPremium](https://ecat.spectrapremium.com/en/parts?line=oil_pans&year=&make=&model=&submodel=&universal=0&hide-exclusives-canadian-market=0&sort=part-number&limit=50)|1. `Sort by part #`<br />2. `Number of results` -> `50`|`Menu`、***`Url`***、`Type`|1. `$_序号`、`Part_Number`、`$_Type`、`$_Vehicle`、***`Url`***、`Src`、`其他Part_Specifications`<br />2. ***`Url`***、`Vehicle`|requests|
  |09. [Denniskirk](https://www.denniskirk.com/atv/cv-axle/brandasc.srt/100.ipp)|1. `Results per Page` -> `100`<br />2. `Sort by` -> `Brand: A-Z`|`Title`、`Brand`、`Price`、***`Url`***|***`Url`***、`OE`、`Vehicle`、`Src`、`其他Specifications`|Tomcat|
  |10. [FourSeasons](https://www.4s.com/en/ecatalog?part=blower&type=p&search=s)|1. 在官网找出[`iframe`](https://ecatalog.smpcorp.com/v2/fs/#/partsearch/searchText/blower?type=p&search=s)：`title="eCatFrame"`，设置`View 96`、`Part  (A-Z)`<br />2. 在`iframe`找出[`目录api`](https://ecatalog.smpcorp.com/v2/fs/api/part/partsearch?filter=blower&filterType=s&searchType=p&imageSize=80&start=0&limit=1&sort=3&catFilter=-All-&yearFilter=-All-&makeFilter=-All-&modelFilter=-All-&engineFilter=-All-&attrCodeFilter=-All-&attrValueFilter=-All-&plkEngineMakeFilter=-All-&plkEngineModelFilter=-All-&plkEngineDispFilter=-All-)：`https://ecatalog.smpcorp.com/v2/fs/api/part/partsearch?filter=` + `Filter` + `&filterType=s&searchType=p&imageSize=80&start=` + `Start` + `&limit=1&sort=3&catFilter=-All-&yearFilter=-All-&makeFilter=-All-&modelFilter=-All-&engineFilter=-All-&attrCodeFilter=-All-&attrValueFilter=-All-&plkEngineMakeFilter=-All-&plkEngineModelFilter=-All-&plkEngineDispFilter=-All-`<br />3. 在详情页找出[`详情api`](https://ecatalog.smpcorp.com/v2/fs/api/part/partselect?part=35001&func=PART&vid=)：`https://ecatalog.smpcorp.com/v2/fs/api/part/partselect?part=` + `Part` + `&func=PART&vid=`<br />4. 在详情页找出[`图片api`](https://ecatalog.smpcorp.com/v2/fs/api/image/getallimages?partNum=35001&brand=FS&zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960)：`https://ecatalog.smpcorp.com/v2/fs/api/image/getallimages?partNum=` + `Part_Number` + `&brand=` + `Brand` + `&zoomFactor_sm=75&zoomFactor_md=360&zoomFactor_bg=960`|<b><font color=blue>1. Menu</font></b><br /><b><font color=red>`Part_Number`</font></b>、<b><font color=red>`No.`</font></b>|<b><font color=blue>2. Part</font></b><br /><b><font color=red>`序号`</font></b>、<b><font color=red>`Part_Number`</font></b>、`Part_Type`、`Per_Car`、<b><font color=red>`Brand`</font></b>、`POP`、`Vehicle`、<font color=orange>`Pic`</font>、`Url`、<font color=orange>`Src`</font>、`其他specifications`<br /><br /><b><font color=blue>3. Src</font></b><br /><b><font color=red>`Part_Number`</font></b>、<b><font color=purple>`Src`</font></b>、<b><font color=red>`Brand`</font></b>|requests|
  |11. [Amazon](https://www.amazon.com/stores/page/0195C224-966C-45B3-8971-DF02D7217AEC/search?ingress=2&visitId=65dccac2-1687-4d2f-962e-024be8560dcb&ref_=ast_bln&terms=blower)|`Sort by:` -> `Price: High to Low`|***`Url`***、`No.`|1. `$_序号`、***`ASIN`***、`Title`、`Price`、`About`、`$_Pic`、`Url`、`Src`、`其他productDetails`<br />2. ***`ASIN`***、`标识`、`PASIN`、`品牌`、`品牌链接`、`大类BSR`、`BSR增长数`、`BSR增长率`、`父体月销量`、`父体月销量增长率`、`月销售额`、`月销售额增长率`、`价格`、`Q&A数`、`毛利率`、`FBA运费`、`评分数`、`月度留评率`、`评分`、`月内新增评分数`、`上架时间_1`、`上架时间_2`、`配送方式`、`类目路径`、`中文类目名`、`小类BSR`、`小类目`、`小类目链接`、`重量_1`、`重量_2`、`体积_1`、`体积_2`、`LQS`、`变体数`、`SKU`、`卖家数`、`BuyBox卖家`、`BuyBox卖家链接`|Tomcat|
  |12. [AutoteileDirekt](https://www.autoteiledirekt.de/suche.html?keyword=Radlagersatz%20SKF&brand%5B0%5D=50&pg=122)||***`Url`***、`No.`|1. `$_序号`、`Title`、`Subtitle`、`Price`、`Kit`、`Vehicle`、`OE`、`$_Pic`、***`Url`***、`Src`、`其他Desc`、`其他TecDoc`<br />2. `Pic`|Tomcat|
  |13. [1AAuto](https://www.1aauto.com/search?q=brake+calipers)|1. `A-Z`<br />2. 在详情页找出[`api`](https://www.1aauto.com/catalog/product/fit?skuId=1169650&pathName=%2Ftoyota-4runner-fj-cruiser-tacoma-front-driver-and-passenger-side-2-piece-brake-caliper-set-trq-cla35380%2Fi%2F1abcs00107)：`https://www.1aauto.com/catalog/product/fit?skuId=` + `Sku_Id` + `&pathName=` + `Path_Name`|`Menu`、***`Url`***|1. `$_序号`、`Title`、`$_Vehicle`、`$_OE`、`$_Pic`、***`Url`***、***`Vehicle_Url`***、`Src`、`其他Details`<br />2. ***`Vehicle_Url`***、`Vehicle`、`OE`|requests|
  |14. [Rotomaster](https://rotomaster.com/search.php?search_query=Turbocharger&section=product&_bc_fsnf=1&Part+Type=Turbocharger)|1. `VIEW AS` -> `3`<br />2. `SHOW` -> `30 items per page`<br />3. `SORT BY` -> `A to Z`|`Menu`、***`Url`***|`$_序号`、`Title`、`$_Pic`、***`Url`***、`Src`、`其他Attribute`、`其他Specifications`|requests|
  |15. [TurbochargerPros](https://www.turbochargerpros.com/search_result.asp?w=garrett#/filter:brand:Garrett)||***`Url`***、`No.`|`$_序号`、`Title`、`Vehicle`、`$_Pic`、***`Url`***、`Src`、`其他Specifications`|requests|
  |16. [ATPAutoteile](https://www.atp-autoteile.de/de/search/n-243/o-1/b-1-592/bremsbelaege-bestprice-atec)|`Sortieren nach` -> `Preis absteigend`<br /><br />1. 在目录找出[`目录api`](https://www.atp-autoteile.de/de/search/n-243/p-1/o-1/b-1-592/bremsbelaege-bestprice-ate)：`https://www.atp-autoteile.de/de/search/n-243/p-` + `Param_P` + `/o-1/b-1-592/bremsbelaege-bestprice-ate`<br />2. 在详情页找出[`Make api`](https://www.atp-autoteile.de/de/product/vehicles/4316658)：`https://www.atp-autoteile.de/de/product/vehicles/` + `Part_Code`<br />3. 在详情页找出[`Model api`](https://www.atp-autoteile.de/de/product/vehicles/4316658/9953)：`https://www.atp-autoteile.de/de/product/vehicles/` + `Part_Code` + `/` + `Make_Code`|<b><font color=red>1. Menu</font></b><br /><font color=blue>输入：</font><u>`Param_P`</u><sub>(参数)</sub><br /><font color=blue>输出：</font><u>`Page`</u>、`No.`、`Url`<sup>(y)</sup>、`Kit`<sup>(y)</sup>|<b><font color=red>2. Part</font></b><br /><font color=blue>输入：</font><u>`No.`</u><sub>(Menu)</sub>、`Url`<sub>(Menu)</sub><br /><font color=blue>输出：</font><u>`序号`</u>、`Sku`、`Title`、`Manufacturer`、`Mpn`、`Price`、`Kit`<sup>(n)</sup>、`Vehicle_1`<sup>(n)</sup>、`Vehicle_2`<sup>(n)</sup>、`OE`、`Pic`<sup>(n)</sup>、`Url`<sup>(n)</sup>、`Src`、`Part_Code`、`Make_Url`<br /><br /><b><font color=red>3. Make</font></b><br /><font color=blue>输入：</font><u>`Part_Code`</u><sub>(Part)</sub>、`Make_Url`<sub>(Part)</sub><br /><font color=blue>输出：</font><u>`Part_Code`</u>、`Make`、`Make_Code`、`Model_Url`<br /><br /><b><font color=red>4. Model</font></b><br /><font color=blue>输入：</font><u>`Part_Code`</u><sub>(Make)</sub>、`Make_Code`<sub>(Make)</sub>、`Model_Url`<sub>(Make)</sub><br /><font color=blue>输出：</font><br /><u>`Part_Code`</u>、`Vehicle_1`<sup>(y)</sup>、`Vehicle_2`<sup>(y)</sup>|JavaScript|
  |17. [Mevotech](https://www.mevotech.com/part/CMK100003)|从`RockAuto`爬下来`Part_Number`，再去`Mevotech`官网获取`Vehicle`||`Part_Number`、`Vehicle`|requests|
  |18. [Cub](https://www.cubelec.com.tw/switch-parts-en.php?ID=2)|账号：CUBTPMS<br />密码：CUBTPMS|`No.`、`Part_Number`、`Name`、`OE`、`Vehicle`、`Pic`、`Date`、`Url`、`Src`|||
  |19. [Auveco](https://www.auveco.com/polypropylene-compartment-box-6800-series?category=1c9e8880-f81b-41ec-ad11-38f3a6d3488f)|1. `Display Type` -> `2`<br />2. `Results per Page` -> `72`<br />3. `Sort by` -> `Item Number`|<b><font color=blue>1. Menu</font></b><br /><b><font color=red>`Url`</font></b>、<b><font color=red>`No.`</font></b>|<b><font color=blue>2. Part</font></b><br /><b><font color=red>`序号`</font></b>、`Item_Number`、`UPC`、`Title`、<font color=orange>`Pic`</font>、<b><font color=red>`Url`</font></b>、`Src`、`其他Attribute`、`其他Specifications`|requests|
  |20. [MotoRAD](https://motorad.com/products/?categories=thermostat%2Ccoolant-housing&subcategories=thermostat-assembly-failsafe%2Cthermostat-assembly%2Cpower-sport-thermostat%2Cfail-safe-thermostat-w-housing%2Cstandard-failsafe%2Cegr-thermostat%2Chd-thermostat-w-housing%2Cstandard-naked-thermostat%2Chd-thermostat%2Cultrastat%2Cthermostat-kit-failsafe%2Cthermostat-w-housing%2Cthermostat%2Cthermostat-kit%2Cwater-pump-thermostat-assembly%2Chigh-flow-thermostat%2Cthermostat-kit-ultrastat%2Ceconomy-thermostat%2Cwater-outlet-coolant-housing)||`Page`、***`Part_Number`***|1. `$_序号`、***`Part_Number`***、`Category`、`Type`、`Description`、`$_Vehicle`、`OE`、`$_Pic`、***`Url`***、`Src`、`其他Attribute`、`其他Specifications`<br />2. ***`Part_Number`***、`Vehicle`|requests|
  |21. [SpectrePerformance](https://www.spectreperformance.com/cross-reference/stp)||1. `No.`、***`Url_1`***<br />2. ***`Url_1`***、***`Url`***、`$_No.`|`$_序号`、`Part_Number`、`Title`、`Information`、`Vehicle`、`分列OE`、`$_Pic`、***`Url`***、`Src`、`其他Specifications`|Tomcat|
  |22. [CentricParts](https://www.centricparts.com/partFinder/page/index/?p=1&product_list_limit=25&product_list_order=part_number)|1. `Sort By` -> `Part Number`<br />2. `Show` -> `25 per page`|<b><font color=blue>1. Menu</font></b><br />`Page`、<b><font color=red>`Url`</font></b>、`No.`、<b><font color=red>`Sku`</font></b>、<b><font color=red>`Src`</font></b>|<b><font color=blue>2. Part</font></b><br /><font color=orange>`序号`</font>、<b><font color=red>`Sku`</font></b>、`Status`、`Title`、`Summary`、`Vehicle`、<font color=orange>`Pic`</font>、<b><font color=red>`Url`</font></b>、<b><font color=red>`Src`</font></b>、`其他Attribute`、`其他Details`|requests|
  |23. [KaKaPart](http://www.kakapart.com/)|从`CentricParts`爬下来<b><font color=red>`Sku`</font></b>，再去`KaKaPart`官网获取`分列OE`||<b><font color=red>`Sku`</font></b>、`分列OE`|requests|
  |24. [Agility](https://apdi.autocaredata.com/)|从`RockAuto`爬下来`Part_Number`，再去`Agility`官网获取`Vehicle`和`Src`||1. `Part_Number`、`Vehicle`<br />2. `Pic`|requests|
  |25. [Gates](https://www.gates.com/gb/en/power-transmission/power-transmission-kits/micro-v-kits.html)|1. 选择特定`Item`，点击[`VIEW ALL PARTS`](https://www.gates.com/gb/en/power-transmission/power-transmission-kits/micro-v-kits.p.7884-000000-000000.html)<br />2. ` Product #`升序<br />3. 点击翻页按钮找出目录[`api`](https://www.gates.com/bin/listing/products/variant?draw=1&columns%5B0%5D%5Bdata%5D=&columns%5B0%5D%5Bname%5D=partnumberauto_en_gb_string&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=&columns%5B1%5D%5Bname%5D=productnumber_en_gb_string&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=name_text_en_gb&columns%5B2%5D%5Bname%5D=name_text_en_gb&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=1&order%5B0%5D%5Bdir%5D=asc&start=0&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&id=7884-000000-000000&lang=en_gb&country=gb&fieldList=code_string%2Cpartnumberauto_en_gb_string%2Cpartnumberind_string%2Cproductnumber_en_gb_string%2Cname_text_en_gb&filters=&_=1708679331820)：`https://www.gates.com/bin/listing/products/variant?draw=`+ `Draw` + `&columns%5B0%5D%5Bdata%5D=&columns%5B0%5D%5Bname%5D=partnumberauto_en_gb_string&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=&columns%5B1%5D%5Bname%5D=productnumber_en_gb_string&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=name_text_en_gb&columns%5B2%5D%5Bname%5D=name_text_en_gb&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=1&order%5B0%5D%5Bdir%5D=asc&start=` + `Start` + `&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&id=` + `Id` + `&lang=en_gb&country=gb&fieldList=code_string%2Cpartnumberauto_en_gb_string%2Cpartnumberind_string%2Cproductnumber_en_gb_string%2Cname_text_en_gb&filters=&_=` + `_`|<b><font color=blue>1. Menu</font></b><br />`Page`、<b><font color=red>`Url`</font></b>、<b><font color=red>`No.`</font></b>|<b><font color=blue>2. Part</font></b><br /><b><font color=red>`序号`</font></b>、<b><font color=red>`Url`</font></b>、`Kit_序号`、`其他Specifications`、`其他Kit信息`|requests|
  |26. [Schaeffler](https://aftermarket.schaeffler.com/en/search/results?q=flywheel&tab=0&prodPage=0&prodPageSize=120)|`Items per page` -> `120`|<b><font color=blue>1. Menu</font></b><br /><b><font color=red>`Url`</font></b>、`No.`|<b><font color=blue>2. Part</font></b><br /><font color=orange>`序号`</font>、`Title`、`Subtitle`、`Vehicle_1`、`Vehicle_2`、`OE`、<font color=orange>`Pic`</font>、<b><font color=red>`Url`</font></b>、`Src`、`其他Details`、`其他Attributes`|requests|

## 4. 附录
1. [Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
2. [JSON解析](https://www.json.cn)
3. [selenium等待机制](https://blog.csdn.net/biggbang/article/details/121511531)
4. [正则表达式测试网站](https://www.whatsmyip.org/regular-expression-tester)
5. [selenium常用配置](https://blog.csdn.net/m0_56676945/article/details/129215165)
6. [selenium配置大全](https://peter.sh/experiments/chromium-command-line-switches)
7. [~~eBay网站开发者API~~](https://developer.ebay.com/devzone/shopping/docs/CallRef/GetSingleItem.html)
