module.exports = function cart() {
    let smallQty = 0;
    let medQty = 0;
    let largeQty = 0;

    let smallCost = 0;
    let medCost = 0;
    let largeCost = 0;
    let totalCart = 0;

    let changeAmt = 0;

    function btnClickff(event) {
        if (event === "smallAdd") {
            smallQty++;
        } else if (event === "medAdd") {
            medQty++;
        } else if (event === "largeAdd") {
            largeQty++;
        }

        if (event === "smallMin") {
            smallQty--;
            if (smallQty < 0) {
                smallQty = 0;
            }
        } else if (event === "medMin") {
            medQty--;
            if (medQty < 0) {
                medQty = 0;
            }
        } else if (event === "largeMin") {
            largeQty--;
            if (largeQty < 0) {
                largeQty = 0;
            }
        }
    }

    function qtyUpdate() {
        return {
            smallQty,
            medQty,
            largeQty
        }
    }

    function priceUpdate() {
        smallCost = "R" + (smallQty * 49.25).toFixed(2);
        medCost = "R" + (medQty * 89.75).toFixed(2);
        largeCost = "R" + (largeQty * 129.50).toFixed(2);
        totalCart = "R" + (smallQty * 49.25 + medQty * 89.75 + largeQty * 129.50).toFixed(2);

        return {
            smallCost,
            medCost,
            largeCost,
            totalCart
        }
    }

    function calChange(amt) {
        changeAmt = (amt - totalCart).toFixed(2);
    }

    function getChange() {
        return changeAmt;
    }

    function resetCart() {
        smallQty = 0;
        medQty = 0;
        largeQty = 0;
        smallCost = 0;
        medCost = 0;
        largeCost = 0;
        totalCart = 0;
        changeAmt = 0;

        return {
            smallQty,
            medQty,
            largeQty,
            smallCost,
            medCost,
            largeCost,
            totalCart,
            changeAmt
        }
    }

    return {
        btnClickff,
        qtyUpdate,
        priceUpdate,
        calChange,
        getChange,
        resetCart
    }

    // const sAddbuttonElement = document.querySelector(".add1button");
    // const sMinbuttonElement = document.querySelector(".min1button");
    // const mAddbuttonElement = document.querySelector(".Add2button");
    // const mMinbuttonElement = document.querySelector(".Min2button");
    // const lAddbuttonElement = document.querySelector(".ADD3button");
    // const lMinbuttonElement = document.querySelector(".MIN3button");
    // const priceTagElement = document.querySelector(".price_tag");
    // const randsElement = document.querySelector(".rands")
    // const moneyDueElement = document.querySelector(".money_due")
    // const totalAmountElement = document.querySelector(".full_amount");
    // const q1Element = document.querySelector(".Q1");
    // const q2Element = document.querySelector(".Q2");
    // const q3Element = document.querySelector(".Q3");
    // const checkElement = document.querySelector(".checkbtn");
    // const amountElement = document.querySelector(".the_amount_paid");
    // const paymentElement = document.querySelector(".payment");
    // const messageElement = document.querySelector(".message");
    // const menuElement = document.querySelector(".menu");
    // const buy1Element = document.querySelector(".buy_one");
    // const buy2Element = document.querySelector(".buy_two");
    // const buy3Element = document.querySelector(".buy_three");
    // const cashElement = document.querySelector(".cash");




    // var smallPizzaTotal = 0;
    // var mediumPizzaTotal = 0;
    // var largePizzaTotal = 0;
    // var totalCost = 0;
    // var quantity = 0;
    // var change = 0;
    // /*let timeoutID;*/

    // sAddbuttonElement.addEventListener('click', smallPizzaAddCost);
    // function smallPizzaAddCost() {
    //     smallPizzaTotal += 49.25;
    //     totalCost += 49.25;
    //     q1Element.innerHTML = smallPizzaTotal / 49.25;
    //     priceTagElement.innerHTML = "R" + smallPizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);


    // };
    // sMinbuttonElement.addEventListener('click', smallPizzaSubCost);
    // function smallPizzaSubCost() {
    //     smallPizzaTotal -= 49.25;
    //     totalCost -= 49.25;
    //     if (smallPizzaTotal < 0) {
    //         smallPizzaTotal += 49.25;
    //         totalCost += 49.25;
    //         q1Element.innerHTML = 0;
    //         return;
    //     };
    //     q1Element.innerHTML = smallPizzaTotal / 49.25;
    //     priceTagElement.innerHTML = "R" + smallPizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);

    // };

    // mAddbuttonElement.addEventListener('click', mediumPizzaAddCost);
    // function mediumPizzaAddCost() {
    //     mediumPizzaTotal += 89.75;
    //     totalCost += 89.75;
    //     q2Element.innerHTML = mediumPizzaTotal / 89.75;
    //     randsElement.innerHTML = "R" + mediumPizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);
    // };
    // mMinbuttonElement.addEventListener('click', mediumPizzaSubCost);
    // function mediumPizzaSubCost() {
    //     mediumPizzaTotal -= + 89.75;
    //     totalCost -= 89.75;
    //     if (mediumPizzaTotal < 0) {
    //         mediumPizzaTotal += 89.75;
    //         totalCost += 89.75;
    //         q2Element.innerHTML = 0;
    //         return;
    //     };
    //     q2Element.innerHTML = mediumPizzaTotal / 89.75;
    //     randsElement.innerHTML = "R" + mediumPizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);


    // };

    // lAddbuttonElement.addEventListener('click', largePizzaAddCost);
    // function largePizzaAddCost() {
    //     largePizzaTotal += 129.50;
    //     totalCost += 129.50;
    //     q3Element.innerHTML = largePizzaTotal / 129.50;
    //     moneyDueElement.innerHTML = "R" + largePizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);

    // };
    // lMinbuttonElement.addEventListener('click', largePizzaSubCost);
    // function largePizzaSubCost() {
    //     largePizzaTotal -= 129.50;
    //     totalCost -= 129.50;
    //     if (largePizzaTotal < 0) {
    //         largePizzaTotal += 129.50;
    //         totalCost += 129.50;
    //         q3Element.innerHTML = 0;
    //         return;
    //     };
    //     q3Element.innerHTML = largePizzaTotal / 129.50;
    //     moneyDueElement.innerHTML = "R" + largePizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);
    // };
    // checkElement.addEventListener('click', checkOutButton);
    // function checkOutButton() {
    //     amountElement.classList.remove("hide");
    //     cashElement.classList.remove("hide")
    // };
    // cashElement.addEventListener('click', payButton);
    // function payButton() {
    //     if (totalCost > paymentElement.value) {
    //         messageElement.innerHTML = "Sorry - That was not enough money!";
    //         setTimeout(function () {
    //             messageElement.classList.remove("hide")
    //         }, 1000);
    //         setTimeout(function () {
    //             window.location.reload();
    //         }, 3000);
    //         hideMessage();

    //     } else if (totalCost < paymentElement.value) {
    //         ChangeDue = paymentElement.value - totalCost;
    //         messageElement.innerHTML = "Enjoy your pizzas, change due is R" + ChangeDue.toFixed(2);
    //         setTimeout(function () {
    //             messageElement.classList.remove("hide")
    //         }, 1000);
    //         setTimeout(function () {
    //             window.location.reload();
    //         }, 3000);
    //         hideMessage();

    //     } else if (totalCost = paymentElement.value) {
    //         messageElement.innerHTML = "Enjoy your pizzas!";
    //         setTimeout(function () {
    //             messageElement.classList.remove("hide")
    //         }, 1000);
    //         setTimeout(function () {
    //             window.location.reload();
    //         }, 3000);
    //     }
    //     hideMessage();

    // };
    // function hideMessage() {
    //     setTimeout(function () {
    //         messageElement.classList.add("hide")
    //     }, 3000);
    //     setTimeout(function () {
    //         menuElement.classList.add("hide")
    //     }, 3000);

    // }
    // buy1Element.addEventListener('click', lekkerbutton1);
    // function lekkerbutton1() {
    //     menuElement.classList.remove("hide");
    //     smallPizzaTotal += 49.25;
    //     totalCost += 49.25;
    //     q1Element.innerHTML = smallPizzaTotal / 49.25;
    //     priceTagElement.innerHTML = "R" + smallPizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);
    // };
    // buy2Element.addEventListener('click', lekkerbutton2);
    // function lekkerbutton2() {
    //     menuElement.classList.remove("hide");
    //     mediumPizzaTotal += 89.75;
    //     totalCost += 89.75
    //     q2Element.innerHTML = mediumPizzaTotal / 89.75;
    //     randsElement.innerHTML = "R" + mediumPizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);

    // };
    // buy3Element.addEventListener('click', lekkerbutton3);
    // function lekkerbutton3() {
    //     menuElement.classList.remove("hide");
    //     largePizzaTotal += 129.50;
    //     totalCost += 129.50;
    //     q3Element.innerHTML = largePizzaTotal / 129.50;
    //     moneyDueElement.innerHTML = "R" + largePizzaTotal.toFixed(2);
    //     totalAmountElement.innerHTML = "R" + totalCost.toFixed(2);

    // };
}