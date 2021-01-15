import React, { useState } from "react";


export default function Project() {

    const [title, setTitle] = useState('The Atelier Tailored Coat');
    const [price, setPrice] = useState('499');
    const [qty, setQty] = useState(1);
    const [img, setImg] = useState('bonfire.jpg');

    function onClickAdd() {
        setTitle(title);
        setPrice(price);
        setQty(qty);
        setImg(img);
    }
    return (
        <main className="bg-yellow-100 min-h-screen p-12">
            <section className="container mx-auto grid grid-cols-2 gap-8">
                <div className="text-gray-500 text-xs space-x-4">
                    <img src="bonfire.jpg" width="300" height="400"></img>
                </div>
                <div className="text-gray-500 text-xs space-x-4">
                    <h4 className="text-lg text-black-800 flex justify-center mb-3">The Atelier Tailored Coat</h4>
                    <h3 className="text-lg text-blue-600 flex justify-center">$499.00</h3>
                    <div style={{ color: '#777' }} onClick={() => setQty(qty + 1)}>Qty: {qty} </div>
                    <div className="flex space-between">
                        <img className="mx-3" style={{ height: 25, width: 25 }}
                            alt="increase"
                            src="https://image.flaticon.com/icons/svg/1665/1665578.svg"
                            className="action-icons"
                            onClick={() => setQty(qty + 1)}
                        />
                        <img className="mx-3" style={{ height: 25, width: 25 }}
                            alt="decrease"
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                            className="action-icons"
                            onClick={() => setQty(qty - 1)}
                        />
                    </div >
                    <button className="mt-3" onClick={onClickAdd}>ADD TO CART</button>
                </div>

            </section>
        </main>
    )
}