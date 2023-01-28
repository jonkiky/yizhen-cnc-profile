import React from 'react'; 
import tw from 'twin.macro';

export const Paper = tw.div``;
export const Container = tw.div`w-full container mx-auto  items-center justify-between mt-0 px-6 py-3 leading-10`;
export const Title = tw.h1`my-4 text-3xl font-extrabold leading-none text-gray-900 md:text-6xl lg:text-6xl`;
export const Paragraph = tw.p`mb-4 text-base font-normal text-gray-600 lg:text-lg md:text-lg`;
export const SubTitle = tw.h2`text-2xl  my-6 font-extrabold dark:text-white md:text-4xl lg:text-4xl`;
export const UnderLine = tw.span`underline underline-offset-4 decoration-8 decoration-blue-400 dark:decoration-blue-600`;
export const Section = tw.section`h-screen flex flex-row grid grid-cols-2  gap-4 my-auto content-center`;
export const blackBoldSpan = tw.span`text-slate-900 font-bold`;
export const dot = tw.span`w-2 h-2 bg-black inline-block rounded-full`;
