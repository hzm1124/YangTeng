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

page.goto('https://ecat.spectrapremium.com/en/parts?line=heaters', timeout=0)
page.wait_for_load_state(state='networkidle')
# sort=part-number
# limit=100

# = = = = = = = = = = = = = = = = = =

list_item = []

# = = = = = = = = = = = = = = = = = =

list_product = page.query_selector_all('xpath=//h2[@class="tuile-produit__code-produit"]')
for product in list_product:
    list_item.append(product.query_selector('xpath=./a').text_content())
print(len(list_item))

# = = = = = = = = = = = = = = = = = =

import pandas as pd

# = = = = = = = = = = = = = = = = = =

pd.DataFrame({'Item': list_item}).to_excel('./item.xlsx', index=False)
browser.close()