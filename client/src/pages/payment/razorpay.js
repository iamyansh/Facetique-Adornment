import axios from "axios";
import { FTQLogoPayment } from "../../constant/image";
import { setToast } from "../../utils/extraFunctions";
import { sendOrderRequest } from "./sendOrderRequest";


export const initPayment = async (form, orderDetails, orderSummary, cartProducts, token, toast, dispatch, navigate) => {

    const { firstName, lastName, mobile, email } = form;
    const { data } = await axios.get('/api/payment/get-razorpay-key');

    const options = {
        key: data.key,
        order_id: orderDetails.id,
        amount: orderDetails.amount,
        currency: orderDetails.currency,
        image: FTQLogoPayment,
        name: 'FTQ',
        description: 'Thanks for purchasing',

        prefill: {
            name: `${firstName} ${lastName}`,
            email: email,
            contact: mobile
        },

        handler: async function (response) {
            try {
                const { data } = await axios.post('/api/payment/verify', response);
                
                setToast(toast, data.message, 'success');

                sendOrderRequest(form, orderDetails.id, response, orderSummary, cartProducts, token, toast, dispatch, navigate);

            } catch (error) {
                console.log(error);
                return { status: false };
            }
        },

        theme: { color: "#3399cc" }
    };

    const rzp = new window.Razorpay(options);

    //If payment failed 
    rzp.on('payment.failed', (response) => {
        console.log(response.error);
        alert('Payment failed, please try again');
        return { status: false };
    });

    //Open razorpay window
    rzp.open();
};

