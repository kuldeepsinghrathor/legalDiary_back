const router = require('express').Router();
const adminController = require('../controllers/adminController');


// --------------------------------Dashboard ---------------------------
// Render Dashboard Page
router.get('/dashboard', adminController.getAdminDashboard);

router.get('/addcases', adminController.addCases);

router.get('/login', adminController.login);


// --------------------------------Cases ---------------------------
router.get('/cases', adminController.getAllCases);
router.post("/addCases",adminController.addcases);
router.post('/editCase/:caseId', adminController.editCaseDetails);
router.get('/deleteCase/:caseId', adminController.deleteCaseDetails);


module.exports = router;