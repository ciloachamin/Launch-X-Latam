function subtractor(){
    this.subtract =function(numberA,numberB){
        return (numberA - numberB);
    }
}

module.exports= new subtractor();