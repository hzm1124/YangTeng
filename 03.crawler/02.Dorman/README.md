# 1. About

- [x] eg 1: [wheel cylinder](https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&q=wheel%2520cylinder&start=0&num=100)
- [x] eg 2: [Engine Oil Pan](https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&q=Engine%2520Oil%2520Pan&start=0&num=100)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Page_R|input.xlsx|<span style="color: violet;">Url</span>|1.page.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Url</span><br />C. `SKU Count`<sub>[int]</sub><br />D. `Page`<sub>[int]</sub>|
  |2|Url_R|1.page.xlsx|`Url`|2.url|A. `No`<sub>[int、Sort: True]</sub><br />B. `Url`|
  |3|Part_R|2.url|<span style="color: violet;">Url</span>|3.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `Type`<br />C. `Part Number`<br />D. `Brand`<br />E. `Description`<br />F. `Application Summary`<br />G. `OEM`<br />H. `Picture`<sub>[null]</sub><br />I. <span style="color: violet;">Url</span><br />J. `Vehicle Url`<br />K. `Json_Src`<br />L. `Json_Specification`|
  |4|Vehicle_R|3.part|<span style="color: violet;">Vehicle Url</span>|4.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. <span style="color: violet;">Vehicle Url</span><br />D. `Page`<sub>[int、Sort: True]</sub><br />E. `Row`<sub>[int、Sort: True]</sub><br />... `Dorman兼容表`|
