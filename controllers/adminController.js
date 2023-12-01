// --------------------------------Dashboard ---------------------------
// Render Dashboard Page
exports.getAdminDashboard = async (req, res) => {
    try {
        return res.render('dashboard');
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}


// --------------------------------Cases ---------------------------
// Render cases Page
exports.getAllCases = async (req, res) => {
    try {
        return res.render('cases');
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}