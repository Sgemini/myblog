class CreateMusics < ActiveRecord::Migration
  def change
    create_table :musics do |t|
      t.string :type
      t.datetime :length
      t.belongs_to :music_list
      t.timestamps null: false
    end
  end
end
