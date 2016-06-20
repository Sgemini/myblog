require 'rails_helper'

RSpec.describe PhotoAlbum, type: :model do
  describe 'validation' do
    it { is_expected.to belong_to :user }
  end
end
