import React from "react";


export default function Project() {

    return (
        <main className="bg-yellow-100 min-h-screen p-12">
            <section className="container mx-auto grid grid-cols-2 gap-8">
                <div className="text-gray-500 text-xs space-x-4">
                    <img src="bonfire.jpg" width="300" height="400"></img>
                </div>
                <div className="text-gray-500 text-xs space-x-4">
                    <h4 className="text-lg text-black-800 flex justify-center mb-3">The Atelier Tailored Coat</h4>
                    <h3 className="text-lg text-blue-600 flex justify-center">$499.00</h3>
                </div>

            </section>
        </main>
    )
}