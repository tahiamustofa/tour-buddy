import Gallery from "../Gallery/Gallery";
import PaymentForm from "../PaymentForm/PaymentForm";


const Payment = () => {
    return (
        <div>
             <h2 className="lg:text-2xl text-base font-bold text-center my-4 font-mono"> Payment </h2>
          
            <PaymentForm></PaymentForm>
            <Gallery></Gallery>
        </div>
    );
};

export default Payment;