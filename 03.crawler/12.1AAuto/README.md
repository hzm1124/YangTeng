# 1. About

- [x] eg 1: [brake calipers](https://www.1aauto.com/search?q=brake+calipers)
- [x] eg 2: [Weatherstripping](https://www.1aauto.com/weatherstripping/c/12)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int、Sort: True]</sub><br />B. `Url`|
  |2|Part_R|1.url|<span style="color: violet;">Url</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `Type`<br />C. `SKU`<br />D. `Part Number`<br />E. `Brand`<br />F. `Tag`<br />G. `Title`<br />H. `Picture`<sub>[null]</sub><br />I. <span style="color: violet;">Url</span><br />J. `Json_Src`<br />K. `OEM Url`<br />L. `Json_Description`<br />M. `Price`<br />N. `Rating`<br />O. `Rating Count`|
  |3|OEM_R|2.part|<span style="color: violet;">OEM Url</span>|3.oem|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Type</span><br />C. <span style="color: teal;">SKU</span><br />D. <span style="color: teal;">Part Number</span><br />E. <span style="color: teal;">Brand</span><br />F. <span style="color: teal;">Tag</span><br />G. <span style="color: teal;">Title</span><br />H. `OEM`<br />I. <span style="color: teal;">Picture</span><sub>[null]</sub><br />J. <span style="color: teal;">Url</span><br />K. <span style="color: teal;">Json_Src</span><br />L. <span style="color: violet;">OEM Url</span><br />M. <span style="color: teal;">Json_Description</span><br />N. <span style="color: teal;">Price</span><br />O. <span style="color: teal;">Rating</span><br />P. <span style="color: teal;">Rating Count</span>|
  |||||3.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">SKU</span><br />C. <span style="color: violet;">OEM Url</span><br />D. `Vehicle No	`<sub>[int、Sort: True]</sub><br />... `1AAuto兼容表`|
  |4|Collate|||||
