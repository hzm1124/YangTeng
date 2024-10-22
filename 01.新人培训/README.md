# 目录

- [1. 《采购中心爬虫需求处理流程规范》](#1-采购中心爬虫需求处理流程规范)
- [2. 《Python环境搭建》](#2-python环境搭建)

- - -

- - -

## 1. 《采购中心爬虫需求处理流程规范》

- |文件版本|修订日期|修订人|审核人|批准人|修订说明|
  |:-:|:-:|:-:|:-:|:-:|:-:|
  |V1.0|2024/09/04|Lennon|Miang|Joel|初版|
  |||||||

### 目录

- [一、需求整理与提交](#一需求整理与提交)
- [二、邮件与附件格式](#二邮件与附件格式)
- [三、需求处理](#三需求处理)
- [四、其他事项](#四其他事项)

<br />

- 为提高爬虫需求处理的效率，确保信息传达的准确性和工作流程的规范化，现制定如下流程规范。请采购中心各事业部参照执行，并给予配合。

### 一、需求整理与提交

#### 1. 对接负责人自行处理：

- 对于 RockAuto、Dorman、eBay、Cardone、Standard、SpectraPremium、FourSeasons等网站的爬虫需求，因其操作简单且已提供完整代码，原则上由各事业部的对接负责人自行进行爬取。

- 如果在操作中遇到问题，可联系Lennon进行技术支持。

#### 2. 邮件提交需求：

- 对于其他较为复杂的网站爬虫需求，请对接负责人整理需求，以Excel文件形式作为附件发送Lennon，并抄送本部门部长和Joel。

### 二、邮件与附件格式

#### 1. 邮件主题：

- 请注明“【爬虫需求】+部门名称+简要内容”。 例如：“【爬虫需求】项目投放部 - Steering Damper”。

#### 2. 邮件正文：

- 需求描述：简要描述爬虫需求的目标数据。

- 时间要求：请明确需求的时间要求或对紧急程度做出说明。

- 其他说明：包括文件输出样式等特殊要求，都请在邮件正文详述。

#### 3. Excel附件格式要求：

- Excel文件应包含简洁但清晰的爬虫需求信息，第一列为需求序号，第二列为具体的目标网址。<br />![alt pic.png](../04.Lennon/img/file_1.png)

- 请确保每个需求都有明确的网址，避免“爬一下Dorman 家的卡扣”这种含糊不清的描述。

### 三、需求处理

#### 1. 需求处理流程：

- Lennon在收到需求后会进行初步评估，如有疑问会与对接负责人进一步沟通。

- 需求确认后，数据部将安排具体的任务，并尽量在规定的时间内完成。

- 爬虫任务完成后，数据部会通过邮件反馈获取到的数据。

#### 2. 查重处理：

- 如无特殊要求，请各事业部对接负责人自行完成查重工作。

- 如果有特殊的查重需求，请在邮件正文中进行详细说明，并将邮件抄送 Nolan。

### 四、其他事项

- 请对接负责人在提交需求时，尽量确保信息准确，避免因描述不清导致的延误。

- 数据部会对每项爬虫需求进行记录，并定期向采购中心领导汇报进展情况。

- 如有紧急需求或特别事项，请提前告知Lennon，以便及时协调处理。

- - -

- - -

## 2. 《Python环境搭建》

- |文件版本|修订日期|修订人|审核人|批准人|修订说明|
  |:-:|:-:|:-:|:-:|:-:|:-:|
  |V1.0|2024/06/19|Lennon|Miang|Joel|初版|
  |||||||

### 目录

- [一、Python下载和安装](#一python下载和安装)
- [二、虚拟环境](#二虚拟环境)
- [三、Jupyter Notebook](#三jupyter-notebook)
- [四、每次使用](#四每次使用)

### 一、Python下载和安装

1. 打开Python的官方网址[Welcome to Python.org](https://www.python.org/)<br />![alt pic.png](../04.Lennon/img//file_2-1_1.png)

2. 根据实际需要下载相应的“安装程序”（一般选择Windows installer (64-bit)）<br />![alt pic.png](../04.Lennon/img//file_2-1_2.png)

3. 运行下载好的“安装程序”，确认选中下方的复选框，然后点击“Install Now”<br />![alt pic.png](../04.Lennon/img//file_2-1_3.png)

4. 点击“Disable path length limit”取消路径长度限制<br />![alt pic.png](../04.Lennon/img//file_2-1_4.png)

5. 快捷键“WIN+R”打开系统的“运行”窗口，输入“cmd”打开“命令提示符”窗口<br />![alt pic.png](../04.Lennon/img//file_2-1_5.png)

6. 输入“python --version”查看是否安装成功<br />![alt pic.png](../04.Lennon/img//file_2-1_6.png)

### 二、虚拟环境

1. 输入“pip install virtualenv”下载安装“虚拟环境包”<br />![alt pic.png](../04.Lennon/img//file_2-2_1.png)

2. 选定一个路径，然后打开“命令提示符”窗口<br />![alt pic.png](../04.Lennon/img//file_2-2_2.png)

3. 输入“virtualenv venv”创建一个名为“venv”的虚拟环境<br />![alt pic.png](../04.Lennon/img//file_2-2_3_1.png)<br />![alt pic.png](../04.Lennon/img//file_2-2_3_2.png)

4. 进入虚拟环境的路径，然后打开“命令提示符”窗口<br />![alt pic.png](../04.Lennon/img//file_2-2_4.png)

5. 输入“.\Scripts\activate.bat”激活虚拟环境<br />![alt pic.png](../04.Lennon/img//file_2-2_5.png)

6. 命令提示符”窗口增加了“venv”前缀，表示当前处于名为“venv”的Python环境，即虚拟环境激活成功<br />![alt pic.png](../04.Lennon/img//file_2-2_6.png)

### 三、Jupyter Notebook

- 在虚拟环境中输入“pip install notebook”下载安装“Jupyter Notebook包”<br />![alt pic.png](../04.Lennon/img//file_2-3_1.png)<br />![alt pic.png](../04.Lennon/img//file_2-3_2.png)

### 四、每次使用

1. 激活虚拟环境<br />![alt pic.png](../04.Lennon/img//file_2-4_1_1.png)<br />![alt pic.png](../04.Lennon/img//file_2-4_1_2.png)

2. 输入“jupyter notebook”打开Jupyter Notebook<br />![alt pic.png](../04.Lennon/img//file_2-4_2_1.png)<br />![alt pic.png](../04.Lennon/img//file_2-4_2_2.png)<br />![alt pic.png](../04.Lennon/img//file_2-4_2_3.png)
  