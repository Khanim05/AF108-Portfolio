import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export let Context = createContext();

const url = "https://fakestoreapi.com/products";

export const ContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const allProducts = async () => {
    try {
      const res = await axios.get(url);
      setProduct(res.data);
    } catch {
     
      toast.warn("error")
    }
  };

  useEffect(() => {
    allProducts();
  }, []);
  console.log(product)

  return (
    <Context.Provider value={product}>
      {children}
      <ToastContainer position="top-right" autoClose={1000} />
    </Context.Provider>
    
  );
};
