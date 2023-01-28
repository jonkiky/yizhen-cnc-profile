import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolid, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

function Motivation() {

  return (
   <section id="plan" className="w-full z-30 top-0 py-96  bg-[url('/assets/images/motivation.png')] bg-cover bg-fixed">
        <div className="w-full container mx-auto text-white flex text-5xl text-center flex-wrap items-center justify-between mt-0 px-6 py-3">
             <h1 className="w-full py-4 px-4 text-8xl font-extrabold bg-zinc-800 opacity-90">准备好了么？一起开启新的旅程</h1>

            <div className="px-4 pt-12 text-center m-auto">
                <Link href="/plan">
                    <FontAwesomeIcon icon={faSolid,faCirclePlay} size="lg"/>
                </Link>
            </div>
        </div>
   </section>
  );
  
};


export default Motivation;
