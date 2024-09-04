# 1. About

- [x] eg 1: [brake calipers](https://www.1aauto.com/search?q=brake+calipers)
- [x] eg 2: [Weatherstripping](https://www.1aauto.com/weatherstripping/c/12)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int、Sort: True]</sub><br />B. `Url`|
  |2|Part_R|1.url|<span style="color: violet;">Url</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `Type`<br />C. `Part Number`<br />D. `Brand`<br />E. `Tag`<br />F. `Title`<br />G. `SKU`<br />H. `Price`<br />I. `Rating`<br />J. `Rating Count`<br />K. `Picture`<sub>[null]</sub><br />L. <span style="color: violet;">Url</span><br />M. `Json_Src`<br />N. `Json_Description`<br />O. `Part Code`|
  |3|Vehicle_R|2.part|<span style="color: violet;">Url</span><br /><span style="color: violet;">Part Code</span>|3.vehicle|... `1AAuto兼容表`<br />... `OEM`<br />... <span style="color: teal;">No</span><br />... <span style="color: violet;">Url</span>|
