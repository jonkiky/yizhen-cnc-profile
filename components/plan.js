import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';

function Plan() {

  return (
   <section id="plan" className="w-full z-30 top-0 py-24 md:py-96 bg-[url('/yizhen-cnc-profile/assets/images/plan.png')] bg-cover ">
        <div className="w-full container mx-auto flex text-center flex-wrap items-center justify-between mt-0 px-6 py-3">
             <h1 className="w-full py-4 px-4 text-4xl md:text-7xl font-extrabold bg-slate-50 opacity-90">看营养师是怎么设计Plan的</h1>
            <div className="px-4 pt-12 text-center m-auto">
                <Link href="/plan" className="text-xl md:text-2xl py-3 px-6 m-2 border-2 border-black text-white  bg-slate-700">
                    开始定制计划
                </Link>
            </div>
        </div>
   </section>
  );
  
};


export default Plan;
