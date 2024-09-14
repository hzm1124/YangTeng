# 1. About

- [x] eg 1: [TIMING BELT COMPONENT KITS](https://www.gates.com/gb/en/power-transmission/power-transmission-kits/timing-belt-component-kits.html)
- [x] eg 2: [Positive Crankcase Ventilation (PCV) Hose](https://www.gates.com/us/en/search.html?searchType=product&text=Positive+Crankcase+Ventilation+%28PCV%29+Hose)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Product_R|input.xlsx|`Url`|1.product|A. `Product No`<sub>[int、Sort: True]</sub><br />B. `Product Name`<br />C. `Product Number`|
  |2|Page_R|1.product|<span style="color: violet;">Product Number</span>|2.page|A. <span style="color: teal;">Product No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Product Name</span><br />C. <span style="color: violet;">Product Number</span><br />D. `SKU Count`<sub>[int]</sub><br />E. `Page`<sub>[int]</sub>|
  |3|Part_Code_R|2.page|<span style="color: violet;">Product Number</span><br /><span style="color: violet;">Page</span>|3.part_code|A. <span style="color: teal;">Product No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Product Name</span><br />C. <span style="color: violet;">Product Number</span><br />D. <span style="color: teal;">SKU Count</span><br />E. <span style="color: violet;">Page</span><br />F. `No`<sub>[int、Sort: True]</sub><br />G. `Type`<br />H. `Part Code`|
  |4|Part_R|3.part_code|<span style="color: violet;">Product Number</span><br /><span style="color: violet;">Part Code</span>|4.part|A. <span style="color: teal;">Product No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Product Name</span><br />C. <span style="color: violet;">Product Number</span><br />D. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />E. `Part Number`<br />F. <span style="color: teal;">Type</span><br />G. `SKU`<br />H. `UPC`<br />I. `Title`<br />J. `Url`<br />K. `Json_Information`<br />L. <span style="color: violet;">Part Code</span><br />M. `Asset`|
  |5|Src_R|4.part|<span style="color: violet;">Asset</span>|5.src|A. <span style="color: teal;">Product No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Product Name</span><br />C. <span style="color: teal;">Product Number</span><br />D. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />E. <span style="color: teal;">Part Number</span><br />F. <span style="color: teal;">Type</span><br />G. <span style="color: teal;">SKU</span><br />H. <span style="color: teal;">UPC</span><br />I. <span style="color: teal;">Title</span><br />J. `Picture`<sub>[null]</sub><br />K. <span style="color: teal;">Url</span><br />L. `Json_Src`<br />M. <span style="color: teal;">Json_Information</span><br />N. <span style="color: teal;">Part Code</span><br />O. <span style="color: violet;">Asset</span>|
