import React from "react";

export default function CartItem() {

    const styles = {
        image: {
            height: 110,
            width: 110,
            borderRadius: 4
        }
    }

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div>
                    The Atelier Tailored Coat
                    </div>
                <div>$499.00</div>
                <div>Qty: 1</div>
                <div className="cart-items-actions">

                </div>
            </div>

        </div>
    );
}





