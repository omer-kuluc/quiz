let dogruSayisi=0;
let yanlisSayisi=0;

alert('Quize hoşgeldiniz. \nLütfen vereceğiniz cevaplarda yer alan \nkelimenin/ kelimelerin '
  +'ilk harfini büyük yapmaya özen gösterin, aksi halde ' 
  +' verdiğiniz cevap yanlış sayılacaktır');
//soru1
let cevap = prompt("Kanarya adaları hangi ülkeye bağlı bir yerdir ?");
if(cevap=='İspanya'){
  dogruSayisi++;
}
else{
  yanlisSayisi++;
  alert('Yanlış cevap, doğru cevap İspanya olacaktı');
}

//soru2
cevap = prompt("Dünya kupasını en çok kazanan ülke hangisidi ?");
if(cevap=='Brezilya'){
  dogruSayisi++;

}
else{
  alert('Yanlış cevap, doğru cevap Brezilya olacaktı');
  yanlisSayisi++;

}

//soru3
cevap = prompt("'This Must be The Place','Once in a Lifetime','Psycho Killer' hangi grubun şarkılarıdır ?");
if(cevap=='Talking Heads'){
  dogruSayisi++;

}
else{
  alert('Yanlış cevap, doğru cevap İdiot');
  yanlisSayisi++;
}

//soru4
cevap = prompt("Başrollerinde Ella Purnell, Aaron Moten ve Walton Goggins'in yer aldığı 2024 yapımı distopik dizi ?");
if(cevap=='Fallout'){
  dogruSayisi++;

}
else{
  alert('Yanlış cevap, doğru cevap Fallout olacaktı');
  yanlisSayisi++;
}

//soru5
cevap = prompt("En fazla Oscar ödülüne sahip Amerika'lı yapımcı,aktör ve yönetmen kimdir?");
if(cevap=='Walt Disney'){
  dogruSayisi++;

}
else{
  alert('Yanlış cevap, doğru cevap Walt Disney olacaktı');
  yanlisSayisi++;

}

//soru6
cevap = prompt("Dünya'nın ilk mağara kilisesi hangi ilimizdedir ?");
if(cevap=='Hatay'){
  dogruSayisi++;
}
else{
  alert('Yanlış cevap, doğru cevap Hatay olacaktı');
  yanlisSayisi++;
}

//soru7
cevap = prompt("Türkiye Eurovision'da hangi yıl 1. olmuştur ?");
if(cevap=='2003'){
  dogruSayisi++;
}
else{
  alert('Yanlış cevap, doğru cevap 2003 olacaktı.');
  yanlisSayisi++;
}

//soru8
cevap = prompt("Çakısı, çikolatası ve saati ile ünlü ülke hangisidir ?");
if(cevap=='İsviçre'){
  dogruSayisi++;

}
else{
  alert('Yanlış cevap, doğru cevap İsviçre olacaktı.');
  yanlisSayisi++;
}

//soru9
cevap = prompt("Tarihin ilk yazılı antlaşmasının ismi nedir ?");
if(cevap=='Kadeş'){
  dogruSayisi++;

}
else{
  alert('Yanlış cevap, doğru cevap Kadeş olacaktı.');
  yanlisSayisi++;
}

//soru10
cevap = prompt("Wimbledon tenis turnuvasını üste üste 5 kere kazanmış, bir zamanların dünya 1 numarası İsviçre'li tenisçi kimdir ?");
if(cevap=='Roger Federer'){
  dogruSayisi++;

}
else{
  alert('Yanlış cevap, doğru cevap Roger Federer olacaktı.');
  yanlisSayisi++;
}

alert('Doğru sayınız: ' + dogruSayisi + '\nYanlış sayınız: ' + yanlisSayisi);