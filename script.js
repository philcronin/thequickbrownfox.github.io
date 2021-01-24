"use strict";

let drinks = [
  {
    name: "Quick Brown Coffee",
    price: 2.50,
    category: "coffee",
    description: "Basic is Best",
  },
  {
    name: "Tea",
    price: 3.50,
    category: "Tea",
    description: "Brewed in house.",
  },
  {
    name: "Latte",
    price: 5.00,
    category: "Latte",
    description: "Classic latte, created with 2% milk & topped with whipped cream.",
  },
  {
    name: "Smoothie",
    price: 4.50,
    category: "Smoothie",
    description: "Choice of Strawberry, Raspberry, or Mango.",
  },
  {
    name: "Hot Chocolate",
    price: 3.00,
    category: "Hot Chocolate",
    description: "Classic hot chocolate with whipped cream.",
  },
];

let eats = [
  {
    name: "Lazy Dog Bagel",
    price: 2.50,
    category: "Bagel",
    description: "Just a plain bagel with cream cheese.",
  },
  {
    name: "Everything Bagel",
    price: 2.50,
    category: "Bagel",
    description: "A bagel, with everything on it.",
  },
  {
    name: "Blueberry Muffin",
    price: 3.00,
    category: "Muffin",
    description: "Classic blueberry muffin.",
  },
  {
    name: "Coffee Cake",
    price: 3.00,
    category: "Muffin",
    description: "A really good coffee cake.",
  },
  {
    name: "Chocolate Chip Cookie",
    price: 2.00,
    category: "cookie",
    description: "The best cookie.",
  },
];
let cartItems = [];

let drinkButton = document.querySelector(".drink-button");
let eatButton = document.querySelector(".eat-button");
let buttonBox = document.querySelector(".button-box");
let cart = document.querySelector(".cart");
let drinkMenu = document.querySelector(".drink-menu");
let menu = document.querySelector(".menu");
let eatMenu = document.querySelector(".eat-menu");
let wholePage = document.querySelector(".whole-page");
let cartPopupContainer = document.querySelector(".cart-popup-container");
let cartPopup = document.querySelector(".cart-popup");
let cartItemsDiv = document.querySelector(".cart-items");
let closeCartButton = document.querySelector(".close-cart-button");
let cartButtons = document.querySelector(".cart-buttons");
let checkoutButton = document.querySelector(".checkout-button");
let clearCartButton = document.querySelector(".clear-cart-button");
let subtotal = 0;
let subtotalParagraph = document.querySelector(".subtotal");
let taxParagraph = document.querySelector(".tax");
let totalParagraph = document.querySelector(".total");
let paymentType = document.querySelector(".payment-type");
let cashScreen = document.querySelector(".cash-screen");
let creditScreen = document.querySelector(".credit-screen");
let receipt = document.querySelector(".receipt");
let cashReceipt = document.querySelector(".cash-receipt");
let creditReceipt = document.querySelector(".credit-receipt");
let changeDue = document.querySelector(".change-due");
let ccAccepted = document.querySelector(".cc-accepted");
let cashForm = document.querySelector(".cash-form");
let creditForm = document.querySelector(".credit-form");
let cashTenderedP = document.querySelector(".cash-tendered");
let thanks = document.querySelector(".thanks");
let unicorn = document.querySelector(".unicorn")

const menuOnLoad = () => {
  drinkMenu.classList.add("top");
  eatMenu.classList.remove("top");
  drinks.forEach((drink, index) => {
    let drinkBox = document.createElement("div");
    let drinksName = document.createElement("p");
    drinksName.innerText = drink.name;
    let drinksPrice = document.createElement("p");
    drinksPrice.innerText = `$${drink.price.toFixed(2)}`;
    let drinksDescription = document.createElement("p");
    let descriptionBox = document.createElement("div");
    drinksDescription.innerText = `${drink.category} , ${drink.description}`;
    descriptionBox.append(drinksDescription);
    let itemPriceBox = document.createElement("div");
    itemPriceBox.append(drinksName, drinksPrice);
    itemPriceBox.classList.add("item-price-box");
    drinkBox.append(itemPriceBox);
    drinkBox.append(descriptionBox);
    drinkBox.classList.add("drink-item");
    drinkBox.setAttribute("data-index", index);
    drinkMenu.append(drinkBox);
  });
  eats.forEach((eat, index) => {
    let eatBox = document.createElement("div");
    let eatName = document.createElement("p");
    eatName.innerText = eat.name;
    let eatPrice = document.createElement("p");
    eatPrice.innerText = `$${eat.price.toFixed(2)}`;
    let eatDescription = document.createElement("p");
    let descriptionBox = document.createElement("div")
    eatDescription.innerText = `${eat.category} , ${eat.description}`;
    descriptionBox.append(eatDescription);
    let eatNamePrice = document.createElement("div");
    eatNamePrice.classList.add("eat-item-price")
    eatNamePrice.append(eatName, eatPrice)
    eatBox.append(eatNamePrice, descriptionBox)
    eatBox.classList.add("eat-item");
    eatBox.setAttribute("data-index", index);
    eatMenu.append(eatBox);
  });
};
menuOnLoad();

const showMenus = (e)=>{
  drinkMenu.innerHTML = "";
  eatMenu.innerHTML = "";
 if (e.target.classList.contains("drink-button")) {
   drinkMenu.classList.add("top");
   eatMenu.classList.remove("top");
   drinks.forEach((drink, index) => {
     let drinkBox = document.createElement("div");
     let drinksName = document.createElement("p");
     drinksName.innerText = drink.name;
     let drinksPrice = document.createElement("p");
     drinksPrice.innerText = drink.price;
     let drinksDescription = document.createElement("p");
     drinksDescription.innerText = `${drink.category} , ${drink.description}`;
     drinkBox.append(drinksDescription);
     drinkBox.append(drinksName);
     drinkBox.append(drinksPrice);
     drinkBox.classList.add("drink-item");
     drinkBox.setAttribute("data-index", index);
     drinkMenu.append(drinkBox);
   });
 } else if (e.target.classList.contains("eat-button")) {
   eatMenu.classList.add("top");
   drinkMenu.classList.remove("top");
   eats.forEach((eat, index) => {
     let eatBox = document.createElement("div");
     let eatName = document.createElement("p");
     eatName.innerText = eat.name;
     let eatPrice = document.createElement("p");
     eatPrice.innerText = eat.price;
     let eatDescription = document.createElement("p");
     eatDescription.innerText = `${eat.category} , ${eat.description}`;
     eatBox.append(eatDescription);
     eatBox.append(eatName);
     eatBox.append(eatPrice);
     eatBox.classList.add("eat-item");
     eatBox.setAttribute("data-index", index);
     eatMenu.append(eatBox);
   });
 }
} 

buttonBox.addEventListener("click", showMenus);


const mediaQuery = window.matchMedia("(min-width: 768px)")
const fullScreen = (mediaQuery)=>{
  if(mediaQuery.matches){
    buttonBox.removeEventListener("click", showMenus)
  }
}
fullScreen(mediaQuery)

const unicornDance = ()=>{
  unicorn.classList.toggle("hide")
  unicorn.classList.add("uni")
}

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("drink-item")) {
    let index = e.target.getAttribute("data-index");
    cartItems.push(drinks[index]);
    console.log(cartItems);
  } else if (e.target.classList.contains("eat-item")) {
    let index = e.target.getAttribute("data-index");
    cartItems.push(eats[index]);
    console.log(cartItems);
  } 
});

const displayCartItemsWithX = () => {
  cartPopupContainer.classList.remove("hide");
  subtotal = 0;
  cartItemsDiv.innerHTML = "";
  cartItems.forEach((item) => {
    let billBox = document.createElement("div");
    billBox.classList.add("bill-box");
    let billItem = document.createElement("p");
    let billPrice = document.createElement("p");
    let removeItem = document.createElement("button");
    removeItem.innerText = "X";
    removeItem.classList.add("remove-item");
    removeItem.addEventListener("click", () => {
      cartItems.splice(item.index, 1);
      console.log(cartItems);
      displayCartItemsWithX();
    });
    billItem.innerText = item.name;
    billPrice.innerText = item.price;
    billBox.append(billItem, billPrice, removeItem);
    cartItemsDiv.append(billBox);
    subtotal += item.price;
  });
  console.log(subtotal);

  subtotalParagraph.innerText = `Subtotal: $${subtotal.toFixed(2)}`;
  let tax = subtotal * 0.06;
  taxParagraph.innerText = `Tax: $${tax.toFixed(2)}`;

  let total = subtotal + tax;
  totalParagraph.innerText = `Total: $${total.toFixed(2)}`;
};

const displayCartItems = () => {
  cartPopupContainer.classList.remove("hide");
  subtotal = 0;
  cartItemsDiv.innerHTML = "";
  cartItems.forEach((item) => {
    let billBox = document.createElement("div");
    billBox.classList.add("bill-box");
    let billItem = document.createElement("p");
    let billPrice = document.createElement("p");
    billItem.innerText = item.name;
    billPrice.innerText = item.price;
    billBox.append(billItem, billPrice);
    cartItemsDiv.append(billBox);
    subtotal += item.price;
  });
  console.log(subtotal);

  subtotalParagraph.innerText = `Subtotal: $${subtotal.toFixed(2)}`;
  let tax = subtotal * 0.06;
  taxParagraph.innerText = `Tax: $${tax.toFixed(2)}`;

  let total = subtotal + tax;
  totalParagraph.innerText = `Total: $${total.toFixed(2)}`;
};

cart.addEventListener("click", displayCartItemsWithX);

closeCartButton.addEventListener("click", () => {
  cartPopupContainer.classList.add("hide");
  cartButtons.classList.remove("hide");
  paymentType.classList.add("hide");
  creditScreen.classList.add("hide");
  cashScreen.classList.add("hide");
  cashReceipt.classList.add("hide");
  creditReceipt.classList.add("hide");
});

clearCartButton.addEventListener("click", () => {
  cartItems = [];
  displayCartItems();
});

checkoutButton.addEventListener("click", (e) => {
  cartButtons.classList.add("hide");
  paymentType.classList.remove("hide");
  displayCartItems();
});

paymentType.addEventListener("click", (e) => {
  if (e.target.classList.contains("cash")) {
    cashScreenDisplay();
  } else if (e.target.classList.contains("credit")) {
    creditScreenDisplay();
  }
});

const cashScreenDisplay = () => {
  paymentType.classList.add("hide");
  cashScreen.classList.remove("hide");
};
const creditScreenDisplay = () => {
  paymentType.classList.add("hide");
  creditScreen.classList.remove("hide");
};

cashForm.addEventListener("submit", (event) => {
  event.preventDefault();
  cashScreen.classList.add("hide");
  cashReceipt.classList.remove("hide");
  subtotal = 0;
  cartItems.forEach((item) => {
    subtotal += item.price;
  });
  let total = subtotal * 1.06;
  let snapshot = new FormData(cashForm);
  let cashTendered = snapshot.get("tendered");
  let change = cashTendered - total;
  changeDue.innerText = `Change Due:  $${change.toFixed(2)}`;
  cashTenderedP.innerText = `Cash Tendered: $${cashTendered}`;
  console.log(cashTendered);
});

creditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  creditScreen.classList.add("hide");
  creditReceipt.classList.remove("hide");
  let creditSnap = new FormData(creditForm);
  let creditName = creditSnap.get("cc-name");
  let creditNumber = creditSnap.get("cc-number");
  let lastFour = creditNumber.slice(-4);
  thanks.innerText = `Thank you, ${creditName}. for paying with card ending in #${lastFour}`;
});



//   let checkoutContainer = document.createElement("div");
//   checkoutContainer.classList.add("checkout-container");
//   let checkoutButton = document.createElement("p");
//   checkoutButton.innerText = "Checkout";
//   checkoutButton.classList.add("checkout-button");
//   let clearButton = document.createElement("p");
//   clearButton.innerText = "Clear Cart";
//   clearButton.classList.add("clear-cart");
//   let x = document.createElement("p");
//   x.innerText = "x";
//   x.classList.add("x");
//   bill.append(x);
//   let totalBox = document.createElement("div");
//   totalBox.classList.add("total-box");
//   let subTotalParagraph = document.createElement("p");
//   let totalPriceParagraph = document.createElement("p");
//   subTotalParagraph.innerText = `Subtotal: $${subTotal}.00`;
//   let totalPrice = subTotal * 0.06 + subTotal;
//   totalPriceParagraph.innerText = `Total: $${totalPrice.toFixed(2)}`;
//   totalBox.append(subTotalParagraph, totalPriceParagraph);
//   bill.append(totalBox, checkoutButton, clearButton);
// });

// x.addEventListener("click", () => {
//   billContainer.remove();
//   bill.remove();
// });
//
//   checkoutButton.addEventListener("click", () => {
//     bill.innerHTML = "";
//     bill.append(totalBox);
//     let taxText = document.createElement("p");
//     taxText.innerText = "tax:";
//     let taxNum = subTotal * 0.06;
//     let tax = document.createElement("p");
//     tax.innerText = `$${taxNum.toFixed(2)}`;
//     let taxBox = document.createElement("div");
//     taxBox.classList.add("total-box");
//     let totalText = document.createElement("p");
//     totalText.innerText = "Total:";
//     let addTax = document.createElement("p");
//     let completeTotal = (subTotal + taxNum).toFixed(2);
//     addTax.innerText = `$${completeTotal}`;
//     let finalBox = document.createElement("div");
//     finalBox.classList.add("total-box");
//     taxBox.append(taxText, tax);
//     finalBox.append(totalText, addTax);
//     bill.append(taxBox, finalBox);
//     let paymentOption = document.createElement("div");
//     paymentOption.classList.add("payment");
//     let cash = document.createElement("p");
//     cash.innerText = "pay with cash";
//     cash.classList.add("cash");
//     let card = document.createElement("p");
//     card.innerText = "pay with card";
//     card.classList.add("card");
//     paymentOption.append(card, cash);
//     bill.append(paymentOption, x);
//     paymentOption.addEventListener("click", (e) => {
//       if (e.target.classList.contains("cash")) {
//         bill.innerHTML = "";
//         bill.append(finalBox);
//         bill.append(x);
//         let cashForm = document.createElement("form");
//         let cashFormDiv = document.createElement("div");
//         cashFormDiv.classList.add("cash-form-container");
//         let cashTenderedText = document.createElement("label");
//         cashTenderedText.setAttribute("for", "tendered");
//         cashTenderedText.innerText = "Cash Tendered:";
//         let cashTendered = document.createElement("input");
//         cashTendered.setAttribute("name", "tendered");
//         cashTendered.setAttribute("type", "number");
//         cashTendered.setAttribute("id", "tendered");
//         // cashTendered.classList.add("tendered-input");
//         let submitButton = document.createElement("button");
//         submitButton.innerText = "Pay Now";
//         cashFormDiv.append(cashTenderedText);
//         cashFormDiv.append(cashTendered);
//         cashForm.append(cashTenderedText, cashTendered, submitButton);
//         bill.append(cashForm);
//         cashForm.addEventListener("submit", (e) => {
//           e.preventDefault();
//           bill.innerHTML = "";
//           bill.append(x);
//           cartItems.forEach((item) => {
//             let billBox = document.createElement("div");
//             billBox.classList.add("bill-box");
//             let billItem = document.createElement("p");
//             let billPrice = document.createElement("p");
//             billItem.innerText = item.name;
//             billPrice.innerText = item.price;
//             billBox.append(billItem);
//             billBox.append(billPrice);
//             bill.append(billBox);
//             bill.append(finalBox);
//           });
//           let snapshot = new FormData(cashForm);
//           let tendered = snapshot.get("tendered");
//           let change = tendered - completeTotal;
//           let changeDue = document.createElement("p");
//           changeDue.innerText = `Your change is $${change}`;
//           bill.append(changeDue);
//         });
//       } else if (e.target.classList.contains("card")) {
//         bill.innerHTML = "";
//         bill.append(x);
//         bill.append(finalBox);
//         let cardForm = document.createElement("form");
//         //
//         let ccNameText = document.createElement("label");
//         ccNameText.setAttribute("for", "cc-name");
//         ccNameText.innerText = "Your Name:";
//         let ccName = document.createElement("input");
//         ccName.setAttribute("id", "cc-name");
//         ccName.setAttribute("type", "text");
//         cardForm.append(ccNameText, ccName);
//         //
//         let ccNumberText = document.createElement("label");
//         ccNumberText.setAttribute("for", "cc-number");
//         ccNumberText.innerText = "Credit Card Number:";
//         let ccNumber = document.createElement("input");
//         ccNumber.setAttribute("id", "cc-number");
//         ccNumber.setAttribute("type", "number");
//         cardForm.append(ccNumberText, ccNumber);
//         //
//         let ccExpirationText = document.createElement("label");
//         ccExpirationText.setAttribute("for", "cc-expiration");
//         ccExpirationText.innerText = "Expiration Date:";
//         let ccExpiration = document.createElement("input");
//         ccExpiration.setAttribute("id", "cc-expiration");
//         ccExpiration.setAttribute("type", "number");
//         cardForm.append(ccExpirationText, ccExpiration);
//         //
//         let ccCVVNum = document.createElement("label");
//         ccCVVNum.setAttribute("for", "cc-cvv");
//         ccCVVNum.innerText = "CVV:";
//         let ccCVV = document.createElement("input");
//         ccCVV.setAttribute("id", "cc-cvv");
//         ccCVV.setAttribute("type", "cvv-number");
//         cardForm.append(ccCVVNum, ccCVV);
//         //
//         let cardButton = document.createElement("button");
//         cardButton.innerText = "Pay Now";
//         cardForm.append(cardButton);
//         bill.append(cardForm);
//         //
//         cardButton.addEventListener("submit", (e) => {
//           e.preventDefault();
//           bill.innerHTML = "";
//           bill.append(x);
//           bill.append(finalBox);
//           cartItems.forEach((item) => {
//             let billBox = document.createElement("div");
//             billBox.classList.add("bill-box");
//             let billItem = document.createElement("p");
//             let billPrice = document.createElement("p");
//             billItem.innerText = item.name;
//             billPrice.innerText = item.price;
//             billBox.append(billItem);
//             billBox.append(billPrice);
//             bill.append(billBox);
//           });
//           let snapshot = new FormData(cardForm);
//           let cardName = snapshot.get("cc-name");
//           let cardNumber = snapshot.get("cc-number");
//           let greeting = document.createElement("p");
//           greeting.innerText = `Thank you ${cardName} for your purchase with card ${cardNumber}`;
//           bill.append(greeting);
//         });
//       }
//     });
//   });
// });
