from pymongo import MongoClient

COLLECTION_NAME = 'anonymous_stars'
MONGOURL = "mongodb://0.0.0.0:27017/"


class MongoRepository(object):

    def __init__(self):
        self.db = MongoClient(MONGOURL).kudos

    def find_all(self, selector):
        return self.db.anonymous_stars.find(selector)
 
    def find(self, selector):
        return self.db.anonymous_stars.find_one(selector)
 
    def create(self, kudo):
        return self.db.anonymous_stars.insert_one(kudo)

    def update(self, selector, anonstar):
        return self.db.anonymous_stars.replace_one(selector, anonstar).modified_count
 
    def delete(self, selector):
        return self.db.anonymous_stars.delete_one(selector).deleted_count
