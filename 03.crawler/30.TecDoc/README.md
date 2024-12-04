# 1. Info

- [TecDoc](https://web.tecalliance.net/tecdoc/qa/home)
- Account: mktg20@cht-group.net
- Password: 2022Winnie@

- - -

# 2. About

- [x] eg 1: [Wiper Blade > VALEO](https://web.tecalliance.net/tecdoc/qa/parts/search?brands=21&groups=298#@brc/search:Brand%2520and%2520product%2520group%2520search;brands:21;groups:298)
- [x] eg 2: [Wiper Blade > BOSCH](https://web.tecalliance.net/tecdoc/qa/parts/search?brands=30&groups=298#@brc/search:Brand%2520and%2520product%2520group%2520search;brands:30;groups:298)

- - -

# 3. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Page_R|input.xlsx|`Url`<sup>[1]</sup>|1.page.xlsx|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Url`<sup>[1]</sup><br />C. `SKU Count`<sub>[int]</sub><br />D. `Page`<sub>[int]</sub>|
  |2|Part_R|1.page.xlsx|`Url`<br />`Page`|2.part|A. `No`<sub>[int]</sub><br />B. `Brand`<br />C. `Product Group`<br />D. `Part Number`<sub>[Sort: Occurrence]</sub><br />E. `Aditional Description`<br />F. `GTIN/EAN`<br />G. `Packing Unit`<br />H. `Quantity Per Packaging Unit`<br />I. `Status`<br />J. `Remanufactured`<br />K. `Trade Number`<br />L. `Mandatory Material Certification`<br />M. `OEM`<br />N. `Picture`<sub>[null]</sub><br />O. `Url`<br />P. `Json_Src`<br />Q. `Json_Information`<br />R. `Json_Criteria`<br />S. `Part Code`<sub>[int]</sub>|
  |3|Make_R|2.part|`Part Code`<sup>[1]</sup>|3.make|A. `Part Code`<sup>[1]</sup><sub>[int、Sort: True]</sub><br />B. `Make No`<sub>[int、Sort: True]</sub><br />C. `Make`<br />D. `Make Code`<sub>[int]</sub><br />E. `JOIN_PCMC`<br />F. `Check_Url`<sup>\*</sup>|
  |4|Link_R|3.make|`Part Code`<sup>[1]</sup><br />`Make Code`<sup>[2]</sup>|4.link|A. `Part Code`<sup>[1]</sup><sub>[int、Sort: True]</sub><br />B. `Make No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />C. `Make`<sup>\*</sup><br />D. `Make Code`<sup>[2]</sup><sub>[int]</sub><br />E. `JOIN_PCMC`<sup>\*</sup><br />F. `Link No`<sub>[int、Sort: True]</sub><br />G. `Json_Link`<br />H. `JOIN_PCMCLN`<br />I. `Check_Url`<sup>\*</sup>|
  |5|Vehicle_R|4.link|`Part Code`<sup>[1]</sup><br />`Json_Link`<sup>[2]</sup>|5.vehicle|A. `Part Code`<sup>[1]</sup><sub>[int、Sort: True]</sub><br />B. `Make No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />C. `Make`<sup>\*</sup><br />D. `Make Code`<sup>\*</sup><sub>[int]</sub><br />E. `JOIN_PCMC`<sup>\*</sup><br />F. `Link No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />G. `Json_Link`<sup>[2]</sup><br />H. `JOIN_PCMCLN`<br />... `TecDoc兼容表`<br />... `Check_Url`<sup>\*</sup>|
  |6|Collate|||||
