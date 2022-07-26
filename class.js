//class


class person{
    constructor(firstname,lastname,dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}