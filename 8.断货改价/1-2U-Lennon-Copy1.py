#!/usr/bin/env python
# coding: utf-8

# - Update: 2023.04.06
# 
# # 0. 配置参数
# 
# - `out`：保存结果的路径

# In[1]:


out = '断货改价-2U_NOW().xlsx'

# jupyter nbconvert --to script `file`.ipynb
# pyinstaller -F `file`.py
# C:\Users\YangTeng\Desktop\断货改价


# # 1. 选择文件夹

# In[2]:


print('= = = = = = = = = = = = = = = = = =')
folder = input('# 1. 选择文件夹：')


# In[3]:


import os


# In[4]:


try:
    list_file = list(os.walk(folder))[0][2]
    # 根据文件名自动匹配各个文件
    for file in list_file:
        if '替代' in file:
            alternate = folder + '\\' + file
        elif 'MRP' in file:
            mrp = folder + '\\' + file
        elif '划分' in file:
            group = folder + '\\' + file
        elif '改价表' in file:
            stock = folder + '\\' + file
        elif '组合' in file:
            combination = folder + '\\' + file
        elif '2U' in file:
            last = folder + '\\' + file
        elif 'record' in file:
            missing = folder + '\\' + file
        elif '销量' in file:
            sales = folder + '\\' + file

    print(f'\talternate: \t{alternate}')
    print(f'\tmrp: \t\t{mrp}')
    print(f'\tgroup: \t\t{group}')
    print(f'\tstock: \t\t{stock}')
    print(f'\tcombination: \t{combination}')
    print(f'\tlast: \t\t{last}')
    print(f'\tmissing: \t{missing}')
    print(f'\tsales: \t\t{sales}')
    print('    [OK]')
except:
    print('    [ERROR]')
    os.system('pause')
    exit()


# # 2. 整理替代料表

# In[5]:


print('= = = = = = = = = = = = = = = = = =')
print('# 2. 整理替代料表')


# In[6]:


import pandas as pd


# In[7]:


df_alternate = pd.read_excel(alternate,
                             header=1,
                             usecols='G, L, Q, V, AA, AF, AK').fillna('')

df_alternate = df_alternate[df_alternate['替换料1'] != ''].reset_index(drop=True) # 去除没有替代关系的sku

df_alternate


# In[8]:


print('\talternate读取成功')


# In[9]:


# 按列一一匹配，排序后去重
temp_df_alternate = pd.merge(left=df_alternate, right=df_alternate, how='left', left_on='主料SKU', right_on='替换料1', suffixes=('', '_01')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料2'] != ''], how='left', left_on='主料SKU', right_on='替换料2', suffixes=('', '_02')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料3'] != ''], how='left', left_on='主料SKU', right_on='替换料3', suffixes=('', '_03')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料4'] != ''], how='left', left_on='主料SKU', right_on='替换料4', suffixes=('', '_04')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料5'] != ''], how='left', left_on='主料SKU', right_on='替换料5', suffixes=('', '_05')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料6'] != ''], how='left', left_on='主料SKU', right_on='替换料6', suffixes=('', '_06')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料2'] != ''], how='left', left_on='替换料1', right_on='替换料2', suffixes=('', '_12')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料3'] != ''], how='left', left_on='替换料1', right_on='替换料3', suffixes=('', '_13')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料4'] != ''], how='left', left_on='替换料1', right_on='替换料4', suffixes=('', '_14')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料5'] != ''], how='left', left_on='替换料1', right_on='替换料5', suffixes=('', '_15')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料6'] != ''], how='left', left_on='替换料1', right_on='替换料6', suffixes=('', '_16')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料3'] != ''], how='left', left_on='替换料2', right_on='替换料3', suffixes=('', '_23')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料4'] != ''], how='left', left_on='替换料2', right_on='替换料4', suffixes=('', '_24')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料5'] != ''], how='left', left_on='替换料2', right_on='替换料5', suffixes=('', '_25')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料6'] != ''], how='left', left_on='替换料2', right_on='替换料6', suffixes=('', '_26')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料4'] != ''], how='left', left_on='替换料3', right_on='替换料4', suffixes=('', '_34')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料5'] != ''], how='left', left_on='替换料3', right_on='替换料5', suffixes=('', '_35')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料6'] != ''], how='left', left_on='替换料3', right_on='替换料6', suffixes=('', '_36')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料5'] != ''], how='left', left_on='替换料4', right_on='替换料5', suffixes=('', '_45')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料6'] != ''], how='left', left_on='替换料4', right_on='替换料6', suffixes=('', '_46')).fillna('')
temp_df_alternate = pd.merge(left=temp_df_alternate, right=df_alternate[df_alternate['替换料6'] != ''], how='left', left_on='替换料5', right_on='替换料6', suffixes=('', '_56')).fillna('')

num = len(temp_df_alternate.columns)
for i in range(len(temp_df_alternate)):
    list_row = list(set(temp_df_alternate.loc[i]))
    if '' in list_row:
        list_row.remove('')
    list_row.sort(reverse=True)
    temp_df_alternate.loc[i] = list_row + [''] * (num - len(list_row))
    
df_alternate = temp_df_alternate.drop_duplicates(ignore_index=True)
df_alternate = df_alternate[['主料SKU', '替换料1', '替换料2', '替换料3', '替换料4', '替换料5', '替换料6']]
df_alternate['location_x'] = [str(i) for i in range(len(df_alternate))]

df_alternate


# In[10]:


print('\talternate整理成功')
print('    [OK]')


# # 3. 计算库存
# ## 3.1 替代料库存

# In[11]:


print('= = = = = = = = = = = = = = = = = =')
print('# 3. 计算库存')


# In[12]:


df_stock = pd.read_excel(stock,
                         header=0,
                         names=['SKU', '当日库存'],
                         usecols='A, F')

df_stock['SKU'] = [i[:-2] if i.endswith('-N') else i for i in df_stock['SKU']] # 处理“-N”
df_stock = df_stock.groupby([df_stock['SKU']], as_index=False).sum()

df_stock


# In[13]:


print('\tstock读取成功')


# In[14]:


df_alternate['当日库存'] = ''
df_alternate = pd.merge(left=df_alternate, right=df_stock, how='left', left_on='主料SKU', right_on='SKU', suffixes=('', '_0')).fillna(0)
df_alternate = pd.merge(left=df_alternate, right=df_stock, how='left', left_on='替换料1', right_on='SKU', suffixes=('', '_1')).fillna(0)
df_alternate = pd.merge(left=df_alternate, right=df_stock, how='left', left_on='替换料2', right_on='SKU', suffixes=('', '_2')).fillna(0)
df_alternate = pd.merge(left=df_alternate, right=df_stock, how='left', left_on='替换料3', right_on='SKU', suffixes=('', '_3')).fillna(0)
df_alternate = pd.merge(left=df_alternate, right=df_stock, how='left', left_on='替换料4', right_on='SKU', suffixes=('', '_4')).fillna(0)
df_alternate = pd.merge(left=df_alternate, right=df_stock, how='left', left_on='替换料5', right_on='SKU', suffixes=('', '_5')).fillna(0)
df_alternate = pd.merge(left=df_alternate, right=df_stock, how='left', left_on='替换料6', right_on='SKU', suffixes=('', '_6')).fillna(0)
df_alternate['当日库存'] = df_alternate['当日库存_0'] + df_alternate['当日库存_1'] + df_alternate['当日库存_2'] + df_alternate['当日库存_3'] + df_alternate['当日库存_4'] + df_alternate['当日库存_5'] + df_alternate['当日库存_6']
df_alternate = df_alternate[['主料SKU', '替换料1', '替换料2', '替换料3', '替换料4', '替换料5', '替换料6', '当日库存', 'location_x']]

df_alternate


# In[15]:


print('\talternate库存计算成功')


# In[16]:


# 提取替代料表中的位置信息，方便后续去重操作
df_temp = df_alternate.copy()[['主料SKU', '当日库存', 'location_x']]
df_temp.columns = ['SKU', '当日库存', 'location_x']
list_df = [df_temp]
df_temp = df_alternate.copy()[['替换料1', '当日库存', 'location_x']]
df_temp.columns = ['SKU', '当日库存', 'location_x']
list_df.append(df_temp)
df_temp = df_alternate.copy()[['替换料2', '当日库存', 'location_x']]
df_temp.columns = ['SKU', '当日库存', 'location_x']
list_df.append(df_temp)
df_temp = df_alternate.copy()[['替换料3', '当日库存', 'location_x']]
df_temp.columns = ['SKU', '当日库存', 'location_x']
list_df.append(df_temp)
df_temp = df_alternate.copy()[['替换料4', '当日库存', 'location_x']]
df_temp.columns = ['SKU', '当日库存', 'location_x']
list_df.append(df_temp)
df_temp = df_alternate.copy()[['替换料5', '当日库存', 'location_x']]
df_temp.columns = ['SKU', '当日库存', 'location_x']
list_df.append(df_temp)
df_temp = df_alternate.copy()[['替换料6', '当日库存', 'location_x']]
df_temp.columns = ['SKU', '当日库存', 'location_x']
list_df.append(df_temp)

df_position = pd.concat(list_df)
df_position = df_position[df_position['SKU'] != ''].reset_index(drop=True)

df_position


# In[17]:


print('\tposition输出成功')
print()


# In[18]:


def DEduplicate(df):
    list_row = list(set(df['location_x'].tolist()))
    if '' in list_row:
        list_row.remove('')
    list_row.sort()
    dict_row = {}
    for row in list_row:
        dict_row[row] = ''
    for i in range(len(df)):
        if df.loc[i, 'location_x'] != '':
            dict_row[df.loc[i, 'location_x']] += df.loc[i, 'SKU'] + ':' + str(i) + ';'
    
    list_duplicated = []
    for i in dict_row:
        list_row = dict_row[i].split(';')[:-1]
        list_row.sort()
        length = len(list_row)
        if length > 1:
            for j in range(length -1):
                list_duplicated.append(list_row[j].split(':')[1])
                
    for i in list_duplicated:
        df = df.drop(int(i))
        
    return df.reset_index(drop=True)


# ## 3.2 组合料库存

# In[20]:


df_combination = pd.read_excel(combination,
                               header=0).fillna('')

df_combination


# In[21]:


print('\tcombination读取成功')


# In[22]:


df_combination = pd.merge(left=df_combination, right=df_position, how='left', left_on='组合SKU', right_on='SKU').fillna('')

df_combination = DEduplicate(df_combination)
    
df_combination


# In[23]:


print('\tcombination去重成功')


# In[24]:


df_combination = pd.merge(left=df_combination, right=df_stock, how='left', left_on='组合料1', right_on='SKU', suffixes=('', '_stock1')).fillna(0)
df_combination = pd.merge(left=df_combination, right=df_stock, how='left', left_on='组合料2', right_on='SKU', suffixes=('', '_stock2')).fillna(0)
df_combination = pd.merge(left=df_combination, right=df_stock, how='left', left_on='组合料3', right_on='SKU', suffixes=('', '_stock3')).fillna(0)
df_combination = pd.merge(left=df_combination, right=df_stock, how='left', left_on='组合料4', right_on='SKU', suffixes=('', '_stock4')).fillna(0)
df_combination = pd.merge(left=df_combination, right=df_stock, how='left', left_on='组合料5', right_on='SKU', suffixes=('', '_stock5')).fillna(0)
df_combination = pd.merge(left=df_combination, right=df_stock, how='left', left_on='组合料6', right_on='SKU', suffixes=('', '_stock6')).fillna(0)
df_combination = pd.merge(left=df_combination, right=df_position, how='left', left_on='组合料1', right_on='SKU', suffixes=('', '_position1')).fillna('')
df_combination = pd.merge(left=df_combination, right=df_position, how='left', left_on='组合料2', right_on='SKU', suffixes=('', '_position2')).fillna('')
df_combination = pd.merge(left=df_combination, right=df_position, how='left', left_on='组合料3', right_on='SKU', suffixes=('', '_position3')).fillna('')
df_combination = pd.merge(left=df_combination, right=df_position, how='left', left_on='组合料4', right_on='SKU', suffixes=('', '_position4')).fillna('')
df_combination = pd.merge(left=df_combination, right=df_position, how='left', left_on='组合料5', right_on='SKU', suffixes=('', '_position5')).fillna('')
df_combination = pd.merge(left=df_combination, right=df_position, how='left', left_on='组合料6', right_on='SKU', suffixes=('', '_position6')).fillna('')

for i in range(len(df_combination)):
    list_stock = []
    for j in range(1, 6+1):
        if df_combination.loc[i, '组合料'+str(j)] != '':
            if df_combination.loc[i, '当日库存_position'+str(j)] != '':
                list_stock.append(df_combination.loc[i, '当日库存_position'+str(j)] / df_combination.loc[i, '需要量'+str(j)])
            else:
                list_stock.append(df_combination.loc[i, '当日库存_stock'+str(j)] / df_combination.loc[i, '需要量'+str(j)])
    df_combination.loc[i, '当日库存'] = int(min(list_stock))

df_combination = df_combination[['组合SKU', '当日库存', 'location_x']]
    
df_combination


# In[25]:


print('\tcombination库存计算成功')


# In[26]:


df_alternate = pd.merge(left=df_alternate, right=df_combination, how='left', left_on='location_x', right_on='location_x', suffixes=('_alternate', '_combination')).fillna(0)
df_alternate['当日库存'] = df_alternate['当日库存_alternate'] + df_alternate['当日库存_combination']
df_alternate = df_alternate[['主料SKU', '替换料1', '替换料2', '替换料3', '替换料4', '替换料5', '替换料6', 'location_x', '当日库存']]

df_alternate


# In[27]:


print('\talternate库存同步成功')


# In[28]:


df_position = pd.merge(left=df_position, right=df_alternate, how='left', left_on='location_x', right_on='location_x', suffixes=('_position', '_alternate'))
df_position['当日库存'] = df_position['当日库存_alternate']
df_position = df_position[['SKU', 'location_x', '当日库存']]

df_position


# In[29]:


print('\tposition库存同步成功')
print('    [OK]')


# # 4. 整理MRP表

# In[30]:


print('= = = = = = = = = = = = = = = = = =')
print('# 4. 整理MRP表')


# In[31]:


df_mrp = pd.read_excel(mrp,
                       header=1,
                       names=['SKU', '品类', '层级', '身份', '未售出周数', '在途总数', 'W7', 'W6', 'W5', 'W4', 'W3', 'W2', 'W1', 'MRP周销'],
                       usecols='B, F, G, I, K, O, U:AA, AC').fillna(0)

df_mrp


# In[32]:


print('\tmrp读取成功')


# In[33]:


df_group = pd.read_excel(group,
                         header=0)

df_group


# In[34]:


print('\tgroup读取成功')


# In[35]:


df_mrp = pd.merge(left=df_mrp, right=df_group, how='left', left_on='品类', right_on='品类')
df_mrp = df_mrp[df_mrp['品类负责人'] == 'Ada'].reset_index(drop=True)

df_mrp


# In[36]:


print('\tmrp中2U组的sku筛选成功')


# In[37]:


df_mrp = pd.merge(left=df_mrp, right=df_position, how='left', left_on='SKU', right_on='SKU').fillna('')

df_mrp = DEduplicate(df_mrp)

df_mrp


# In[38]:


print('\tmrp去重成功')


# In[39]:


df_mrp = pd.merge(left=df_mrp, right=df_stock, how='left', left_on='SKU', right_on='SKU', suffixes=('', '_stock')).fillna(0)
df_mrp = pd.merge(left=df_mrp, right=df_combination, how='left', left_on='SKU', right_on='组合SKU', suffixes=('', '_combination')).fillna(0)
df_mrp['当日库存'] = df_mrp['当日库存_stock'] + df_mrp['当日库存_combination']
df_mrp = df_mrp[['SKU', '品类', '层级', '身份', '未售出周数', '在途总数', 'W7', 'W6', 'W5', 'W4', 'W3', 'W2', 'W1', 'MRP周销', '品类负责人', '当日库存']]

df_mrp


# In[40]:


df_mrp = pd.merge(left=df_mrp, right=df_position, how='left', left_on='SKU', right_on='SKU', suffixes=('_mrp', '_alternate')).fillna('')
df_mrp['当日库存'] = [df_mrp.loc[i, '当日库存_alternate'] if df_mrp.loc[i, '当日库存_alternate'] != '' else df_mrp.loc[i, '当日库存_mrp'] for i in range(len(df_mrp))]
df_mrp = df_mrp[['SKU', '品类', '层级', '身份', '未售出周数', '在途总数', 'W7', 'W6', 'W5', 'W4', 'W3', 'W2', 'W1', 'MRP周销', '品类负责人', '当日库存', 'location_x']]

df_mrp


# In[41]:


print('\tmrp库存计算成功')
print('    [OK]')


# # 5. 确定SKU

# In[42]:


print('= = = = = = = = = = = = = = = = = =')
print('# 5. 确定SKU')


# In[43]:


df_last = pd.read_excel(last,
                        header=1,
                        usecols='C:L').fillna('')

df_last


# In[44]:


print('\tlast读取成功')


# In[45]:


df_last = pd.merge(left=df_last, right=df_position, how='left', left_on='SKU', right_on='SKU').fillna('')

df_last = DEduplicate(df_last)
            
df_last


# In[46]:


print('\tlast去重成功')


# In[47]:


df_temp = df_mrp[df_mrp['location_x'] != ''][['SKU', 'location_x']].reset_index(drop=True)
df_last = pd.merge(left=df_last, right=df_temp, how='left', left_on='location_x', right_on='location_x', suffixes=('_last', '_alternate')).fillna('')
df_last['SKU'] = [df_last.loc[i, 'SKU_alternate'] if df_last.loc[i, 'SKU_alternate'] != '' else df_last.loc[i, 'SKU_last'] for i in range(len(df_last))]
df_last = df_last[['在线SKU', 'SKU', '每周一大账号售价', '第一涨价', '第二涨价', '第三涨价', '第四涨价', '第五涨价', '第六涨价', '第七涨价', 'location_x']]
df_last['累计涨价'] = ''
df_last['note'] = ''

df_last


# In[48]:


print('\tlast的sku转换成功')


# In[49]:


df_temp = pd.concat([df_last[['SKU']], df_mrp[['SKU']]])
df_temp = df_temp.drop_duplicates(keep=False)
list_note_sku = df_temp['SKU'].to_list()

list_note_sku


# In[50]:


list_sku = df_last['SKU'].to_list()
length = len(df_last)
for i in range(len(list_note_sku)):
    if list_note_sku[i] in list_sku:
        df_last.loc[list_sku.index(list_note_sku[i]), 'note'] = 'last'
    else:
        df_last.loc[length, 'SKU'] = list_note_sku[i]
        df_last.loc[length, 'note'] = 'mrp'
        length += 1
        
df_last = df_last.fillna('')

df_last


# In[51]:


print('\tlast的sku添加成功')


# In[52]:


df = pd.merge(left=df_last, right=df_mrp, how='left', left_on='SKU', right_on='SKU', suffixes=('', '_mrp')).fillna('')
df['序号'] = [i+1 for i in range(len(df))]
df['近三个月平均销量'] = ''
df = df[['序号', '层级', '在线SKU', 'SKU', '每周一大账号售价', '第一涨价', '第二涨价', '第三涨价', '第四涨价', '第五涨价', '第六涨价', '第七涨价', '累计涨价', '品类', '品类负责人', '身份', 'MRP周销', '近三个月平均销量', '未售出周数', 'W7', 'W6', 'W5', 'W4', 'W3', 'W2', 'W1', '在途总数', '当日库存', 'note', 'location_x']]

df


# In[53]:


print('\tsku的mrp信息同步成功')
print('    [OK]')


# # 6. 其他信息

# In[54]:


print('= = = = = = = = = = = = = = = = = =')
print('# 6. 其他信息')


# In[55]:


df_missing = pd.read_excel(missing,
                           header=0,
                           names=['SKU', '无Record ID'],
                           usecols='D, F')

df_missing = df_missing.groupby([df_missing['SKU']], as_index=False).sum()

df_missing


# In[56]:


print('\tmissing读取成功')


# In[57]:


df = pd.merge(left=df, right=df_missing, how='left', left_on='SKU', right_on='SKU').fillna(0)

df


# In[58]:


df_missing = pd.merge(left=df_missing, right=df_position, how='left', left_on='SKU', right_on='SKU').fillna('')
df_missing = df_missing[df_missing['location_x'] != ''][['location_x', '无Record ID']]
df_missing = df_missing.groupby([df_missing['location_x']], as_index=False).sum()

df_missing


# In[59]:


df = pd.merge(left=df, right=df_missing, how='left', left_on='location_x', right_on='location_x', suffixes=('_missing', '_alternate')).fillna('')
df['无Record ID'] = [df.loc[i, '无Record ID_alternate'] if df.loc[i, '无Record ID_alternate'] != '' else df.loc[i, '无Record ID_missing'] for i in range(len(df))]

df['实时库存'] = [df.loc[i, '当日库存'] - df.loc[i, '无Record ID'] if df.loc[i, 'note'] != 'last' else '' for i in range(len(df))]
df = df[['序号', '层级', '在线SKU', 'SKU', '每周一大账号售价', '第一涨价', '第二涨价', '第三涨价', '第四涨价', '第五涨价', '第六涨价', '第七涨价', '累计涨价', '品类', '品类负责人', '身份', 'MRP周销', '近三个月平均销量', '未售出周数', 'W7', 'W6', 'W5', 'W4', 'W3', 'W2', 'W1', '在途总数', '无Record ID', '实时库存', '当日库存', 'note', 'location_x']]

df


# In[60]:


print('\t无Record ID同步成功')
print()


# In[61]:


df_sales = pd.read_excel(sales,
                         header=0,
                         usecols='D, F')

df_sales = df_sales.groupby(df_sales['SKU'], as_index=False).sum()

df_sales


# In[62]:


print('\tsales读取成功')


# In[63]:


df = pd.merge(left=df, right=df_sales, how='left', left_on='SKU', right_on='SKU').fillna(0)

df


# In[64]:


df_sales = pd.merge(left=df_sales, right=df_position, how='left', left_on='SKU', right_on='SKU').fillna('')
df_sales = df_sales[df_sales['location_x'] != ''][['location_x', '购买数量']]
df_sales = df_sales.groupby([df_sales['location_x']], as_index=False).sum()

df_sales


# In[65]:


df = pd.merge(left=df, right=df_sales, how='left', left_on='location_x', right_on='location_x', suffixes=('_sales', '_alternate')).fillna('')
df['购买数量'] = [df.loc[i, '购买数量_alternate'] if df.loc[i, '购买数量_alternate'] != '' else df.loc[i, '购买数量_sales'] for i in range(len(df))]

df = df[['序号', '层级', '在线SKU', 'SKU', '每周一大账号售价', '第一涨价', '第二涨价', '第三涨价', '第四涨价', '第五涨价', '第六涨价', '第七涨价', '累计涨价', '品类', '品类负责人', '身份', 'MRP周销', '近三个月平均销量', '未售出周数', 'W7', 'W6', 'W5', 'W4', 'W3', 'W2', 'W1', '在途总数', '无Record ID', '实时库存', '当日库存', '购买数量', 'note', 'location_x']]

df


# In[66]:


print('\t购买数量同步成功')


# In[1]:


df.to_excel(folder+'\\'+out, index=False)


# In[ ]:





# In[ ]:


os.system('pause')

