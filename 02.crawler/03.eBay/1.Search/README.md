# 1. About

- [x] Head: Westbroobo
- [x] File: [百度网盘（提取码: ebay）](https://pan.baidu.com/s/1Bx90kewSnxB_0Zl6fm9Prg?pwd=ebay)
- [x] e.g.: [ignition coil blue](https://www.ebay.com/sch/i.html?_from=R40&_nkw=ignition+coil+blue&_sacat=0&rt=nc&LH_PrefLoc=1)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Menu_R|N/A|param_url|1.menu.xlsx|A. `No`<sub>[int、Sort: True]</sub><br />B. `Item Number`<br />C. `Url`|
  |2|Item_R|1.menu.xlsx|<span style="color: violet;">Url</span>|2.item.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Item Number</span><br />C. `Title`<br />D. `Subtitle`<br />E. `Price`<br />F. `Available`<br />G. `Sold`<br />H. `Picture`<sub>[null]</sub><br />I. <span style="color: violet;">Url</span><br />J. `DescriptionUrl`<br />K. `Json_Src`<br />L. `Json_Specific`<br />M. `Json_Compatibility`|
  |3|Vehicle_R|2.item.xlsx|<span style="color: violet;">Json_Compatibility</span>|3.vehicle.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Item Number</span><br />C. <span style="color: violet;">Json_Compatibility</span><br />... `eBay兼容表`|
  |~~4~~|~~Description_R~~|~~2.item.xlsx~~|~~<span style="color: violet;">Description Url</span>~~|~~4.description.xlsx~~|~~A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub>~~<br />~~B. <span style="color: teal;">Item Number</span>~~<br />~~C. <span style="color: violet;">Description Url</span>~~<br />~~... `eBay卖家描述`~~|
