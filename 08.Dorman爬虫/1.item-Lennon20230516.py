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

# = = = = = = = = = = = = = = = = = =

page.goto('https://www.dormanproducts.com/', timeout=0)
page.wait_for_load_state(state='networkidle')

# = = = = = = = = = = = = = = = = = =

list_url = []

# = = = = = = = = = = = = = = = = = =

list_product = page.query_selector_all('xpath=//div[@class="searchItems-img"]/a')
for product in list_product:
    list_url.append('https://www.dormanproducts.com/' + product.get_attribute('href'))
print(len(list_url))

# = = = = = = = = = = = = = = = = = =

import pandas as pd

# = = = = = = = = = = = = = = = = = =

pd.DataFrame({'url': list_url}).to_excel('./url.xlsx', index=False)
browser.close()