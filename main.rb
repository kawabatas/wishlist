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

get '/' do
    # @todos = Todo.order("id desc").all
    erb :index
end

get '/toko' do
	erb :toko
end

set :bind, '0.0.0.0'