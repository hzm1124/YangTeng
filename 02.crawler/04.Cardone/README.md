# 1. About

- [x] Head: Camilla
- [x] e.g.: [Windshield Wiper Motor](https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/?sort=alphaasc&limit=96&page=1)

- - -

# 2. Parameter
- |Name|Value|Function|
  |:-|:-|:-|
  |sort|alphaasc|排序|
  |limit|96|每页数量|
  |page|`variant`|页面编号|

- - -

# 3. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Page_R|N/A|param_url<br />param_count|1.page.xlsx|A. `Page`<sub>[int、Sort: True]</sub><br />B. `Page Url`|
  |2|Url_R|1.page.xlsx|<span style="color: violet;">Page Url</span>|2.url.xlsx|A. <span style="color: teal;">Page</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Page Url</span><br />C. `No`<sub>[int、Sort: True]</sub><br />D. `Url`|
  |3|Part_R|2.url.xlsx|<span style="color: violet;">Url</span>|3.part.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `Part Type`<br />C. `Part Number`<br />D. `Title`<br />E. `Subtitle`<br />F. `Json_Info`<br />G. <span style="color: violet;">Url</span><br />H. `Json_Src`<br />I. `Bundle`|
  |4|Auth_R|3.part.xlsx|<span style="color: violet;">Bundle</span>|4.auth.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Type</span><br />C. <span style="color: teal;">Part Number</span><br />D. <span style="color: teal;">Title</span><br />E. <span style="color: teal;">Subtitle</span><br />F. <span style="color: teal;">Json_Info</span><br />G. <span style="color: teal;">Url</span><br />H. <span style="color: teal;">Json_Src</span><br />I. `Auth`|
  |5|Vehicle_1_R|4.auth.xlsx|<span style="color: violet;">Part Number</span><br /><span style="color: violet;">Auth</span>|5.vehicle_1.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. `Make`<br />D. `Model`<br />E. `Region`<br />F. `Submodel`<br />G. `Year`<br />H. `Aspiration`<br />I. `Cylinder`<br />J. `Displacement`<br />K. `Fuel`<br />L. `Liter`<br />M. `Drive Type`<br />N. `Position`<br />O. `Row`<sub>[int、Sort: True]</sub>|
  |7|OEM_R|4.auth.xlsx|<span style="color: violet;">Part Number</span><br /><span style="color: violet;">Auth</span>|7.oem.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Part Number</span><br />C. `OEM`|
