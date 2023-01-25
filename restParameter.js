// menggunakan rest paramenter
// ...numbers merupakan rest parameter
// membuat function calculate dengan parameternya yaitu : operator dan numbers
function calculate(operator, ...numbers) {
    // membuat variabel operator untuk melakukan input data 
    operator = prompt("Enter operator (+, -, *, /, %):", operator);

    // membuat variabel result
    let result;
    
    // melakukan pengulangan menggunakan switch
    switch (operator) {
        // apabila dipilih tambah maka dilakukan operasi pertambahan
        case "+":
            result = numbers.reduce((a, b) => a + b);
            break;
        // apabila dipilih kurang maka akan dilakukan operasi pengurangan
        case "-":
            result = numbers.reduce((a, b) => a - b);
            break;
        // apabila dipilih kali maka akan dilakukan operasi perkalian
        case "*":
            result = numbers.reduce((a, b) => a * b);
            break;
        // apabila dipilih bagi maka akan dilakukan operasi pembagian
        case "/":
            result = numbers.reduce((a, b) => a / b);
            break;
        // apabila dipilih modulus maka akan dilakukan operasi hasil sisa pembagian
        case "%":
            result = numbers.reduce((a, b) => a % b);
            break;
        // selain diatas maka akan menampilkan operasi tersebut tidak valid
        default:
            result = "Invalid operator!";
    }
    // menampilkan pesan alert operasi
    alert(result);
}
// memanggil function calculate dengan melakukan operator dan rest parameter
calculate("", 1, 2, 3, 4, 5); //output: tergantung operator yang digunakan dan hasilnya akan berbeda


// menggunakan spread syntax
function sum(name, ...data){
    let total = 0;
    for(const item of data){
        total += item;
    }
    console.info(`Total ${name} Adalah ${total}`);
}
// ...[] merupakan spread syntax

sum('Laptop', ...[1,2,3,7,4,9,2,8,2,6]);    // output : Total Laptop is 44
sum('Mouse', ...[2,5,2,8,2,8,4,6,0]);   // output : Total Mouse is 37
sum('Keyboard', ...[1,4,7,2,8,3,9,2,3,6]);  // output : Total Keyboard is 45


// menggunakan arguments, dan ini merupakan syntax lama javascript, didalam parameter function hasil () merupakan arguments
function hasil(){
    // membuat variabel total dengan value nya 0;
    let angka = 0;

    // melakukan perulangan dimana variabel index akan dikembalikan ke dalam arguments untuk melakukan iterable
    for(const index of arguments){
        // melakukan operasi total
        angka += index;
    }
    // menampilkan pesan di web
    document.writeln(`Hasilnya adalah ${angka}`);
}
hasil(3,6,2,67,1,7);    // output : 86