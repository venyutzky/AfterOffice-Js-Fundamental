const readline = require('readline');

const penjumlahan = (a, b) => a + b;
const pengurangan = (a, b) => a - b;
const perkalian = (a, b) => a * b;
const pembagian = (a, b) => a / b ;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Pilih operasi yang digunakan:');
console.log('1. Penjumlahan');
console.log('2. Pengurangan');
console.log('3. Perkalian');
console.log('4. Pembagian');

rl.question('Pilih operasi (1/2/3/4): ', (operation) => {
    rl.question('Masukkan angka pertama: ', (num1) => {
        rl.question('Masukkan angka kedua: ', (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let result;

            switch (operation) {
                case '1':
                    result = penjumlahan(num1, num2);
                    break;
                case '2':
                    result = pengurangan(num1, num2);
                    break;
                case '3':
                    result = perkalian(num1, num2);
                    break;
                case '4':
                    result = pembagian(num1, num2);
                    break;
                default:
                    console.log('Operasi tidak valid');
                    rl.close();
                    return;
            }
            console.log(`Hasil: ${result}`);
            rl.close();
        });
    });
});
