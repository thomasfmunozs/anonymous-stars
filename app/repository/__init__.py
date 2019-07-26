class Repository(object):
 def __init__(self, adapter=None):
   self.client = adapter()

 def find_all(self, selector):
   return self.client.find_all(selector)
 
 def find(self, selector):
   return self.client.find(selector)
 
 def create(self, anonstar):
   return self.client.create(anonstar)
  
 def update(self, selector, anonstars):
   return self.client.update(selector, anonstars)
  
 def delete(self, selector):
   return self.client.delete(selector)