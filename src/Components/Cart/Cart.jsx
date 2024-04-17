import React from 'react'
import { useCart } from 'react-use-cart'


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
                        <td style={{ gap: "10px" }}>
                          <button
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              marginLeft: "-10px",
                              marginRight: "10px",
                            }}
                            onClick={() =>
                              updateItemQuantity(el.id, el.quantity + 1)
                            }
                            className="btn btn-success"
                          >
                            +
                          </button>
                          <button
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                            }}
                            onClick={() =>
                              updateItemQuantity(el.id, el.quantity - 1)
                            }
                            className="btn btn-danger">
                            -
                          </button>
                        </td>
                      </tr>
                    );
                })
            }
        </table>
        <div style={{ margin: '15px'}}>
            <h2>Сумма: {cartTotal}$</h2>
            <button className="btn btn-danger" onClick={()=> emptyCart()}>Clear</button>
        </div>
    </section>
  )
}

const styles = {
  width: "60px",
  marginBottom: "10px",
  borderRadius: "5px",
};
