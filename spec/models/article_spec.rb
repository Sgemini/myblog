require 'rails_helper'

RSpec.describe Article, type: :model do
  describe 'validation' do
    it { is_expected.to belong_to :user }
    it { is_expected.to have_many :comments }
  end
end
