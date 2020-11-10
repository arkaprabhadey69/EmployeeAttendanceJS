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
    let empHrs=0;
    empCheck=Math.floor(Math.random()*10)%3;
    empHrs=getWorkingHrs(empCheck);
    let empWage=empHrs*WAGE_PER_HOUR;
    console.log("Employee Wage is: "+ empWage);
}

