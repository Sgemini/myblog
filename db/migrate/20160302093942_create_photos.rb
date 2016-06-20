class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :url
      t.belongs_to :photo_album
      t.timestamps null: false
    end
  end
end
