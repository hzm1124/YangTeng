# 1. About

- [x] Head: Paul
- [x] eg 1: [Oil Pan](https://ecat.spectrapremium.com/en/parts?line=oil_pans&universal=0&hide-exclusives-canadian-market=0&sort=part-number&limit=50)
- [x] eg 2: [Electronic Throttle Body](https://ecat.spectrapremium.com/en/parts?line=electronic_throttle_bodies&year=&make=&model=&submodel=&universal=0&hide-exclusives-canadian-market=0&sort=part-number&limit=100)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int、Sort: True]</sub><br />B. `Url`|
  |2|Part_R|1.url|<span style="color: violet;">Url</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `Market`<br />C. `Type`<br />D. `Part Number`<br />E. `Picture`<sub>[null]</sub><br />F. <span style="color: violet;">Url</span><br />G. `Json_Src`<br />H. `Json_Specification`<br />I. `Vehicle Page`|
  |3|Vehicle_R|2.part|<span style="color: violet;">Url</span><br /><span style="color: violet;">Vehicle Page</span>|3.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. <span style="color: violet;">Url</span><br />D. `Page`<sub>[int、Sort: True]</sub><br />... `SpectraPremium兼容表`|
