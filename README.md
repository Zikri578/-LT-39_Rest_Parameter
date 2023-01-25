# -LT-39_Rest_Parameter

Rest parameter dalam JavaScript adalah fitur yang memungkinkan Anda untuk menerima jumlah parameter yang tidak diketahui pada saat function didefinisikan. Rest parameter digunakan dengan menandai parameter terakhir dengan tiga titik (...) dan akan diterima sebagai array. Contohnya:

    function sum(...numbers) {
      let result = 0;
      for (let number of numbers) {
        result += number;
      }
      return result;
    }
    console.log(sum(1, 2, 3, 4, 5)); // Output: 15

Pada contoh di atas, parameter `"numbers"` menerima jumlah parameter yang tidak diketahui dan menambahkan semua parameter yang diterima menjadi satu hasil. Anda dapat menggabungkan rest parameter dengan parameter biasa, seperti:

    function print(name, ...colors) {
      console.log(name + " likes " + colors.join(", "));
    }
    print("John", "red", "blue", "green"); // Output: "John likes red, blue, green"

Rest parameter harus selalu ditempatkan pada parameter terakhir dalam function, karena javascript tidak mengizinkan rest parameter di tempat lain. Secara keseluruhan, rest parameter dalam javascript membuat function lebih fleksibel dan mudah digunakan. Rest parameter memungkinkan Anda untuk menerima jumlah parameter yang tidak diketahui pada saat function didefinisikan dan mengumpulkan semua parameter yang diterima menjadi array yang dapat digunakan dalam function. Ini membuat kode Anda lebih mudah diatur dan digunakan kembali.

Selain itu, rest parameter juga dapat digunakan dalam kombinasi dengan spread operator untuk menyebar item dari array atau objek lain ke parameter function.

    function myFunc(a, b, ...args) {
      console.log(a, b, args);
    }
    const myArray = [1, 2, 3, 4, 5];
    myFunc(...myArray); // Output: 1 2 [3,4,5]

Pada contoh di atas, spread operator digunakan untuk menyebar item dari array `"myArray"` ke parameter a dan b, sisanya dikumpulkan ke dalam rest parameter `"args"`.

Rest parameter juga dapat digunakan dalam kombinasi dengan destructuring assignment untuk mengelompokkan item dari array atau objek lain ke variabel yang berbeda.

    const [first, second, ...others] = [1, 2, 3, 4, 5];
    console.log(first); // Output: 1
    console.log(second); // Output: 2
    console.log(others); // Output: [3, 4, 5]

Secara keseluruhan, rest parameter dalam javascript membuat function lebih fleksibel dan mudah digunakan. Rest parameter memungkinkan Anda untuk menerima jumlah parameter yang tidak diketahui pada saat function didefinisikan dan mengumpulkan semua parameter yang diterima menjadi array yang dapat digunakan dalam function. Ini membuat kode Anda lebih mudah diatur dan digunakan kembali. Selain itu, rest parameter juga dapat digunakan dalam kombinasi dengan spread operator dan destructuring assignment untuk mengelola data yang diterima dalam function dengan lebih baik. Namun perlu diingat bahwa rest parameter harus ditempatkan pada parameter terakhir dalam function, karena javascript tidak mengizinkan rest parameter di tempat lain.
