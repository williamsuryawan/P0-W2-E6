// Perulangan Pertama: Perulangan 1 - 100 dengan pertambahan counter sebanyak 1

console.log("Perulangan Pertama");
for (var i=1; i<=100; i++) {
    if (i % 2 == 0) {
      console.log(i + " Genap");
    } else {
      console.log(i + " Ganjil");
    }
}

// Perulangan Kedua: Perulangan 1 - 100 dengan pertambahan counter sebanyak 2 dengan keterangan Kelipatan 3
console.log("Perulangan Kedua");
for (var j=1; j<=100; j=j+2){
  if (j % 3 == 0) {
    console.log (j + " KELIPATAN 3");
  } else {
    console.log (j);
  }
}

// Perulangan Kedua: Perulangan 1 - 100 dengan pertambahan counter sebanyak 5 dengan keterangan Kelipatan 6
console.log("Perulangan Ketiga");
for (var j=1; j<=100; j=j+5){
  if (j % 6 == 0) {
    console.log (j + " KELIPATAN 6");
  } else {
    console.log (j);
  }
}

// Perulangan Ketiga: Perulangan 1 - 100 dengan pertambahan counter sebanyak 9 dengan keterangan Kelipatan 10
console.log("Perulangan Keempat");
for (var j=1; j<=100; j=j+9){
  if (j % 10 == 0) {
    console.log (j + " KELIPATAN 10");
  } else {
    console.log (j);
  }
}