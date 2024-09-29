# 1. About

- [x] eg 1: [Cabinet and Compartment Bin Assortments](https://www.auveco.com/products/assortments/cabinetandcompartmentbinassortments)
- [x] eg 2: [Body Bolts](https://www.auveco.com/products/bodyhardware/boltsbodyhardware/bodybolts)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Page_R|input.xlsx|<span style="color: violet;">Url</span>|1.page.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Url</span><br />C. `SKU Count`<sub>[int]</sub><br />D. `Page`<sub>[int]</sub>|
  |2|Url_R|1.page.xlsx|`Url`<br />`Page`|2.url|A. `No`<sub>[int]</sub><br />B. `Url`<sub>[Sort: Occurrence]</sub>|
  |3|Part_R|2.url|<span style="color: violet;">Url</span>|3.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `SKU`<br />C. `Title`<br />D. `OEM`<br />E. `Picture`<sub>[null]</sub><br />F. <span style="color: violet;">Url</span><br />G. `Json_Src`<br />H. `Json_Description`|
  |4|Collate|||||
