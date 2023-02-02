import React from 'react'; 
import Image from 'next/image';
import circle from '../assets/images/yc.jpg'
import {Paper,Container,UnderLine,Title,Paragraph,SubTitle,Section,blackBoldSpan,dot} from './theme.js';

function AboutUsContent() {

  return (
    <>
     <Paper>
         <Container >
         <section className="flex flex-col md:flex-row md:grid md:grid-cols-3  md:gap-4 my-auto content-center">
            	<div>
            	<Image src={circle} className="md:w-96 w-72 rounded-full p-8" />
            	</div>
            	<div className="col-span-2">
            		<SubTitle>天天写代码的营养师</SubTitle>
            		<Paragraph>
            			毕业于美国纽约州立大学计算机系，获得博士学位
            		</Paragraph>
            		<Paragraph>
            			National Academy of Sports Medicine（NASM）认证营养师
            		</Paragraph>

            		<Paragraph>
            			目前就职于美国癌症中心(National Cancer Institute)
            		</Paragraph>

                    <Paragraph>
                        减肥是种修行，是对当下生活的升华。肥胖是生活的产物，只有新生才能摆脱肥胖。
                    </Paragraph>

            		<Paragraph>
            			<br/>
            			<b>网站目的</b>
            		</Paragraph>
            		<Paragraph>
            			<span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>
            			分享在营养师认证课程中所学知识，更正错误的资讯，传递正确科学的信息。
            		</Paragraph>
            		<Paragraph>
            			<span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>
            			2023年，减肥进行时。大家一起加油。
            		</Paragraph>
            		<Paragraph>
            			<span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>
            			 练手Nextjs+TailwindCss为基础搭建网站。
            		</Paragraph>
            	</div>
            </section>

         </Container>
         </Paper>
    </>
    )
}     

export default AboutUsContent;