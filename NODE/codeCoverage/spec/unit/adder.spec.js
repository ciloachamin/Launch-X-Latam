const adder = require('../../service/adder');

describe("Test de division", function(){
    let _numberA;
    let _numberB;

    it("deberia devolver la suma entre numberA y numberB", function(){
        _numberA=8;
        _numberB=10;

        const result = adder.add(_numberA,_numberB)
        expect(result).toEqual(18);

    })
});