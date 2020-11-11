
//Dice_Roll
{
    let diceMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
    while (1) {

        let count10check = false;
        let dice = Math.floor(Math.random() * 6) + 1;
        let newVal = diceMap.get(dice);

        for (let [key, val] of diceMap) {
            if (val == 10) {
                count10check = true;
                break;
            }
        }
        if (count10check == true)
            break;
        newVal++;

        diceMap.set(dice, newVal);
    }

    for (let [key, val] of diceMap) {
        console.log("Dice Index " + key + " and it's value " + val);
    }
    //Finding Min Max
    min_key = Number.POSITIVE_INFINITY;
    min_val = Number.POSITIVE_INFINITY;
    max_key = Number.NEGATIVE_INFINITY;
    max_val = Number.NEGATIVE_INFINITY;
    for (let [key, val] of diceMap) {
        if (val <= min_val) {
            min_key = key;
            min_val = val;
        }
        if (val >= max_val) {
            max_key = key;
            max_val = val;
        }
    }
    let diceArray = Array.from(diceMap.values()).sort(function (a, b) { return a - b });
    let max = diceArray[diceArray.length - 1];
    let min = diceArray[0];
    function getKeyByValue(object, value) {
        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (object[prop] === value)
                    return prop;
            }
        }
    }

    console.log("Minimum Key Value Pair " + getKeyByValue(diceMap, min) + " " + min);
    console.log("Maximum Key Value Pair " + getKeyByValue(diceMap, max) + " " + max);
    console.log("----------------------");
    console.log("Minimum Key Value Pair " + min_key + " " + min_val);
    console.log("Maximum Key Value Pair " + max_key + " " + max_val);
}
//Birth Month

{
    let birthMonthMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
    let birthMonthToNameMap = new Map([[1, "January"], [2, "February"], [3, "March"], [4, "April"], [5, "May"], [6, "June"], [7, "July"], [8, "August"], [9, "September"], [10, "October"], [11, "November"], [12, "December"]]);
    for (let index = 0; index < 50; index++) {
        let personBirthMonth = Math.floor(Math.random() * 12) + 1;
        let newVal = birthMonthMap.get(personBirthMonth);
        newVal++;
        birthMonthMap.set(personBirthMonth, newVal);
    }
    for (let [key, val] of birthMonthMap) {
        console.log("On " + birthMonthToNameMap.get(key) + " "+val + " people have their birthday!");
    }
}