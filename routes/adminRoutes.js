const router = require('express').Router();
const adminController = require('../controllers/adminController');
const checkAuth = require("../middleware/auth.js");


// --------------------------------Dashboard ---------------------------
// Render Dashboard Page
router.get('/dashboard',checkAuth, adminController.getAdminDashboard);

router.get('/addcases',checkAuth, adminController.addCases);

router.get('/login', adminController.login);


// --------------------------------Cases ---------------------------
router.get('/cases',checkAuth, adminController.getAllCases);
router.post("/addCases",checkAuth,adminController.addcases);
router.post('/editCase/:caseId',checkAuth, adminController.editCaseDetails);
router.get('/deleteCase/:caseId',checkAuth, adminController.deleteCaseDetails);
router.post("/adminLogin",adminController.adminLogin);
router.post("/sendSms",adminController.sendSms);
router.get("/logout",adminController.logout);


module.exports = router;