# 1. About

- [x] [UAC](https://uacparts.com/)
- [x] eg 1: [Heat & Air Conditioning > A/C Receiver Drier / Accumulator > UAC](https://www.rockauto.com/en/parts/uac,a/c+receiver+drier+/+accumulator,6972)
- [x] eg 2: [Heat & Air Conditioning > A/C Compressor > UAC](https://www.rockauto.com/en/parts/uac,a/c+compressor,6628)

- - -

# 2. Procedure

- 先从`RockAuto`爬下来`Part Number`，再去`UAC`官网获取对应信息
- |No|Name|File In|Fields In|File Out|Fields Out|
  |:-:|:-|:-|:-|:-|:-|
  |1|Part_R|input|`Part Number`<sup>[1]</sup>|1.part|A. `Part Number`<sup>[1]</sup><sub>[Sort: True]</sub><br />B. `[UAC] Part Number`<br />C. `[UAC] Picture`<sub>[null]</sub><br />D. `[UAC] Url`<br />E. `[UAC] Json_Src`<br />F. `[UAC] Json_Note`|
  |2|OEM_R|1.part|`[UAC] Part Number`<sup>[1]</sup>|2.oem|A. `Part Number`<sup>\*</sup><sub>[Sort: True]</sub><br />B. `[UAC] Part Number`<sup>[1]</sup><br />C. `[UAC] OEM`<br />D. `[UAC] Picture`<sup>\*</sup><br />E. `[UAC] Url`<sup>\*</sup><br />F. `[UAC] Json_Src`<sup>\*</sup><br />G. `[UAC] Json_Note`<sup>\*</sup>|
  |3|Spec_R|2.oem|`[UAC] Part Number`<sup>[1]</sup>|3.spec|A. `Part Number`<sup>\*</sup><sub>[Sort: True]</sub><br />B. `[UAC] Part Number`<sup>[1]</sup><br />C. `[UAC] OEM`<sup>\*</sup><br />D. `[UAC] Picture`<sup>\*</sup><br />E. `[UAC] Url`<sup>\*</sup><br />F. `[UAC] Json_Src`<sup>\*</sup><br />G. `[UAC] Json_Note`<sup>\*</sup><br />H. `[UAC] Json_Spec`|
  |4|Vehicle_R|1.part|`[UAC] Part Number`<sup>[1]</sup>|4.vehicle|A. `[UAC] Part Number`<sup>[1]</sup><sub>[Sort: True]</sub><br />B. `Vehicle No`<sub>[int、Sort: True]</sub><br />... `UAC兼容表`|
  |5|Collate|||||
