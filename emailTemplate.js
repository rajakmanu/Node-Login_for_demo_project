module.exports = {
verify: (email) => {
    return `<html>
    <head>
      <title>Email template</title>

    </head>
    <body>
          <p>
            Please verify your email address.
          </p>
          <a
            href="http://localhost:8081/biascorp/user/verify/${email}"
            ><button>Verify</button></a
            >
          <hr />
    </body>
  </html>

  `;
  },
  verifyEmail: (email, name) => {
    return `<html>
    <head>
      <title>Email template</title>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");
        .outer {
          display: block;
          padding: 32px;
  
          position: relative;
          width: 900px;
          height: 525px;
  
          /* Background / Darker */
  
          background: #f8f8f9;
        }
        button {
          /* Buttons */
  
          /* Auto Layout */
  
          display: block;
          padding: 5px 5px;
  
          position: absolute;
          width: 110px;
          height: 40px;
          left: 60px;
          top: 180px;
  
          /* Background / Primary */
  
          background: #4d194d;
          /* Stroke / Default */
  
          border: 1px solid rgba(0, 0, 0, 0.24);
          box-sizing: border-box;
          border-radius: 4px;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 1;
          flex-grow: 0;
          margin: 40px 0px;
        }
        .letter {
          /* Button Label */
  
          position: absolute;
          width: 100px;
          height: 40px;
          left: 8px;
          top: 3.5px;
  
          /* Field Labels */
  
          font-family: Inter;
          font-style: normal;
          font-size: 14px;
          line-height: 30px;
          /* identical to box height, or 171% */
  
          /* Text / White */
  
          color: #ffffff;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 0;
          flex-grow: 0;
          margin: 0px 0px;
        }
        .firstpara {
          /* Paragraph 1 */
  
          position: absolute;
          width: 750px;
          height: 25px;
          left: 50px;
          top: 50px;
  
          /* Paragraph / 300 */
  
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 25px;
          /* or 150% */
  
          /* Text / Default */
  
          color: #333333;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 0;
          align-self: stretch;
          flex-grow: 0;
          margin: 0px 0px;
        }
        .secondpara {
          /* Paragraph 3 */
  
          position: absolute;
          width: 750px;
          height: 40px;
          left: 60px;
          top: 240px;
  
          /* Paragraph / 300 */
  
          font-family: Inter;
          font-style: normal;
          font-weight: 800;
          font-size: 18px;
          line-height: 30px;
          /* or 150% */
  
          /* Text / Default */
  
          color: #333333;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 4;
          align-self: stretch;
          flex-grow: 0;
          margin: 25px 0px;
        }
        .innerfirst {
          /* Auto Layout */
  
          display: block;
          padding: 32px;
  
          position: static;
          width: 830px;
          height: 230px;
          left: 5px;
          top: 5px;
  
          /* Background / Default */
  
          background: #ffffff;
          border-radius: 4px 4px 0px 0px;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 0;
          align-self: stretch;
          flex-grow: 0;
          margin: 0px 0px;
        }
        .innersecond {
          /* Auto Layout */
  
          display: block;
          padding: 32px;
  
          position: relative;
          width: 850px;
          height: 75px;
          left: 50px;
          top: 380px;
  
          background: #f8f8f9;
          border-radius: 0px 0px 4px 4px;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 2;
          align-self: stretch;
          flex-grow: 0;
          margin: 0px 0px;
        }
      
        .footnote {
          /* Footnote */
  
          position: absolute;
  
          height: 20px;
          left: 5px;
          top: 30px;
  
          /* Paragraph / 200 */
  
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 30px;
          /* identical to box height, or 143% */
  
          /* Text / Lightest */
  
          color: #999999;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 0;
          align-self: stretch;
          flex-grow: 0;
          margin: 0px 0px;
        }
        .footnote12 {
          /* Footnote */
  
          position: absolute;
  
          height: 20px;
          left: 90px;
          top: 20px;
  
          /* Paragraph / 200 */
  
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 0px;
          /* identical to box height, or 143% */
  
          /* Text / Lightest */
  
          color: #999999;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 0;
          align-self: stretch;
          flex-grow: 0;
          margin: 0px 0px;
        }
        .footnote2 {
          /* Footnote */
  
          position: absolute;
          width: 330px;
          height: 20px;
          left: 5px;
          top: 25px;
  
          /* Paragraph / 200 */
  
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 40px;
          /* identical to box height, or 143% */
  
          /* Text / Lightest */
  
          color: #999999;
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0;
          margin: 16px 0px;
        }
        hr {
          /* Line 1 */
  
          position: absolute;
          width: 850px;
          height: 0px;
          left: 50px;
          top: 150px;
  
          border: 0.1px solid rgba(0, 0, 0, 0.16);
  
          /* Inside Auto Layout */
  
          flex: none;
          order: 2;
          flex-grow: 0;
          margin: 0px 0px;
        }
        
        .copy {
          position: absolute;
          left: 68px;
          top: 16px;
          width: 17.5px;
          height: 17.5px;
  
          color: #f10000, 100%;
  
          /* Text / Primary */
        }
        .logo {
          position: absolute;
          left: 5px;
          top: 140px;
          height: 24px;
          width: 125px;
        }
        .raju{
          display: inline-block;
          width: 50%;
        text-align:right;
        }
        .rajuUp{
          display: inline-block;
          width: 49%;
     
        }
       
       
      </style>
    </head>
    <body>
      <div class="outer">
        <div class="innerfirst">
          <p class="firstpara">
            Hi <b>${name}</b>, <br>         
            Please verify your email address by clicking on the button below.
          </p>
          <a
            href="http://172.16.11.35:8081/biascorp/user/verify/email/${email}"
            ><button><div class="letter">Verify</div></button></a
          >
          <hr />
          <p class="secondpara"></p>
        </div>
  
        <div class="innersecond">
          <p class="footnote">
          Copyright 
            &copy;
            2021 <br> Bias Infotech Pvt Ltd. All rights reserved.<br />
            Bengaluru, Karnataka, India
          </p>
         <p style="margin-top: 120px;"> <span class="rajuUp"> <img src="https://biascorp.com/wp-content/uploads/2020/08/Blue_Gradient_Logo.png" class="logo" /> </span>
         <span class="raju"><a
         href="https://twitter.com/AskSeract"
         ><img src="http://172.16.11.35:8081/uploads/asset/twitter.png" class="img1" /></a>
         <a
           href="https://www.facebook.com/AskSeract"
           ><img src="http://172.16.11.35:8081/uploads/asset/fb.png" class="img2" /></a>
           <a
           href="https://www.linkedin.com/company/seract-pty-ltd/about/?viewAsMember=true"
           ><img
           src="http://172.16.11.35:8081/uploads/asset/linkedin.png"
           class="img3"
         /></a></span></p>
        </div>
       
           
        
      </div>
    </body>
  </html>
  
  `;
  },
}
