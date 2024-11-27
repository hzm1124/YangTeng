# 1. About

- [x] eg: [TPMS<sup>[oversea]</sup>](https://www.tpms.com/TPMS-Sensors-by-Make-s/1.htm)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Make_R|||1.make.xlsx|A. `Make No`<sub>[int]</sub><br />B. `Make`<sub>[Sort: True]</sub><br />C. `Make Text`<br />D. `Make Url`|
  |2|Year_R|1.make.xlsx|`Make Url`<br />`Make Text`|2.year.xlsx|A. `Make No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Make`<sup>\*</sup><br />C. `Year`<sub>[int、Sort: False]</sub><br />D. `Year Text`<br />E. `Year Url`|
  |3|Model_R|2.year.xlsx|`Year Url`<br />`Year Text`|3.model.xlsx|A. `Make No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Make`<sup>\*</sup><br />C. `Year`<sup>\*</sup><sub>[int、Sort: False]</sub><br />D. `Model No`<sub>[int]</sub><br />E. `Model`<sub>[Sort: True]</sub><br />F. `Model Text`<br />G. `Model Url`|
  |4|Page_R|3.model.xlsx|`Model Url`<sup>[1]</sup><br />`Model Text`<sup>[2]</sup>|4.page.xlsx|A. `Make No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Make`<sup>\*</sup><br />C. `Year`<sup>\*</sup><sub>[int、Sort: False]</sub><br />D. `Model No`<sup>\*</sup><sub>[int]</sub><br />E. `Model`<sup>\*</sup><sub>[Sort: True]</sub><br />F. `Model Text`<sup>[2]</sup><br />G. `Model Url`<sup>[1]</sup><br />H. `Page`<sub>[int]</sub>|
  |5|Url_R|4.page.xlsx|`Model Url`<br />`Page`<sup>[1]</sup><br />`Model Text`|5.url.xlsx|A. `Make No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Make`<sup>\*</sup><br />C. `Year`<sup>\*</sup><sub>[int、Sort: False]</sub><br />D. `Model No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />E. `Model`<sup>\*</sup><br />F. `Page`<sup>[1]</sup><sub>[int、Sort: True]</sub><br />G. `No`<sub>[int、Sort: True]</sub><br />H. `Url`|
  |6|Vehicle|5.url.xlsx|`Make`<br />`Year`<br />`Model`<br />`Url`<sup>[1]</sup>|6.vehicle.xlsx|A. `Url`<sub>[Sort: True]</sub><br />B. `Vehicle`|
  |7|Part|6.vehicle.xlsx|`Url`<sup>[1]</sup><br />`Vehicle`<sup>[2]</sup>|7.part.xlsx|A. `No`<sub>[int]</sub><br />B. `Title`<sub>[Sort: True]</sub><br />C. `Vehicle`<sup>[2]</sup><br />D. `Picture`<sub>[null]</sub><br />E. `Url`<sup>[1]</sup><br />F. `Json_Src`<br />G. `Json_Price`<br />H. `Json_Info`<br />I. `Description`<br />J. `Json_Description`|
  |8|Collate|||||
