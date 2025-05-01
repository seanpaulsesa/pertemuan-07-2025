console.log("pengenalan Array!");


// 1. Penggenalan Array
let buah = ["apel", "jeruk", "nanas", "pisang"];

console.log(buah); // apel


// 2. Operasi dasar pada Array
buah.push("kiwi","mangga"); // menambah elemen baru di akhir array
console.log("Setelah push:", buah); // apel, jeruk, mangga, pisang, kiwi

buah.pop(); // menghapus elemen terakhir dari array
console.log("Setelah pop:", buah); // apel, jeruk, mangga, pisang

buah.shift(); // menghapus elemen pertama dari array
console.log("Setelah shift:", buah); // jeruk, mangga, pisang   

buah.unshift("apel"); // menambah elemen baru di awal array
console.log("Setelah unshift:", buah); // apel, jeruk, mangga, pisang


// 3. looping melalui Array
console.log("==== Looping menggunakan for: =====");
for (let i = 0; i < buah.length; i++) {
    console.log("buah ke-"+ (i+1) + " adalah " + buah[i]);
}


console.log("==== Looping menggunakan forEach: =====");
buah.forEach(function(item, index) {
    console.log("buah ke-"+ (index+1) + " adalah " + item)
});

//menampilkan di browser
document.write("<h2>Looping menggunakan forEach</h2>");
document.write("array setelah operasi: " + buah.join("<hr>")+ "<br>");
document.write("<ul>");
for (let i = 0; i < buah.length; i++) {
    document.write("<li>Buah ke-" + (i+1) + " adalah " + buah[i] + "</li>");
}
document.write("</ul>");


