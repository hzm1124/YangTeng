# 1. About

- [x] eg 1: [Engine > Timing Chain & Component Kit > MELLING](https://www.rockauto.com/en/parts/melling,timing+chain+&+component+kit,5756)
- [x] eg 2: [Fuel & Air > Fuel Tank Cap > MOTORCRAFT](https://www.rockauto.com/en/parts/motorcraft,fuel+tank+cap,5900)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Part_Number_R|input.xlsx|`Url`|1.part_number|A. `No`<sub>[int]</sub><br />B. `Type`<br />C. `Manufacturer`<br />D. `Part Number`<sub>[Sort: Occurrence]</sub><br />E. `Url`<br />F. `Group`<br />G. `Type Code`|
  |2|Part_R|1.part_number|<span style="color: violet;">Manufacturer</span><br /><span style="color: violet;">Part Number</span><br /><span style="color: violet;">Type Code</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Type</span><br />C. <span style="color: violet;">Manufacturer</span><br />D. <span style="color: violet;">Part Number</span><br />E. `Vehicle`<sub>[null]</sub><br />F. `OEM`<br />G. `Picture`<sub>[null]</sub><br />H. <span style="color: teal;">Url</span><br />I. `Json_Src`<br />J. `Info`<br />K. `Choose`<br />L. `Json_Price`<br />M. `Json_Note 1`<br />N. `Json_Note 2`<br />O. <span style="color: teal;">Group</span><br />P. <span style="color: violet;">Type Code</span><br />Q. `Part Code`<br />R. `JOIN_MPNTCPC`|
  |3|Vehicle_R|2.part|<span style="color: violet;">Manufacturer</span><br /><span style="color: violet;">Part Number</span><br /><span style="color: violet;">Type Code</span><br /><span style="color: violet;">Part Code</span>|3.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Part Number</span><br />C. <span style="color: teal;">JOIN_MPNTCPC</span><br />D. `Vehicle No`<sub>[int、Sort: True]</sub><br />E. `Make`<br />F. `Model`<br />G. `Year`<sub>[int、Sort: False]</sub>|
  |4|Info_R|2.part|<span style="color: violet;">Info</span>|4.info|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Type</span><br />C. <span style="color: teal;">Manufacturer</span><br />D. <span style="color: teal;">Part Number</span><br />E. <span style="color: teal;">Vehicle</span><br />F. <span style="color: teal;">OEM</span><br />G. <span style="color: teal;">Picture</span><sub>[null]</sub><br />H. <span style="color: teal;">Url</span><br />I. <span style="color: teal;">Json_Src</span><br />J. <span style="color: violet;">Info</span><br />K. <span style="color: teal;">Choose</span><br />L. <span style="color: teal;">Json_Price</span><br />M. <span style="color: teal;">Json_Note 1</span><br />N. <span style="color: teal;">Json_Note 2</span><br />O. `Json_Specification`<br />P. `Json_Kit`<br />Q. <span style="color: teal;">Group</span><br />R. <span style="color: teal;">Type Code</span><br />S. <span style="color: teal;">Part Code</span><br />T. <span style="color: teal;">JOIN_MPNTCPC</span>|
  |5|Collate|||||
  |6|手动创建`6.kit_input`文件夹，并放入需要爬取套件信息的文件|||||
  |7~11|与上述操作类似的套件爬虫|||||
