# 目录

- [1. 《FAQ》](#1-faq)
- [2. 《爬虫临时指北》](#2-爬虫临时指北)

- - -

- - -

## 1. 《FAQ》

### 1. 这一坨文件是什么鬼？

- 以[Dorman](./02.Dorman)网站为例，文件结构如下：
- ```markdown
  - `02.Dorman/`
    - `README.md`
    - `file/`
      - `input.xlsx`
    - `1_1.Page_R-Lennon20241016.ipynb`
    - `1_2.Page_R-Lennon20241016.ipynb`
    - `2_1.Url_R-Lennon20241016.ipynb`
    - `2_2.Url_R-Lennon20241016.ipynb`
    - `3_1.Part_R-Lennon20241016.ipynb`
    - `3_2.Part_R-Lennon20241016.ipynb`
    - `4_1.Vehicle_R-Lennon20241016.ipynb`
    - `4_2.Vehicle_R-Lennon20241016.ipynb`
    - `5.Collate-Lennon20241015.ipynb`
    
  ```
- `README.md`是该网站的爬虫说明：`1. About`列出了两个爬虫示例，`2. Procedure`注明了爬虫代码的运行流程。
- `file`文件夹下的`input.xlsx`是爬虫所需的输入链接（即每次都应根据实际需求进行修改）。其余未列出的文件是爬虫的中间过程及最终结果，呈现样式可作为参考。

### 2. `1_1`、`1_2`、`2_1`、`2_2`……咋回事？

- 按照爬虫代码的运行流程，应先运行`1_x`，然后再运行`2_x`，以此类推。
- `x_1`是只拿一条数据进行尝试，`x_2`是使用了多协程技术的“真·爬虫”，各个环节都请务必先确保`x_1`能够正常工作然后再运行`x_2`。

### 3. 崩溃、报错、不知道发生了啥，代码是不是有问题啊？

- 网站不是一成不变的，反爬手段也可能变动，出现问题很正常。请按以下流程进行排查：
- 1. 检查`Python`环境。代码未对`Anaconda`等发行版本做适配、在非`Jupyter Notebook`的`IDE`中也存在不兼容的可能，运行环境务必与[《Python环境搭建》](../01.新人培训/README.md#2-python环境搭建)对齐。
  2. 核对代码是否为最新版，为确保工作效率，不对旧版代码提供任何技术支持。
  3. 如果在完成上述排查后依然存在问题，可联系Lennon进行技术支持。

### 4. 哐哐更新，必须每次都使用最新的代码吗？

- 强烈建议每次爬虫都使用最新的代码，虽然这并不是必须的。
- `GitHub`上的`Commits`可以看到代码不同版本间的差异。
- 再次声明：为确保工作效率，不对旧版代码提供任何技术支持。

- - -

- - -

## 2. 《爬虫临时指北》

### 目录

- [一、常爬网站](#一常爬网站)
- [二、理论基础](#二理论基础)
- [三、实际使用](#三实际使用)
- [附录A Collaborators](#附录a-collaborators)
- [附录B 费用报销](#附录b-费用报销)

### 一、常爬网站
- |序号|网址及示例|
  |:-:|:-|
  |1|[RockAuto](https://www.rockauto.com/en/parts/melling,timing+chain+&+component+kit,5756)|
  |2|[Dorman](https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&q=wheel%2520cylinder)|
  |3|[eBay](https://www.ebay.com/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=scitoo-autoparts&store_cat=0&store_name=cnbatteries&_oac=1&_nkw=ac%20compressor)|
  |4|[Cardone](https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/?sort=alphaasc)|
  |5|[Standard](https://www.standardbrand.com/en/ecatalog?part=Clutch%20Starter%20Safety%20Switch&type=p)|
  |7|[SpectraPremium](https://ecat.spectrapremium.com/en/parts?line=oil_pans&universal=0&hide-exclusives-canadian-market=0)|
  |9|[FourSeasons](https://www.4s.com/en/ecatalog?part=Evaporator%20Core&type=p&search=s)|
  |10|[Amazon](https://www.amazon.com/gp/bestsellers/automotive/15730511/ref=pd_zg_hrsr_automotive)|
  |12|[1AAuto](https://www.1aauto.com/catalog/brands)|
  |18|[Auveco](https://www.auveco.com/products/assortments/cabinetandcompartmentbinassortments)|
  |24|[Gates](https://www.gates.com/us/en/search.html?searchType=product&text=Positive+Crankcase+Ventilation+%28PCV%29+Hose)|
  |26|[Moog](https://www.moogparts.com/find-my-part.html)|
  |30|[TecDoc](https://web.tecalliance.net/tecdoc/qa/parts/search?brands=21&groups=298#@brc/search:Brand%2520and%2520product%2520group%2520search;brands:21;groups:298)|
  |36|[UAC](https://uacparts.com/)|
  |39|[OEMPartsOnline<sup>[oversea]</sup>](https://toyota.oempartsonline.com/search?search_str=Resonator)|
  |40|[HeadlightsDepot<sup>[oversea]</sup>](https://www.headlightsdepot.com/catalog/fog-lights?product_list_limit=71&product_list_order=name)|
  |41|[MesseFrankfurt](https://automechanika-shanghai.hk.messefrankfurt.com/shanghai/zh-cn/exhibitor-search.html)|
  |42|[RainX<sup>[oversea]</sup>](https://www.rainx.com/)|
  |43|[Genuine<sup>[oversea]</sup>](https://www.hondapartsnow.com/)|
  |44|[TPMS<sup>[oversea]</sup>](https://www.tpms.com/TPMS-Sensors-by-Make-s/1.htm)|
- 严禁在不使用代理池的情况下爬取任何网站！
- 严禁在不使用代理池的情况下爬取任何网站！！
- 严禁在不使用代理池的情况下爬取任何网站！！！
- 上标“<sup>`[oversea]`</sup>”表示需要使用海外代理，非常繁琐、非常贵……

### 二、理论基础

#### 1. Python

- [Python教程_1【网站：菜鸟教程】](https://www.runoob.com/python3/python3-tutorial.html)、[Python教程_2【网站：廖雪峰】](https://liaoxuefeng.com/books/python/introduction/index.html)

- [解决路径长度限制导致的Error](https://blog.csdn.net/weixin_43658159/article/details/127454046)

##### 1.1. Pip换源

- 临时换源：`-i`参数
  > 清华：`pip install `<ins>`package`</ins>` -i https://pypi.tuna.tsinghua.edu.cn/simple`  
  > 阿里云：`pip install `<ins>`package`</ins>` -i http://mirrors.aliyun.com/pypi/simple`  
  > 中科大：`pip install `<ins>`package`</ins>` -i http://pypi.mirrors.ustc.edu.cn/simple`  
  > 华为：`pip install `<ins>`package`</ins>` -i https://repo.huaweicloud.com/repository/pypi/simple`  
  > 腾讯：`pip install `<ins>`package`</ins>` -i http://mirrors.cloud.tencent.com/pypi/simple`

- 永久换源：自行百度

##### 1.2. 虚拟环境

- [virtualenv教程【网站：廖雪峰】](https://liaoxuefeng.com/books/python/built-in-modules/venv/index.html)

##### 1.3. Library包

- 查看可安装版本：`pip index versions `<ins>`package`</ins>

- 安装指定版本：`pip install `<ins>`package==x.xx.xxx`</ins>

- |序号|名称|安装命令|参考|
  |:-:|:-|:-|:-:|
  |1|virtualenv|`pip install virtualenv`|[官网](https://virtualenv.pypa.io/en/latest/installation.html)|
  |2|jupyter notebook|`pip install notebook`|[官网](https://jupyter.org/install#jupyter-notebook)|
  |3|jupyterlab-language-pack-zh-CN|`pip install jupyterlab-language-pack-zh-CN`|[Python Package Index (PyPI)](https://pypi.org/project/jupyterlab-language-pack-zh-CN/)|
  |4|pandas|`pip install pandas`|[官网](https://pandas.pydata.org/docs/getting_started/index.html#getting-started)|
  |5|openpyxl|`pip install openpyxl`|[官网](https://openpyxl.readthedocs.io/en/stable/tutorial.html)|
  |6|BeautifulSoup|`pip install bs4`|[官网](https://www.crummy.com/software/BeautifulSoup/bs4/doc/index.html#installing-beautiful-soup)|
  |7|lxml|`pip install lxml`|[官网](https://lxml.de/installation.html)|
  |8|gevent|`pip install gevent`|[官网](https://www.gevent.org/install.html)|
  |9|selenium|`pip install selenium`|[官网](https://www.selenium.dev/documentation/webdriver/getting_started/install_library/)<br />[ChromeDriver](https://developer.chrome.com/docs/chromedriver) -> [Dashboard](https://googlechromelabs.github.io/chrome-for-testing/)|
  |10|pillow|`pip install pillow`|[官网](hhttps://pillow.readthedocs.io/en/latest/installation/basic-installation.html)|
  |11|tqdm|`pip install tqdm`|[Python Package Index (PyPI)](https://pypi.org/project/tqdm/)|

- 升级：`pip install `<ins>`package`</ins>` --upgrade`

#### 2. HTML & XPath

- [HTML (Hyper Text Markup Language) 教程【网站：菜鸟教程】](https://www.runoob.com/html/html-tutorial.html)

- [XPath (XML Path Language) 教程【网站：菜鸟教程】](https://www.runoob.com/xpath/xpath-tutorial.html)

#### 3. JavaScript & Tampermonkey

- [JavaScript教程1【网站：菜鸟教程】](https://www.runoob.com/js/js-tutorial.html)、[JavaScript教程2【网站：廖雪峰】](https://liaoxuefeng.com/books/javascript/introduction/index.html)

- [Tampermonkey官网](https://www.tampermonkey.net/)

- [Tampermonkey教程1【网站：bilibili】](https://www.bilibili.com/video/BV1yT411L7n7/)、[Tampermonkey教程1【网站：bilibili】](https://www.bilibili.com/video/BV1Da411Z7s7/)

#### 4. 爬虫

- [requests教程【网站：廖雪峰】](https://liaoxuefeng.com/books/python/third-party-modules/requests/index.html)

- [selenium常用参数【网站：CSDN】](https://blog.csdn.net/m0_56676945/article/details/129215165)、[selenium参数列表【网站：Peter】](https://peter.sh/experiments/chromium-command-line-switches/)

- [爬虫教程【网站：bilibili】](https://www.bilibili.com/video/BV1bL4y1V7q1/)

- [《Python 3网络爬虫开发实战（第2版）》](https://www.ituring.com.cn/book/2847)

### 三、实际使用

#### 1. Postman

- [Postman官网](https://www.postman.com/downloads/)

- [Postman教程【网站：bilibili】](https://www.bilibili.com/video/BV1hP4y177gS/)

#### 2. JSON

- [JSON (JavaScript Object Notation) 在线解析](https://www.json.cn/)

#### 3. 正则表达式

- [RegEx (Regular Expression) 教程【网站：GitHub】](https://github.com/ziishaned/learn-regex)

- [RegEx在线测试](https://www.whatsmyip.org/regular-expression-tester/)

#### 4. 反反爬

- [反反爬教程【网站：bilibili】](https://www.bilibili.com/video/BV1cy4y1V771/)

- [User-Agent的讲解【网站：少数派】](https://sspai.com/post/75349)

- [IP代理【网站：快代理】](https://www.kuaidaili.com/) -> 产品 -> 隧道代理

- [验证码识别【网站：超级鹰】](https://www.chaojiying.com/)

#### 5. 爬虫速度提升

- [提速教程_1【网站：CSDN】](https://blog.csdn.net/weixin_51656605/article/details/113694044)、[提速教程_2【网站：bilibili】](https://www.bilibili.com/video/BV1bK411A7tV/?p=2)

- [gevent教程_1【网站：CSDN】](https://blog.csdn.net/qq_45476428/article/details/108782593)、[gevent教程_2【网站：CSDN】](https://blog.csdn.net/freeking101/article/details/53097420)

#### 6. Git

- [Git教程_1【网站：菜鸟教程】](https://www.runoob.com/git/git-tutorial.html)、[Git教程_2【网站：廖雪峰】](https://liaoxuefeng.com/books/git/introduction/index.html)

### 附录A Collaborators

- |GitHub|Name|E-mail|
  |:-:|:-:|:-:|
  |2024Hope2002|Hoppe|2721751152@qq.com|
  |Aleya-L|Aleya|lhxin1228@163.com|
  |Archer9528|Archer|893393406@qq.com|
  |bibabo119|Camilla|2676128666@qq.com|
  |Carver-HJQ|Carver|hejiaqi0318@163.com|
  |coarl-cc|Luka|864383059@qq.com|
  |Crissy1010|Crissy|2523031949@qq.com|
  |DamnPapacito|Nolan|414180483@qq.com|
  |hlxjustin|Liz|hlx_justin@163.com|
  |Isiah-yi|Isiah|pd56@cht-group.net|
  |Jay85208520|Jay|2674475531@qq.com|
  |Larkin420420|Larkin|heijiaow@163.com|
  |Marceline-day|Marceline|mktg480@cht-group.net|
  |Melanie-77|Melanie|1103533236@qq.com|
  |Oolong-bit|Ward|1106622586@qq.com|
  |Paulcccc|Paul|573638095@qq.com|
  |shinian9911|Bear|2863415146@qq.com|
  |Westbroobo|Westbroobo|lswbk888@gmail.com|
  |Ybai7819|Yiheng|mktg483@cht-group.net|
  |YL-Wang1|Grant|281689104@qq.com|
  |YT-Ted|Ted|1375451592@qq.com|
  |yuanlinabc|Leif|zyl964051609@gmail.com|

### 附录B 费用报销

- |发票类型|发票抬头|纳税人识别号|
  |:-:|:-:|:-:|
  |企业增值税普通发票/电子普通发票|福建扬腾创新信息科技有限公司|91350100MA338EEKXY|

# 待更新

- |网址|爬前操作|目录字段|内容字段|
  |:-|:-|:-|:-|
  |06. [Summit](https://www.summitracing.com/search?PageSize=100&SortBy=SKU&SortOrder=Ascending&keyword=LS%20Oil%20Pan)<br /><br />&emsp;-|1. `Records Per Page` -> `100 Records Per Page`<br />2. `Sort By` -> `Part Number (a-z)`|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Part_Number`、`Title`、`Description`、`Pic`<sub>(n)</sub>、<ins>`Url`</ins>、`Src`、`其他Overview`|
  |08. [Denniskirk](https://www.denniskirk.com/atv/cv-axle/brandasc.srt/100.ipp)<br /><br />&emsp;Westbroobo|1. `Results per Page` -> `100`<br />2. `Sort by` -> `Brand: A-Z`|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`|$\color{red}{2. Part}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Brand`、`Title`、`Vehicle`、`OE`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`其他Specifications`|
  |11. [AutoteileDirekt](https://www.autoteiledirekt.de/suche.html?keyword=Radlagersatz%20SKF&brand%5B0%5D=50)<br /><br />&emsp;Aleya||$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`<sup>(y)</sup>|$\color{red}{2. Part}$<sup>【Console】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、`Url`<sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Title`、`Subtitle`、`Artkl`、`Product_Id`、`Price`、`Vehicle_1`<sup>(n)</sup>、`Vehicle_2`<sup>(n)</sup>、`OE`、`Kit`、`Pic`<sup>(n)</sup>、`Url`<sup>(n)</sup>、`Src`、`Maker_Id`、`其他Desc`、`其他TecDoc`<br /><br />$\color{red}{3. Model}$<sup>【Console】</sup><br />$\color{blue}{输入：}$<ins>`Product_Id`</ins><sub>[Part]</sub>、<ins>`Maker_Id`</ins><sub>[Part]</sub><br />$\color{blue}{输出\_1：}$`No.`、<ins>`Product_Id`</ins>、<ins>`Maker_Id`</ins>、`Model_Id`、`Vehicle_1`<br />$\color{blue}{输出：}$<ins>`Product_Id`</ins>、`Vehicle_1`<sup>(y)</sup><br /><br />$\color{red}{4. Engine}$<sup>【Console】</sup><br />$\color{blue}{输入：}$<ins>`Product_Id`</ins><sub>[Model_1]</sub>、`Maker_Id`<sub>[Model_1]</sub>、`Model_Id`<sub>[Model_1]</sub>、`Vehicle_1`<sub>[Model_1]</sub><br />$\color{blue}{输出：}$<ins>`Product_Id`</ins>、`Vehicle_2`<sup>(y)</sup><br /><br />$\color{red}{5. Pic}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输入：}$`Src`<sub>[Part]</sub><br />$\color{blue}{输出：}$`Pic`<sup>(y)</sup>|
  |13. [Rotomaster](https://rotomaster.com/search.php?search_query=Turbocharger&section=product&_bc_fsnf=1&Part%20Type=Turbocharger&limit=30&sort=alphaasc)<br /><br />&emsp;Westbroobo|1. `VIEW AS` -> `3`<br />2. `SHOW` -> `30 items per page`<br />3. `SORT BY` -> `A to Z`|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Title`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`其他Attribute`、`其他Specifications`|
  |14. [TurbochargerPros](https://www.turbochargerpros.com/search_result.asp?w=garrett#/filter:brand:Garrett)<br /><br />&emsp;-||$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Title`、`Vehicle`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`其他Specifications`|
  |15. [ATPAutoteile](https://www.atp-autoteile.de/de/search/n-243/o-1/b-1-592/bremsbelaege-bestprice-atec)<br /><br />&emsp;Westbroobo|`Sortieren nach` -> `Preis absteigend`<br /><br />1. 在详情页找出[`Make api`](https://www.atp-autoteile.de/de/product/vehicles/988398)：`https://www.atp-autoteile.de/de/product/vehicles/` + `Product_Id`<br />2. 在详情页找出[`Model api`](https://www.atp-autoteile.de/de/product/vehicles/988398/9953)：`https://www.atp-autoteile.de/de/product/vehicles/` + `Product_Id` + `/` + `Make_Code`|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`、`Kit`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Kit`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Sku`、`Brand`、`Manufacturer`、`Mpn`、`Product_Id`、`Title`、`Price`、<ins>`Kit`</ins>、`Vehicle_1`<sup>(n)</sup>、`Vehicle_2`<sup>(n)</sup>、`OE`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`<br /><br />$\color{red}{3. Make}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`序号`</ins><sub>[Part]</sub>、<ins>`Product_Id`</ins><sub>[Part]</sub><br />$\color{blue}{输出：}$<ins>`No.`</ins>、<ins>`Product_Id`</ins>、`Make`、`Make_Code`<br /><br />$\color{red}{4. Model}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Make]</sub>、<ins>`Product_Id`</ins><sub>[Make]</sub>、`Make`<sub>[Make]</sub>、`Make_Code`<sub>[Make]</sub><br />$\color{blue}{输出：}$<ins>`No.`</ins>、<ins>`Product_Id`</ins>、`Vehicle_1`<sup>(y)</sup>、`Vehicle_2`<sup>(y)</sup>|
  |16. [Mevotech](https://www.mevotech.com/part/CMK100003)<br /><br />&emsp;-|从`RockAuto`爬下来`Part_Number`，再去`Mevotech`官网获取`Vehicle`||$\color{red}{1. Vehicle}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`Part_Number`</ins><sub>[RockAuto]</sub><br />$\color{blue}{输出：}$<ins>`Part_Number`</ins>、`Vehicle`<sup>(y)</sup>|
  |17. [Cub](https://www.cubelec.com.tw/switch-parts-en.php?ID=2)<br /><br />&emsp;-|账号：CUBTPMS<br />密码：CUBTPMS|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Src`、`Url`、`Part_Number`、`Name`、`OE`、`Vehicle`、`Date`、`Pic`<sup>(n)</sup>||
  |19. [MotoRAD](https://motorad.com/products/?categories=thermostat%2Ccoolant-housing&subcategories=thermostat-assembly-failsafe%2Cthermostat-assembly%2Cpower-sport-thermostat%2Cfail-safe-thermostat-w-housing%2Cstandard-failsafe%2Cegr-thermostat%2Chd-thermostat-w-housing%2Cstandard-naked-thermostat%2Chd-thermostat%2Cultrastat%2Cthermostat-kit-failsafe%2Cthermostat-w-housing%2Cthermostat%2Cthermostat-kit%2Cwater-pump-thermostat-assembly%2Chigh-flow-thermostat%2Cthermostat-kit-ultrastat%2Ceconomy-thermostat%2Cwater-outlet-coolant-housing)<br /><br />&emsp;-||`Page`、***`Part_Number`***|1. `$_序号`、***`Part_Number`***、`Category`、`Type`、`Description`、`$_Vehicle`、`OE`、`$_Pic`、***`Url`***、`Src`、`其他Attribute`、`其他Specifications`<br />2. ***`Part_Number`***、`Vehicle`|
  |20. [SpectrePerformance](https://www.spectreperformance.com/cross-reference/stp)<br /><br />&emsp;-||$\color{red}{1. Menu\underline{ }1}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`No.`、`Name`、`Url_1`<br /><br />$\color{red}{2. Menu}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu_1]</sub>、<ins>`Name`</ins><sub>[Menu_1]</sub>、`Url_1`<sub>[Menu_1]</sub><br />$\color{blue}{输出：}$<ins>`No.`</ins>、<ins>`Name`</ins>、`Url`|$\color{red}{3. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Name`、`Title`、`Sku`、`Detail`、`Vehicle`<sup>(n)</sup>、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`分列OE`、`其他Specifications`<br /><br />$\color{red}{4. Vehicle}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`Sku`</ins><sub>[Part]</sub><br />$\color{blue}{输出：}$<ins>`Sku`</ins>、`Vehicle`<sup>(y)</sup>|
  |21. [CentricParts](https://www.centricparts.com/partFinder/page/index/?p=1&product_list_limit=25&product_list_order=part_number)<br /><br />&emsp;-|1. `Sort By` -> `Part Number`<br />2. `Show` -> `25 per page`|$\color{red}{1. Menu\underline{ }1}$<br />$\color{blue}{输入：}$`Param_Total`<sub>[参数]</sub><br />$\color{blue}{输出：}$`Page`、`Url_1`<br /><br />$\color{red}{2. Menu}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`Page`</ins><sub>[Menu_1]</sub>、`Url_1`<sub>[Menu_1]</sub><br />$\color{blue}{输出：}$<ins>`Page`</ins>、`No.`、`Sku`、`Url`、`Src`|$\color{red}{3. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Sku`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub>、<ins>`Src`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、<ins>`Sku`</ins>、`Status`、`Title`、`Summary`、`Vehicle`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、<ins>`Src`</ins>、`其他Attribute`、`其他Details`|
  |22. [KaKaPart](http://www.kakapart.com/)<br /><br />&emsp;-|从`CentricParts`爬下来`Sku`，再去`KaKaPart`官网获取`分列OE`||$\color{red}{1. OE}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`Sku`</ins><sub>[CentricParts]</sub><br />$\color{blue}{输出：}$<ins>`Sku`</ins>、`分列OE`|
  |23. [Agility](https://apdi.autocaredata.com/)<br /><br />&emsp;Westbroobo|从`RockAuto`爬下来`Part_Number`，再去`Agility`官网获取`Vehicle`、`OE`和`Src`||$\color{red}{1. Info}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`Part_Number`</ins><sub>[RockAuto]</sub><br />$\color{blue}{输出：}$<ins>`Part_Number`</ins>、`Vehicle`、`Src`、`分列OE`、`其他Attributes`|
  |25. [Yelp](https://www.yelp.com/search?find_desc=Auto+Services&find_loc=New+York%2C+New+York&attrs=job_auto_repair&sortby=rating)<br /><br />&emsp;-||$\color{red}{1. Menu}$<sup>【selenium】</sup><br />$\color{blue}{输入：}$<ins>`排名`</ins><sub>[City]</sub>、<ins>`英文名`</ins><sub>[City]</sub><br />$\color{blue}{输出：}$`序号`、<ins>`City_No.`</ins>、<ins>`City`</ins>、`Page`、`No.`、`Tab`、`Url_1`|$\color{red}{2. Store}$<sup>【selenium】</sup><br />$\color{blue}{输入：}$<ins>`序号`</ins><sub>[Menu]</sub>、<ins>`City_No.`</ins><sub>[Menu]</sub>、<ins>`City`</ins><sub>[Menu]</sub>、<ins>`Page`</ins><sub>[Menu]</sub>、<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Tab`</ins><sub>[Menu]</sub>、`Url_1`<br />$\color{blue}{输出：}$<ins>`序号`</ins>、<ins>`City_No.`</ins>、<ins>`City`</ins>、<ins>`Page`</ins>、<ins>`No.`</ins>、<ins>`Tab`</ins>、`Name`、`Website`、`Phone`、`Location`、`Score`、`Review`、`Claimed`、`Verified`、`Highlight`、`Service`、`Hour`、`Amenities`、`Url`|
  |27. [WalkerProducts](https://web.tecalliance.net/walkerproducts/zh/parts/search?query=TEMPERATURE%20SENSOR&page=3#@brc/search:%25E6%2590%259C%25E7%25B4%25A2%2520TEMPERATURE%2520SENSOR;query:TEMPERATURE%2520SENSOR;page:3)<br /><br />&emsp;Camilla|1. `高级视图`<br />2. `显示 100`|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Row_Id`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$`Param_X_Api_Key`<sub>[参数]</sub>、<ins>`No.`</ins><sub>[Menu]</sub>、`Row_Id`<sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Part_Number`、`Brand_Id`、`Brand`、`Manufacturer_Website`、`GTIN_EAN`、`Type_Of_Part`、`Environmentally_Hazardous_Material`、`ACES_Applications_Available`、`Number_Of_Parts`、`Type_Of_Container`、`Qantity_Per_Aplication`、`Minimum_Order`、`Vehicle`<sup>(n)</sup>、`OE`、`Pic`<sup>(n)</sup>、`Url`、`Src`、`其他Descriptions`、`其他Extended Information`、`其他Product Attributes`、`其他Packages`<br /><br />$\color{red}{3. Vehicle}$<sup>【requests】</sup><br/>$\color{blue}{输入：}$`Param_X_Api_Key`<sub>[参数]</sub>、<ins>`Vehicle_Url`</ins><sub>[Part]</sub><br />$\color{blue}{输出：}$<ins>`Vehicle_Url`</ins>、`Vehicle_1`<sup>(y)</sup>、`Vehicle_2`<sup>(y)</sup>|
  |28. [ThePartsHQ](https://portal.thepartshq.com/catalogsearch/result/index/q/%22engine%22/?product_list_limit=80&q=engine&product_list_order=sku&product_list_dir=asc)<br /><br />&emsp;Camilla|1. `Show per page:` -> `80`<br />2. `SORT BY:` -> `SKU: A-Z`<br /><br />在`详情页`找出[`详情api`](https://portal.thepartshq.com/rest/V1/marmon/product/details/sku/A2041)：`https://portal.thepartshq.com/rest/V1/marmon/product/details/sku/` + `Part_Number`<br />|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Part_Number`、`Url`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Part_Number`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、<ins>`Part_Number`</ins>、`Part_Type`、`Vehicle_1`、`Vehicle_2`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`其他Attribute`<br /><br />$\color{red}{3. OE}$<sup>【requests】</sup><br/>$\color{blue}{输入：}$<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`Url`</ins>、`分列OE`|
  |29. [PartsFinder](https://partsfinder.bilsteingroup.com/en/search?group=Engine&subgroup=Engine+Suspension&sortby=alph&sortdir=asc&itemsPerPage=2000)<br /><br />&emsp;Camilla|1. `A-Z`<br />2. `Products per page` -> `往大了调就完事了`<br /><br />在`详情页`找出[`车型api`](https://partsfinder.bilsteingroup.com/rest/v1/article/applications?make==Audi)：`https://partsfinder.bilsteingroup.com/rest/v1/article/applications?make=` + `Make`<br />|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`No.`、`Url`|$\color{red}{2. Part}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Brand`、`Part_Number`、`Title`、`Subtitle`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`Brand_Id`、`Master_Id`、`Make`、`其他Attribute`、`分列OE`、`list_make`<br /><br />$\color{red}{3. Vehicle}$<sup>【Console】</sup><br/>$\color{blue}{输入：}$`X-Csrf-Token`<sub>[参数]</sub>、<ins>`No.`</ins><sub>[Part]</sub>、`list_make`<sub>[Part]</sub>、`Brand_Id`<sub>[Part]</sub>、`Master_Id`<sub>[Part]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Vehicle_1`、`Vehicle_2`|
  |31. [EuroKlima](https://en.euro-klima.pl/EN/compressor-parts/clutch-assemblies.html?product_list_order=name)<br /><br />&emsp;Grant|1. `Sort By:` -> `Product Name`<br />2. `List`|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Title`、`Price`、`Excl_Tax`、`Details`、`OE`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`其他Info`、`其他Information`|
  |32. [GMParts](https://parts.gmparts.com/search?searchTerm=Trunk%20Lock%20Cylinder)<br /><br />&emsp;Grant|`Sort by` -> `Name: A to Z`|$\color{red}{1. Menu}$<sup>【requests】</sup><br />$\color{blue}{输入：}$`Param_Search_Term`<sub>[参数]</sub>、`Param_Page_Size`<sub>[Menu]</sub><br />$\color{blue}{输出：}$`No.`、`Url_1`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、`Url_1`<sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Part_Number`、`Manufacturer`、`Manufacturer_Part_Number`、`Title`、`Pic`<sup>(n)</sup>、`Url`、`Src`、`其他ProductSpecifications`、`其他PackagingSpecifications`|
  |33. [Denso](https://www.densoproducts.com/ac-components-denso?orderby=6&pagesize=40)<br /><br />&emsp;Grant|`DISPLAY PER PAGE` -> `40`<br />`SORT BY` -> `Name: Z to A`|$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Title`、`Price`、`Vehicle`、`OE`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`其他Details`、`其他Manufacturers`、`其他Specifications`|
  |34. [BlueStreak](http://bsecorp.com/catalog/)<br /><br />&emsp;Camilla|`显示 100`|$\color{red}{1. Menu}$<br />$\color{blue}{输入：}$`Param_Page`<sub>[参数]</sub><br />$\color{blue}{输出：}$`Page`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$`Param_X_Api_Key`<sub>[参数]</sub>、<ins>`Page`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`Page`</ins>、`序号`、`Part_Number`、`Brand_Id`、`Brand`、`Manufacturer_Website`、`GTIN_EAN`、`Type_Of_Part`、`Qantity_Per_Aplication`、`Minimum_Order`、`Vehicle`<sup>(n)</sup>、`OE`、`Pic`<sup>(n)</sup>、`Url`、`Src`、`Vehicle_Page`<sup>(n)</sup>、`其他Descriptions`、`其他Additional`、`其他Product Attributes`、`其他Packages`<br /><br />$\color{red}{3. Vehicle\_Page}$<sup>【requests】</sup><br/>$\color{blue}{输入：}$`Param_X_Api_Key`<sub>[参数]</sub>、<ins>`JOIN_PNBI`</ins><sub>[Part]</sub>、`Part_Number`<sub>[Part]</sub>、`Brand_Id`<sub>[Part]</sub><br />$\color{blue}{输出：}$<ins>`JOIN_PNBI`</ins>、`Vehicle_Page`<sup>(y)</sup><br /><br />$\color{red}{4. Vehicle}$<sup>【requests】</sup><br/>$\color{blue}{输入：}$`Param_X_Api_Key`<sub>[参数]</sub>、<ins>`JOIN_PNBI`</ins><sub>[Part]</sub>、`Vehicle_Page`<sub>[Part]</sub>、`Part_Number`<sub>[Part]</sub>、`Brand_Id`<sub>[Part]</sub><br />$\color{blue}{输出：}$<ins>`JOIN_PNBI`</ins>、`Vehicle`<sup>(y)</sup>|
  |35. [JC](https://www.jcsportlinepro.com/carbon-fiber-spoiler_1.html)<br /><br />&emsp;Paul||$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Title`、`Pic`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`Description`、`分列Description`、`其他Src`|
  |37. [GBC](http://www.fenderliner.com/)<br /><br />&emsp;-||$\color{red}{1. Menu}$<sup>【Tampermonkey】</sup><br />$\color{blue}{输出：}$`Page`、`No.`、`Url`|$\color{red}{2. Part}$<sup>【requests】</sup><br />$\color{blue}{输入：}$<ins>`No.`</ins><sub>[Menu]</sub>、<ins>`Url`</ins><sub>[Menu]</sub><br />$\color{blue}{输出：}$<ins>`序号`</ins>、`Title`、`Picture`<sup>(n)</sup>、<ins>`Url`</ins>、`Src`、`其他Replacement`、`其他Description`|
  