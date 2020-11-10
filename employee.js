const IS_ABSENT=0;

let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Absent");
    return;
}
else if(empCheck==1)
{
    console.log("Present");
}