from flask import Flask
from config import Config
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_moment import Moment
from flask_cors import CORS
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from werkzeug.security import check_password_hash
from flask_sqlalchemy import SQLAlchemy

from .auth.routes import auth
from .shop.routes import shop
from .models import User


app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SQLALCHEMY_DATABASE_URI'] = 'NEED DB TO USE!'
db = SQLAlchemy(app)
app.config['SECRET_KEY'] = 'thisissecretkey'


login = LoginManager()
moment = Moment(app)
CORS(app)




@login.user_loader
def load_user(user_id):
    return User.query.get(user_id)


app.register_blueprint(auth)
app.register_blueprint(shop)

app.config.from_object(Config)


from .models import db

db.init_app(app)
migrate = Migrate(app, db)
login.init_app(app)


login.login_view = 'auth.logMeIn'


from . import routes
from . import models