require 'rails_helper'

RSpec.describe ArticlesController, type: :controller do
  let(:response_json) { JSON(response.body) }
  describe 'GET #index' do
    let(:article) do
      {
        article_list: articles.map do |item|
          {
            title: item.title,
            content: item.content,
            view: item.view,
            user_id: item.user.id
          }
        end
      }
    end

    before(:each) do
      articles = []
      15.times do |i|
        articles << Article.create(title: "#{i} title", content: "#{i} content")
      end
    end

    it 'returns status 200' do
      get :index
      expect(response.status).to eq 200
    end
  end

  describe 'POST #create' do
    context 'when create successfully' do
      before(:each) do
        article = { title: '11', content: '123' }
        post :create, article: article
      end

      it 'returns correct count on article' do
        expect(Article.count).to eq 1
      end

      it 'returns 201 status' do
        expect(response.status).to eq 201
      end

      it 'returns correct message' do
        expect(json_response[:message]).to eq 'save successfully'
      end
    end
  end
end
