require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'haml'

# ActiveRecord::Base.establish_connection(
#     "adapter" => "sqlite3",
#     "database" => "./myTodo.db"
# )

helpers do
    include Rack::Utils
    alias_method :h, :escape_html
end

# class Todo < ActiveRecord::Base
# end

get '/feed' do
    # @todos = Todo.order("id desc").all
    erb :feed
end
get '/home' do
	erb :home
end
get '/' do
	erb :toko
end
get '/ranking' do
	erb :ranking
end
get '/account' do
	erb :account
end

set :bind, '0.0.0.0'