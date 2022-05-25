import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Home"

import BMI from "./Aplikasi/BMI"
import Bank from "./Aplikasi/Bank"
import PPN from "./Aplikasi/PPN"
import Binary from "./Aplikasi/Bilangan/Biner"
import Decimal from "./Aplikasi/Bilangan/Decimal"
import Hexadecimal from "./Aplikasi/Bilangan/Hexadecimal"
import Octal from "./Aplikasi/Bilangan/Octal"


class Index extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/bmi" component={BMI}/>
                <Route path="/bank" component={Bank}/>
                <Route path="/ppn" component={PPN}/>
                <Route path="/binary" component={Binary}/>
                <Route path="/decimal" component={Decimal}/>
                <Route path="/hexadecimal" component={Hexadecimal}/>
                <Route path="/octal" component={Octal} />

            </Switch>
        )
    }
}
export default Index