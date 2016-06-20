class User < ActiveRecord::Base
  has_many :articles
  has_many :dynamics
  has_many :music
  has_many :music_lists
  has_many :photos
  has_many :photo_albums
end
