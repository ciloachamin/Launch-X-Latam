interface Figura{
    getArea:()=> number
}


class Rectangulo implements Figura{
    //protected solo se usa en esa clase la varible ancho 
    public constructor(protected readonly ancho:number, protected readonly alto:number) {   
    }

    public getArea():number{
        return this.ancho*this.alto
    }
    public toString():string{
        return `Rectangulo con ${this.ancho} y alto de ${this.alto}`
    }
}

class Cuadrado extends Rectangulo{
    public constructor(ancho:number){
        super(ancho,ancho)
    }
    public override toString(): string {
        return `Cuadrado con ${this.ancho} y alto de ${this.alto}`
    }
}

let cuadro = new  Cuadrado(5)
console.log(cuadro.toString())