# 1. About

- [x] eg 1: [Clutch Starter Safety Switch](https://www.standardbrand.com/en/ecatalog?part=Clutch%20Starter%20Safety%20Switch&type=p)
- [x] eg 2: [Power Seat Switch](https://www.standardbrand.com/en/ecatalog?part=Power%20Seat%20Switch&type=p&search=s)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Part_Number_R|input.xlsx|`Url`|1.part_number|A. `No`<sub>[int]</sub><br />B. `Part Number`<sub>[Sort: Occurrence]</sub><br />C. `Url`|
  |2|Part_R|1.part_number|`Part Number`<sup>[1]</sup>|2.part|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Part Number`<sup>[1]</sup><br />C. `Vehicle`<br />D. `Picture`<sub>[null]</sub><br />E. `Url`<br />F. `Json_Type`<br />G. `Json_Info`<br />H. `Json_Specification`|
  |3|Src_R|2.part|`Part Number`<sup>[1]</sup><br />`Json_Info`<sup>[2]</sup>|3.src|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Part Number`<sup>[1]</sup><br />C. `Vehicle`<sup>\*</sup><br />D. `Picture`<sup>\*</sup><br />E. `Url`<sup>\*</sup><br />F. `Json_Src`<br />G. `Json_Type`<sup>\*</sup><br />H. `Json_Info`<sup>[2]</sup><br />I. `Json_Specification`<sup>\*</sup>|
  |4|Collate|||||
