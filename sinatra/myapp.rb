require 'sinatra'
# get '/'do 
# erb :index
# end



# get '/:name'do 
#  @name=params["name"].split("")
#  erb :myname_character
# end
# get '/:name/signup' do
#     "I am trying to sign in "
# end
# get '/cars/:name' do
#     "This car is #{params["name"]}"
# end

# # get '/:name/signup/:age' do

#     # age_sum =  "Hello you are :<%=  if params[:age].to_i >= 18; 'Over age' else 'Underage' end%>"
#     # erb age_sum
  
# # end
# # get '/signup2c/' do 
# # <%if @age>= 18 %>
# # <p>Your are old enough to join us</p>
# # <%else%>
# # <p>Just wait for <%=18 - @age%> more years we are waiting<p>

# # <%end%>


# # erb :signup
# # end
# get '/signup/:age' do
#     age = params["age"]
#     @age = age.to_i

#   erb :signup
# end
# get '/name/country/age'do
# @bio= {
#     "name" => ["Alice", "Michael", "Jane", "Clare", "Mary", "John"],
#     "age" => [20, 23, 43, 32, 23, 44],
#     "country" => ["Kenya", "Tanzania", "Ghana", "Uganda", "Ethiopia", "Egypt"]
# }
# erb :peoples_details
#end
get '/sum' do
    erb:sum
  end
  post '/sum' do
    @first_number =params[:first_number].strip
    @second_number =params[:second_number].strip 
    @sum = @first_number.to_f + @second_number.to_f 
    File.open("results.txt", "a+") do |file|
      file.puts(@sum) 
      erb:calculation_results
    end

  end
# get "/calculation_result" do
#     @first_number =params[:first_number].strip
#     @second_number =params[:second_number].strip 
#     @sum = @first_number.to_f + @second_number.to_f 
#     File.open("results.txt", "a+") do |file|
#       file.puts(@sum) 
#   end
#   erb:results
#   end
  get '/all_results' do
    def all_results
    return [] unless File.exist?("results.txt")
    File.read("results.txt").split("\n")
    end
    @all_results= all_results
    erb:all_results
  end
  get "/calculation_results" do
    @first_number =params[:first_number].strip
    @second_number =params[:second_number].strip
    @empty_error = nil
    @invalid_values = nil
  
    if @first_number == nil or @second_number == nil 
      @empty_error = "Kindly enter value "
    end
   regular_expression = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/ 
    if regular_expression.match?(@first_number) and  regular_expression(@second_number)
      @invalid_values = "Kindly Enter Numeric Values Only"
    else
      @sum = @first_number + @second_number
    end 
  
  erb :results
  end
# @@layout

# <html>
# <head>
#     <title></title>
# </head>
# <body>
# <%=yield%>
# </body>
# </html>

# __END__




