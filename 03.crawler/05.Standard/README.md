# 1. About

- [x] eg 1: [Clutch Starter Safety Switch](https://www.standardbrand.com/en/ecatalog?part=Clutch%20Starter%20Safety%20Switch&type=p)
- [x] eg 2: [Power Seat Switch](https://www.standardbrand.com/en/ecatalog?part=Power%20Seat%20Switch&type=p&search=s)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Part_Number_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int、Sort: True]</sub><br />B. `Part Number`|
  |2|Part_R|1.url|<span style="color: violet;">Part Number</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Part Number</span><br />... `Standard信息`<br />... `Picture`<sub>[null]</sub><br />... `Url`<br />... `Json_Vehicle`<br />... `Json_Service`<br />... `Json_Spec`|
  |3|Src_R|2.part|<span style="color: violet;">Part Number</span><br /><span style="color: violet;">brand</span>|3.src|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Part Number</span><br />... <span style="color: teal;">Standard信息</span><br />... <span style="color: teal;">Picture</span><sub>[null]</sub><br />... <span style="color: teal;">Url</span><br />... <span style="color: teal;">Json_Vehicle</span><br />... <span style="color: teal;">Json_Service</span><br />... <span style="color: teal;">Json_Spec</span><br />... `Json_Src`|
