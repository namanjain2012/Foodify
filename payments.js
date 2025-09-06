var options = {
    "key": "rzp_test_Lbdo0Yqj9iHZeD", // Enter the Key ID generated from the Dashboard
    "amount": "298800", // Amount is in currency subunits.
    "currency": "INR",
    "name": "Food Delivery App", //your business name
    "description": "Food App Transactions",
    "image": "",
    "handler": function(response){ //Checks whether the payment is successful or not
        alert("Payment Successful"); // We add this alert
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "<name>", //your customer's name
        "email": "<email>", 
        "contact": "<phone>"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options); // We are able to make a Razorpay object due to the script in the <head> of HTML
rzp1.on('payment.failed', function (response){
    alert("Payment Failed");
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
document.getElementById('rzp-button2').onclick = function(e){
    rzp2.open();
    e.preventDefault();
}
