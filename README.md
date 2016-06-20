# My blog
  1. day1: set up the enviroment(ror) and the database(postgresql).  
  2. day2: set up the database table and fields.  
    * user(has_many: article, dynamic, photo, photo_album, music, music_list)  
     * nickname: string  
      * email: string  
      * article_counts: integer  
      * avator: string  
    * article(blongs_to: user)  
      * title: string  
      * content: string  
      * view: integer  
      * user_id: integer  
      * create_at: datetime  
    * dynamic(belongs_to: user)  
      * content: string  
      * user_id: integer  
      * create_at: datetime  
    * photo(belongs_to: user, photo album)  
      * url: string  
      * user_id: integer  
      * photo_album_id: integer  
    * photo_album(belongs_to: user, has_many: photo)  
      * user_id: integer  
      * album_name: string  
      * photo_count: integer  
      * view: integer  
    * music(belongs_to: music_list, user)  
      * type: string  
      * music_list_id: integer  
      * length: datetime  
    * music_list(belongs_to: user, has_many: music)  
      * name: string  
      * count: integer  
      * user_id: integer  
  3. day3: generate controller and add a welcome template  
  4. day4: generate article controller and add index spec  
  5. day5: fix question 2 and add rubocop gem  
  6. day6: add create article controller and clean database before run rspec
  7. day7: add some model relationship
    * tag  
    * comment  
  8. day8: add json_response method, and finish the article create method  
  9. day9: fix question 5

# Question
  1. enviroment not set up successfully  
  2. ~~can not use binding.pry and rspec~~  
  3. how to add a boostrap plugin in my project  
  4. ~~how to handle model relationship and write correct rspec~~  
  5. ~~can't run rake it return me "undefined method `last_comment'"~~

# need to do  
  1. design the framework with this project  
  2. set up the virtual machine on my laptop
