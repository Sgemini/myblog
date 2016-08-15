source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'
# Use pgadmin3 as the database for Active Record
gem 'pg'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
# gem 'sass-rails'
gem 'coffee-rails', '~> 4.1.0'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# Use haml as view
gem 'haml'
gem 'config'
gem 'turbolinks'
# avoid the new version bug
gem 'rake', '< 11.0'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'rspec-rails'
  gem 'rspec-its'
  gem 'pry-byebug'
  gem 'rspec-mocks', '~> 3.2.1'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do
  # database_cleaner is not required, but highly recommended
  gem 'database_cleaner'

  # Shoulda Matchers provides RSpec- and Minitest-compatible one-liners that test common Rails functionality.
  gem 'shoulda-matchers', '~> 3.1', require: false

  # Matchers to test before, after and around hooks(currently supports method and object callbacks):
  gem 'shoulda-callback-matchers', '~> 1.1.1'
  gem 'json_spec', '~> 1.1.4'
  gem "rspec"
  gem 'rubocop', require: false
  # Rcov style formatter for SimpleCov
  # gem 'simplecov', require: false
  # gem 'simplecov-rcov', require: false
end
