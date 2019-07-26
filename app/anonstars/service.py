from ..repository import Repository
from ..repository.mongo import MongoRepository
from .schema import UserSchema, StarSchema


class Service(object):

    def __init__(self):
        self.repo_client = Repository(adapter=MongoRepository)

        if not user_id:
            raise Exception("user id not provided")

    def find_all_stars(self, start_date=None):
        stars = self.repo_client.find_all_stars({'date': {'$gt': start_date}}) if start_date else self.repo_client.find_all_stars({})
        return [self.dump_star(star) for star in stars]

    def find_star(self, rcv_user):
        star = self.repo_client.find_star({'rcv_user': rcv_user})
        return self.dump_star(star)
    
    def find_user(self, username):
        user = self.repo_client.find_user({'username': username})
        return self.dump_user(user)
    
    def save_user(self, user):
        self.repo_client.create_user(user.data)
        return self.dump_user(user)

    def create_star(self, snd_user, rcv_user, comment, is_anon=None):
        data = self.prepare_star(snd_user, rcv_user, comment, is_anon)
        self.repo_client.create_star(data)
        return self.dump_star(data)

    def update_star_with(self, repo_id, starReview):
        records_affected = self.repo_client.update({'user_id': self.user_id, 'repo_id': repo_id}, self.prepare_kudo(starReview))
        return records_affected > 0

    def delete_kudo_for(self, repo_id):
        records_affected = self.repo_client.delete({'user_id': self.user_id, 'repo_id': repo_id})
        return records_affected > 0

    def dump_star(self, data):
        return StarSchema(exclude=['_id']).dump(data).data

    def dump_user(self, data):
        return UserSchema(exclude=['_id']).dump(data).data

    def prepare_star(self, snd_user, rcv_user, comment, is_anon=None):
        if is_anon:
            data = {'rcv_user': rcv_user, 'snd_user': snd_user, 'comments': comments, 'date': new Date(), 'is_anon': is_anon}
        else:
            data = {'rcv_user': rcv_user, 'snd_user': snd_user, 'comments': comments, 'date': new Date()}
        return data