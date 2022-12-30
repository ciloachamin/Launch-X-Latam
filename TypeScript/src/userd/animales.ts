interface Animal {
    isAlive: boolean
}
//con el extends PODEMOS usar loq ue tenemos dentro
interface Mamifero extends Animal {
    getColorPelo(pelo:string): string
}

interface Perro extends Mamifero{
    getEspecie():string
}

function acariciarAnimal(dog:Perro){
    dog.getColorPelo("cafecito")
}
//con el implements DEBEMOS usar loq ue tenemos dentro
class Gato implements Mamifero{
    isAlive: boolean;
    maullar(){
        return "miau"
    }
    getColorPelo(pelo:string) {
        return pelo
    }
}
/* class Animal{
    comer(comida){
        console.log("Come "+ comida)
    }
}

class Perro extends Animal{
    ladrar(){
        return "woof"
    }
}

const perrito=new Perro()

perrito.comer;
perrito.ladrar();
*/