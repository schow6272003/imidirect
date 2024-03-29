source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Angularjs
gem 'angularjs-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# "angular ui router templates"
gem 'angular-rails-templates'


# Twitter-bootsrap
gem 'twitter-bootstrap-rails', :git => 'git://github.com/seyhunak/twitter-bootstrap-rails.git'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'bootstrap-sass', '~> 3.3.1'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

gem 'normalize-rails'

gem "less-rails"

# PDF gems
gem 'prawn'

gem 'pdf-forms'

gem 'pdf-reader'

gem 'combine_pdf'


# API key encriptions 
gem 'figaro'

# Stripe payment gem
gem 'stripe', :git => 'https://github.com/stripe/stripe-ruby'


# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :test do
  gem 'minitest-reporters', '1.0.5'
  gem 'mini_backtrace',     '0.1.3'
  gem 'guard-minitest',     '2.3.1'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring',     '~> 1.3.5'

  # Rspec
  gem "rspec-rails"

end

group :production do
  gem 'rails_12factor', '0.0.2'
end

ruby "2.2.0"
