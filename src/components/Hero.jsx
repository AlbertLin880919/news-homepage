import React from "react";
import { newsList } from "../constants";

const Hero = () => {
    return (
        <section className="w-full pt-6 md:pt-12">
            <div className="flex gap-10 md:gap-6 flex-col md:flex-row">
                {/* left part */}
                <div className="md:flex-grow-2 md:basis-2/3 flex flex-col">
                <picture>
                    <source srcSet="/images/image-web-3-desktop.jpg" media="(min-width: 768px)" />
                    <img src="/images/image-web-3-mobile.jpg" alt="hero image" className="mb-4" />
                </picture>
                    {/* <img className="hidden md:block md:mb-7 w-full" src={`/images/image-web-3-desktop.jpg`} alt="hero image" />
                    <img className="mb-4 md:hidden" src={`/images/image-web-3-mobile.jpg`} alt="hero image" /> */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <h1 className="text-5xl leading-tight font-black flex-1">The Bright Future of Web 3.0?</h1>
                        <div className="flex flex-col flex-1 gap-6 ">
                            <p className="md:leading-6 xl:leading-7 ">
                                We dive into the next evolution of the web that claims to put the power of the platforms
                                back into the hands of the people. But is it really fulfilling its promise?
                            </p>
                            <button className="bg-[#F15D51] w-max px-9 py-2.5 font-bold tracking-widest">READ MORE</button>
                        </div>
                    </div>
                </div>
                {/* right part */}
                <div className="flex flex-col bg-black text-white w-full md:flex-grow-1 md:basis-1/3 p-4">
                    <h2 className="text-[#E9AA52] font-bold text-2xl md:text-4xl mb-5 mt-4">New</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2 border-b border-gray-700 pb-7">
                            <h3 className="font-bold">Hydrogen VS Electric Cars</h3>
                            <p className="text-[#C5C6CE] text-md">Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </div>
                        <div className="flex flex-col gap-2 border-b border-gray-700 pb-7">
                            <h3 className="font-bold">The Downsides of AI Artistry</h3>
                            <p className="text-[#C5C6CE] text-md">
                                What are the possible adverse effects of on-demand AI image generation?
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold">Is VC Funding Drying Up?</h3>
                            <p className="text-[#C5C6CE] text-md">
                                Private funding by VC firms is down 50% YOY. We take a look at what that means.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom part */}
            <div className="flex flex-col md:flex-row w-full gap-8 mt-14">
                {
                    newsList.map(item => {
                        return (
                            <div className="flex gap-3" key={item.number}>
                                <img className="w-[30%] h-full object-contain" src={item.image} alt={item.title} />
                                <div className="flex flex-col justify-between">
                                    <p className="text-[#F15D51] text-3xl font-bold">{item.number}</p>
                                    <h3 className="font-bold cursor-pointer hover:text-[#F15D51]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#5E607A] text-sm">{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Hero;
