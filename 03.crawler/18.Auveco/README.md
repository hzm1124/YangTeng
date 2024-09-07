# 1. About

- [x] eg 1: [Cabinet and Compartment Bin Assortments](https://www.auveco.com/products/assortments/cabinetandcompartmentbinassortments)
- [x] eg 2: [Body Bolts](https://www.auveco.com/products/bodyhardware/boltsbodyhardware/bodybolts)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int、Sort: True]</sub><br />B. `Url`|
  |2|Part_R|1.url|<span style="color: violet;">Url</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `SKU`<br />C. `Title`<br />D. `OEM`<br />E. `Picture`<sub>[null]</sub><br />F. <span style="color: violet;">Url</span><br />G. `Json_Src`<br />H. `Json_Description`|
