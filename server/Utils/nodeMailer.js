const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com", // Your email address
    pass: "yourpassword", // Your email password
  },
});

// Function to send order confirmation email
const sendOrderConfirmationEmail = (order) => {
  const mailOptions = {
    from: "youremail@gmail.com",
    to: order.customerEmail,
    subject: "Order Confirmation",
    text: `Thank you for your order! Your order ID is ${order._id}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

// Function to send status update email
const sendStatusUpdateEmail = (order) => {
  const mailOptions = {
    from: "youremail@gmail.com",
    to: order.customerEmail,
    subject: `Order ${order._id} is now ${order.status}`,
    text: `Your order has been updated to ${order.status}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Status update email sent:", info.response);
    }
  });
};
