import os
import pandas as pd
from tqdm import tqdm

def get_Union_File(path):
    df = pd.DataFrame()

    list_file = list(os.walk(path))[0][2]
    if '.DS_Store' in list_file:
        list_file.remove('.DS_Store')
    if '0.null.txt' in list_file:
        list_file.remove('0.null.txt')

    for file in tqdm(list_file, desc='进度', ncols=77):
        df = pd.concat([df, pd.read_excel(path + '/' + file)], ignore_index=False)

    df = df.drop_duplicates(ignore_index=True)

    return df