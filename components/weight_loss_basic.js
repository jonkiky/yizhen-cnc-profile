import React from 'react'; 
import Image from 'next/image'
import pic1 from'../assets/images/thermodynamics.png';
import Link from 'next/link';

function WeightLossBasic() {

  return (
   <section id="banner" className="w-full z-30 top-0 pt-72 pb-96  bg-fixed">
        <div className="w-full container mx-auto flex text-4xl flex-wrap items-center justify-between mt-0 px-6 py-3">
            <div className="w-1/2">
            <h1 className="w-full py-4 px-4 text-6xl">你是否相信少吃多动就是减肥 <br/> </h1>
            <h1 className="w-full py-4 px-4 ">大多数人减肥失败，越减越胖是对减肥认知出了错</h1>
            <h1 className="w-full  px-4 ">减肥应该注重身体基础代谢，多吃多动也是减肥</h1>
            <h1 className="w-full  px-4 py-4 text-slate-800">学习营养学，减肥事半功倍</h1>
            </div>
            <div className="w-1/2 p-8">
            <Image src={pic1}/>
            </div>
            <div className="px-4">
                <Link href="/basic" className="text-2xl py-3 px-6 m-2 border-2 border-black text-white  bg-slate-800">更多基础知识</Link>
            </div>
        </div>
   </section>
  );
  
};


export default WeightLossBasic;
