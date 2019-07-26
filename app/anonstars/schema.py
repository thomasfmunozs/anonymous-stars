from marshmallow import Schema, fields


# Users Schema
class UserSchema(Schema):
    id = fields.Int(required=True)
    username = fields.Str()
    encrypted_pass = fields.Str()
    email = fields.Email()
    options = fields.Str()


# Stars schema
class StarSchema(Schema):
    id = fields.Int(required=True)
    rcv_user = fields.Nested(UserSchema)
    snd_user = fields.Nested(UserSchema)
    comments = fields.Str()
    date = fields.DateTime()
    is_anon = fields.Boolean(falsy=True)
