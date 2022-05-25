import React, { Component } from "react";

class Biner extends Component {
    constructor() {
        super();
        this.state = {
            biner: 0,
            pilihan: "",
            hasil: 0
        }
    }

    convert = () => {
        const biner = this.state.biner
        const decimal = parseInt(biner, 2)
        if (this.state.pilihan === "decimal") {
            return this.setState({
                hasil : decimal
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

    ubahBiner = (event) => {
        this.setState({
            biner : event.target.value
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
                    <div className="card-header bg-dark text-center text-white">
                    <h3>Konversi Bilangan Biner</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Biner</label>
                            <input type="number" className="form-control" onChange={this.ubahBiner}></input>
                        </div>
                        <div className="form-group" onChange={this.ubahPilihan}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="decimal">Decimal</option>
                                <option value="octal">Octal</option>
                                <option value="hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-secondary form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Biner;