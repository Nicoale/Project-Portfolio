const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&')
function getDetails() { 
    let dname =document.getElementById("name").value
    let damount=document.getElementById("amount").value
    let date =document.getElementById("date").value
    fetch("/deposits", {
        method:"POST",
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body: toUrlEncoded({ name :dname, amount :damount, date: date})
    }).then(function(data) {
            console.log(data)
        })
 }
 let data= fetch ('deposits/all',{"2017-01-01": 11, "2017-01-02": 6})
 new Chartkick.LineChart("chart-1",data, {xtitle: "Time", ytitle: "Population", colors: ["purple"]} )
