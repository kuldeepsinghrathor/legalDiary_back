const caseModal = require("../modal/case.js");
const userAdmin = require("../modal/adminUser.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
// --------------------------------Dashboard ---------------------------
// Render Dashboard Page
exports.getAdminDashboard = async (req, res) => {
    try {
        var adminDatail = await userAdmin.findById(req.userData.userId);
        var caseLength = await caseModal.find({});
        return res.render('dashboard', { casesLength: caseLength.length, adminName: adminDatail.userName, adminPhoto: adminDatail.profilePhoto.path });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}

exports.sendSms = async () => {
    console.log("aa");
    // Create a transporter object using your SMTP settings
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use other services as well
        auth: {
            user: 'girishimg574@gmail.com',
            pass: 'ceiukxwliqiimwga',
        },
    });

    // Define email data
    const mailOptions = {
        from: 'girishimg574@gmail.com',
        to: 'vstwjpw@gmail.com',
        subject: 'Message from HIMANSHU BAGARHATTA LEGAL DIARY',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
         <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>New email template 2023-12-12</title><!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
        #outlook a {
            padding:0;
        }
        .es-button {
            mso-style-priority:100!important;
            text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
            color:inherit!important;
            text-decoration:none!important;
            font-size:inherit!important;
            font-family:inherit!important;
            font-weight:inherit!important;
            line-height:inherit!important;
        }
        .es-desk-hidden {
            display:none;
            float:left;
            overflow:hidden;
            width:0;
            max-height:0;
            line-height:0;
            mso-hide:all;
        }
        @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:40px!important; text-align:left } h2 { font-size:28px!important; text-align:left } h3 { font-size:18px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:40px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:28px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } .es-m-margin { padding-left:10px!important; padding-right:10px!important; padding-top:0px!important; padding-bottom:0px!important } }
        @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
        </style>
         </head>
         <body style="width:100%;font-family:Montserrat, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
          <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#374769"><!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" src="https://tlr.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/bgtemplate.png" color="#374769" origin="0.5, 0" position="0.5, 0"></v:fill>
                    </v:background>
                <![endif]-->
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://ebwycju.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/bgtemplate.png" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:no-repeat;background-position:center top;background-image:url(https://ebwycju.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/bgtemplate.png);background-color:#374769">
             <tr>
              <td class="es-m-margin" valign="top" style="padding:0;Margin:0">
               <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table class="es-content-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" height="112" style="padding:0;Margin:0"></td>
                             </tr>
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ebwycju.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/2342343242x.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:40px;background-color:#fbf3ea" bgcolor="#fbf3ea">
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:55px;mso-line-height-rule:exactly;font-family:Changa, sans-serif;font-size:55px;font-style:normal;font-weight:bold;color:#E33650">Christmas&nbsp;</h1></td>
                             </tr>
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:39px;mso-line-height-rule:exactly;font-family:Changa, sans-serif;font-size:35px;font-style:normal;font-weight:bold;color:#E33650">PARTY!!</h2></td>
                             </tr>
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><img src="https://ebwycju.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/star.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="54"></td>
                             </tr>
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:Changa, sans-serif;font-size:22px;font-style:normal;font-weight:bold;color:#E33650">LIVE MUSIC BEER AND LOTS OF MAGIC</h3></td>
                             </tr>
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:23px;color:#374769;font-size:15px">We know how to throw a great party! Delicious festive food, plenty of Christmas spirit and loads of fun are on the menu for a splendid night. Bring your friends and colleagues along for a fabulous time at the top <strong>Christmas party!</strong></p></td>
                             </tr>
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:30px"><!--[if mso]><a href="https://viewstripo.email/" target="_blank" hidden>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email/" 
                        style="height:44px; v-text-anchor:middle; width:183px" arcsize="50%" stroke="f"  fillcolor="#e7a31f">
                <w:anchorlock></w:anchorlock>
                <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>LEARN MORE</center>
            </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#ff564e;background:#008c7c;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a href="https://viewstripo.email/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;padding:14px 35px 14px 35px;display:inline-block;background:#E7A31F;border-radius:30px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #E7A31F">LEARN MORE</a></span><!--<![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#E33650;width:600px">
                     <tr>
                      <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                       <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:560px">
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                               <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/stripoeditor/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px"><img src="https://ebwycju.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png" alt="Fb" title="Facebook" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://twitter.com/Stripo_email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px"><img src="https://ebwycju.stripocdn.email/content/assets/img/social-icons/logo-white/x-logo-white.png" alt="X" title="X.com" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.instagram.com/stripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px"><img src="https://ebwycju.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Ig" title="Instagram" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.youtube.com/channel/UCnPMarkPEGzk-3fTM9Jxgcw" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px"><img src="https://ebwycju.stripocdn.email/content/assets/img/social-icons/logo-white/youtube-logo-white.png" alt="Yt" title="Youtube" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://www.pinterest.com/StripoEmail/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px"><img src="https://ebwycju.stripocdn.email/content/assets/img/social-icons/logo-white/pinterest-logo-white.png" alt="P" title="Pinterest" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:18px;color:#FFFFFF;font-size:12px">If you think this message was sent to you in error, you can <a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px">unsubscribe</a>.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:18px;color:#FFFFFF;font-size:12px">Please refer to our <a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:12px">privacy policy</a> for more information.</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#c9dcff" align="center">
                     <tr>
                      <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-position:left top" align="left">
                       <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td class="es-infoblock made_with" align="center" style="padding:0;Margin:0;line-height:14px;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=christmas_4_2024&utm_content=miracles_at_christmas" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://ebwycju.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/78411525331495932.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="125"></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email: ', error);
        } else {
            console.log('Email sent: ', info.response);
        }
    });
}

exports.adminLogin = async (req, res) => {
    userAdmin.find({ email: req.body.email }).exec().then((result) => {
        if (result.length < 1) {
            return res.json({ success: false, message: 'User Not Found!' });
        } else {
            const user = result[0]
            bcrypt.compare(req.body.password, user.password, (err, ret) => {
                if (ret) {
                    const payload = {
                        userId: user._id,
                    }
                    const token = jwt.sign(payload, "LEGALDIARYAUTH")
                    res.cookie("token", token, { httpOnly: true, maxAge: 86400000 });
                    return res.json({ success: true, token: token, message: 'Login Successfully !' })
                } else {
                    return res.json({ success: false, message: 'Password does not match!' })
                }
            })
        }
    }).catch(err => {
        res.json({ success: false, message: 'Authentication Failed!' })
    })
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.redirect("/admin/login");
    } catch (error) {
        res.json({ success: false, message: 'Authentication Failed!' });
    }
}



exports.login = async (req, res) => {
    try {
        return res.render('login');
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}

exports.fees = async (req, res) => {
    try {
        var adminDatail = await userAdmin.findById(req.userData.userId);
        caseModal.find({}).then((cases, error) => {
            if (cases) {
                return res.render('fees', { feesData: cases, adminName: adminDatail.userName, adminPhoto: adminDatail.profilePhoto.path });
            } else {
                res.status(400).send({ success: false, message: 'Internal Error!' })
            }
        })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}


// --------------------------------Cases ---------------------------
// Render Add Case Page
exports.addCases = async (req, res) => {
    try {
        var adminDatail = await userAdmin.findById(req.userData.userId);
        return res.render('addcases', { adminName: adminDatail.userName, adminPhoto: adminDatail.profilePhoto.path });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}

// Render cases Page
exports.getAllCases = async (req, res) => {
    try {
        var adminDatail = await userAdmin.findById(req.userData.userId);
        caseModal.find({}).then((cases, error) => {
            const careerLength = cases.length;
            var datetime = new Date();

            if (cases) {
                return res.render('cases', { message: 'cases fetch successfully', careerLength: careerLength, casesData: cases, adminName: adminDatail.userName, adminPhoto: adminDatail.profilePhoto.path, currentDate: datetime.toISOString().slice(0, 10) });
            } else {
                res.status(400).send({ success: false, message: 'Internal Error!' })
            }
        })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}

exports.addcases = async (req, res) => {
    try {
        if (!req.body.previous_date || !req.body.next_date || !req.body.case_no || !req.body.court_name || !req.body.party_name) {
            res.json({ success: false, message: "All fields are required" });
        } else if (req.body.previous_date && req.body.next_date && req.body.case_no && req.body.court_name && req.body.party_name) {
            const cases = new caseModal({
                previous_date: new Date(req.body.previous_date),
                next_date: new Date(req.body.next_date),
                case_no: req.body.case_no,
                court_name: req.body.court_name,
                party_name: req.body.party_name,
                case_type: req.body.case_type,
                case_stage: req.body.case_stage,
                user_name: req.body.user_name,
                email: req.body.email,
                advance_payment: req.body.advance_payment,
                pending_payment: req.body.pending_payment,
                total_payment: req.body.total_payment
            })
            await cases.save();
            res.json({ success: true, message: "Case added successfully" });
        }
    } catch (error) {
        res.json({ success: false, message: "Internal Error!", error: error });
    }
}

exports.editCaseDetails = async (req, res) => {
    try {
        console.log(req.body);
        const { caseId } = req.params;
        const { previous_date, next_date, case_no, court_name, party_name } = req.body;

        if (!previous_date || !next_date || !case_no || !court_name || !party_name) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const updateFields = {
            previous_date,
            next_date,
            case_no,
            court_name,
            party_name,
        }

        const editedData = await caseModal.findByIdAndUpdate(caseId, updateFields, { new: true });

        if (!editedData) {
            return res.status(404).send('Case not found');
        } else {
            // res.redirect(`/admin/propertyView`);
            res.status(200).send({ success: true, message: 'Case Details Edit Successfully!' });
        }



    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}

exports.deleteCaseDetails = async (req, res) => {
    try {
        const { caseId } = req.params;

        // Find and delete the product by ID
        const deletedData = await caseModal.findByIdAndDelete(caseId);

        if (!deletedData) {
            return res.status(404).json({ success: false, message: 'Data not found' });
        } else {
            res.status(200).send({ success: true, message: 'Case Data Deleted Successfully!' });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}



exports.downloadFees = async (req, res) => {
    try {

        const caseId = req.params.id;

        var adminDatail = await userAdmin.findById(req.userData.userId);
        const selectedCase = await caseModal.findById({ _id: caseId });

        if (selectedCase) {
            res.render('invoice', {
                feesData: {
                    previous_date: selectedCase.previous_date,
                    next_date: selectedCase.next_date,
                    case_no: selectedCase.case_no,
                    court_name: selectedCase.court_name,
                    party_name: selectedCase.party_name,
                    case_type: selectedCase.case_type,
                    case_stage: selectedCase.case_stage,
                    user_name: selectedCase.user_name,
                    email: selectedCase.email,
                    advance_payment: selectedCase.advance_payment,
                    pending_payment: selectedCase.pending_payment,
                    total_payment: selectedCase.total_payment
                },
                adminName: adminDatail.userName,
                adminPhoto: adminDatail.profilePhoto.path
            });
        } else {
            res.status(404).send({ success: false, message: 'Case not found!' });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: 'Error occurred', error: error.message });
    }
}