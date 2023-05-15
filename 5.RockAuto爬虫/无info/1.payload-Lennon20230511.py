import pandas as pd

# = = = = = = = = = = = = = = = = = =

index = 0

df = pd.DataFrame(columns=['url',
                           'part_number',
                           'payload'])

# = = = = = = = = = = = = = = = = = =

df_menu = pd.read_excel('./payload_in.xlsx', header=0)
list_url = df_menu['url'].to_list()
list_part_number = df_menu['part_number'].tolist()

# = = = = = = = = = = = = = = = = = =

def on_request(request):
    global index

    if request.url == 'https://www.rockauto.com/catalog/catalogapi.php' and request.post_data.startswith('func=getbuyersguide'):
        df.loc[index, 'payload'] = request.post_data
        print(request.post_data)

# = = = = = = = = = = = = = = = = = =

from playwright.sync_api import sync_playwright

# = = = = = = = = = = = = = = = = = =

proxy = {'server': 'http://j933.kdltps.com:15818',
         'username': 't18126899091866',
         'password': 'kh8hjqtl'}

p = sync_playwright().start()
browser = p.chromium.launch(args=['--start-maximized'],
                            headless=False,
                            # proxy=proxy,
                            chromium_sandbox=True)
context = browser.new_context(no_viewport=True)

page = context.new_page()
page.on('request', on_request)

# = = = = = = = = = = = = = = = = = =

for url, part_number in zip(list_url, list_part_number):
    global index

    print(str(index), end=': ')
    page.goto(url, timeout=0)
    page.wait_for_load_state(state='networkidle')
    df.loc[index, 'url'] = url
    print(url, end='; ')
    df.loc[index, 'part_number'] = part_number
    print(part_number, end='; ')

    list_part = page.query_selector_all('xpath=//span[@title="Buyer\'s Guide"]')
    for part in list_part:
        if part.text_content() == list_part_number:
            part.click()

    index += 1

# = = = = = = = = = = = = = = = = = =

df.to_excel('./payload_out.xlsx', index=False)
browser.close()