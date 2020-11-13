class EmployeePayrollData {

    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
        this.email=params[5];
        this.zip=params[6];
    }
    get name() { return this._name; }
    set name(name) { 
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
    get salary(){return this._salary;}
    set salary(salary){
        if(salary>0){
            this._salary=salary;
        }
        else throw 'Incorrect salary';
    }
    get gender(){return this._gender;}
    set gender(gender){
        if(gender=='F'||gender=='M'){
            this._gender=gender;
        }
        else throw 'Incorrect gender';
    }
    get startDate(){return this._startDate;}
    set startDate(startDate){
        if(startDate<new Date()){
            this._startDate=startDate;
        }
        else throw 'Sorry, Future Date';
    }
    get email(){return this._email;}
    set email(email){
        let regEx= RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[(com)|(co)|(net)]+(?:\\.[a-z]{2,}){0,1}$');
        if(regEx.test(email)){
            this._email=email;
        } 
        else throw 'Incorrect email';

    }
    get zip(){return this._zip;}
    set zip(zip){
        let regEx= RegExp('^\\d{3}(\\s{0,1}\\d{3})$');
        if(regEx.test(zip)){
            this._zip=zip;
        } 
        else throw 'Incorrect zip';

    }


    toString() {
        const options={year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate= this.startDate===undefined?"undefined":this.startDate.toLocaleDateString("en-US",options);
        return '\nID: ' + this.id + ' name: ' + this.name + ' salary: ' + this.salary+ ' gender: '+ this.gender+' startDate: '+ empDate+ ' email: '+this.email+' pincode: '+this.zip;
    }

}
//let employeePayrollData= new EmployeePayrollData(1,"Arka",52000,'M',new Date('2019-09-13'),'abc@yahoo.com',700026);
//console.log(employeePayrollData.toString());
try{
    let employeePayrollData= new EmployeePayrollData(1,"Arka",52000,'M',new Date('2019-09-13'),'abc@yahoo.com',700026);
    let employeePayrollData1= new EmployeePayrollData(1,"Arka",52000,'M',new Date('2019-09-13'),'abc@yahoo.com',700026);
employeePayrollData.name="Orko";
employeePayrollData.id=6;
employeePayrollData.salary=900000;
employeePayrollData.startDate=new Date('2019-09-13');
console.log(employeePayrollData.toString());
let empArray= new Array();
empArray.push(employeePayrollData);
empArray.push(employeePayrollData1);
empArray.filter(employeePayrollData=>employeePayrollData.name=="Orko").forEach(employeePayrollData=>console.log(employeePayrollData.salary));
console.log( empArray.filter(emp=>emp.name=="Arka").reduce((acc, curVal) => acc.concat(curVal), []).length);
    empArray.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1 
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    });
    empArray.forEach(emp=>console.log(emp.name));
}
catch(e){
    console.error(e);

}
// let empArray= new Array();
// empArray.push(employeePayrollData);
// empArray.filter(employeePayrollData=>employeePayrollData.name=="Orko").forEach(employeePayrollData=>console.log(employeePayrollData.salary));
