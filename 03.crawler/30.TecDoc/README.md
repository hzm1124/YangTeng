# 1. About

- [x] eg 1: [Mounting, engine > FEBI BILSTEIN](https://web.tecalliance.net/tecdocsw/en/parts/search?brands=101&groups=247#@brc/search:Search%2520by%2520brands%2520and%2520product%2520groups;brands:101;groups:247)
- [x] eg 2: [Door Lock > MEAT & DORIA](https://web.tecalliance.net/tecdocsw/en/parts/search?brands=244&groups=1361#@brc/search:Search%2520by%2520brands%2520and%2520product%2520groups;brands:244;groups:1361)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Page_R|input.xlsx|<span style="color: violet;">Url</span>|1.page.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Url</span><br />C. `SKU Count`<sub>[int]</sub><br />D. `Page`<sub>[int]</sub>|
  |2|Part_R|1.page.xlsx|`Url`|2.part|A. `No`<sub>[int、Sort: True]</sub><br />B. `Brand`<br />C. `Group`<br />D. `Part Number`<br />E. `Remanufactured`<br />F. `Status`<br />G. `Additional Description`<br />H. `GTIN/EAN`<br />I. `OEM`<br />J. `Mandatory Material Certification`<br />K. `Packing Unit`<br />L. `Quantity Per Packing Unit`<br />M. `Json_Information`<br />N. `Json_Criteria`<br />O. `Json_Price`<br />P. `Picture`<sub>[null]</sub><br />Q. `Url`<br />R. `Json_Src`<br />S. `Part Code`|
  |3|Make_R|2.part|<span style="color: violet;">Part Code</span>|3.make|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. <span style="color: violet;">Part Code</span><sub>[int]</sub><br />D. `Link Type`: `VOLB`<br />E. `Make No`<sub>[int、Sort: True]</sub><br />F. `Make`<br />G. `Make Code`<sub>[int]</sub>|
  |4|Link_R|3.make|<span style="color: violet;">Part Code</span><br /><span style="color: violet;">Make Code</span>|4.link|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. <span style="color: violet;">Part Code</span><sub>[int]</sub><br />D. <span style="color: teal;">Link Type</span><br />E. <span style="color: teal;">Make No</span><sub>[int、Sort: True]</sub><br />F. <span style="color: teal;">Make</span><br />G. <span style="color: violet;">Make Code</span><sub>[int]</sub><br />H. `Link No`<sub>[int、Sort: True]</sub><br />I. `Json_Link`|
  |5|Vehicle_R|4.link|<span style="color: violet;">Part Code</span><br /><span style="color: violet;">Json_Link</span>|5.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. <span style="color: violet;">Part Code</span><sub>[int]</sub><br />D. <span style="color: teal;">Link Type</span><br />E. <span style="color: teal;">Make No</span><sub>[int、Sort: True]</sub><br />F. <span style="color: teal;">Make</span><br />G. <span style="color: teal;">Make Code</span><sub>[int]</sub><br />H. <span style="color: teal;">Link No</span><sub>[int、Sort: True]</sub><br />I. <span style="color: violet;">Json_Link</span><br />J. `Vehicle No`<sub>[int、Sort: True]</sub><br />... `TecDoc兼容表`|
