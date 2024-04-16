import React from 'react'
import { useCart } from 'react-use-cart'
import { FaTrashCan } from "react-icons/fa6";

export const Cart = () => {
    const {
      isEmpty,
      totalItems,
      totalUniqueItems,
      items,
      cartTotal,
      updateItem,
      updateItemQuantity,
      emptyCart,
    } = useCart();
    if(isEmpty) return <h1>Basket is empty</h1>
  return (
    <section >
        <h5 style={{fontWeight: '600'}}>({totalUniqueItems}) ({totalItems})</h5>
        <table style={{ width: '90%'}}>
            {
                items.map((el, id)=> {
                    return (
                      <tr key={id}>
                        <td>
                          <img style={styles} src={el.img} />
                        </td>
                        <td style={{ fontWeight: "600" }}>
                          ({el.title}) <br />
                          {el.price}$
                        </td>
                        <td style={{ fontWeight: "600" }}>({el.quantity})</td>
                        <td>
                          {<FaTrashCan className='shop-cart-button' style={{cursor: 'pointer'}} onClick={updateItemQuantity(el.id)} />}
                        </td>
                      </tr>
                    );
                })
            }
        </table>
        <div>
            <h2>Сумма: {cartTotal}$</h2>
        </div>
    </section>
  )
}

const styles = {
  width: "60px",
  marginBottom: "10px",
  borderRadius: "5px",
};