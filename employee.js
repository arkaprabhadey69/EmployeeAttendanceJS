//Method to mark attendance, returns if absent
{
    const IS_ABSENT=0;
    let empCheck=Math.floor(Math.random()*10)%2;
    if(empCheck==IS_ABSENT){
    console.log("Employee is absent");
    return;
}
else if(empCheck==1){
    console.log("Employee is present");
}
}
//Method to calculate wage according to part/full-time
{
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HR=4;
    const FULL_TIME_HR=8;
    const WAGE_PER_HOUR=20;
    const NUM_OF_WORKING_DAYS=20;
    const MAX_HRS_MONTH=100;
    const MAX_WORKING_DAYS=15;
    function getWorkingHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
           return PART_TIME_HR;
            case IS_FULL_TIME:
                return FULL_TIME_HR;
                default:
                    return 0;

    }
}
    let totalEmpHrs=0;
    let totalEmpDays=0
    while(totalEmpDays<MAX_WORKING_DAYS&&totalEmpHrs<=MAX_HRS_MONTH){
        totalEmpDays++;
        let empCheck=Math.floor(Math.random()*10)%3;
        totalEmpHrs+=getWorkingHrs(empCheck);
    }
    let empWage=totalEmpHrs*WAGE_PER_HOUR;
    console.log("Employee Wage is: "+ empWage+" and total hrs: "+ totalEmpHrs+" and total working days is: "+totalEmpDays);
}

