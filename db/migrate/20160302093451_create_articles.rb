class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :content
      t.integer :view,                default: 0
      t.belongs_to :user
      t.timestamps null: false
    end
  end
end
