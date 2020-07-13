const LSystem = require('./lsystem.js');

class Dragon extends LSystem {
    constructor() {
        super();
        this.addAlphabet("X");
        this.addAlphabet("Y");
        this.addAlphabet("F");
        this.addAlphabet("+");
        this.addAlphabet("-");


        this.setAxiom("FX");

        this.addProduction("X", "X+YF+");
        this.addProduction("Y", "-FX-Y");
        this.addProduction("F", "F");
        this.addProduction("+", "+");
        this.addProduction("-", "-");

        this.setAngle(Math.PI/2);
    }

    // reset = () => {
    //     this.setAxiom("FX");
    // }
}

module.exports = Dragon;