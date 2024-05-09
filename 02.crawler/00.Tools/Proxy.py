import random
import zipfile

username = 't11496349597780'
password = '2tavn8uw'
tunnel_host = 'v814.kdltps.com'
tunnel_port = '15818'

def get_Proxy_Requests():
    return {'http': 'http://' + username + ':' + password + '@' + tunnel_host + ':' + tunnel_port,
            'https': 'http://' + username + ':' + password + '@' + tunnel_host + ':' + tunnel_port}

def get_Proxy_Selenium(coroutine):
    if coroutine == 'coroutine':
        return './proxy_selenium.zip'
    else:
        manifest_json = '''{"version": "1.0.0",
     "manifest_version": 2,
     "name": "Chrome Proxy",
     "permissions": ["proxy",
                     "tabs",
                     "unlimitedStorage",
                     "storage",
                     "<all_urls>",
                     "webRequest",
                     "webRequestBlocking"],
     "background": {"scripts": ["background.js"]},
     "minimum_chrome_version": "22.0.0"}'''

        background_js = '''var config = {mode: "fixed_servers",
                  rules: {singleProxy: {scheme: "http",
                                        host: "''' + tunnel_host + '''",
                                        port: parseInt(''' + tunnel_port + ''')},
                          bypassList: ["foobar.com"]}};
    chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});
    function callbackFn(details) {
        return {authCredentials: {username: "''' + username + '''",
                                  password: "''' + password + '''"}};}
    chrome.webRequest.onAuthRequired.addListener(callbackFn,
                                                 {urls: ["<all_urls>"]},
                                                 ['blocking']);'''

        with zipfile.ZipFile('proxy_selenium.zip', 'w') as zp:
            zp.writestr("manifest.json", manifest_json)
            zp.writestr("background.js", background_js)

        return './proxy_selenium.zip'