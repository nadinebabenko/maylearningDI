class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }

}
class Mamal extends Animal{
    constructor(name,   color) {
        super(name, "Bamba", color)
    }
    sound(cry){
        return `This marvellous doggo is  ${this.type}. Her name is ${this.name} her color is ${this.color}   and she makes ${cry}`;
    }
}
const Bamba = new Mamal("Bamba" , "brown")
console.log(Bamba)

 const farmerCow  = new Mamal("bobo","pink")
 console.log(farmerCow)