import React, { Component } from "react";

class Decimal extends Component {
    constructor() {
        super();
        this.state = {
            decimal : 0,
            pilihan : "biner",
            hasil : 0
        }
    }

    convert = () => {
        const decimal = +this.state.decimal
        if (this.state.pilihan === "biner") {
            return this.setState({
                hasil : decimal.toString(2)
            })
        } else if (this.state.pilihan === "octal") {
            return this.setState({
                hasil : decimal.toString(8)
            })
        } else if (this.state.pilihan === "hexadecimal") {
            return this.setState({
                hasil : decimal.toString(16)
            })
        }
    }

    ubahDecimal = (event) => {
        this.setState({
            decimal : event.target.value
        })
    }

    ubahPilihan = (event) => {
        this.setState({
            pilihan : event.target.value
        })
    }

    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                    <h3>Konversi Bilangan Desimal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Decimal</label>
                            <input type="number" className="form-control" onChange={this.ubahDecimal}></input>
                        </div>
                        <div className="form-group" onChange={this.ubahPilihan}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="biner">Biner</option>
                                <option value="octal">Octal</option>
                                <option value="hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-secondary text-white form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Decimal;