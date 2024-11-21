# 1. About

- [x] eg: [RainX<sup>[oversea]</sup>](https://www.rainx.com/)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Year_R|||1.year.xlsx|A. `Year`<sub>[int、Sort: False]</sub>|
  |2|Make_R|1.year.xlsx|`Year`<sup>[1]</sup>|2.make.xlsx|A. `Year`<sup>[1]</sup><sub>[int、Sort: False]</sub><br />B. `Make No`<sub>[int、Sort: True]</sub><br />C. `Make`|
  |3|Model_R|2.make.xlsx|`Year`<sup>[1]</sup><br />`Make`<sup>[2]</sup>|3.model.xlsx|A. `Year`<sup>[1]</sup><sub>[int、Sort: False]</sub><br />B. `Make No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />C. `Make`<sup>[2]</sup><br />D. `Model No`<sub>[int、Sort: True]</sub><br />E. `Model`|
  |4|Part_R|2.model.xlsx|`Year`<sup>[1]</sup><br />`Make`<sup>[2]</sup><br />`Model`<sup>[3]</sup>|3.part.xlsx|A. `Year`<sup>[1]</sup><sub>[int、Sort: False]</sub><br />B. `Make No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />C. `Make`<sup>[2]</sup><br />D. `Model No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />E. `Model`<sup>[3]</sup><br />F. `Category No`<sub>[int、Sort: True]</sub><br />G. `Category`<br />H. `Category Description`<br />I. `Part No`<sub>[int、Sort: True]</sub><br />J. `Status`<br />K. `Title`<br />L. `Picture`<sub>[null]</sub><br />M. `Url`<br />N. `Json_Src`<br />... `RainX属性`|
  |5|Collate|||||
