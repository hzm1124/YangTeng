# 1. About

- [x] Head: Ward
- [x] eg 1: [Evaporator Core](https://www.4s.com/en/ecatalog?part=Evaporator%20Core&type=p&search=s)
- [x] eg 2: [Heater Core](https://www.4s.com/en/ecatalog?part=Heater%20Core&type=p&search=s)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Part_Number_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int、Sort: True]</sub><br />B. `Part Number`|
  |2|Part_R|1.url|<span style="color: violet;">Part Number</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Part Number</span><br />... `Standard信息`<br />... `Picture`<sub>[null]</sub><br />... `Url`<br />... `Json_Vehicle`<br />... `Json_Service`<br />... `Json_Spec`|
  |3|Src_R|2.part|<span style="color: violet;">Part Number</span><br /><span style="color: violet;">brand</span>|3.src|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Part Number</span><br />... <span style="color: teal;">Standard信息</span><br />... <span style="color: teal;">Picture</span><sub>[null]</sub><br />... <span style="color: teal;">Url</span><br />... <span style="color: teal;">Json_Vehicle</span><br />... <span style="color: teal;">Json_Service</span><br />... <span style="color: teal;">Json_Spec</span><br />... `Json_Src`|
