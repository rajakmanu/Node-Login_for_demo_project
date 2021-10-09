const sgMail = require("@sendgrid/mail");
const { response } = require("express");
const API_KEY =
  "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";
sgMail.setApiKey(API_KEY);
module.exports = async function ({
  data: { subject, message, recipient },
}) {
  const messageText = {
    to: `${recipient}`,
    from: "manisha.rajak@biascorp.com",
    subject: `${subject}`,
    html: `${message}`,
  };
  sgMail
    .send(messageText)
    .then((response) => console.log("djjdgfv", response))
    .catch((error) => console.log(error.message));
};