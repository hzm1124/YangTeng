# 1. About

- [x] eg 1: [BSR - Sun Roof Motors（BSR）](https://www.amazon.com/gp/bestsellers/automotive/15730511/ref=pd_zg_hrsr_automotive)
- [x] eg 2: [Cell Phone Automobile Cradles（BSR）](https://www.amazon.com/gp/bestsellers/wireless/7072562011/ref=pd_zg_hrsr_wireless)

- - -

# 2. Procedure

- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Url_R|input.xlsx|`Url`|1.url|A. `No`<sub>[int]</sub><br />B. `Url`<sub>[Sort: Rank]</sub>|
  |2|Part_R|1.url|<span style="color: violet;">Url</span>|2.part|A. <span style="color: teal;">No</span><sub>[int、Sort: True]</sub><br />B. `Title`<br />C. `About`<br />D. `Price`<br />E. `Picture`<sub>[null]</sub><br />F. <span style="color: violet;">Url</span><br />G. `Json_Src`<br />H. `Zip Code`<br />I. `Parent ASIN`<br />J. `Json_Overview`<br />K. `Json_Technical`<br />L. `Json_Additional`<br />M. `Json_Technical 2`<br />N. `Json_Additional 2`<br />O. `Json_Information`|
  |3|Collate|||||
