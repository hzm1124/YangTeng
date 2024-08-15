# 1. About

- [x] eg 1: [ac compressor (scitoo-autoparts)](https://www.ebay.com/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=scitoo-autoparts&store_cat=0&store_name=cnbatteries&_oac=1&_nkw=ac%20compressor)
- [x] eg 2: [türschloss (atp-autoteile)](https://www.ebay.de/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=atp-autoteile&store_name=atpautoteile&_oac=1&_nkw=t%C3%BCrschloss&rt=nc&LH_BIN=1)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Item_Number_R|input.xlsx|`Url`|1.item_number|A. `No`<sub>[int、Sort: True]</sub><br />B. `Item Number`<br />C. `Url`|
  |2|Item_R|1.item_number|<span style="color: violet;">Url</span>|2.item|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Item Number</span><br />C. `Title`<br />D. `Subtitle`<br />E. `Price`<br />F. `Sold`<br />G. `Available`<br />H. `Picture`<sub>[null]</sub><br />I. <span style="color: violet;">Url</span><br />J. `Description Url`<br />K. `Json_Src`<br />L. `Json_Specific`<br />M. `Json_Compatibility`|
  |3|Vehicle_R|2.item|<span style="color: violet;">Json_Compatibility</span>|3.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Item Number</span><br />C. <span style="color: violet;">Json_Compatibility</span><br />D. `Page`<sub>[int、Sort: True]</sub><br />E. `Row`<sub>[int、Sort: True]</sub><br />... `eBay兼容表`|
  |~~4~~[^Note_1]|~~Description_R~~|~~2.item~~|~~<span style="color: violet;">Description Url</span>~~|~~4.description~~|~~A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub>~~<br />~~B. <span style="color: teal;">Item Number</span>~~<br />~~C. <span style="color: violet;">Description Url</span>~~<br />~~... `eBay卖家描述`~~|

  [^Note_1]: 正常情况下不爬取该部分数据，特殊情况需先做可行性评估