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
}