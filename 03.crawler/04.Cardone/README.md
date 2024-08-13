# 1. About

- [x] Head: Camilla
- [x] eg 1: [Windshield Wiper Motor](https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/?sort=alphaasc&limit=96&page=1)
- [x] eg 2: [Driveshaft / Prop Shaft](https://www.cardone.com/drivetrain/driveline-axles/driveshaft-prop-shaft/?limit=96&sort=alphaasc)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int、Sort: True]</sub><br />B. `Url`|
  |2|Part_R|1.url|<span style="color: violet;">Url</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `Type`<br />C. `Part Number`<br />D. `Title`<br />E. `Subtitle`<br />F. `Application Summary`<br />G. `Picture`<sub>[null]</sub><br />H. <span style="color: violet;">Url</span><br />I. `Json_Src`<br />J. `Json_Info`<br />K. `Bundle`|
  |3|Auth_R|2.part|<span style="color: violet;">Bundle</span>|3.auth|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Type</span><br />C. <span style="color: teal;">Part Number</span><br />D. <span style="color: teal;">Title</span><br />E. <span style="color: teal;">Subtitle</span><br />F. <span style="color: teal;">Application Summary</span><br />G. <span style="color: teal;">Picture</span><sub>[null]</sub><br />H. <span style="color: teal;">Url</span><br />I. <span style="color: teal;">Json_Src</span><br />J. <span style="color: teal;">Json_Info</span><br />K. <span style="color: violet;">Bundle</span><br />L. `Auth`|
  |4|OEM_R|3.auth|<span style="color: violet;">Part Number</span><br /><span style="color: violet;">Auth</span>|4.oem|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: teal;">Type</span><br />C. <span style="color: violet;">Part Number</span><br />D. <span style="color: teal;">Title</span><br />E. <span style="color: teal;">Subtitle</span><br />F. <span style="color: teal;">Application Summary</span><br />G. `OEM`<br />H. <span style="color: teal;">Picture</span><sub>[null]</sub><br />I. <span style="color: teal;">Url</span><br />J. <span style="color: teal;">Json_Src</span><br />K. <span style="color: teal;">Json_Info</span><br />L. <span style="color: teal;">Bundle</span><br />M. <span style="color: violet;">Auth</span>|
  |5|Vehicle_R|3.auth|<span style="color: violet;">Part Number</span><br /><span style="color: violet;">Auth</span>|5.vehicle|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">Part Number</span><br />C. <span style="color: violet;">Auth</span><br />D. `Row`<sub>[int、Sort: True]</sub><br />... `Cardone兼容表`|
