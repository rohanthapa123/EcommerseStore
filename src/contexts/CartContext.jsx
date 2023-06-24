import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
      if (cart) {
        const amount = cart.reduce((accumulator, currentItem)=>{
          return accumulator + currentItem.amount;
        },0)
        setItemAmount(amount)
      }
    },[cart])
    useEffect(()=>{
      
        const total = cart.reduce((accumulator, currentItem)=>{
          console.log(currentItem)
          return accumulator + currentItem.price * currentItem.amount;
        },0)
        setTotal(total)
      
    })

    const addToCart = (item, id) =>{
      const newItem = {...item, amount:1}

      const cartItem = cart.find((item)=>{
        return item.id === id
      })
      //  console.log("newitem",newItem)
      //  console.log("cartitem",cartItem)
      if(cartItem){
        const newCart = [...cart].map((item)=>{
          if(item.id === id){
            // console.log("already");
            return {...item, amount: cartItem.amount+1}
          }else{
            // console.log("new")
            return item;
          }
        });
        // console.log(newCart)
        setCart(newCart)
      }else{
        setCart([...cart,newItem]);
      }
    };
    const removeFromCart = (id) =>{
      const newCart = cart.filter((item)=>{
        return item.id !== id;
      })
      setCart(newCart)
    }
    const clearCart = () =>{
      setCart([])
    }

    const increaseAmount = (id) =>{
      const cartItem = cart.find((item)=>{
        item.id === id
      })
      addToCart(cartItem , id)
    }
    const decreaseAmount = (id) =>{
      const cartItem = cart.find((item)=>{
        return item.id === id
      })
      if (cartItem){
        const newCart = cart.map(item =>{
          if(item.id === id){
            return {...item, amount:cartItem.amount -1}
          }else{
            return item;
          }
        })
        setCart(newCart)
      }
      
        if(cartItem.amount < 2){
          removeFromCart(id)
        }
      
      console.log("Amount decreased")
    }
    
    // console.log(cart);
  return (
    <CartContext.Provider value={{cart ,addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount ,itemAmount, setItemAmount ,total, setTotal}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider