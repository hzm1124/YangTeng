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

page.goto('https://www.cardone.com/motors/wiper-and-washer/windshield-wiper-motor/', timeout=0)
page.wait_for_load_state(state='networkidle')
# limit=96
# sort=alphaasc

# = = = = = = = = = = = = = = = = = =

list_url = []

# = = = = = = = = = = = = = = = = = =

list_product = page.query_selector_all('xpath=//h4[@class="card-title NoMargin"]/a')
for product in list_product:
    list_url.append(product.get_attribute('href'))
print(len(list_url))

# = = = = = = = = = = = = = = = = = =

browser.close()

# = = = = = = = = = = = = = = = = = =

import pandas as pd

# = = = = = = = = = = = = = = = = = =

pd.DataFrame({'Url': list_url}).to_excel('./url.xlsx', index=False)
