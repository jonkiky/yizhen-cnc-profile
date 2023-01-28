import React from 'react'; 
import Link from 'next/link';

function Banner() {

  return (
   <section id="banner" className="w-full z-30 top-0 py-48 bg-orange-100 border-t-2 border-slate-400 drop-shadow-xl bg-fixed">
        <div className="w-full container mx-auto flex text-4xl flex-wrap items-center justify-between mt-0 px-6 py-3">
            <h1 className="w-full py-8 text-9xl bg-neutral-800 text-neutral-200 px-8">减肥，太简单</h1>
            <h1 className="w-full py-8 px-2">减肥失败，或许只是我们没有系统的去研究过什么是减肥</h1>
            <h1 className="w-full py-4 px-2">基于美国NASM营养师课程，我们重塑减肥认知，再次启航</h1>
            <div className="px-2 pt-12">
                <Link  className="text-2xl py-3 px-6 m-2 border-2 border-black hover:text-white  hover:bg-slate-800" href="/basic">基础知识</Link>
                <Link   className="text-2xl py-3 px-6 m-2 border-2 border-black hover:text-white  hover:bg-slate-800" href="/plan">制定减肥计划</Link>
            </div>
        </div>
   </section>
  );
};


export default Banner;
