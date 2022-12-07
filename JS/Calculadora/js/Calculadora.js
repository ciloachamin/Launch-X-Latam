class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        let resultado =num1 / num2;
        let numDecimal=this.decimalPlaces(resultado);
        if(numDecimal>12){
            return(resultado.toFixed(11));
        }else{
            return( resultado);
        }
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
    
    decimalPlaces(num) {
        var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) { return 0; } 
        return Math.max(
             0,
             // Number of digits right of decimal point.
             (match[1] ? match[1].length : 0)
             // Adjust for scientific notation.
             - (match[2] ? +match[2] : 0));
      }
      
} 