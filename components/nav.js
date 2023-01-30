import React from 'react'; 
import Link from 'next/link';
import {Paper,Container} from './theme.js';


function listItem(text,key){
  return  <li >
          <div className="flex items-center">
            <svg aria-hidden="true" className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd">
            </path></svg>
            <span className=" ml-1 text-base font-medium text-gray-100 md:ml-2 dark:text-gray-400 hover:text-lg hover:text-gray-900 hover:bg-gray-100 px-5">
            <Link href={"./"+key} >{text}</Link>
            </span>
          </div>
        </li>
}

function listItemRoot(text){
  return  <li >
          <div className="flex items-center">
            <span className="ml-1 text-base font-medium text-gray-100 md:ml-2 dark:text-gray-400 hover:text-lg hover:text-gray-900 hover:bg-gray-100 px-5">{text}</span>
          </div>
        </li>
}


function Nav() {

  return (
   <section className="sticky top-0 hidden sm:flex z-50 drop-shadow-2xl bg-gray-900 border-b-2 border-slate-500 ">
      <Container>
      <ol className="inline-flex items-center space-x-1 md:space-x-3 cursor-pointer text-xl text-slate-100 font-bold">
         {listItemRoot("导航")}
         {listItem("减肥关键","basic#key")}
         {listItem("热量输出","basic#energy-out")}
         {listItem("热量输入","basic#energy-in")}
         {listItem("总结","basic#summary")}
       
      </ol>
      </Container>
   </section>
  );
};


export default Nav;
