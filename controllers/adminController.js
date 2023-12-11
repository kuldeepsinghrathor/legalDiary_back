const caseModal = require("../modal/case.js");
// --------------------------------Dashboard ---------------------------
// Render Dashboard Page
exports.getAdminDashboard = async (req, res) => {
    try {
        return res.render('dashboard');
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}

exports.addCases = async (req, res) => {
    try {
        return res.render('addcases');
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        return res.render('login');
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}


// --------------------------------Cases ---------------------------
// Render cases Page
exports.getAllCases = async (req, res) => {
    try {
        caseModal.find({}).then((cases,error)=>{
            const careerLength = cases.length;
        if (cases) {
            return res.render('cases',{message: 'cases fetch successfully', careerLength: careerLength, casesData:cases});
        } else {
            res.status(400).send({ success: false, message: 'Internal Error!' })
        }
        })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}

exports.addcases = async (req,res) =>{
    console.log(req.body);
    try {
        if(!req.body.previous_date || !req.body.next_date || !req.body.case_no || !req.body.court_name || !req.body.party_name){
            res.json({success:false,message:"All fields are required"});
        }else if(req.body.previous_date && req.body.next_date && req.body.case_no && req.body.court_name && req.body.party_name){
            const cases = new caseModal({
                previous_date:new Date(req.body.previous_date),
                next_date:new Date(req.body.next_date),
                case_no:req.body.case_no,
                court_name:req.body.court_name,
                party_name:req.body.party_name
            })
            await cases.save();
            res.json({success:true,message:"Case added successfully"});
        }
    } catch (error) {
        res.json({success:false,message:"Internal Error!",error:error});
    }
}