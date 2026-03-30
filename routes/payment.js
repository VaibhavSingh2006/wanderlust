console.log("APP ID:", process.env.CASHFREE_APP_ID);
console.log("SECRET:", process.env.CASHFREE_SECRET_KEY);
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const orderId = "order_" + Date.now();

    const response = await axios.post(
      "https://sandbox.cashfree.com/pg/orders",
      {
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: "cust_" + Date.now(),
          customer_phone: "9999999999",
          customer_name: "Test User"
        },
        order_meta: {
         return_url: "http://localhost:8080/payment-success?order_id={order_id}"
        }
      },
      {
        headers: {
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY,
          "x-api-version": "2023-08-01",
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      paymentSessionId: response.data.payment_session_id
    });

  } catch (err) {
    console.error(err.response?.data || err);
    res.status(500).send("Payment creation failed");
  }
});

module.exports = router;