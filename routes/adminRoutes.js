const router = require('express').Router();
const adminController = require('../controllers/adminController');
const checkAuth = require("../middleware/auth.js");


// --------------------------------Dashboard ---------------------------
// Render Dashboard Page
router.get('/dashboard',checkAuth, adminController.getAdminDashboard);
router.get('/addcases',checkAuth, adminController.addCases);
router.get('/login', adminController.login);
router.get("/logout",adminController.logout);


// --------------------------------Cases ---------------------------
router.get('/cases',checkAuth, adminController.getAllCases);
router.post("/addCases",checkAuth,adminController.addcases);
router.post('/editCase/:caseId',checkAuth, adminController.editCaseDetails);
router.get('/deleteCase/:caseId',checkAuth, adminController.deleteCaseDetails);
router.post("/adminLogin",adminController.adminLogin);
router.post("/send-sms",adminController.sendSms);


// --------------------------------Fees ---------------------------
router.get('/fees',checkAuth,adminController.fees);
router.get('/download-invoice/:id',checkAuth,adminController.downloadFees);
router.post('/editFeesDetails/:caseId',checkAuth, adminController.editFeesDetails);


module.exports = router;