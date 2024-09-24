# 1. About

- [x] eg 1: [ac compressor (scitoo-autoparts)](https://www.ebay.com/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=scitoo-autoparts&store_cat=0&store_name=cnbatteries&_oac=1&_nkw=ac%20compressor)
- [x] eg 2: [türschloss (atp-autoteile)](https://www.ebay.de/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=atp-autoteile&store_name=atpautoteile&_oac=1&_nkw=t%C3%BCrschloss&rt=nc&LH_BIN=1)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Item_Number_R|input.xlsx|`Url`|1.item_number|A. `No`<sub>[int]</sub><br />B. `Item Number`<sub>[Sort: Occurrence]</sub>|
  |2|Url_R|1.item_number|<span style="color: violet;">Item Number</span>|2.url|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Item Number</span><br />C. `Url`|
  |3|Part_R|2.url|<span style="color: violet;">Url</span>|3.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Item Number</span><br />C. `Market`<br />D. `Title`<br />E. `Price`<br />F. `Picture`<sub>[null]</sub><br />G. <span style="color: violet;">Url</span><br />H. `Json_Src`<br />I. `Description Url`<br />J. `Subtitle`<br />K. `Json_Quantity`<br />L. `Json_Compatibility`<br />M. `Json_Specific`|
  |4|Vehicle_R|3.part|<span style="color: violet;">Json_Compatibility</span>|4.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Item Number</span><br />C. <span style="color: violet;">Json_Compatibility</span><br />D. `Page`<sub>[int、Sort: True]</sub><br />E. `Row`<sub>[int、Sort: True]</sub><br />... `eBay兼容表`|
  |5|Collate|||||
