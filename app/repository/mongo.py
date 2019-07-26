from pymongo import MongoClient

COLLECTION_NAME = 'anonymous_stars'
MONGOURL = "mongodb://0.0.0.0:27017/"


class MongoRepository(object):

    def __init__(self):
        self.db = MongoClient(MONGOURL).COLLECTION_NAME

    def find_all_stars(self, selector):
        return self.db.stars.find(selector)
 
    def find_star(self, selector):
        return self.db.stars.find_one(selector)
    
    def find_user(self, selector):
        return self.db.users.find_one(selector)
    
    def create_user(self, selector):
        return self.db.users.insert_one(selector)
 
    def create_star(self, star):
        return self.db.stars.insert_one(star)

    def update_star(self, selector, anonstar):
        return self.db.stars.replace_one(selector, anonstar).modified_count
 
    def delete_star(self, selector):
        return self.db.stars.delete_one(selector).deleted_count