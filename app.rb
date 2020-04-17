require 'sinatra'
require 'csv'

    get "/" do 
        slim :home
    end

    get '/deposits' do
        slim :deposits
    end

    post'/deposits'do
            puts params[:dname]
            puts params[:damount]
            puts params[:date]
            CSV.open("deposits.csv", "ab") do |csv|
            csv << [params[:dname], params[:damount], params[:date]]
    end
    slim :deposits
    end

    # get '/csv'do 
    #     rb :csvcreate
    # end