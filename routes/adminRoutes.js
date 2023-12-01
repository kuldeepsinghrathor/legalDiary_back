const router = require('express').Router();
const adminController = require('../controllers/adminController');


// --------------------------------Dashboard ---------------------------
// Render Dashboard Page
router.get('/dashboard', adminController.getAdminDashboard);


// --------------------------------Cases ---------------------------
// Render Cases Page
router.get('/cases', adminController.getAllCases);


module.exports = router;