class Repository(object):
  def __init__(self, adapter=None):
    self.client = adapter()

  def find_all_stars(self, selector):
    return self.client.find_all_stars(selector)
 
  def find_star(self, selector):
    return self.client.find_star(selector)

  def find_user(self, selector):
    return self.client.find_user(selector)
  
  def create_user(self, selector):
    return self.client.create_user(selector)
 
  def create_star(self, anonstar):
    return self.client.create_star(anonstar)
  
  def update_star(self, selector, anonstars):
    return self.client.update_star(selector, anonstars)
  
  def delete_star(self, selector):
    return self.client.delete:star(selector)