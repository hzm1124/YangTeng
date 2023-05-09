# - Update: 2023.05.09
# - `url`：eBay

# = = = = = = = = = = = = = = = = = =

url = 'https://www.ebay.com/sch/i.html?_ssn=trr-parts&store_name=trrparts&_oac=1&_ul=US&_stpos=91610&_ipg=240&_sop=16'

# = = = = = = = = = = = = = = = = = =

from playwright.sync_api import sync_playwright

# = = = = = = = = = = = = = = = = = =

p = sync_playwright().start()
browser = p.chromium.launch(args=['--start-maximized'],
                            headless=False,
                            # proxy=proxy,
                            chromium_sandbox=True)
context = browser.new_context(no_viewport=True)
context.new_page()

page = context.new_page()
page.goto(url, timeout=0)

# = = = = = = = = = = = = = = = = = =

list_url = []

# = = = = = = = = = = = = = = = = = =

list_product = page.query_selector_all('xpath=//a[@class="s-item__link"]')[1:]
for product in list_product:
     list_url.append(product.get_attribute('href'))

print(len(list_url))

# = = = = = = = = = = = = = = = = = =

import pandas as pd

# = = = = = = = = = = = = = = = = = =

pd.DataFrame({'Product': list_url}).to_excel('./menu-playwright.xlsx', index=False)
print('总数量：' + str(len(list_url)))
browser.close()