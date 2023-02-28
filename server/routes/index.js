var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index'); /* Add week 5 2nd */

/* GET home page. */
router.get('/', indexController.displayHomePage); /* Modifies week 5 2nd */

router.get('/home', indexController.displayHomePage); /* Modified week 5 2nd */

router.get('/about', indexController.displayAboutPage); /* Modified week 5 2nd */

router.get('/contact', indexController.displayContactPage); /* Modified week 5 2nd */

router.get('/products', indexController.displayProductsPage); /* Modified week 5 2nd */

router.get('/services', indexController.displayServicesPage); /* Modified week 5 2nd */

//WEEK 6 1st
// GET Router for displaying the login page
router.get('/login', indexController.displayLoginPage);

// POST Router for processing the login Page
router.post('/login', indexController.processLoginPage);

// GET Router for displaying the register page
router.get('/register', indexController.displayRegisterPage);

//POST Router for processing the register Page
router.post('/register', indexController.processRegisterPage);

// GET to perform userLogout
router.get('/logout', indexController.performLogout);
// WEEK 6 1st Until here

module.exports = router;
