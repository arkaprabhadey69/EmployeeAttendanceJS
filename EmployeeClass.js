class EmployeePayrollData {
    salary;
    gender;

    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
    get name() { return this._name; }
    set name(name) { 
        console.log("Setter getting called");
        let regName=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(regName.test(name)){
        this._name = name;
    } 
    else throw 'Incorrect name';
}
    get id() { return this._id; }
    set id(id){
        if(id>0){
            this._id=id;
        }
        else throw 'Incorrect id';
    }
    setSalary(salary){
        if(salary>0){
            this.salary=salary;
        }
        else throw 'Incorrect salary';
    }
    setGender(gender){
        if(gender=='F'||gender=='M'){
            this.gender=gender;
        }
        else throw 'Incorrect gender';
    }

    toString() {
        const options={year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate= this.startDate===undefined?"undefined":this.startDate.toLocaleDateString("en-US",options);
        return '\nID: ' + this.id + ' name: ' + this.name + ' salary: ' + this.salary+ ' gender: '+ this.gender+' startDate: '+ empDate;
    }

}
let employeePayrollData= new EmployeePayrollData(1,"Arka",52000,'M',new Date());
console.log(employeePayrollData.toString());
try{
employeePayrollData.name="Orko";
employeePayrollData.id=6;
employeePayrollData.setSalary(900000);
console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);

}
