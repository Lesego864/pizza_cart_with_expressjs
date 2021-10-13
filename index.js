const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cartFF = require('./factoryFunction');

const app = express();
const cart = cartFF();

var hbs = exphbs.create({
    layoutsDir: './views/layouts',
    partialsDir: './views/partials',
    helpers: {}
});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))

// open({
// 	filename: './customer_cart.db',
// 	driver: sqlite3.Database
// }).then(async function (db) {

// 	// run migrations

// 	await db.migrate();

// 	// only setup the routes once the database connection has been established

// })

app.get('/', function (req, res) {
    res.render('index', {
        layouts: 'main',
        qty: req.session.qty,
        price: req.session.priceUpdate,
        messageContent: req.session.messageContent,
        messageClass: req.session.messageClass,
        checkOut: req.session.checkOut,
        payOut: req.session.payOut,
        messageHide: req.session.messageHide,
    });
});

app.post('/cart', function (req, res) {
    cart.btnClickff(req.body.size);
    
    req.session.qty = cart.qtyUpdate();
    req.session.priceUpdate = cart.priceUpdate();
    req.session.cartTotal = cart.priceUpdate().totalCart;

    if (req.session.cartTotal == 0) {
        req.session.checkOut = 'hidden';
    } else {
        req.session.checkOut = ' ';
    }

    res.redirect('/');
});

app.post('/checkout', function (req, res) {
    // req.session.checkOut = 'hidden';
    req.session.payOut = ' ';


    res.redirect('/');
});

app.post('/pay', function (req, res) {
    req.session.calChange = cart.calChange(req.body.payAmt);
    req.session.getChange = cart.getChange();

    if (req.session.getChange < 0) {
        // req.session.payOut = ' ';
        // req.session.messageHide = ' ';
        req.session.messageContent = "Sorry - That was not enough money!";
    } else if (req.session.getChange > 0) {
        // req.session.checkOut = 'hidden';
        // req.session.messageHide = ' ';
        req.session.messageContent = "Enjoy your Pizza!";
    } else if (req.session.getChange == 0) {
        req.session.messageContent = "Enjoy your Pizza, here is your change R" + req.session.getChange;
    }

    // if (req.session.getChange == 0) {
    //     req.session.messageContent = "Enjoy your Pizza!";
    // } else if (req.session.getChange > 0) {
    //     req.session.messageContent = "Enjoy your Pizza, here is your change R" + req.session.getChange;
    // } else if (req.session.getChange < 0) {
    //     req.session.messageContent = "Sorry - That was not enough money!";
    // }

    // if (req.session.getChange >= 0) {
    //     req.session.messageClass = 'rgba(120, 255, 120, 0.95)';
    // } else if (req.session.getChange < 0) {
    //     req.session.messageClass = 'rgba(255, 120, 120, 0.95)';
    // }

    res.redirect('/');
});

app.post('/close', function (req, res) {
    if (req.session.getChange < 0) {
        req.session.payOut = ' ';
        req.session.messageHide = 'hidden';
    } else {
        req.session.payOut = 'hidden';
        req.session.messageHide = 'hidden';
        req.session.cartReset = cart.resetCart();
        req.session.qty = cart.qtyUpdate();
        req.session.priceUpdate = cart.priceUpdate();
    }
    res.redirect('/');
})

app.get('/clear', function (req, res) {
    req.session.cartReset = cart.resetCart();
    req.session.qty = cart.qtyUpdate();
    req.session.priceUpdate = cart.priceUpdate();
    res.redirect('/');
})

const PORT = process.env.PORT || 1107;

app.listen(PORT, function () {
    console.log('App started at port:' + PORT);
})