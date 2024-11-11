# 1. About

- [x] eg 1: [Resonator > Toyota](https://toyota.oempartsonline.com/search?search_str=Resonator)
- [x] eg 2: [Resonator > Nissan](https://nissan.oempartsonline.com/search?search_str=Resonator)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Page_R|input.xlsx|`Url`<sup>[1]</sup>|1.page.xlsx|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Url`<sup>[1]</sup><br />C. `SKU Count`<sub>[int]</sub><br />D. `Page`<sub>[int]</sub>|
  |2|Url_R|1.page.xlsx|`Url`<br />`Page`|2.url|A. `No`<sub>[int]</sub><br />B. `Url`<sub>[Sort: Occurrence]</sub>|
  |3|Part_R|2.url|`Url`<sup>[1]</sup>|3.part|A. `No`<sup>\*</sup><sub>[int]</sub><br />B. `Catalog`<br />C. `Part Number`<sub>[Sort: True]</sub><br />D. `Title`<br />E. `Subtitle`<br />F. `Price`<br />G. `Picture`<sub>[null]</sub><br />H. `Url`<sup>[1]</sup><br />I. `Json_Src`<br />J. `Json_Detail`<br />K. `JOIN_CPN`|
  |||||3.vehicle|A. `JOIN_CPN`<sub>[Sort: True]</sub><br />... `OEMGenuineParts兼容表`|
  |4|Collate|||||
