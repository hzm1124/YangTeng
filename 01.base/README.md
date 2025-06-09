# TOC:

- [《1.Python环境搭建-20240619-V1.0》](#1-python环境搭建)

- - -

## 1. 《Python环境搭建》

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
  