import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
    return (
        <div className="lg:max-w-[1110px] mx-auto px-4 py-8 md:py-10 lg:py-14 xl:py-24">
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;
