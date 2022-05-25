import React, { Component } from "react";

class Octal extends Component {
    constructor() {
        super();
        this.state = {
            octal : 0,
            pilihan : "",
            hasil : 0
        }
    }

    convert = () => {
        const octal = this.state.octal
        const decimal = parseInt(octal, 8)
        if (this.state.pilihan === "decimal") {
            return this.setState({
                hasil : decimal
            })
        } else if (this.state.pilihan === "biner") {
            return this.setState({
                hasil : decimal.toString(2)
            })
        } else if (this.state.pilihan === "hexadecimal") {
            return this.setState({
                hasil : decimal.toString(16)
            })
        }
    }

    ubahOctal = (event) => {
        this.setState({
            octal : event.target.value
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
                    <div className="card-header bg-secondary text-center text-white">
                    <h3>Konversi Bilangan Octal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Octal</label>
                            <input type="number" className="form-control" onChange={this.ubahOctal}></input>
                        </div>
                        <div className="form-group" onChange={this.ubahPilihan}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="decimal">Decimal</option>
                                <option value="biner">Biner</option>
                                <option value="hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-info form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Octal;