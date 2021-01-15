import React, { useState } from "react";

export default function CartItem() {

    const styles = {
        image: {
            height: 110,
            width: 110,
            borderRadius: 4
        }
    }
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState(1);
    const [img, setImg] = useState('');



    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block" >
                <div style={{ fontSize: 25 }}>
                    {title}
                </div>
                <div style={{ color: '#777' }} >{price}</div>
                <div style={{ color: '#777' }} onClick={() => setQty(qty + 1)}>Qty: {qty} </div>
                <div className="cart-items-actions">
                    <div className="flex space-between">

                        <img style={{ height: 25, width: 25 }}
                            alt="increase"
                            src="https://image.flaticon.com/icons/svg/1665/1665578.svg"
                            className="action-icons"
                            onClick={() => setQty(qty + 1)}
                        />
                        <img style={{ height: 25, width: 25 }}
                            alt="decrease"
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                            className="action-icons"
                            onClick={() => setQty(qty - 1)}
                        />
                        <img style={{ height: 25, width: 25 }}
                            alt="delete"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                            className="action-icons"
                        // onClick={() => this.props.onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>

        </div >
    );
}





