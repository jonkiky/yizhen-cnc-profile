import React from 'react'; 
import Image from 'next/image';
import Nav from '@components/nav';
import protein from '../../assets/images/protein.png'
import balance from '../../assets/images/balance.png';
import muscleImg from '../../assets/images/muscle.png';
import smileImg from '../../assets/images/smile.png';
import healthFood from '../../assets/images/healthFood.png';
import fatImg from '../../assets/images/fat.png';
import TDEE from  '../../assets/images/TDEE.png';
import { faSolid, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

import {Paper,Container,UnderLine,Title,Paragraph,SubTitle,Section,blackBoldSpan,dot} from '../theme.js';

function BasicContent() {

  return (
    <>
    <Paper>
      <Nav/>
         <Container >
            <Section id="key">
              <div className="sm:-mt-48 ">
                <Title>减肥关键</Title>
                <SubTitle>Energy Balance and Metabolism</SubTitle>
                <Paragraph>减肥基础就是热量平衡。要减肥就是得<UnderLine>创造热量缺口</UnderLine>。</Paragraph>
                <Paragraph>吃的多，消耗少。身体就将多余的能量储存起来，就等于增重。反之，就是减重。</Paragraph>
                 <SubTitle>减肥，我们需要去做的就是<UnderLine>控制热量输入，增加热量输出</UnderLine>。</SubTitle>
               </div>
               <div className="sm:-mt-48">
                  <Image src={balance}  alt="balance img" />
               </div>
            </Section>
          <section id="energy-out" className="mt-24 md:mt-0 flex md:flex-row  flex-col md:grid md:grid-cols-2  md:gap-4 my-auto content-center">
            <div>
            <Title>热量输出   </Title>
            <SubTitle> Total Daily Energy Expenditure (TDEE) </SubTitle>

             <Paragraph className="text-base">
                Poehlman在1989提出TDEE概念，是指人体一整天所消耗掉的热量，TDEE主要有三个组成部分。 
             </Paragraph>
             <ul>
              <li>
                <Paragraph className="text-base">
                  <UnderLine>基础代谢</UnderLine> Resting Metabolic Rate (RMR): 啥都不做，就会消耗的能量,占总消耗的60~75%(Mullur, Liu & Brent, 2014)。
               </Paragraph>
             </li>
               <li>
                <Paragraph>
                 <UnderLine>产能消耗 </UnderLine>The Thermic Effect of Feeding (TEF):人体在消化食物过程中所消耗的能,占总消耗的10%（Kelly，2013）。
               </Paragraph>
             </li>
              <li>
                <Paragraph>
                <UnderLine>运动消耗 </UnderLine>The Thermic Effect of Activity (TEA): 指的是各类生活运动中所消耗的能量,占总消耗的15%-30%(Westerterp, 2013).
                </Paragraph>
              </li>
             </ul>
             </div>
             <div className="text-center">
              <Image src={TDEE} className="mb-6" alt="TDEE img" />
              Image from NSAM text book
            </div>
            <Paragraph >
            按图说话，基础代谢占能量消耗主要地位。 减肥过程中，我们更多的是需要<UnderLine>关注我们的基础代谢</UnderLine>。
            简单说，就是在减肥的过程中，<UnderLine>研究表明甲狀腺機能低下症，身体储存高脂肪，肌肉较少会导致基础代谢下降(Mullur, Liu & Brent, 2014)。</UnderLine>
            减肥就是个减脂增肌的过程。
            <span className="text-red-500">注意减脂可能会导致新陈代谢下降，光减脂不增肌导致基础代谢快速下降，这是大多数人为什么一但减少或停止运动就会快速复胖，甚至更胖的原因。</span>
            </Paragraph>
            </section>


            <section className="md:mt-48 mt-12">
             <Title >增加热量输出</Title>
                <SubTitle >
                  <b >充足睡眠</b>
                </SubTitle>

                 <Paragraph >
                  保证足量的休息时间。 
                  研究表明，每晚睡眠5小时或更少与每晚睡7-8小时相比，男性肥胖症的可能性增加3.7倍，女性增加2.3倍(Patel et al., 2008)。
                </Paragraph>
               <SubTitle >
                <b>增加运动</b>
              </SubTitle>
               <Paragraph >
                  有氧运动和无氧运动相结合。<br/>
                  基础代谢和肌肉含量相关。有氧可能会导致肌肉流失，从而导致基础代谢下降。无氧运动能促进基础代谢,增肌的一种方式
                  而且能对身体激素进行调节，长期无氧运动对维持身体状态有积极影响。<br/>
                  有氧运动能快速和大量消耗能量，可以帮助消耗脂肪。<br/>
                  只有有氧运动，那会破坏基础代谢。只有无氧运动，那就可能会成为一个结实的胖子。<br/>
               </Paragraph>
               <SubTitle >
                <b>主动积极</b>
              </SubTitle>
               <Paragraph >
                  改变生活作息，主动寻求能量输出<br/>
                  比如， 能走楼梯不坐电梯。多做家务。加快运动速率，以前慢悠悠走路，现在就快步走等。
               </Paragraph>
          </section>



          <section className="mt-24 md:mb-96 mb-48">
           <Title >
              三种影响能量消耗的常见荷尔蒙
           </Title>
           <SubTitle>甲状腺激素、皮质醇和睾酮</SubTitle>
           <Paragraph >
            <b>甲状腺激素(Thyroid Hormones)</b>在能量的关系和控制中很重要
            通过调节能量储存和消耗来平衡。甲状腺
            激素刺激碳水化合物代谢的几乎所有方面，
            包括增加胰岛素依赖性葡萄糖进入细胞和
            糖原分解以在运动期间分解糖原以获取能量
            和恢复（Hearris,2018)。
            <UnderLine>提高甲状腺激素水平能导致休息能量消耗增加、体重减轻、胆固醇水平降低、脂肪分解和葡萄糖新合成增加（Mullur, Liu & Brent, 2014）</UnderLine>。
           </Paragraph>
           <Paragraph>
           <b>皮质醇</b>是由肾上腺分泌的类固醇激素。它被称为应激激素，因为它在应激时会被释放出来，但它在调节新陈代谢、免疫功能和血压方面也起着重要作用。<UnderLine>高水平的皮质醇会导致体重增加，尤其是在腹部周围</UnderLine>，还可能导致肌肉疲软(Sargis, 2018)。
          
           皮质醇和压力密切相关。因此，<UnderLine>缓解生活中的压力可确保皮质醇水平维持在健康的范围内</UnderLine>。
           </Paragraph>

           <Paragraph>
           <b>睾酮</b>(testosterone)是一种在碳水化合物、脂肪和蛋白质新陈代谢中起关键作用的激素。<UnderLine>它对男性体脂组成和肌肉质量有重大影响</UnderLine>。睾酮缺乏与脂肪量增加（尤其是中央脂肪肚）、胰岛素敏感性降低和糖耐量受损有关，这可能与糖尿病和心脏病风险有关（Kelly & Jones, 2013）。
           <UnderLine>我们去健身房增肌主要就是为了促进睾酮激素的分泌</UnderLine>。促睾的黄金动作就是负重深蹲，当然其他的负重无氧，尤其是下半身爆发力训练都可以对促进睾酮激素有帮助。
           其次是<UnderLine>优质脂肪是输入</UnderLine>，比如坚果等。喝酒会减少睾酮。
           </Paragraph>
           <div className="flex flex-row gap-12 grid grid-cols-2 mt-12 w-full">
              <Image src={muscleImg} alt="muscle img" />
              <Image src={smileImg} alt="smile img" />
            </div> 
           </section>


           <section className="-mt-28" id="energy-in">
            <Title>能量的输入</Title>
           <SubTitle >
              <b>胰岛素玄学</b>
           </SubTitle>

           <Paragraph>
           有种理论认为<UnderLine>控制胰岛素才是减肥的根本</UnderLine>。简单说胰岛素促储能。
           </Paragraph>

             <Paragraph>
             胰岛素(Insulin)是在胰腺中产生的，它能够增加葡萄糖进入细胞，并促进糖原合成。<br/>
             胰高糖素(Glucagon)则是在胰腺中产生的，它能够促进肝脏和肌肉组织中糖原的分解，以增加血糖水平。这两种激素的平衡调节是维持葡萄糖平衡的关键。
             </Paragraph>

             <Paragraph>
             进食后会导致血糖升高，刺激释放胰岛素，胰岛素就会将过多的葡萄糖推入细胞，恢复正常的血糖水平。<br/>
             肝脏（主要）和肾脏共同开始吸收胰岛素并分解它，以防止血糖水平过低。
             每当个体进入低血糖状态时，胰腺就会释放胰高糖素并传到肝脏，在那里释放存储的糖原来恢复正常的血糖水平（Katch et al., 2015）。
             <br/>
             简单说胰岛素的产生会将过多的能源储存起来。 
             <br/>
             <UnderLine>这种理论的基础就是使胰岛素保持平衡。支持少食多餐减肥法，Keto减肥，低碳高蛋白减肥法。减少一次性大量热量输入，或者吃同热量但低GI值的食物，比如脂肪类。</UnderLine>

             </Paragraph>

              <SubTitle >
              <b>Glycemic Index</b>
           </SubTitle>

             <Paragraph>
               糖尿病指数（GI评分）是一种相对排名，用于表示食物对血糖（血糖）的影响2小时后食用该食物。
               评分指数将100分分配给葡萄糖，作为这一排名系统的参考食物。 
               50分基本上反映了一种血糖升高速度为葡萄糖一半的食物。
               <UnderLine>低GI食物被分类为分数低于55分的食物，</UnderLine>中等GI食物被分类为分数在56到69之间的食物，高GI食物被分类为分数高于69分的食物（Pennington & Sprungen, 2009）。
               <br/>
               
               <UnderLine><b>替换</b></UnderLine>食用高GI值的食物为低GI的食物有助于控制胰岛素。GI时候与平等替换。
               <UnderLine>大量食用低GI值的食物等同于小量食用高GI值的食物</UnderLine>。
               <br/>
               GI食物表：https://www.healthwomen.com.tw/giindex/
             </Paragraph>

             </section>


            <section className="mt-24 mb-12">

              <Title>人体主要的能量来源</Title>

             <Paragraph className="mt-12 mb-4">
             人体主要的能量来源主要有三种：碳水化合物、脂肪和蛋白质。碳水化合物是人体最重要的能量来源，来自于食物中的糖类和淀粉类。而脂肪和蛋白质的能量利用率较低，在能量紧缺时才会被代谢。(Chen,L 2018)</Paragraph>

              
              <SubTitle >
                 <b>碳水化合物</b>
              </SubTitle>
             <Paragraph>
             碳水化合物为身体提供能量,是一类有机化合物，由碳、氢和氧组成,包括糖类和淀粉类。糖类是简单碳水化合物，如葡萄糖、果糖等，可以直接被细胞利用。淀粉类(纤维）是复杂碳水化合物，需要被消化吸收后才能被细胞利用（Berg，2015）。
             <UnderLine>根据USDA推荐50%的总卡路里摄入是来自碳水。</UnderLine>
             </Paragraph>
        <div className="md:flex md:flex-row md:grid md:grid-cols-2">
              <div>
            <SubTitle >
              <b>碳水摄入量</b>
           </SubTitle>
           <Paragraph>
             根据国家医学院确定的膳食参考摄入量（DRIs），成年人每天推荐的碳水化合物摄入量因年龄、性别、体重和体力活动水平等个体因素而异。
             ，成年人每天推荐的碳水化合物摄入量为每天<UnderLine>至少130克</UnderLine>。
             通常，这被认为是维持正常新陈代谢和燃料利用的最低量。然而，碳水化合物的可接受的宏量营养素分布范围（AMDR）设定为每天总<UnderLine>热量摄入的45％至65％</UnderLine>。
           <UnderLine>碳水的缺失会导致肌肉流失</UnderLine>。 脂肪新陈代谢的生理途径涉及碳水化合物的副产品以完成新陈代谢。当缺乏这种特定碳水化合物副产品的数量时，
           身体会从某些非碳水化合物来源中生产葡萄糖，包括分解肌肉组织。
           </Paragraph>
             
              
                  <SubTitle >
                    <b>好碳水VS坏碳水</b>
                 </SubTitle>
                 <Paragraph>
                 <UnderLine>优质碳水化合物也称为复杂碳水化合物或未精制碳水化合物，是那些纤维、维生素、矿物质和其他重要营养素含量高的碳水化合物。</UnderLine>它们通常存在于整个、未加工的食物中，如水果、蔬菜、全谷物、豆类和豆类。
                 </Paragraph>

            
                <Paragraph>
                   根据疾病控制和预防中心（CDC）的数据，高摄入优质碳水化合物、低摄入添加糖和饱和脂肪的饮食与慢性疾病（如心脏病、2型糖尿病和一些癌症）的风险较低有关。（https://www.cdc.gov/nutrition/about-cnpp/cnpp-resources/index.html）
      重要的是要记住，如果摄入的卡路里比消耗的多，即使摄入过多的优质碳水化合物也可能导致体重增加。
                 </Paragraph>


                <Paragraph> <UnderLine>低质碳水化合物，也被称为简单碳水化合物或精制碳水化合物，是那些被加工过，纤维含量低，富含糖和添加剂的碳水化合物。</UnderLine>
                它们通常存在于加工食品，如白面包，糕点，糖果，薯片和饮料中。这些类型的碳水化合物可能导致血糖升高(GI)，并且与肥胖和慢性疾病有关。
                </Paragraph>
              </div>
              <Image src={healthFood} className="md:ml-12" alt="healthFood img"/>
          </div>
          </section>





       <section className="mt-48 mb-12">
          <Title>蛋白质</Title>
          <Paragraph>
          蛋白质是一种很重要的营养物质, 它是由氨基酸组成, 是维持人体健康不可缺少的营养素之一。
          <UnderLine>蛋白质对于组织修复、新陈代谢、免疫系统等等都有重要作用</UnderLine>。摄入充足的蛋白质是维持身体健康的必要条件。
          </Paragraph>


             <SubTitle >
                <b> 蛋白质的组成</b>
             </SubTitle>
            <Paragraph>
          蛋白质都是由氨基酸（amino acids）组成。氨基酸可以分为必要，条件性，非必要氨基酸。
          <br/>必要氨基酸-Essential amino acids (EAA) ： 人体无法合成，需从体外摄入。 
          <br/>条件性必需氨基酸-Conditionally essential amino acids： 正常健康的人无需担心这类氨基酸，只有在特殊的情况下，这类氨基酸会变成必须氨基酸。比如受伤，怀孕的情况下。 
          <br/>非必须氨基酸-Nonessential amino acids ： 人体可以自身合成,无需额外摄入。
          <br/><UnderLine>氨基酸是评判蛋白质质量好坏的标准之一,质量好的蛋白质富含必需氨基酸。</UnderLine>
           </Paragraph>


  <div className="flex flex-row grid grid-cols-2">
              <div>
                 <SubTitle>蛋白质作用</SubTitle>
                  <Paragraph>
                  蛋白质能是皮肤，肌肉和骨骼的组成成分。
                  <br/>身体中几乎所有的酶，都是蛋白质，酶在人体的化学反正中起到重要的作用。
                  <br/>蛋白质还能帮助平衡身体PH值
                  </Paragraph>

                   <SubTitle>蛋白质怎么吃</SubTitle>
                 <Paragraph>USDA Dietary Guidelines for Americans 2015–2020 推荐蛋白质的摄入量占总卡路里的-17 to 18%。
                 例如2000 calories 大概日均需要摄入85到 90  蛋白质。  </Paragraph>

                 <Paragraph>The dietary reference intakes (DRI) 推荐以0.8g/kg为标准。例如体重为80kg那么需要摄入的蛋白质约为64g。
                 相对于USDA要求要少些。 </Paragraph>
                 <Paragraph>
                   <UnderLine>研究表明当摄入至少1.8g/kg- 2.2g/kg 量的蛋白质，辅以无氧锻炼，可以最大程度上在减肥的过程中保持肌肉不流失。 </UnderLine>
                   (Demling & DeSanti, 2000; Josse, Atkinson, Tarnopolsky, & Phillips, 2011).
                 </Paragraph>
         </div>
          <Image src={protein} className="ml-12" alt="protein img"/>
      </div>
         
      <SubTitle>蛋白质的质量</SubTitle>


      <Paragraph>必需氨基酸的含量决定了蛋白质的质量。  <UnderLine>一般而言，
      肉类是高质量的蛋白质提高所有必须氨基酸，植物往往无法提供所有必需氨基酸，除了大豆。 </UnderLine></Paragraph>
       <Paragraph>亮氨酸(Leucine)是在蛋白质内最常出现的氨基酸，
      能促进肌肉的生长而且对于婴儿与孩童时期的正常发育和成年人身体内的氮平衡都很重要。
      推荐的摄入量为0.05g/kg (Norton & Wilson, 2009). 鸡蛋,牛奶都富含Leucine。</Paragraph>

       <SubTitle>蛋白质摄入时机</SubTitle>
       <Paragraph>研究表明蛋白质最好是一天四次，每次摄入相同的量的蛋白质最肌肉的生长最有利。 肌肉的生长是在摄入蛋白质3小时后发生。</Paragraph> 
      <Paragraph>关于运动后摄入蛋白质是否会刺激肌肉生长，答案是否定的。研究表明运动后摄入蛋白质对肌肉生长帮助不大。
      (Schoenfeld, Aragon, & Krieger, 2013).</Paragraph>
      <Paragraph>运动后摄入蛋白质和碳水能帮助肌肉的恢复，减少酸痛等。摄入的碳水和蛋白质的比例一般为3：1或者4：1。
      (Ivy et al., 2002; Morifuji, Kanda, Koga, Kawanaka, & Higuchi, 2010; Tarnopolsky et al., 1997; Van Loon, Saris, Kruijshoop, & Wagenmakers, 2000).
      </Paragraph>
      </section>
      <section className="mt-24">
      <SubTitle >蛋白质比较：Whey | Casein | Plant Protein</SubTitle>
      <Paragraph>
      乳清蛋白（Whey）和酪蛋白（Casein）都提取自牛奶。
      <UnderLine><span className="text-slate-900"><b>乳清蛋白</b></span>富含必需氨基酸，与其他动物蛋白质来源相比，其中亮氨酸（Leucine）含量最高。
      由于其易溶解性，乳清蛋白易于混合，消化和吸收迅速，</UnderLine>
      使其成为锻炼者和运动员在强烈训练和/或准备比赛时增加或保持肌肉质量的特别受欢迎的补充剂。、
      </Paragraph>
       <Paragraph>
       <span className="text-slate-900"><b>酪蛋白</b></span>包含所有氨基酸，相对于乳清蛋白，亮氨酸（Leucine）含量没有那么高，而且在酸性环境中
       不益消化。对肌肉生长的作用相对于Whey 要次些。  (Cribb, Williams, Carey, & Hayes, 2006;
Tipton et al., 2004)
       研究表明，在睡前摄入奶蛋白可以促进睡眠时段内的肌蛋白合成。当然这也是结合无氧运动(Snijders et al., 2015).
      </Paragraph>
      <Paragraph>
       <span className="text-slate-900"><b>植物蛋白</b></span>补充剂正在变得越来越受欢迎，通常由大豆、豌豆、稻米等一种或多种蛋白质来源组成。
       相对于乳清蛋白（Whey）和酪蛋白（Casein），亮氨酸（Leucine）含量没有那么高，而且必要氨基酸含量也最少。
       <UnderLine>植物蛋白补充剂相对于乳清蛋白（Whey）和酪蛋白（Casein）使用时更加安全，副作用更少。</UnderLine>
       大家在买蛋白粉的时候，会发现动物类的蛋白质固醇类的含量较高，植物类蛋白质，这指标往往很低。  
       一项对1,386人的实验，研究表明，植物蛋白补给对于肝肾功能影响不大。
       (Devries et al., 2018).另一个研究也发现，对血压的影响也不大。
       (Van Elswyk, Weatherford, & McNeil, 2018).
      </Paragraph>
      </section>


      <section className="mt-36">
      <Title>脂肪 FAT</Title>

      <SubTitle>脂肪的作用</SubTitle>

      <Paragraph>

        能量源(脂肪9kcals/gram, 蛋白质和碳水都是 4kcals/gram)<br/>
        好的脂肪酸（Omega-3 | Omega-6）对人体健康很重要，降低心血管疾病。<br/>
        能促进维生素（A,D,E,K）的吸收。有些维生素是油溶性，而非水溶性。 <br/>
        维持身体体温<br/>
        荷尔蒙，脂肪太少可能会影响男性激素的生<br/>

      </Paragraph>

      <SubTitle>脂肪的类型</SubTitle>
      <Paragraph> <span className="text-slate-900"><b>饱和脂肪酸 Saturated fatty acids</b></span></Paragraph>

      <Paragraph>
      室温下呈固体状态，通常来源于动物，室温下呈固体状态，
      例如猪油，奶油，奶脂，肉类，鸡皮, 蛋黄，冰激凌和奶酪。
      椰子油和棕榈油这些热带油也含有大量饱和脂肪。<br/>
      <UnderLine>过多的饱和脂肪会增加血液中的胆固醇水平，导致动脉堵塞，增加心脏病发作或中风的几率。</UnderLine>
      </Paragraph>


      <Paragraph><span className="text-slate-900"><b>非饱和脂肪酸 unsaturated fatty acids</b></span></Paragraph>
      <Paragraph>
        室温下呈液体状态，通常来源于植物，橄榄油，红花油，菜子油，坚果和牛油果 等。<br/>
        非饱和脂肪酸可以分为
       </Paragraph>
       <Paragraph>
        <span className="text-slate-900">单不饱和脂肪 monounsaturated fatty acids (MUFAs)</span><br/>
        单不饱和脂肪： 也是室温下呈液态的植物油，例如橄榄油（和橄榄），牛油果，菜籽油和花生油（和花生）。 <br/>
        <UnderLine>单不饱和脂肪酸具有多种益处。它们可以降低低密度脂蛋白胆固醇（LDL）水平，保护心血管健康，降低患心脏病和类型2糖尿病的风险。</UnderLine><br/>
         </Paragraph>

         <Paragraph>
        <span className="text-slate-900">多不饱和脂肪 polyunsaturated fatty acids (PUFAs)</span><br/>
        多不饱和脂肪: 指室温下或超市的货架上呈液态的植物油，例如红花油，玉米油，豆油，棉籽油和葵花籽油。
        多元不饱和脂肪酸(PUFAs)具有多种益处。
        它们可以降低血液中的总胆固醇和低密度脂蛋白胆固醇（LDL）水平，
        <UnderLine>有助于保护心血管健康，可以帮助改善炎症和免疫系统，保护脑部健康，改善皮肤</UnderLine><br/>
         </Paragraph>
      

       <Paragraph className="pl-12">
        <span className="text-slate-900">欧米加-3脂肪酸</span><br/>
        从海洋生物来源，是一种健康的脂肪，因为它降低甘油三酯含量，也能减少血循环中的胆固醇含量, 并防止多余的凝血发生。<br/>
        好的来源是富含脂肪的鱼类—特别是三文鱼，大比目鱼，鲭鱼，金枪鱼，沙丁鱼，海鲈鱼，鲱鱼，鲳鱼。<br/>
        欧米加-3脂肪酸也可以从植物中来，如亚麻籽，核桃，菜籽油。黄豆和豆制品，但植物源的欧米加-3脂肪作用不够强。
        Chia seeds 是目前流行的欧米加-3补给。<br/>
      </Paragraph>



       <Paragraph className="pl-12 mb-24">
        <span className="text-slate-900">氢化脂肪, 反式脂肪 Trans fat</span><br/>
        通过化学反应，可将液体植物油转变成室温下呈半液体或固体状态的氢化脂肪。
        氢化反应有时将油变成反式脂肪, 一种很不健康的产品，但却常见于包装零食，
        烤货，块状人造黄油，膨化食品和快餐,油炸食物，薯条。
        避免进食用氢化油或部分氢化油做成的食品。好消息是市面上越来越多的商品“不含反式脂肪”，
        建议选择这些食品。
      </Paragraph>

       <SubTitle>脂肪摄入</SubTitle>

       <Paragraph>
      根据国家医学院确定的膳食参考摄入量（DRIs)推荐脂肪的摄入量占总卡路里的 20% 到 35%  
      (Food and Nutrition Board, 2002; Mensink & World Health Organization, 2016).
      世卫WHO（2010），英国营养协会（2018)推荐脂肪的摄入量不超过总卡路里的30%。
      <br/>
      <UnderLine>1800卡的一天饮食，脂肪摄入量在40g到70g。</UnderLine><br/>
      1800 kcals x 0.20 = 360 kcals<br/>
      1800 kcals x 0.35 = 630 kcals<br/>
      360 kcals/9 kcals/gm = 40 grams<br/>
      630 kcals/9 kcals/gm = 70 grams<br/>
      </Paragraph>
       <Image src={fatImg}  alt="fat img" />


       </section>


        <section className="mt-36" id="summary">
        <Title>总结</Title>
            <Paragraph >
              文中内容节选自 National Academy of Sports Medicine(NASM)的营养师课程。
            </Paragraph>

            <Paragraph >
               希望通过了解这里营养学基础，可以帮助大家去了解我们为什么会变胖，为大家减肥大业,提供方向。
               <br/>
               减肥的具体实施有各种各样的方式，比如168，keto，轻断食等。
               通过学习些营养学知识，我们就能很快了解这些减肥方法是针对那种方式来减。从而大家可以辨别是非适合自己。
               <br/>
            </Paragraph>


            <SubTitle>为什么减肥</SubTitle>
            <Paragraph >
             在减肥的路上，大家可能会经常忽略一点。 减肥是个过程或者是个手段，以达到某些目标。
             大家很关心减肥技巧和体重计上的数字。但是大家是非想过，<UnderLine>我们是为什么什么在这里拼命的减肥。
             是给体重器做减法么？是为了健康？健康是什么？活的久么？我们在续命么？</UnderLine> 我想这并不是大多数人开始减肥的想法吧。
             <br/>
             动力来源于目标，一个明确的目标会推动大家不停的向前。我见过的减肥效果最好的人，他们的故事都是从一场病开始。减肥对他们来说，就是生和死的选择。
             <br/>
             很多人在减肥的大业上半途而废，首先就因为没有一个明确的目标。更没有没有一个可持续，可执行的计划。当然也没办法优化减肥方式和计划。
             <br/>
             如果我减肥，不了解我们减肥是什么，又没有正确的目标，没有可执行，可测试的计划。我们的减肥大业是很难持续的。更别说成功了一个没有成功定义的事情。
             但绝大多数的我们都是这样过活着的。
              <br/>
              通过这里的学习，我们应该了解了什么是减肥。下面就开始我们的减肥计划吧。
              <br/>
             
            </Paragraph>
             <div className="py-12 text-center m-auto">
                <Link href="/plan" className="text-2xl py-3 px-6 m-2 border-2 border-black text-white  bg-slate-700">
                    瞧瞧营养师的减肥计划
                </Link>
              </div>
            <Paragraph> 这里我们展示了营养师课程中关于营养学部分重要的内容。当然本身课程内容还涉及行为学，营养补给等等。欢迎大家学习营养学的知识。
       </Paragraph>
        </section>
            

<SubTitle className="pt-36 ">References</SubTitle>
  <div className="text-sm text-slate-700">
<span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Westerterp, K. R. (2013). Physical activity and physical activity induced energy expenditure in humans:measurement, determinants, and effects. Frontiers in Physiology, 4, 90. http://doi.org/10.3389/fphys.2013.00090
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Mullur, R., Liu, Y.-Y., & Brent, G. A. (2014). Thyroid Hormone Regulation of Metabolism. Physiological Reviews, 94(2), 355–382. http://doi.org/10.1152/physrev.00030.2013
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Kelly, D., & Jones, T. (2013). Testosterone: a metabolic hormone in health and disease. Journal of Endocrinology, 217(3), R25–R45. https://doi.org/10.1530/JOE-12-0455   
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Patel, S. R., Blackwell, T., Redline, S., Ancoli-Israel, S., Cauley, J. A., Hillier, T. A., . . . Stone, K. L. (2008).The association between sleep duration and obesity in older adults. International Journal of Obesity,32(12), 1825–1834.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Hearris, M. A., Hammond, K. M., Fell, J. M., & Morton, J. P. (2018). Regulation of Muscle Glycogen Metabolism during Exercise: Implications for Endurance Performance and Training Adaptations.Nutrients, 10(3), 298. doi:10.3390/nu10030298.）
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Sargis, R. (2018). An Overview of the Adrenal Glands. Retrieved from EndocrineWeb https://www.endocrineweb.com/endocrinology/overview-adrenal-glands
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Katch VL, McArdle WD, and Katch FI, (2015). Essentials of Exercise Physiology (5th edition). Baltimore,MD. Lippincott Williams and Wilkins.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Pennington JAT, and Sprungen J (2009). Bowe’s and Church’s Food Value of Portions Commonly Used (19th edition). Baltimore, MD. Lippincott Williams and Wilkins.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Chen, L., & Magkos, F. (2018). The role of diet and nutrients in energy metabolism. Nutrients, 10(11), 1633.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Berg, J. M., Tymoczko, J. L., & Stryer, L. (2015). Biochemistry. W.H. Freeman.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Demling, R. H., & DeSanti, L. (2000). Effect of a hypocaloric diet, increased protein intake and resistance training on lean mass gains and fat mass loss in overweight police officers. Annals of Nutrition and Metabolism, 44(1), 21–29. doi:10.1159/000012817.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Josse, A. R., Atkinson, S. A., Tarnopolsky, M. A., & Phillips, S. M. (2011). Increased consumption of dairy foods and protein during diet- and exercise-induced weight loss promotes fat mass loss and lean mass gain in overweight and obese premenopausal women. Journal of Nutrition, 141(9), 1626–1634. doi:10.3945/jn.111.141028.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Norton, L. E., & Wilson, G. J. (2009). Optimal protein intake to maximize muscle protein synthesis. AgroFood Industry Hi-Tech, 20, 54–57.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Schoenfeld, B. J., Aragon, A. A., & Krieger, J. W. (2013). The effect of protein timing on muscle strength and hypertrophy: a meta-analysis. Journal of the International Society of Sports Nutrition, 10(1), 53. doi:10.1186/1550-2783-10-53.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Ivy JL, Lee MC, Broznick JT, Reed MJ. Muscle glycogen synthesis after exercise: effect of time and carbohydrate ingestion. J Appl Physiol, 1988;75:1019-1023.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Morifuji, M., Kanda, A., Koga, J., Kawanaka, K., & Higuchi, M. (2010). Post-exercise carbohydrate plus whey protein hydrolysates supplementation increases skeletal muscle glycogen level in rats. Amino Acids, 38(4), 1109–1115.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Tarnopolsky, M., Bosman, M., MacDonald, J., Vandeputte, D., Martin, J., & Roy, B. (1997). Postexercise protein-carbohydrate and carbohydrate supplements increase muscle glycogen in men and women. Journal of Applied Physiology, 83(6), 1877–1883.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Van Loon, L. J., Saris, W. H., Kruijshoop, M., & Wagenmakers, A. J. (2000). Maximizing postexercise muscle glycogen synthesis: carbohydrate supplementation and the application of amino acid or protein hydrolysate mixtures. American Journal of Clinical Nutrition, 72(1), 106–111.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Dietary Reference Intakes (DRIs): Recommended Dietary Allowances and Adequate Intakes"https://www.ncbi.nlm.nih.gov/books/NBK56068/
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Cribb, P. J., Williams, A. D., Carey, M. F., & Hayes, A. (2006, Oct.). The effect of whey isolate and resistance training on strength, body composition, and plasma glutamine. International Journal of Sport Nutrition and Exercise Metabolism, 16(5), 494–509.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Snijders, T., Res, P. T., Smeets, J. S., van Vliet, S., van Kranenburg, J., Maase, K., . . . van Loon, L. J. (2015, Jun.). Protein ingestion before sleep increases muscle mass and strength gains during prolonged resistance-type exercise training in healthy young men. Journal of Nutrition, 145(6), 1178–1184. doi:10.3945/jn.114.208371.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Devries, M. C., McGlory, C., Bolster, D. R., Kamil, A., Rahn, M., Harkness, L., . . . Phillips, S. M. (2018, Jul.). Leucine, Not Total Protein, Content of a Supplement Is the Primary Determinant of Muscle Protein Anabolic Responses in Healthy Older Women. Journal of Nutrition, 148(7), 1088–1095. doi:10.1093/jn/nxy091.
<br/><span className="w-2 h-2 bg-black inline-block rounded-full mx-2"></span>Van Elswyk, M. E., Weatherford, C. A., & McNeill, S. H. (2018, Jul.). A systematic review of renal health in healthy individuals associated with protein intake above the U. S. recommended daily allowance in randomized controlled trials and observational studies. Advances in Nutrition, 9(4), 404–418. doi:10.1093/ advances/nmy026.
 </div>
   </Container>
   </Paper>
   </>
  );
};


export default BasicContent;
