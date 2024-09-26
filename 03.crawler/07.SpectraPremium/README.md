# 1. About

- [x] eg 1: [Oil Pan](https://ecat.spectrapremium.com/en/parts?line=oil_pans&universal=0&hide-exclusives-canadian-market=0&sort=part-number&limit=50)
- [x] eg 2: [Electronic Throttle Body](https://ecat.spectrapremium.com/en/parts?line=electronic_throttle_bodies&year=&make=&model=&submodel=&universal=0&hide-exclusives-canadian-market=0&sort=part-number&limit=100)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int]</sub><br />B. `Url`<sub>[Sort: Occurrence]</sub>|
  |2|Part_R|1.url|<span style="color: violet;">Url</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `Market`<br />C. `Type`<br />D. `Part Number`<br />E. `Vehicle`<sub>[null]</sub><br />F. `Picture`<sub>[null]</sub><br />G. <span style="color: violet;">Url</span><br />H. `Json_Src`<br />I. `Json_Specification`<br />J. `Vehicle Page`|
  |3|Vehicle_R|2.part|<span style="color: violet;">Url</span><br /><span style="color: violet;">Vehicle Page</span>|3.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. `Page`<sub>[int、Sort: True]</sub><br />D. `Vehicle No`<sub>[int、Sort: True]</sub><br />E. `Make Model Engine`<br />F. `Row`<sub>[int、Sort: True]</sub><br />... `SpectraPremium兼容表`|
  |4|Collate|||||
