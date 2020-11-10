//Max Of Expressions
{
    function max(a, b, c) {
        let d = a + (b * c);
        let e = c + (a / b);
        let f = (a % b) + c;
        let g = (a * b) + c;
        if (d > e && d > f && d > g) {
            return d + " is the highest";
        }
        else if (e > d && e > f && e > g) {
            return e + " is the highest";
        }
        else if (f > e && f > d && f > g) {
            return f + " is the highest";
        }
        else {
            return g + " is the highest";
        }
    }
    function min(a, b, c) {
        let d = a + (b * c);
        let e = c + (a / b);
        let f = (a % b) + c;
        let g = (a * b) + c;
        if (d < e && d < f && d < g) {
            return d + " is the minimum";
        }
        else if (e < d && e < f && e < g) {
            return e + " is the minimum";
        }
        else if (f < e && f < d && f < g) {
            return f + " is the minimum";
        }
        else {
            return g + " is the minimum";
        }
    }
    console.log(max(8, 2, 3, 4))
    console.log(min(8, 2, 3, 4))

}
//Max of random numbers
{
    function maxOf5(a, b, c, d, e) {
        result = [];
        result.push(a);
        result.push(b);
        result.push(c);
        result.push(d);
        result.push(e);
        result.sort(function (a, b) { return a - b });
        console.log("Maximum is: " + result[result.length - 1] + " and minimum is: " + result[0]);

    }
    maxOf5(1234, 212, 67, 44, 522);
}
//Check for Leap Year
{
    function isLeap(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    console.log(isLeap(2004));
}
//Check for dates
{
    var dateFrom = "01/01/2019";
    var dateTo = "01/01/2020";
    var dateCheck = "10/11/2019";

    var d1 = dateFrom.split("/");
    var d2 = dateTo.split("/");
    var c = dateCheck.split("/");

    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

    console.log(check > from && check < to)
}
//Head-Tail
{
    function toss() {
        const HEAD = 0;
        const TAIL = 1;
        let toss = Math.floor(Math.random() * 10) % 2;
        switch (toss) {
            case HEAD:
                return "It's a head"
            case TAIL:
                return "It's a tail";
            default:
                return "whatever";
        }
    }
    console.log(toss());
}