import { useContext, useEffect } from "react";
import "./Verify.css";

import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      orderId,
      success,
    });

    console.log(response.data)
    if (response.data.success) {
      alert("Payment Successful!");
      navigate("/myorders");
    } else {
      alert("Payment Failed!");
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className='verify'>
      <div className='spinner'></div>
    </div>
  );
};

export default Verify;