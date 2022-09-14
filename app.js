console.log("Merhabaaaa");
// bir user nesnesi oluşturalım

/*
1-name
2 surname
3 -age
4 username
5-password
6 interests[] array ilgi alanları 
7-expenses [] harcamalar array olacak
8- address nesne olsun 
8-1 country
8-2 city


*/

let user = {
  name: "Mustafa",
  surname: "Öztürk",
  age: 34,
  username: "musti",
  password: "123",
  interests: ["sinema", "felsefe", "müzik"],
  expenses: [100, 60, 259, 45, 12],
  address: {
    country: "Türkiye",
    city: "Ankara",
  },
};

console.log(user.address);
////// Toplama Fonksiyonu////////////////
function toplamHarcama() {
  let toplam = 0;
  for (let i = 0; i < user.expenses.length; i++) {
    toplam += user.expenses[i];
  }
  return toplam;
}

// console.log(toplamHarcama());

let toplamHarcama2 = function () {
  let toplam = 0;
  user.expenses.forEach((x) => (toplam += x));

  console.log(toplam);
};

let toplamHarcama5 = () => {
  let toplam = 0;
  user.expenses.forEach((x) => (toplam += x));

  console.log(toplam);
};

// toplamHarcama2();

function toplamHarcama3(array) {
  let toplam = 0;
  for (let i = 0; i < array.length; i++) {
    toplam += array[i];
  }
  console.log(toplam);
}

// toplamHarcama3(user.expenses);
function toplamHarcama4() {
  let array = user.expenses;

  console.log(array.reduce((x, y) => x + y));
}

toplamHarcama4();

////// Login fonksiyonu////////////////

function login(username, password) {
  //   let funame = prompt("username:");
  //   let fpassword = prompt("password:");
  if (funame == username && password == fpassword)
    console.log("giriş başarılı");
  else console.log("kullanıcı adı veya şifre hatalı");
}

// login(user.username, user.password);

function login2(username, password) {
  if (user.username === username && user.password === password) {
    console.log("giriş başarılı");
  } else {
    console.log("kullanıcı adı veya şifre hatalı");
  }
}

login2("musti", 123);

/*
expanses her bir değerine 10 tl ekleyelim  ==for değilde stream
interest başına 1 değer sonuna bir değer ekleyelim
interestin başından sonundan bir değer çıkartalım 
interestin 1.indexden sonra 2 elaman getilreim 
interestin içinden   1 indexden itibaren 2 değer çıkartalım 




*/
user.expenses.forEach((c) => console.log(c));

let array = user.expenses.map((x) => {
  return x + 10;
});
// let array2 = user.expenses.map((x) => x + 10);
console.log(array);

user.interests.push("sörf");
user.interests.unshift("resim");
console.log(user.interests);

// ctrl+k+c yorum satırına alır
// ctrl+ö
// ctrl+k+u yorum satırındançıkartır

// user.interests.shift();
// console.log(user.interests);
// user.interests.pop();
// console.log(user.interests);
// console.log(user.interests.slice(1, 3));
// console.log(user.interests.slice(2));
// user.interests.splice(1, 2);
// user.interests.splice(1, 1);
// user.interests.splice(1);

// user.interests.splice(1, 1, "Dans");
// console.log(user.interests);

// bir fonksiyon yazacağız not hesaplama
/*
    vizenin yüzde 40 finalin yüzde 60

    ortalama 80 den buyuk ise başarılı
    ortlaama 60dan buyuk ise geçtiniz
    ortalama 50den buyuk eşit ise otlama ile geçtiniz
    ortlaama 50den küçük ise kaldınız yazan bir fonksiyon ve bunu sayfamızda gösterelim 


*/

function notHesapla() {
  let vize = document.querySelector(".vize");
  let final = document.querySelector(".final");
  let result = document.querySelector(".result");

  let avg = vize.value * 0.4 + final.value * 0.6;
  let value;
  if (avg > 80) {
    value = "Başarılı";
  } else if (avg > 60) {
    value = "Geçtiniz";
  } else if (avg >= 50) {
    value = "Ortalama ile Geçtiniz";
  } else {
    value = "Kaldınız";
  }

  //   result.textContent = ` Sonuc =====> ${value}`;
  result.innerHTML = `<span class="text-danger" >Sonuc =====> ${value} </span>`;
}

function getInterest() {
  let list = document.querySelector("#list");
  user.interests.forEach((x) => {
    list.innerHTML += `<li> ${x}</li> `;
  });
}

function cleanInterest() {
  let list = document.querySelector("#list");
  list.innerHTML = ``;
}
