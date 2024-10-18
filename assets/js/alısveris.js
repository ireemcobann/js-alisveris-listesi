// Kullanıcıya kaç adet ürün eklemek istediğini soralım
// Kullanıcıdan aldığı cevaba göre ürünleri yazdığında diziye eklesin.
// Console'a tüm ürünleri yazdıralım ve dizi içinde kaç eleman olduğunu yazdıralım.

let products = [];

let numberOfProduct = prompt("kaç adet ürün eklemek istersiniz?");

function listProduct(){
   for( let i =0; i < numberOfProduct; i++) {
      let product = prompt((i + 1) + ".ürünü giriniz.");
      products.push(product);
   }
   console.log(`eklenen ürünler: ${products} \nürün sayınız: ${numberOfProduct}`);
}
listProduct();