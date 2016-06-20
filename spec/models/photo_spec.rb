require 'rails_helper'

RSpec.describe Photo, type: :model do
  describe 'validation' do
    it { is_expected.to belong_to :photo_album }
  end
end
