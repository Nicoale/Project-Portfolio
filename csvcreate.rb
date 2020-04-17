require 'csv'


CSV.open('~/MajorCode/Portfolio/deposit.csv','wb')do |csv|
    csv << CSV.read('./views/deposits.slim')
end
 