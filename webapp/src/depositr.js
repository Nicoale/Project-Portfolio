import React from 'react';
import ReactDOM from 'react-dom';


class DepositsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: '' ,Amount: '', Date: '' };
      }
      myChangeHandler = (event) => {
        this.setState({Name: event.target.value,Amount: event.target.value,Date: event.target.value});
      }
    render() {
      return (
        <form>
          <h1>Deposits</h1>
          <p>Name:</p>
          <input
            type="text" onChange={this.myChangeHandler}
          />
           <p>Amount:</p>
          <input
            type="number"
            onChange={this.myChangeHandler}
          />
           <p>Name:</p>
          <input
            type="Date"
            onChange={this.myChangeHandler}
          />
        </form>
      );
    }
  }
  ReactDOM.render(<DEpositsForm />, document.getElementById('root'));




















































































 const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&')
    function requestAll() { 
    let dname =document.getElementById("name").value
    let damount=document.getElementById("amount").value
    let date =document.getElementById("date").value
    fetch("/deposits/all", {
        method:"POST",
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body: toUrlEncoded({ name :dname, amount :damount, date: date})
    }).then(function(data) {
            console.log(data)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        })
 }
