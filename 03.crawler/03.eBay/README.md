# 1. About

- [x] eg 1: [ac compressor (scitoo-autoparts)](https://www.ebay.com/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=scitoo-autoparts&store_cat=0&store_name=cnbatteries&_oac=1&_nkw=ac%20compressor)
- [x] eg 2: [türschloss (atp-autoteile)](https://www.ebay.de/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=atp-autoteile&store_name=atpautoteile&_oac=1&_nkw=t%C3%BCrschloss&rt=nc&LH_BIN=1)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Item_Number_R|input.xlsx|`Url`|1.item_number|A. `No`<sub>[int]</sub><br />B. `Item Number`<sub>[Sort: Occurrence]</sub>|
  |2|Url_R|1.item_number|`Item Number`<sup>[1]</sup>|2.url|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Item Number`<sup>[1]</sup><br />C. `Url`|
  |3|Part_R|2.url|`Url`<sup>[1]</sup>|3.part|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Item Number`<sup>\*</sup><br />C. `Title`<br />D. `Price`<br />E. `Picture`<sub>[null]</sub><br />F. `Url`<sup>[1]</sup><br />G. `Market`</span><br />H. `Subtitle`<br />I. `Store Name`<br />J. `Store Url`<br />K. `Json_Src`<br />L. `Description Url`<br />M. `Json_Quantity`<br />N. `Json_Price`<br />O. `Json_Specific`<br />P. `Json_Compatibility`|
  |4|Vehicle_R|3.part|`Json_Compatibility`<sup>[1]</sup>|4.vehicle|A. `Json_Compatibility`<sup>[1]</sup><sub>[int、Sort: True]</sub><br />B. `Page`<sub>[int、Sort: True]</sub><br />C. `Row`<sub>[int、Sort: True]</sub><br />... `eBay兼容表`|
  |5|Collate|||||
