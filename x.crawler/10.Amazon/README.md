# 1. About

- [x] Head: Aleya
- [x] e.g.: [Best Sellers 100 - Sun Roof Motors](https://www.amazon.com/gp/bestsellers/automotive/15730511/ref=pd_zg_hrsr_automotive)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Page|N/A|param_url<sub>[param]</sub>|1.page.xlsx|A. `Market`<br />B. `Page`<sub>[int、Sort: True]</sub><br />C. `Page Url`|
  |2|Menu_R|1.page.xlsx|<span style="color: violet;">Page Url</span>|2.menu.xlsx|A. <span style="color: teal;">Market</span><br />B. <span style="color: teal;">Page</span><sub>[int、Sort: True]</sub><br />C. <span style="color: violet;">Page Url</span><br />D. `No`<sub>[int、Sort: True]</sub><br />E. `ASIN`|
  |3|Part_R|2.menu.xlsx|param_session_id<sub>[param]</sub><br />param_ubid_main<sub>[param]</sub><br />param_session_token<sub>[param]</sub><br /><span style="color: violet;">ASIN</span>|3.part.xlsx|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. <span style="color: violet;">ASIN</span><br />C. `Parent ASIN`<br />D. `Title`<br />E. `ZIP Code`<br />F. `Price`<br />G. `About`<br />H. `Picture`<sub>[null]</sub><br />I. `Url`<br />J. `Json_Src`<br />K. `Json_Overview`<br />L. `Json_Detail 1`<br />M. `Json_Detail 2`<br />N. `Json_Information 2`<br />O. `Json_Information 2`|
