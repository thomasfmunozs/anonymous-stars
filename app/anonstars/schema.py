from marshmallow import Schema, fields

class StarReviewSchema(Schema):
  id = fields.Int(required=True)
  repo_name = fields.Str()
  full_name = fields.Str()
  language = fields.Str()
  description = fields.Str()
  repo_url = fields.URL()

class KudoSchema(StarReviewSchema):
  user_id = fields.Email(required=True)