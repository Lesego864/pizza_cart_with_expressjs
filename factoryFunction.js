module.exports = function cart() {
    let Q1 = 0;
    let Q2 = 0;
    let Q3 = 0;

    let smallPizzaTotal = 0;
    let mediumPizzaTotal = 0;
    let largePizzaTotal = 0;
    let totalCost = 0;
    let changeDue = 0;

    function btnClickff(event) {
        if (event === "smallAddButton") {
            Q1++;
        } else if (event === "mediumAddButton") {
            Q2++;
        } else if (event === "largeAddButton") {
            Q3++;
        }

        if (event === "smallMinButton") {
            Q1--;
            if (Q1 < 0) {
                Q1 = 0;
            }
        } else if (event === "mediumMinButton") {
            Q2--;
            if (Q2 < 0) {
                Q2 = 0;
            }
        } else if (event === "largeMinButton") {
            Q3--;
            if (Q3 < 0) {
                Q3 = 0;
            }
        }
    }

    function qtyUpdate() {
        return {
            Q1,
            Q2,
            Q3
        }
    }

    function priceUpdate() {
        smallPizzaTotal = "R" + (Q1 * 49.25).toFixed(2);
        mediumPizzaTotal = "R" + (Q2 * 89.75).toFixed(2);
        largePizzaTotal = "R" + (Q3* 129.50).toFixed(2);
        totalCost = "R" + (Q1 * 49.25 + Q2 * 89.75 + Q3 * 129.50).toFixed(2);

        return {
            smallPizzaTotal,
            mediumPizzaTotal,
            largePizzaTotal,
            totalCost,
        }
    }

    function calculateChange(amount) {
        changeDue = (amount - totalCost).toFixed(2);
    }

    function getChange() {
        return changeDue;
    }

    function resetCart() {
        Q1 = 0;
        Q2 = 0;
        Q3 = 0;
        smallPizzaTotal = 0;
        mediumPizzaTotal = 0;
        largePizzaTotal = 0;
        totalCost = 0;
        changeDue = 0;

        return {
            Q1,
            Q2,
            Q3,
            smallPizzaTotal,
            mediumPizzaTotal,
            largePizzaTotal,
            totalCost,
            changeDue
        }
    }

    return {
        btnClickff,
        qtyUpdate,
        priceUpdate,
        calculateChange,
        getChange,
        resetCart
    }
}