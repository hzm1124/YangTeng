# 1. About

- [x] eg 1: [Clutch Starter Safety Switch](https://www.standardbrand.com/en/ecatalog?part=Clutch%20Starter%20Safety%20Switch&type=p)
- [x] eg 2: [Power Seat Switch](https://www.standardbrand.com/en/ecatalog?part=Power%20Seat%20Switch&type=p&search=s)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Part_Number_R|input.xlsx|`Url`|1.part_number|A. `No`<sub>[int]</sub><br />B. `Part Number`<sub>[Sort: Occurrence]</sub><br />C. `Url`|
  |2|Part_R|1.part_number|<span style="color: violet;">Part Number</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Part Number</span><br />C. <span style="color: teal;">Url</span><br />D. `Vehicle`<br />E. `Service`<br />... `Standard信息`<br />... `Json_Spec`|
  |3|Src_R|2.part|<span style="color: violet;">Part Number</span><br /><span style="color: violet;">Brand</span>|3.src|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Part Number</span><br />C. <span style="color: teal;">Url</span><br />D. <span style="color: teal;">Vehicle</span><br />E. <span style="color: teal;">Service</span><br />... <span style="color: teal;">Standard信息</span><br />... <span style="color: teal;">Json_Vehicle</span><br />... `Picture`<sub>[null]</sub><br />... `Json_Src`|
  |4|Collate|||||
