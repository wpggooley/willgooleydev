const LSystem = require('./lsystem.js');

class Koch extends LSystem {
    constructor() {
        super();
        this.addAlphabet("F");
        this.addAlphabet("+");
        this.addAlphabet("-");

        this.setAxiom("F");

        this.addProduction("F", "F+F-F-F+F");
        this.addProduction("+", "+");
        this.addProduction("-", "-");

        this.setAngle(Math.PI/2);
    }

    // reset = () => {
    //     this.setAxiom("F")
    // }
}

module.exports = Koch;