//1-masala

//function sum(x, y) {
//  return x + y;
//}
//sum(3, 2);

//masala-2

// function toSekunds(minutes) {
//   return minutes * 60;
// }
// console.log(toSekunds(5));

//3-masala

// let argument = +prompt("son");

// const nextInteger = (nextNum) => {
//   return nextNum + 1;
// };
// console.log(nextInteger(argument));

//4-masala

//function uchburchakYuzi(asos, balandlik) {
//  let s = (asos * balandlik) / 2;
//  return s;
//}
//console.log(uchburchakYuzi(3, 2));

//5-masala

// const ageToDays = (year) => {
//   return `${year * 365}`;
// };
// console.log(ageToDays(65));

//6-masala

// const kub = (number) => {
//   return number ** 3;
// };
// console.log(kub(10));

//7-masala

// const numbers = [258, 25, 83];
// const firstElement = (first) => {
//   return first[0];
// };
// console.log(firstElement(numbers));

//8-masala

//const counter = (a, b) => {
//  return a * b;
//};
//console.log(counter(230, 10));

//9-masala .Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.

//function hourToSekunds(hour) {
//  return hour * 3600;
//}

//console.log(hourToSekunds(9));

//10-masala Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang.

//function uchinchiTomon(tomon1, tomon2) {
//  return tomon1 + tomon2 - 1;
//}

//console.log(uchinchiTomon(5, 7));

//11-masala Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang.

//function qoldiq(son1, son2) {
//  return son1 % son2;
//}

//console.log(qoldiq(1, 3));

//12-masala Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab qaytaradigan funksiya yasang. Formula S = bo’yi * eni
//let boyi = 6;
//let eni = 7;

//function turtburchakYuzi(boyi, eni) {
//  return boyi * eni;
//}

//console.log(turtburchakYuzi(boyi, eni));

//13-masala

//function stringQoshish(a) {
//  return "Something" + a;
//}

//console.log(stringQoshish("is better than nothing"));

//14-masala

//const kvadrat = (number) => {
//  return number ** 2;
//};
//console.log(kvadrat(5));

//15-masala .Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

//function noldan(raqam) {
//  if (raqam <= 0) {
//    console.log(true);
//  } else console.log(false);
//}

//noldan(0);

//16-masala Funksiya ko’p  burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180

//function ichkiBurchaklar(n) {
//  return (n - 2) * 180;
//}
//console.log(ichkiBurchaklar(3));

//17-masala. Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

//let result;
//function ochkolar(x, y) {
//  return (result = x * 2 + y * 3);
//}

//console.log(ochkolar(1, 1));

//18-masala

//function nameString(data) {
//  return `"${data} Edabit"`;
//}
//console.log(nameString("Matt"));

//19-masala Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.

//function ikkitaSon(x, y) {
//  if (x + y < 100) {
//    console.log(true);
//  } else {
//    console.log(false);
//  }
//}
//console.log(ikkitaSon(10, 25));

//20-masala

//let numbers = [];
//function newArray(x) {
//  for (let i = 1; i <= x; i++) {
//    numbers.push(i);
//  }
//}
//newArray(5);
//console.log(numbers);

//21-masala Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.
//let result;
//function oyoqlar(tovuq, qoy, sigir) {
//  result = tovuq * 2 + qoy * 4 + sigir * 4;
//}

//oyoqlar(2, 3, 5);
//console.log(result);

//22-masala Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!

//function bolleanOperator(a, b) {
//  if (a == true && b == false) {
//    console.log(false);
//  } else if (a == true && b == true) {
//    console.log(true);
//  } else if (a == false && b == true) {
//    console.log(false);
//  } else {
//    a == false && b == false;
//    console.log(false);
//  }
//}

//bolleanOperator(false, false);

//23-masala .Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala qiymatning ma’lumot turi bir xil bo’lsin.

//function tengMi(x, y) {
//  if (x === y) {
//    console.log(true);
//  } else {
//    console.log(false);
//  }
//}
//tengMi(4, 4);

//24-masala Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta mag’lubiyat = 0 ochko hisoblanadi.

//let result;
//function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//  return (result = yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0);
//}

//console.log(futbolOchko(5, 0, 2));

//25-masala Funskiya soatlar va minutlarni argument sifatida qabul qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib ularning yig’indisini qaytarsin.

// let result;
// function secundlar(soat, minut) {
//   return (result = `${soat * 3600 + minut * 60}`);
// }
// console.log(secundlar(2, 0));

//26-masala

//function fun(a) {
//  if (a != 7) {
//    console.log(false);
//  } else if (a != 7) {
//    console.log(false);
//  } else if (a == 7) {
//    console.log(true);
//  }
//}
//fun(7);

//27-masala Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat qaytarsin.

//function tengMi(x, y) {
//  if (x === y) {
//    console.log(true);
//  } else {
//    console.log(false);
//  }
//}

//tengMi(2, "2");

//28-masala Funksiya boolean qiymat qabul qiladi. Ushbu funksiya boolean qiymatni stringga o’girib qaytarib bersin.

//29-masala Arrow funksiyasini yarating ushbu funksiya shunchaki berilgan qiymatni qaytarsin.

// const arrowFunc = (data) => {
//   return data;
// };
// console.log(arrowFunc("hi"));

//30-masala .Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini qaytarsin.

//function frameSoni(minut, frame) {
//  return minut * 60 * frame;
//}
//console.log(frameSoni(1, 1));

//31-masala .Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.

//32-masala .Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on.

// function counter(n1, n2) {
//   if (n1 == 10 || n2 == 10 || n1 + n2 == 10) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// counter(10, 7);

//33-masala .Mashina kilometriga 10litr benzin ichadi. Mashina doim yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.

//function litrMasofa(km) {
//  return km * 10;
//}

//console.log(litrMasofa(15));

//34-masala

//function number(a, b) {
//  if (a > b) {
//    console.log(a);
//  } else {
//    console.log(b);
//  }
//}

//number(10, 20);

//35-masala Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.

//let array = [];
//function arr(x, y) {
//  return array.push(x, y);
//}

//arr(1, 2);
//console.log(array);

//36-masala Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold yolg’on.

//function tengStrings(str1, str2) {
//  if (str1.length == str2.length) {
//    console.log(true);
//  } else {
//    console.log(false);
//  }
//}

//tengStrings("marjona", "farangiz");

//37-masala .Shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.

//function boshStr(str) {
//  if (str.length == "") {
//    console.log(true);
//  } else {
//    console.log(false);
//  }
//}
//boshStr(" ");

//38-masala Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.

//function bolinsin5(son) {
//  if (son % 5 == 0) {
//    console.log(true);
//  } else {
//    console.log(false);
//  }
//}

//bolinsin5(5);

//39-masala Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.

//function bolinsin100(son) {
//  if (son % 100 == 0) {
//    console.log(true);
//  } else {
//    console.log(false);
//  }
//}

//bolinsin100(1);

//40-masala Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.

//function uzunlik(str) {

//}
