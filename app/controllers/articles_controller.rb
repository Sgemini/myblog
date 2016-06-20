class ArticlesController < ApplicationController
  def index
    all_articles = Article.all
    articles_list(all_articles)
  end

  def create
    article = Article.new(article_params)
    if article.save
      render json: { message: 'save successfully' }, status: 201
    else
      render json: { message: article.error }, status: 400
    end
  end

  def destroy
    article = Article.find_by(id: params[:id])
    article.destroy
  end

  private

  def articles_list(all_articles)
    all_articles.map do |article|
      {
        title: article.title,
        content: article.content,
        view: article.view,
        user_id: article.user_id
      }
    end
  end

  def article_params
    params.require(:article).permit(:title, :content)
  end
end
