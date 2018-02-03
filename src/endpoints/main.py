from aiohttp import web
import aiohttp_jinja2

import jinja2

from pathlib import Path

from routes import setup_routes

from utils import load_config


app = web.Application()

conf = load_config(str(Path('.') / 'config' / 'endpoints.yaml'))
app['config'] = conf

aiohttp_jinja2.setup(
    app, loader=jinja2.FileSystemLoader('endpoints/templates/'))

setup_routes(app=app)

web.run_app(app, host='127.0.0.1', port=8080)