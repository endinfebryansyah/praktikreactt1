import React, { Component } from "react";

class Bank extends Component {
    constructor() {
        super();
        this.state = {
            nominal : 0,
            bunga : 0,
            periode : 0,
            cicilan : 0
        }
    }

    Hitung = () => {
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;
        let cicilan = (nominal / (periode)) + ((nominal * ((bunga) / 100)) / (periode))
        this.setState({
            cicilan
        });
    }
    
   ubahNominal = (event) => {
       this.setState({
           nominal : event.target.value
       });
   }
   
   ubahBunga = (event) => {
       this.setState({
           bunga : event.target.value
       });
   }

   ubahPeriode = (event) => {
       this.setState({
           periode : event.target.value
       });
   }

   render(){
       return(
           <div className="container col-md-6">
               <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h3>Cicilan Bank</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nominal</label>
                            <input type="number" className="form-control" onChange={this.ubahNominal}></input>
                        </div>
                        <div className="form-group">
                            <label>Bunga</label>
                            <input type="number" className="form-control" onChange={this.ubahBunga}></input>
                        </div>
                        <div className="form-group">
                            <label>Periode</label>
                            <select className="form-control" onChange={this.ubahPeriode}>
                                <option value={3}>3 Bulan</option>
                                <option value={6}>6 Bulan</option>
                                <option value={9}>9 Bulan</option>
                                <option value={12}>12 Bulan</option>
                                <option value={15}>15 Bulan</option>
                                <option value={24}>24 Bulan</option>
                            </select>
                            <div className="form-group">
                                <button className="btn btn-primary form-control" onClick={this.Hitung}>Hitung</button>
                            </div>
                            <h5 className="p-3 form-control text-center">Rp.{this.state.cicilan},00</h5>
                        </div>
                    </div>
               </div>
            </div>
       )
   }
}

export default Bank;