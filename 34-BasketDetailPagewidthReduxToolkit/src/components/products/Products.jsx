import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import { updateWishlist } from '../../redux/features/wishlist';
import { getallproducts } from '../../redux/features/product';
import { updateBasket } from '../../redux/features/basket';

function Products() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((p) => p.product);
  const { wishlistProducts } = useSelector((p) => p.wishlist);
  
  useEffect(() => {
    dispatch(getallproducts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: "1200px",
        justifyContent: "center",
        margin: "50px auto",
        alignItems: "center"
      }}
    >
      {allProducts && allProducts.map((p) => {
        const findProd = wishlistProducts.some((item) => item.id === p.id);
        

        return (
          <div key={p.id} style={{ position: "relative" }}>
            <Card
              style={{
                width: '18rem',
                height: '25rem',
                backgroundColor: '#f5f5f5',
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                border: "1px solid gray",
                borderRadius: "5px"
              }}
            >
              <FaHeart 
                color={findProd ? "red" : "black"}
                style={{
                  position: "absolute",
                  fontSize: "20px",
                  top: "8px",
                  right: "10px",
                  cursor: "pointer"
                }}
                onClick={() => dispatch(updateWishlist(p))}
              />
              <Card.Img variant="top" src={p.image} style={{ width: "200px", height: "240px" }} />
              <Card.Body>
                <Card.Title>{p.title.slice(0, 20)}</Card.Title>
                <Card.Text>${p.price}</Card.Text>
                <Button
                  variant="primary"
                  style={{
                    border: "none",
                    background: "blue",
                    width: "140px",
                    height: "40px",
                    borderRadius: "4px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "14px"
                  }}
                  onClick={()=>dispatch(updateBasket(p))}
                >
                  Add Basket
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
