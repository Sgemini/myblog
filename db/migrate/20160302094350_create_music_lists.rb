class CreateMusicLists < ActiveRecord::Migration
  def change
    create_table :music_lists do |t|
      t.string :name
      t.integer :count,                  default: 0
      t.belongs_to :user
      t.timestamps null: false
    end
  end
end
