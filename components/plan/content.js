import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import circle from '../../assets/images/Simon Sinek Golden Circle.png'
import line from '../../assets/images/line.png'


import {Paper,Container,UnderLine,Title,Paragraph,SubTitle,Section,blackBoldSpan,dot} from '../theme.js';

function PlanContent() {

  return (
    <>
     <Paper>
         <Container >
            <section className="md:flex md:flex-row md:grid md:grid-cols-3  md:gap-4  flex flex-col my-auto content-center">
            	<div>
            	<Title>设定目标 </Title>
            	<SubTitle>Start from Why </SubTitle>
            	</div>
            	<div className="md:col-span-2">
            		<Paragraph>
            		美国著名演说家作者Simon Sinek通过对乔布斯，怀特兄弟等成功人物的研究，
            		提出了一个行为模型。在他start with Why 这本书中，他称之为Golden Circle.  
            		
            		</Paragraph>
            		<div class="content md:flex-none  lg:flex">
            				
            				<div className="item-body px-2 ">
								<Paragraph >
			            		Golden Circle. 有三个组成部分，Why，How, What.
			            		</Paragraph>
			            		<Paragraph >
			            		Why 定义了我们想要的结果，设定的目标。<br/>
			            		How 定义了如何能达到想要的结果。 应该要做什么。<br/>
			            		What 定义了我们做了什么。 <br/>
			            		</Paragraph>
			            		<Paragraph >
			            		Simon Sinek认为成功的公司包括个人，都有明确的目的。了解为什么我要做这些事情。 
			            		Start with why and stay with why. 
			         			当有了明确的目标，才能正确的定义How。
								</Paragraph>

			            		<Paragraph >
			            		<UnderLine>一个好的目标是清晰简单，可执行的，可衡量的。</UnderLine> <br/>
								Simon Sinek 书中提供了定目标的模板。 <br/>
								To do something _____ So that___  <br/>
								我需要做什么，可以让我得到什么。<br/>
								</Paragraph>

								<Paragraph >
								很多人行为模型是从做什么开始的，这会模糊目标的设定。<br/> 
								比如很多人开始减肥，简单的将目标定义为减重10斤为目标，
								这是设定目标的一种方式，但是这目标却太过于平常，并无法提供太多动力。我们可以有更好的目标设定。<br/>
								</Paragraph>

								<Paragraph >
								我们可以通过进一步思考，如果减肥成功后能带给自己什么好处。
								比如能提升运动能力等。或者通过马斯洛需求层次理论，将自己的需求升华，以真正了解自己的目的。<br/>
								之后以自己为什么要减肥做为起点来指导整个减肥行为，<br/>
								将会为我们的减肥大业提供持续不断的动力。 <br/>
								<br/>
								</Paragraph>

								</div>
							<Image src={circle} className="md:w-96 md:h-96" />
						</div>
            	</div>
            </section>



			<section className=" md:flex md:flex-row md:grid md:grid-cols-3 flex flex-col  gap-4 my-48 content-center">
	        	<div>	
			            <Title>制定方案 (How)</Title>
			            <SubTitle>Make a plan</SubTitle>
            	</div>
	            <div className="md:col-span-2">
			            <Paragraph>  当设定完目标后，我们可以开始设定计划大纲。决定怎么做
			            . 减肥为主的方案，通常分为饮食计划和运动计划两部分。</Paragraph>
			            <SubTitle>饮食方案 </SubTitle>
			            <Paragraph>
			            	减肥一般有减瘦再增肥的流程。这比较痛苦，会使肌肉流失，新陈代谢下降，而且大多数人很难成功，所以我推荐尝试减脂不减肌肉。 
  							<br/>
  							饮食计划就偏高蛋白，低碳水和脂肪，同时注意肝肾功能。<br/>
             			</Paragraph>

             			<div className="md:ml-12">
             			<SubTitle>饮食计划 </SubTitle>

             			<Paragraph>
             			最喜欢做饮食计划，<UnderLine>好的饮食计划能确保你的减肥效果。确保你能相信这个减肥计划是可行的</UnderLine>。

						</Paragraph>

						 <span className="text-slate-900 text-2xl">Step 1 : 基础代谢BMR计算 </span>
						<Paragraph>
							BMR通过年龄，身高，体重，性别来估算基础新陈代谢量。 记住这是估算值，每个人都不一样。
							180lb 的胖子和180lb的健身男。他们的基础代谢量是完全不一样的。需要在计划执行一段时间后进行调整。
							<br/>
							BMR 计算器https://m.medsci.cn/scale/show.do?id=ff9b2285b4<br/>
							或者 英文https://www.niddk.nih.gov/bwp  
							<br/>

						</Paragraph>

						<span className="text-slate-900 text-2xl">Step 2 : 计算能量缺口 </span>
						<Paragraph>
						一般推荐减肥的速度最高不超过人体3%的体重。推荐一周减（1~ 2 pounds per week) ,过快的减肥会导致身体各个平衡的失调。会出现长痘痘，皮肤油腻等问题。
						</Paragraph>

						<Paragraph className="md:ml-12">
						<span className="text-slate-900">例如基础代谢为 2662 calories/ day(活动因子1.5）, 如果我们按 2 pounds per week计算。</span> <br/>
						 <br/>
						蛋白质 4 calories/gram <br/>
						脂肪：9 calories/gram <br/>
						碳水: 4 calories/gram <br/>
						一种理解 1 gram = 7.7 calories. <br/>
						另外是： 1 gram = (4+4+9)/3 = 5.6 calories<br/>
						https://www.inchcalculator.com/convert/gram-to-calorie-burned/<br/>
						<br/>
						每周要减 907克（2 pounds = 907.185 grams ），需要能量赤字 907grams * 5.6 calories/gram= 5080 calories <br/>
						每天就的能量赤字就是 5080 / 7 = 725 calories <br/>
						我们每天需要的能量为：2662-725 = 1937 calories/ day <br/>
						</Paragraph>


						<span className="text-slate-900 text-2xl">Step 3 : 能量摄入 </span>
					
             			<Paragraph>
             			日常摄入1.8~2.2g/kg的蛋白质可以帮助我们在减肥的同时维持肌肉。具体看营养基础<br/>
						例如：190lb = 87kg <br/>
						蛋白质  87kg * 2.2g/kg = 189.2g 或者 <br/>
						1937 Calories/day * 35%  / 4 Calories / g =170g
						<br/>
						碳水：<br/>
						碳水占总热量 40%左右<br/>
						1937 Calories/day * 40%  / 4 Calories / g =194g<br/>

						脂肪：<br/>
						脂肪占总热量 25%左右<br/>
						1937 Calories/day * 25%  / 9 Calories / g =54g<br/><br/>

						蛋白质： 189g<br/>
						碳水： 194g<br/>
						脂肪: 54g<br/>

             			</Paragraph>

						</div>
             			<SubTitle>运动方案 </SubTitle>
             			<Paragraph>
							1. 有氧为主，无氧为辅助。<br/>
							2. 增加平衡锻炼项目。<br/>
             			</Paragraph>
             			<SubTitle>定义标准</SubTitle>
             			<Paragraph>
             				任何的计划都需要可衡量，数字化。如果目标无法衡量，那就是一个耍流氓的目标。<br/>
             				比如我这里，可以通过高尔夫球杆数，减重，身体维度的变化，力量值，相同力量组数，平时运动状态来
             				测试方案的好坏，好则保持，差就得优化。

             			</Paragraph>


	            </div>
             </section>


			<section className=" md:flex md:flex-row md:grid md:grid-cols-3  md:gap-4 flex flex-col my-48 content-center">
	        	<div>	
			            <Title>做什么 (What)</Title>
			            <SubTitle>Take action</SubTitle>
            	</div>
	            <div className="md:col-span-2">
			            <SubTitle>饮食方案 </SubTitle>
			            <Paragraph>
			            	<b>Meal Plan</b>
             			</Paragraph>
             			<Paragraph>
			            	制定什么时候吃什么，吃多少。亚洲人习惯分享食物。
			            	比如四菜一汤，但是减肥的话。四菜一汤合着吃很难判断出，一个人吃了多少。<br/>
			            	建议我们需要每个人吃定量的饭菜，就得每人吃一盘。
			            	
			            	<br/>
			            	需要注意喝水量
             			</Paragraph>
             			<Paragraph>
			            	MP好处：<br/>
			            	&nbsp; 1. 减少浪费 <br/>
			            	&nbsp; 2. Meal Plan 一般都是一周一定，更有效的分配食物和营养搭配。<br/>
			            	&nbsp; 3. 做饭做菜更加高效。解决每天想吃什么的问题。<br/>

             			</Paragraph>
             			<SubTitle>运动方案 </SubTitle>
             			<Paragraph>
							运动也需要制定目标和测试标准。这样才知道是否每天都在进步<br/>
							专项训练<br/>
							有氧和无氧相结合，注意拉伸。<br/>
             			</Paragraph>
             			<SubTitle>补给 </SubTitle>
             			<Paragraph>
							寻求适合自己的补给，比如green tea extract egcg，左旋肉碱，蛋白粉，pre-work饼干等， 事半功倍。
             			</Paragraph>
             			
             			
	            </div>
             </section>


            <section className=" md:flex md:flex-row md:grid md:grid-cols-3  md:gap-4 flex flex-col my-48 content-center">
	            <Title>我自己的方案</Title>
	            					<div className="md:col-span-2">
	            					<SubTitle>目标</SubTitle>
										<Paragraph>
										我希望有更好的身体条件来支持我打出更漂亮的高尔夫。 
										</Paragraph>
										<Paragraph>
										我需要减轻重量，以便于我减少体重对我膝盖的压力，增加运动天赋，增加身体运动的持久力。<br/>
										高尔夫经常需持续4-5个小时，行走8公里路程。这是个相当消耗体力的运动。我需要通过减重来减少运动负担，提高运动能力。<br/>
										我需要增加背部，肩部和腿部肌肉。以保护我远离可能的运动伤害，同时提高下肢的爆发力，来提高球距离。 <br/>
										我需要改善身体平衡，增加大脑对各个肌肉的控制，这样可以提高挥杆的稳定性。  <br/>
						
										</Paragraph>


									<SubTitle>减脂计划</SubTitle>
										<Paragraph>
											目标体重是170磅，减20磅大概在10周到12周，3个月时间。可能出现2~3个平台期。
											平台期可能出现在第四周和第9周。原因是体重的下降会导致新陈代谢的下降。
											在平台期，需要重新评估减肥方案，饮食方案。但愿可以早日走出平台期。
										</Paragraph>


										<Image src={line} />


										<SubTitle>饮食计划</SubTitle>
										

										<Paragraph>
										每日卡路里摄入量为1937calories， 日均热量缺口在1000 calories<br/>
										蛋白质占35%或者更高些，碳水占40%，脂肪占25%<br/>
										蛋白质： 170g<br/>
										碳水： 194g<br/>
										脂肪: 54g<br/>
										</Paragraph>

										<Paragraph>
											饮食次数，四餐制度（增肌）： 早上，中午，下午和晚上。白天醒来后，每隔3~4小时进食一次。<br/>
											周五节食24小时，只吃晚饭，给肠胃放假，其次锻炼大脑对身体的控制。
										</Paragraph>


										<SubTitle>补给</SubTitle>
										<Paragraph>
											Green Tea Extract EGCG，左旋肉碱，蛋白粉，鱼油，D3, 维生素软糖
										</Paragraph>

										<SubTitle>运动</SubTitle>
										<Paragraph>
											一周5练<br/> 
											周一练腿日<br/> 
											周二有氧+高尔夫无氧特训<br/> 
											周三胸背<br/> 
											周四有氧+高尔夫无氧特训<br/> 
											周五休息<br/> 
											周六、周日高尔夫暴走3小时。
										</Paragraph>
									</div>
			</section>
				
            </Container>
     </Paper>
    </>
  );
};


export default PlanContent;