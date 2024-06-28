/*

// # Módulo 3 - FUNCTION RETURN CHALLENGE

Calcular desconto
- Todos os produtos acima de R$ 30,00 tem desconto de 10%

*/

const prices = [10, 244, 99, 2, 20, 33, 250];
let totalOriginalPrice = 0;
let totalDiscountedPrice = 0;

function calculateDiscount(price, discountPercentage) {
  return (price * discountPercentage) / 100;
}

prices.forEach((price) => {
  totalOriginalPrice += price;

  if (price >= 30) {
    const discount = calculateDiscount(price, 10);
    totalDiscountedPrice += price - discount;
  } else {
    totalDiscountedPrice += price;
  }
});

const discountValue = totalOriginalPrice - totalDiscountedPrice;

console.log(
  `Valor da compra: R$ ${totalOriginalPrice.toFixed(
    2
  )}, porém houve um desconto de R$ ${discountValue.toFixed(
    2
  )} e o valor final da compra é R$ ${totalDiscountedPrice.toFixed(2)}.`
);
