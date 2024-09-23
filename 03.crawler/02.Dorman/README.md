# 1. About

- [x] eg 1: [wheel cylinder](https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&q=wheel%2520cylinder&start=0&num=100)
- [x] eg 2: [Engine Oil Pan](https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&q=Engine%2520Oil%2520Pan&start=0&num=100)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Page_R|input.xlsx|<span style="color: violet;">Url</span>|1.page.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Url</span><br />C. `SKU Count`<sub>[int]</sub><br />D. `Page`<sub>[int]</sub>|
  |2|Url_R|1.page.xlsx|`Url`<br />`Page`|2.url|A. `No`<sub>[int]</sub><br />B. `Url`<sub>[Sort: Occurrence]</sub>|
  |3|Part_R|2.url|<span style="color: violet;">Url</span>|3.part|A. <span style="color: teal;">No</span><sub>[int]</sub><br />B. `Type`<sub>[Sort: True]</sub><br />C. `Part Number`<sub>[Sort: True]</sub><br />D. `Brand`<br />E. `Description`<br />F. `Application Summary`<br />G. `OEM`<br />H. `Picture`<sub>[null]</sub><br />I. <span style="color: violet;">Url</span><br />J. `Json_Src`<br />K. `Vehicle Url`<br />L. `Json_Specification`|
  |4|Vehicle_R|3.part|<span style="color: violet;">Vehicle Url</span>|4.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. <span style="color: violet;">Vehicle Url</span><br />D. `Page`<sub>[int、Sort: True]</sub><br />E. `Row`<sub>[int、Sort: True]</sub><br />... `Dorman兼容表`|
  |5|Collate|||||
