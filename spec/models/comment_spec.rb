require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe 'validation' do
    it { is_expected.to belong_to :article }
  end
end
