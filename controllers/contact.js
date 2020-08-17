const mongoose = require("mongoose");
const ContactMe = mongoose.model("Contact");
const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { SENDGRID_API } = require("../config");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

exports.contactMe = async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  const contactMeData = req.body;
  const contactme = new ContactMe(contactMeData);
  try {
    const newContactme = await contactme.save();
    await transporter.sendMail({
      to: contactMeData.email,
      from: "anujbansal077@gmail.com",
      subject: "Thank You For Giving feedback",
      html: `
              
<html>
<head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <title>[SUBJECT]</title>
  <style type="text/css">
    body {background: #ffffff; font-family:"Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:16px; line-height:150%; color:#444; margin:0; padding:0;}
      p,li {margin-bottom:14px; margin-top:0;font-family:"Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:16px;color:#999999; line-height:150%;}
      td, div {font-family:"Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:13px; }
      a {color:#013275;text-decoration: none;font-weight: bold;}
      h1 {margin-top:15px;padding:0; color:#D70000; font-size:30px; line-height:34px;font-family:"Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight: normal;}
      h2 {margin-top:0; color:#D70000; font-size:18px;font-family:"Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:normal;}
      h3 {margin:0;font-family:"Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif;}
      .bgItem{background: #D70000;}   
      ul {list-style-image: url(images/bullet.png);}
  

@media only screen and (max-width:480px)
  
{
  
table[class="MainContainer"], td[class="cell"] 
{
  width: 100% !important;
  height:auto !important; 
}
td[class="specbundle"] 
{
  width: 100% !important;
  float:left !important;
  font-size:13px !important;
  line-height:17px !important;
  display:block !important;
  padding-bottom:15px !important;
}	
td[class="specbundle2"] 
{
  width:90% !important;
  float:left !important;
  font-size:14px !important;
  line-height:18px !important;
  display:block !important;
  padding-left:5% !important;
  padding-right:5% !important;
}
td[class="specbundle3"] 
{
  width:90% !important;
  float:left !important;
  font-size:14px !important;
  line-height:18px !important;
  display:block !important;
  padding-left:5% !important;
  padding-right:5% !important;
  padding-bottom:20px !important;
}
  
td[class="spechide"] 
{
  display:none !important;
}
    img[class="banner"] 
{
          width: 100% !important;
          height: auto !important;
}
  td[class="left_pad"] 
{
    padding-left:15px !important;
    padding-right:15px !important;
}
   
}

@media only screen and (max-width:540px) 

{
  
table[class="MainContainer"], td[class="cell"] 
{
  width: 100% !important;
  height:auto !important; 
}
td[class="specbundle"] 
{
  width: 100% !important;
  float:left !important;
  font-size:13px !important;
  line-height:17px !important;
  display:block !important;
  padding-bottom:15px !important;
}	
td[class="specbundle2"] 
{
  width:90% !important;
  float:left !important;
  font-size:14px !important;
  line-height:18px !important;
  display:block !important;
  padding-left:5% !important;
  padding-right:5% !important;
}
td[class="specbundle3"] 
{
  width:90% !important;
  float:left !important;
  font-size:14px !important;
  line-height:18px !important;
  display:block !important;
  padding-left:5% !important;
  padding-right:5% !important;
  padding-bottom:20px !important;
}
  
td[class="spechide"] 
{
  display:none !important;
}
    img[class="banner"] 
{
          width: 100% !important;
          height: auto !important;
}
  td[class="left_pad"] 
{
    padding-left:15px !important;
    padding-right:15px !important;
}
  
.font{
  font-size:26px !important;
  line-height:29px !important;
  
  }
}

    </style>
  <script type="colorScheme" class="swatch active">
      {
        "name":"Default",
        "bgBody":"#ffffff",
        "link":"#013275",
        "color":"303841",
        "bgItem":"D70000",
        "title":"#D70000"
      }
    </script>
</head>
  <body paddingwidth="0" paddingheight="0" bgcolor="#d1d3d4"  style="padding-top: 0; padding-bottom: 0; padding-top: 0; padding-bottom: 0; background-repeat: repeat; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased;" offset="0" toppadding="0" leftpadding="0">
  <!-- main container -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody>
  <tr>
    <td class='movableContentContainer' align="center">
        <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" class="MainContainer">
            <tbody>
              <tr>
                <td align="center" colspan="9" height="20">
                </td>
              </tr>
              <tr>
                <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody>
  <tr>
    <td class="specbundle3"><table width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody>
  <tr>
    <td valign="top" height="60" width="75">
                  <div class="contentEditableContainer contentImageEditable">
                   
                </td>
    <td width="15">&nbsp;</td>
    <td width="330" valign="middle">
                  <div class="contentEditableContainer contentTextEditable">
                    <div class="contentEditable">
                      <h1 style="text-align:left;">
                        ANUJ BANSAL</h1>
                    </div>
                  </div>
                </td>
  </tr>
</tbody>
</table>
</td>
    
              </tr>
              <tr>
              <td align="center" colspan="9" height="20">
              </td>
            </tr>
            </tbody>
          </table>
          </div>
          <!-- END: Header: Logo; company name; website nav bar - Image + text -->
          <!-- Featured Image -->
          <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
            <table align="center" width="600" height="300" valign="middle" cellpadding="0" style='margin:0;' cellspacing="0" border="0" class="MainContainer">
        
              </tr>
            </table>
          </div>
          <class class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" class="MainContainer">
            <tr>
              <td height="20">
              </td>
            </tr>
            <tr>
              <td class="specbundle3">
                <div class="contentEditableContainer contentTextEditable">
                  <div class="contentEditable">
                    <h1 style="text-align:left;">Thank you ${contactMeData.fullName} for Sending me Feedback</h1>
                    <p style="color:#666666;text-align:left;">Its great to hear you like my portfolio-website, I Will Try To improve my work </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="20">
              </td>
            </tr>
          </table>
          </class>
          </td>
          </tr>
          </tbody>
          </table>
          
          
</body>
</html>
              `,
    });
    res.json({ message: "check your email" });
    // return res.json(newContactme);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
