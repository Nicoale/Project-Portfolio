require 'sinatra'
require 'csv'
require 'sinara/json'

    get "/" do 
        slim :home
    end

    get '/deposits' do
        slim :deposits
    end

    post '/deposits'do
            puts params[:name]
            puts params[:amount]
            puts params[:date]
            CSV.open("deposits.csv", "ab") do |csv|
            csv << [params[:name], params[:amount], params[:date]]
    end
    slim :deposits
    end

        
    get '/' do
        
    end

    # post 'deposits/all'do
    #     puts params[:name]
    #     puts params[:amount]
    #     puts params[:date]
    #     CSV.open("deposits.csv", "ab") do |csv|
    #     csv << [params[:name], params[:amount], params[:date]]
    # end
    #     slim :deposits
    # end
    