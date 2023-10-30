import random

username = 't19182064816778'
password = 'm0my10ty'
tunnel_host = 'f290.kdltps.com'
tunnel_port = '15818'

def get_Proxy_Requests():
    return {'http': 'http://' + username + ':' + password + '@' + tunnel_host + ':' + tunnel_port,
            'https': 'http://' + username + ':' + password + '@' + tunnel_host + ':' + tunnel_port}

def get_Proxy_Selenium():
    return 'http://' + tunnel_host + ':' + tunnel_port