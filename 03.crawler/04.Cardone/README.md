# 1. About

- [x] eg 1: [Windshield Wiper Motor](https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/?sort=alphaasc&limit=96&page=1)
- [x] eg 2: [Driveshaft / Prop Shaft](https://www.cardone.com/drivetrain/driveline-axles/driveshaft-prop-shaft/?limit=96&sort=alphaasc)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int]</sub><br />B. `Url`<sub>[Sort: Occurrence]</sub>|
  |2|Part_R|1.url|`Url`<sup>[1]</sup>|2.part|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Type`<br />C. `Part Number`<br />D. `Title`<br />E. `Application Summary`<br />F. `Picture`<sub>[null]</sub><br />G. `Url`<sup>[1]</sup><br />H. `Subtitle`<br />I. `Json_Src`<br />J. `Json_Info`|
  |3|OEM_R|2.part|`Part Number`<sup>[1]</sup>|3.oem|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Type`<sup>\*</sup><br />C. `Part Number`<sup>[1]</sup><br />D. `Title`<sup>\*</sup><br />E. `Application Summary`<sup>\*</sup><br />F. `OE`<br />G. `Picture`<sup>\*</sup><br />H. `Url`<sup>\*</sup><br />I. `Subtitle`<sup>\*</sup><br />J. `Json_Src`<sup>\*</sup><br />K. `Json_Info`<sup>\*</sup>|
  |4|Vehicle_R|2.part|`Part Number`<sup>[1]</sup>|4.vehicle|A. `Part Number`<sup>[1]</sup><sub>[Sort: True]</sub><br />... `Cardone兼容表`|
  |5|Collate|||||
