let product_name = "Laptop";

let unit_price = 15000;

let quantity = 2;

let is_member = true;

let subtotal;
let discount = 0;
let shipping = 0;
let final_total;

if (unit_price > 0 && quantity > 0) {
  subtotal = unit_price * quantity;

  if (is_member == true && subtotal >= 1000) {
    discount = (subtotal * 10) / 100;
  }

  let total_after_discount = subtotal - discount;

  if (total_after_discount < 500) {
    shipping = 50;
  } else {
    shipping = 0;
  }

  final_total = total_after_discount + shipping;

  console.log(`
Product Name: ${product_name}
Unit Price: ${unit_price} EGP
Quantity: ${quantity}
Membership: ${is_member}
Subtotal: ${subtotal} EGP
Discount: ${discount} EGP
Shipping: ${shipping} EGP
Final Total: ${final_total} EGP
    `);
} else {
  console.log("Invalid order");
}
