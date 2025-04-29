let ageNum = [10, 15, 30, 61, 6, 25, 45];
let childAge = 0;
let teenAge = 0;
let adultAge = 0;
let seniorAge = 0;

function AgeCalculator() {
    ageNum.forEach((age) => {
        if (age >= 0  && age <=12) {
            childAge++;
        } 
        else if (age >= 13 && age <= 17) {
            teenAge++;
        }
        else if (age >= 18 && age <= 59) {
            adultAge++;
        }
        else if (age >= 60) {
            seniorAge++;
        }
    });
    console.log('Anak-anak: ' + childAge + ' orang');
    console.log('Remaja: ' + teenAge + ' orang');
    console.log('Dewasa: ' + adultAge + ' orang');
    console.log('Lansia: ' + seniorAge + ' orang');
};

AgeCalculator();



