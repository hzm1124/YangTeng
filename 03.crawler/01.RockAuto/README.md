# 1. About

- [x] eg 1: [Engine > Timing Chain & Component Kit > MELLING](https://www.rockauto.com/en/parts/melling,timing+chain+&+component+kit,5756)
- [x] eg 2: [Heat & Air Conditioning > A/C Compressor Bypass Pulley > SKP](https://www.rockauto.com/en/parts/skp,a/c+compressor+bypass+pulley,10329)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Part_Number_R|input.xlsx|`Url`|1.part_number|A. `No`<sub>[int]</sub><br />B. `Group`<br />C. `Type`<br />D. `Manufacturer`<br />E. `Part Number`<sub>[Sort: Occurrence]</sub><br />F. `Url`<br />G. `Type Code`|
  |2|Part_R|1.part_number|`Manufacturer`<sup>[1]</sup><br />`Part Number`<sup>[2]</sup><br />`Type Code`<sup>[3]</sup>|2.part|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Group`<sup>\*</sup><br />C. `Type`<sup>\*</sup><br />D. `Manufacturer`<sup>[1]</sup><br />E. `Part Number`<sup>[2]</sup><br />F. `OEM`<br />G. `Picture`<sub>[null]</sub><br />H. `Url`<sup>\*</sup><br />I. `Json_Src`<br />J. `Info`<br />K. `Json_Note 1`<br />L. `Json_Note 2`<br />M. `Choose`<br />N. `Json_Price`<br />O. `Type Code`<sup>[3]</sup><br />P. `Part Code`<br />Q. `JOIN_MPNTCPC`|
  |3|Vehicle_R|2.part|`Manufacturer`<br />`Part Number`<br />`Type Code`<br />`Part Code`|3.vehicle|A. `JOIN_MPNTCPC`<sup>\*</sup><sub>[Sort: True]</sub><br />B. `Vehicle No`<sub>[int、Sort: True]</sub><br />C. `Make`<br />D. `Model`<br />E. `Year`<sub>[int、Sort: False]</sub>|
  |4|Info_R|2.part|`Info`<sup>[1]</sup>|4.info|A. `No`<sup>\*</sup><sub>[int、Sort: True]</sub><br />B. `Group`<sup>\*</sup><br />C. `Type`<sup>\*</sup><br />D. `Manufacturer`<sup>\*</sup><br />E. `Part Number`<sup>\*</sup><br />F. `OEM`<sup>\*</sup><br />G. `Picture`<sup>\*</sup><sub>[null]</sub><br />H. `Url`<sup>\*</sup><br />I. `Json_Src`<sup>\*</sup><br />J. `Info`<sup>[1]</sup><br />K. `Json_Note 1`<sup>\*</sup><br />L. `Json_Note 2`<sup>\*</sup><br />M. `Choose`<sup>\*</sup><br />N. `Json_Price`<sup>\*</sup><br />O. `Json_Specification`<br />P. `Json_Kit`<br />Q. `Type Code`<sup>\*</sup><br />R. `Part Code`<sup>\*</sup><br />S. `JOIN_MPNTCPC`<sup>\*</sup>|
  |5|Collate|||||
  |6|手动创建`6.kit_input`文件夹，并放入需要爬取套件信息的文件|||||
  |7~11|与上述操作类似的套件爬虫|||||
