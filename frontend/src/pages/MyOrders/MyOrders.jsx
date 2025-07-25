import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/images/assets";


const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);
  useEffect(() => {
    console.log(window.location)
  }, [])
  //!Fetch data from api
  const fetchData = async () => {
    const response = await axios.post(
      url + "/api/order/myorder",
      {},
      {
        headers: { token },
      }
    );

    setData(response.data.data);
    console.log(data);
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);
  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " X " + item.quantity
                } else {
                  return item.name + " X " + item.quantity + ","
                }
              })}</p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span><b>{order.status}</b></p>
              <button onClick={fetchData}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div >
  );
};

export default MyOrders;