# 1. About

- [x] eg: [Fog Lights](https://www.headlightsdepot.com/catalog/fog-lights?product_list_limit=71&product_list_order=name)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_JS||`page`<sup>[1]</sup><br />`url_base`|1.url.xlsx|A. `Page`<sup>[1]</sup><sub>[int、Sort: True]</sub><br />B. `No`<sub>[int、Sort: True]</sub><br />C. `Url`|
  |2|Part_JS|1.url.xlsx|`Url`|2.part.xlsx|A. `No`<sub>[int、Sort: True]</sub><br />B. `SKU`<br />C. `Brand`<br />D. `MPN`<br />E. `Title`<br />F. `Currency`<br />G. `Price`<br />H. `Picture`<sub>[null]</sub><br />I. `Url`<br />J. `Attribute`<br />K. `Detail`<br />L. `Compatibility`<br />M. `Json_Src`<br />N. `Json_Description`|
  |||||2.compatibility.xlsx|A. `SKU`<sub>[Sort: True]</sub><br />... `HeadlightsDepot兼容表`|
  |3|Collate|||||
  |4|Picture_JS|||||
