console.log("merhaba Kodlama.io")

// JS typesafe değil
// 1-var dolarDun = 9.20
// dolarDun ="Ankara"     

let dolarBugun = 9.30
//3-var dolarDun         // bu şekilde de değer atanmazsa yine undefined olur
                     // var yerine let kullanılıyor artık
let dolarDun = 9.20
{
    let dolarDun = 9.10   // bu şekilde çalışınca ekrana 9.2 basar bunu basmaz ama var olsaydı buu basardı
}
console.log(dolarDun)
//2-var dolarDun = 9.20  // undefined olur.değişken tanımlanınca bellekte yer ayrılır ve sayısal değer ise değeri atanır
                            // dolarDun tanımlanmadan ekrana yazılınca hata vermez ama
                            // js.de tanımlanmamaış bir değişken kullanılmaya çalışılınca undefined olur

const euroDun =11.2
//euroDun = 11  // hata çünkü const ile veri tanımlanınca ona artık başka bişe atayamazsın o artık sabit

console.log(euroDun)
  
//birden fazla veriyi aynı değişkende tutmak için Array kullanılır.
//camelCasing --değişken tanımlama şekli
//PascalCasing --değişken tanımlama şekli

let konutKredileri =["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")
    
}
console.log("</ul>")


{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Konut kredisi</li>
    <li>Kamu Konut kredisi</li>
</ul> */}

console.log(konutKredileri)




