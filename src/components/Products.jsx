import React, { useEffect, useRef, useState } from 'react';
import { ComponentToPrint } from './ComponentToPrint';
import { useReactToPrint } from 'react-to-print';
const products = [
  { id: 1, name: 'vanilla', description: "best vanilla",price:"500",image:`https://images.pexels.com/photos/17568719/pexels-photo-17568719/free-photo-of-empire-state-building-towering-over-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1` },
  { id: 2, name: 'strawberry', description: "best strawberry" ,price:"500",image:`https://images.pexels.com/photos/15309757/pexels-photo-15309757/free-photo-of-moored-zubeyde-hanim-ship.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
  { id: 3, name: 'vanilla', description: "best vanilla",price:"500",image:`https://images.pexels.com/photos/17243509/pexels-photo-17243509/free-photo-of-wood-city-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1` },
  { id: 4, name: 'strawberry', description: "best strawberry" ,price:"500",image:`https://images.pexels.com/photos/9051803/pexels-photo-9051803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
  { id: 5, name: 'vanilla', description: "best vanilla",price:"500",image:`https://images.pexels.com/photos/12635436/pexels-photo-12635436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1` },
  { id: 6, name: 'strawberry', description: "best strawberry" ,price:"500",image:`https://images.pexels.com/photos/17568719/pexels-photo-17568719/free-photo-of-empire-state-building-towering-over-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
 
  
];

function Products() {
  const [cart, setCart] = useState([]);
  const [totalAmount,setTotalAmount] = useState(0);
  const ComponentRef = useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => ComponentRef.current,
  });

const handlePrint = () => {
  handleReactToPrint();
}
  const handleAddtoCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalAmount: cartItem.price * (cartItem.quantity + 1),
              }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: 1, totalAmount: product.price },
      ]);
    }
  };

  const removeProduct = (product) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

  useEffect(() => {
    let newtotalAmount = 0;
    cart.forEach(icart => {
      newtotalAmount = newtotalAmount + parseInt(icart.totalAmount)
    })
    setTotalAmount(newtotalAmount)
  },[cart]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='container'>
            <div className='row'>
              {products &&
                products.map((item) => {
                  return (
                    <div
                      className='col-md-4 mt-5'
                      key={item.id}
                    >
                      <div
                        className='card shadow'
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleAddtoCart(item)}
                      >
                        <img src={item.image} className='w-100' alt='' />
                        <div className='card-body'>
                          <h6 className='m-0'>{item.name}</h6>
                          <p className='m-0' style={{ fontSize: '15px' }}>
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className='col-md-4' style={{ backgroundColor: '' }}>
          <div style={{display:"none"}}>
            <ComponentToPrint cart={cart} totalAmount={totalAmount} ref={ComponentRef}/>
          </div>
          <h2>Cart Items</h2>
          <div  className='table-responsive bg-white shadow' >
            <table className='table table-responsive table-white table-hover'>
              <thead>
                <tr>
                  <td>NO</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Qty</td>
                  <td>Total</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 ? (
                  cart.map((cartProduct, key) => (
                    <tr key={key}>
                      <td>{cartProduct.id}</td>
                      <td>{cartProduct.name}</td>
                      <td>{cartProduct.price}</td>
                      <td>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        className='btn btn-sm'
        onClick={() => handleAddtoCart(cartProduct)}
        style={{ flex: 1 }}
      >
        +
      </button>
      <span style={{ flex: 1, textAlign: 'center' }}>{cartProduct.quantity}</span>
      <button
        className='btn btn-sm ml-2'
        onClick={() => {
          if (cartProduct.quantity > 1) {
            handleAddtoCart({
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            });
          } else {
            removeProduct(cartProduct);
          }
        }}
        style={{ flex: 1 }}
      >
        -
      </button>
    </div>
                      </td>
                      <td>{cartProduct.totalAmount}</td>
                      <td>
                        <button
                          className='btn btn-danger btn-sm'
                          onClick={() => removeProduct(cartProduct)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='6'>No Item in Cart</td>
                  </tr>
                )}
              </tbody>
            </table>
           
              <h2 className='mt-2 '>total Amount : ${totalAmount}</h2>
              <div className='mt-3'>
                { totalAmount !== 0 ? <div>
                  <button className='btn btn-primary' onClick={handlePrint}>
                    Pay Now
                  </button>

                </div> : 'Please add a product to the cart'

                }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
