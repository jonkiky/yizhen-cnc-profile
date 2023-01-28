import { React, useRef} from 'react'; 
import Link from 'next/link';


function Head() {

    const ref = useRef(null);

    const handleChange = (e)=>{
        if (ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('hidden');

        } else {
            ref.current.classList.add('hidden');
        }
    }


  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3 ">

            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block order-2">
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" onChange={handleChange}/>


          <div className="order-1 md:order-1">
                <Link className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-4xl " href="/">
                   Refresh
                </Link>
            </div>

            <div ref={ref} className="hidden md:flex md:items-center md:w-auto w-full order-2 md:order-2 " id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-lg text-gray-700 pt-4 md:pt-0">
                        <li><Link className="inline-block w-full no-underline hover:text-white  hover:bg-slate-800 py-2 px-4" href="/basic">营养基础</Link></li>
                        <li><Link className="inline-block w-full no-underline hover:text-white  hover:bg-slate-800 py-2 px-4" href="/plan">制定减肥计划</Link></li>
                        <li><Link className="inline-block w-full no-underline hover:text-white  hover:bg-slate-800 py-2 px-4" href="/about_us">关于我们</Link></li>
                    </ul>
                </nav>
            </div>
  
        </div>
    </nav>
  );
};


export default Head;
