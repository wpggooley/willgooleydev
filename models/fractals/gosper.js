const LSystem = require('./lsystem.js');

class Gosper extends LSystem {
    constructor() {
        super();
        this.addAlphabet("A");
        this.addAlphabet("B");
        this.addAlphabet("+");
        this.addAlphabet("-");
        
        
        this.setAxiom("A");
        
        this.addProduction("A", "A-B--B+A++AA+B-");
        this.addProduction("B", "+A-BB--B-A++A+B");
        this.addProduction("+", "+");
        this.addProduction("-", "-");

        this.setAngle(Math.PI/3);
    }

    // reset = () => {
    //     this.setAxiom('A')
    // }
}

module.exports = Gosper;