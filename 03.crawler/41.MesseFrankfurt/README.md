# 1. About

- [x] eg: [MesseFrankfurt](https://automechanika-shanghai.hk.messefrankfurt.com/shanghai/zh-cn/exhibitor-search.html)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Manufacturer_R|||1.manufacturer.xlsx|A. `No`<sub>[int、Sort: True]</sub><br />B. `Name`<br />C. `Presentation`<br />D. `Category`<br />E. `Key Word`<br />F. `Url`<br />G. `Homepage`<br />H. `Json_Social`<br />I. `Last Approval Date`<br />... `MesseFrankfurt展商信息`|
  |2|Product_Url_R|1.manufacturer.xlsx|`Url`<sup>[1]</sup>|2.product_url.xlsx|A. `Url`<sup>[1]</sup><sub>[Sort: True]</sub><br />B. `[Product] No`<sub>[int、Sort: True]</sub><br />C. `[Product] Url`|
  |3|Product_R|2.product_url.xlsx|`[Product] No`<sup>[1]</sup>|3.product.xlsx|A. `Url`<sup>\*</sup><sub>[Sort: True]</sub><br />B. `[Product] No`<sup>[1]</sup><sub>[int、Sort: True]</sub><br />C. `[Product] Name`<br />D. `[Product] Description`<br />E. `[Product] Picture`<sub>[null]</sub><br />F. `[Product] Url`<br />G. `[Product] Json_Src`|
