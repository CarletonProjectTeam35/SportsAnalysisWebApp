import React, { Component } from "react";
import GaugeChart from "react-gauge-chart";

class Gauge extends Component {
    constructor(
        name,
        numOfLevels,
        value,
        maxValue
    ) {
        super();
        this.name = name;
        this.numOfLevels = numOfLevels;
        this.value = value;
        this.maxValue = maxValue;
        this.percent = this.value / this.maxValue;
    }
    render() {
        return (
            <GaugeChart id= {this.name}
                nrOfLevels={this.numOfLevels}
                percent={this.percent}
             />
        )
    }
}

export default Gauge;