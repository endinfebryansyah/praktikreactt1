import react, {Component} from 'react';
import Alert from '../Components/Alert';

class BMI extends Component{
    constructor(){
        super();
        this.state= {
            berat : 0,
            tinggi : 0,
            bmi : 0,
            bmiStatus : ""
        }
    }

    Hitung = () => {
        let berat = this.state.berat;
        let tinggi = this.state.tinggi;
        let bmi = berat / (tinggi*tinggi);
        let bmiStatus = "";

        if (bmi < 18.5){
            bmiStatus = "Berat Badan Kurang"
        }
        else if (bmi >= 18.5 && bmi <= 24.9){
            bmiStatus = "Berat Badan Normal"
        }
        else if (bmi >= 25 && bmi <= 29.9){
            bmiStatus = "Berat Badan Berlebihan"
        }
        else{
            bmiStatus = "Obesitas"
        }

        this.setState({
            bmi,
            bmiStatus
        });
    }

    ubahBerat = (event) => {
        this.setState({
            berat : event.target.value
        });
    }
    ubahTinggi = (event) => {
        this.setState({
            tinggi : event.target.value
        });
    }

    Alert = () => {
        if (this.state.bmiStatus === ""){
            return <div></div>;
        }
        if (this.state.bmiStatus === "Berat Badan Kurang"){
            return <alert type="danger" header="Berat Badan Kurang">
                    <p>Kekurangan Berat Badan</p>
                </alert>
        }
        if (this.state.bmiStatus === "Berat Badan Normal"){
            return <alert type="success" header="Berat Badan Normal">
                    <p>Berat Badan Anda Normal</p>
                </alert>
        }
        if (this.state.bmiStatus === "Berat Badan Berlebihan"){
            return <alert type="warning" header="Berat Badan Berlebihan">
                    <p>Kelebihan Berat Badan</p>
                </alert>
        }
        if (this.state.bmiStatus === "Obesitas"){
            return <alert type="danger" header="Obesitas">
                    <p>Anda Mengalami Obesitas</p>
                </alert>
        }        
    }

    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-secondary text-center text-white">
                        <h3>Body Mass Index</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Berat</label>
                            <input type="number" className="form-control" onChange={this.ubahBerat} />
                        </div>
                        <div className="form-group">
                            <label>Tinggi</label>
                            <input type="number" className="form-control" onChange={this.ubahTinggi} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info form-control mb-2" onClick={this.Hitung}>Hitung</button>
                        </div>
                        {/* bmi status with alert bootstrap */}
                        {this.Alert()}
                    </div>
                </div>
            </div>
        );
    }    
}

export default BMI;