//base par otras clases
//es como la interfaz pero podemos meterle funcionalidad



abstract class Poligono{
    public abstract getArea():number;
}

class Rectangulo2 extends Poligono{
    public constructor(protected readonly ancho:number, protected readonly alto:number) {   
        super()
    }
    public getArea(): number {
        return this.alto*this.ancho
    }
}

