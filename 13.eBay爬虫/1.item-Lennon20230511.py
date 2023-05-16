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

page.goto('https://www.ebay.com/', timeout=0)
page.wait_for_load_state(state='networkidle')
# USA - 91710

# = = = = = = = = = = = = = = = = = =

list_item = []

# = = = = = = = = = = = = = = = = = =

list_product = page.query_selector_all('xpath=//div[@class="s-item__image-section"]')[1:]
list_url = [product.query_selector('xpath=./div/a').get_attribute('href') for product in list_product]
list_item = [str(url[:37][-12:]) for url in list_url]

# = = = = = = = = = = = = = = = = = =

import pandas as pd

# = = = = = = = = = = = = = = = = = =

pd.DataFrame({'item': list_item}).to_excel('./item.xlsx', index=False)
browser.close()