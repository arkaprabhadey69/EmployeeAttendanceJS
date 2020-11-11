//Given Number, Returns day of week
{
    function getWeekDay(number) {
        if (number > 6 || number < 0) {
            console.log("Incorrect number");
        }
        var weekdays = new Array(
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        );
        return weekdays[number];
    }

    console.log(getWeekDay(6));
}
//Given number , returns the number written in words
{
    {
        function getNumberWrittenInWords(number) {
            if (number > 9 || number < 0) {
                console.log("Incorrect number");
            }
            switch (number) {
                case 0:
                    return "Zero";
                case 1:
                    return "One";
                case 2:
                    return "Two";
                case 3:
                    return "Three";
                case 4:
                    return "Four";
                case 5:
                    return "Five";
                case 6:
                    return "Six";
                case 7:
                    return "Seven";
                case 8:
                    return "Eight";
                case 9:
                    return "Nine";
                default:
                    return "Incorrect";
            }
        }

        console.log(getNumberWrittenInWords(7));
    }
}
//Unit conversion
{
    const FEET = 1;
    const INCHES = 2;
    const METER = 3
    function convertFeetInchesUnits(value, type) {
        switch (type) {
            case FEET:
                return value * 12;
            case INCHES:
                return value / 12;
        }
    }
    function convertFeetMeterUnits(value, type) {
        switch (type) {
            case FEET:
                return value * 0.3048;
            case METER:
                return value* 3.28084;
        }
    }
    console.log(convertFeetInchesUnits(6,FEET));
    console.log(convertFeetInchesUnits(72,INCHES));
    console.log(convertFeetMeterUnits(60,FEET));
    console.log(convertFeetMeterUnits(6,METER));
}
//Gambler
{
    let moneyWithGambler = 100;
    const WIN = 1;
    let numberOfWins = 0;
    let numberOfBets = 0;
    while (moneyWithGambler > 0 && moneyWithGambler < 200) {
        let betOutcome = Math.floor(Math.random() * 10) % 2;
        if (betOutcome == WIN) {
            moneyWithGambler++;
            numberOfWins++;
        }
        else {
            moneyWithGambler--;
        }
        numberOfBets++;
    }
    console.log("Number of Bets " + numberOfBets);
    console.log("Number of Wins " + numberOfWins);
}
//Magic number
{
    const prompt = require('prompt-sync')();
    let number = 0;
    while (number < 1 || number > 100) {
        number = parseInt(prompt("Enter a Number Between 1 to 100 Range"));
    }

    let lowerRange = 1;
    let upperRange = 100;
    let middleValue = Math.floor((lowerRange + upperRange) / 2);

    while (middle != number) {
        if (number < middle) {
            upperRange = middle;
            middleValue = Math.floor((lowerRange + upperRange) / 2);
        } else {
            lowerRange = middleValue;
            middleValue = Math.floor((lowerRange + upperRange) / 2);
        }
    }
    console.log("Magic Number " + middle);
}