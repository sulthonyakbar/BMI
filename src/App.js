import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        tinggi: 0,
        berat: 0,
        hasil: "",
    }
}
bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

    BMI = (event) => {
        event.preventDefault();

        let data = {
        tinggi: this.state.tinggi,
        berat: this.state.berat,
        }

        let hasil = data.berat / (data.tinggi * data.tinggi)

        this.setState({
            hasildata: hasil
        })

        if(hasil < 18.5 ){
          this.setState({
              hasil: "Kekurangan berat badan"
          })
      }else if(hasil >= 18.5 && hasil <= 24.9){
          this.setState({
              hasil: "Normal (ideal)"
          })
      }else if(hasil >= 25 && hasil <= 29.9){
          this.setState({
              hasil: "Kelebihan berat badan"
          })
      }else if(hasil >= 30){
          this.setState({
              hasil: "Kegemukan (Obesitas)"
          })
      }
    }
    
render(){
    return(
      <div className="container col-sm-6">
      <div class="card mt-4 mr-5 ml-5">
        <div class="card-header bg-primary text-black">Body Mass Index</div>
         <div class="card-body">

            <form onSubmit={this.BMI}>  

            <div className="form-group">
                <label>Tinggi Badan</label>
                <input type="number" name="tinggi" className="form-control" value={this.state.tinggi} onChange={this.bind} required/>
            </div> 

            <div className="form-group">
                <label>Berat Badan</label>
                <input type="number" name="berat" className="form-control" value={this.state.berat} onChange={this.bind} required />
            </div>

                <button class="btn btn-success" type="submit">Hitung</button>

            </form>
            <hr></hr>
            <div className="alert alert-info">
                <strong><center>{this.state.hasil}</center></strong> 
            </div>
            </div>
        </div>
        </div>
    );
}
}
export default App;
