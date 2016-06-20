class CreatePhotoAlbums < ActiveRecord::Migration
  def change
    create_table :photo_albums do |t|
      t.string :album_name
      t.integer :photo_count,           default: 0
      t.integer :view,                  default: 0
      t.belongs_to :user
      t.timestamps null: false
    end
  end
end
