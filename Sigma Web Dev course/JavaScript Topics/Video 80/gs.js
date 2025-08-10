class User{
    constructor(name){
        //invoke the setter
        this.name = name;
    }
    get name(){
        return this.name;
    }
    set name(value){
        if (value.length<4){
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}
let user = new User("Namit");
console.log(user.name); // Namit    

user = new User("") //  Name is too short