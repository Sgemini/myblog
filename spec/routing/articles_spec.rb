require 'rails_helper'

describe 'article route spec' do
  it 'routes get articles to the articles controller index' do
    expect(get('articles')).to route_to('articles#index')
  end
end
