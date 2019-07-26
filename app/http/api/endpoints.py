# from .middlewares import login_required
from flask import Flask, json, request
from app.anonstars.service import Service as AnonStarService
from app.anonstars.schema import UserSchema, StarSchema
from flask_cors import CORS
from datetime import datetime as date

app = Flask(__name__)
CORS(app)


@app.route("/stars/<start_date>", methods=["GET"])  # @login_required
def starts_list(start_date=None):
    start_date = date.now() if start_date is None else start_date
    return json_response(AnonStarService().find_all_stars(start_date=start_date))


@app.route("/user/<username>/<email>")  # @login_required
def create_user(username=None, email=None):
    if username is None or email is None:
        return 404
    else:
        user_schema = {'username': username, 'email': email}
        user = UserSchema(user_schema)
        AnonStarService().save_user(user)
        return json_response({'status': 'ok'})


@app.route("/user/<username>", methods=["GET"])  # @login_required
def get_user(username=None):
    if username is None:
        return 404

    user = AnonStarService().find_user(username)

    if user:
        return json_response(user)
    else:
        return json_response({'status': 'user not found'}, 404)


@app.route("/users", methods=["GET"])  # @login_required
def user(username=None):
    if username is None:
        return 404

    users = AnonStarService().find_all_user()

    if users:
        return json_response(users)
    else:
        return json_response({'status': 'empty'}, 404)


@app.route("/star/", methods=["POST"])  # @login_required
def add_star():
    if request is None:
        return json_response({'status': 'wrong data'}, 404)
    data = request.data
    form_data = json.loads(data)

    """
    data for stars
    {
        "from": "string:username",
        "to": "string:username",
        "comment": "string:comment about",
        "anon": true
    }
    
    """


def json_response(payload, status=200):
    return json.dumps(payload), status, {'content-type': 'application/json'}


# for test purposes.
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
