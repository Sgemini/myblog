require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validation' do
    it { is_expected.to have_many :articles }
    it { is_expected.to have_many :dynamics }
    it { is_expected.to have_many :music_lists }
    it { is_expected.to have_many :photo_albums }
  end
end
