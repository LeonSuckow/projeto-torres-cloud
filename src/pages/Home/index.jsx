import React from 'react';
import Section from '../../components/Section';
import Container from '../../components/Container';

import Header from '../../components/Sections-Components/Header';
import Video from '../../components/Sections-Components/Video'
import UsabilityHelp from '../../components/Sections-Components/Usability';
import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';
import VerticalTabView from '../../components/Sections-Components/VerticalTabView';
import TabViewWithImage from '../../components/Sections-Components/TabViewWithImage';
import VerticalTabViewWithImage from '../../components/Sections-Components/VerticalTabViewWithImage';
import { BackCard, FrontCard, FlipCards2, FlipCardItem } from '../../components/Sections-Components/FlipCards-2';


import bgHeaderImg from '../../assets/images/background/bg-header.png';
import bgMaskImg from '../../assets/images/background/bg-mask.png';

import handClickWhiteImg from '../../assets/images/hand-click-white.png';
import handClickPurpleImg from '../../assets/images/hand-click-purple.svg';

import womenWithTabletImg from '../../assets/images/women-with-tablet.png';
import womanWorkingImg from '../../assets/images/woman-working.png';
import benefitsPyramidImg from '../../assets/images/benefits-pyramid.png';
import womanWorking2Img from '../../assets/images/woman-working-2.png';
import womanWorking3Img from '../../assets/images/woman-working-3.png';
import womanWorking4Img from '../../assets/images/woman-working-4.png';
import womanWorking5Img from '../../assets/images/woman-working-5.png';
import womanWorking6Img from '../../assets/images/woman-working-6.png';

import manWorkingImg from '../../assets/images/man-working.png';
import manWorking1Img from '../../assets/images/man-working-1.png';
import manWorking2Img from '../../assets/images/man-working-2.png';
import publicServicesImg from '../../assets/images/public-services.png';
import privateServicesImg from '../../assets/images/private-services.png';
import manInPhoneImg from '../../assets/images/man-in-phone.png';
import assinaturaImg from '../../assets/images/assinatura.png';
import vivinhoImg from '../../assets/images/vivinho.png';
import video from '../../assets/videos/cloud-video.mp4';


import { data as typesCloudComputingData } from "../../data/TabViewModalidade.js";
import { data as modelServicesData } from "../../data/TabViewModelService.js";
import { data as FlipCardExampleApplicationData } from "../../data/FlipCardExampleApplication";
import { data as FlipCardQuestions } from "../../data/FlipCardQuestion";
import { data as benefitsPyramidData } from "../../data/VerticalAccordion";
import { data as AccordionVivoCloudPlusData } from "../../data/AccordionVivoCloudPlus";
import { data as AccordionProfessionalServicesData } from "../../data/AcoordionProfessionalServices";
import { data as AccordionManagedServicesData } from "../../data/AccordionManagedServices";
import { data as AccordionServiceCollaborationData } from "../../data/AccordionCollaboration";
import { data as TabViewWithImgData } from "../../data/TabviewWithImage";
import { data as VerticalTabViewWithImageData } from "../../data/VerticalTabviewWithImage";


import './styles.css'
const CloudPage = () => {
  console.log(FlipCardQuestions)

  return (
    <>
      <Section bg={bgHeaderImg} id="start" customClass='header-section'>
        <Header />
      </Section>
      <Section id="revolution" customClass='revolution-section purple-gradient' bgMask={bgMaskImg}>
        <Container>
          <h1>A revolu????o da TI e a Cloud Computing</h1>
          <div className='revolution-content'>
            <div className='content-left'>
              <p className='p-1'>A tecnologia <strong>Cloud Computing</strong> trouxe uma verdadeira revolu????o no modo como as organiza????es implementam as <strong>solu????es de TI</strong> em suas atividades, o que proporcionou maior <strong>flexibilidade</strong> e <strong>escalabilidade</strong> nos neg??cios.</p>
              <p className='p-2'>Essa mudan??a de paradigma impulsionou uma grande <strong>oportunidade de gera????o de novos neg??cios</strong>, mas, antes de entender o conceito de Cloud, vamos explorar um pouco o contexto do mercado e o potencial para as empresas.</p>
            </div>
            <div className='content-right'>
              <Video source={video} />
              <UsabilityHelp img={handClickWhiteImg}>
                Para compreender melhor essa <br /> transforma????o digital, assista ao v??deo.
              </UsabilityHelp>
            </div>
          </div>
        </Container>
      </Section>
      <Section id='types-cloud-computing'>
        <Container>
          <div className='types-cloud-computing-section'>
            <div className='content'>
              <div className='content-left'>
                <h1>Os tipos de Cloud Computing</h1>
                <div>
                  <p className='p-1'>Buscando garantir maior versatilidade, <strong>diversos modelos e tipos de servi??os foram desenvolvidos</strong> para oferecer solu????es em nuvem capazes de atender ??s mais variadas necessidades.</p>
                  <p className='p-2'>De acordo com a demanda computacional, ?? poss??vel selecionar os tr??s principais modelos de implanta????o de uma solu????o em nuvem, sendo eles:</p>
                </div>
                <UsabilityHelp img={handClickPurpleImg} color='#660099'>
                  Clique nos conceitos para <br /> expandir as informa????es.
                </UsabilityHelp>
              </div>
              <div className='content-right'>
                <img className='box-shadow-purple-lg' src={womenWithTabletImg} alt="Mulheres vendo algo no tablet" />
              </div>
            </div>
            <VerticalTabView data={typesCloudComputingData} />
          </div>
        </Container>
      </Section>
      <Section id='model-services' customClass='purple-gradient' bgMask={bgMaskImg}>
        <Container>
          <div className='model-services-section'>
            <div className='content'>
              <div className='content-left'>
                <img className='box-shadow-purple-lg' src={womanWorkingImg} alt="Mulheres vendo algo no tablet" />
              </div>
              <div className='content-right'>
                <h1>Modelos de presta????o de servi??o</h1>
                <div>
                  <p className='p-1'>No mercado de computa????o em nuvem, est??o dispon??veis tr??s modalidades de presta????o de servi??os, sendo eles: o formato <strong>SaaS (Software como Servi??o), PaaS (Plataforma como Servi??o) e IaaS (Infraestrutura como Servi??o)</strong>. </p>
                  <p className='p-2'>Cada um possui caracter??sticas pr??prias e busca auxiliar na execu????o de tarefas espec??ficas.</p>
                </div>
                <UsabilityHelp img={handClickWhiteImg} color='#fff'>
                  Clique nos conceitos para <br /> expandir as informa????es.
                </UsabilityHelp>
              </div>
            </div>
            <VerticalTabView contentColor='#fff' data={modelServicesData} />
          </div>
        </Container>
      </Section>
      <Section id="benefits-pyramid">
        <Container>
          <div className='benefits-pyramid-section'>
            <img src={benefitsPyramidImg} alt="" />
            <div className='content-right'>
              <h1>Conhe??a as principais solu????es oferecidas em cada modalidade</h1>
              <VerticalAccordion data={benefitsPyramidData} />
            </div>
          </div>
        </Container>
      </Section>
      <Section id="application-examples" customClass='purple-gradient' bgMask={bgMaskImg}>
        <Container>
          <div className='application-examples-section'>
            <h1>Exemplos de aplica????o</h1>
            <UsabilityHelp img={handClickWhiteImg} color='#fff'>
              Clique nos cart??es para conhecer <br />qual foi a solu????o adotada pela empresa.
            </UsabilityHelp>
            <FlipCards2 customClass='flip-cards'>
              {FlipCardExampleApplicationData.map((item, index) => (
                <FlipCardItem key={index} customClass='flip-card-item'>
                  <FrontCard customClass='front-flip-card'>
                    <img src={item.front.icon} alt="" />
                    <h3>{item.front.title}</h3>
                  </FrontCard>
                  <BackCard customClass='back-flip-card'>
                    <h4 style={{ color: item.back.titleColor }}>{item.back.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: item.back.paragraph }}></p>
                  </BackCard>
                </FlipCardItem>
              ))}
            </FlipCards2>
          </div>
        </Container>
      </Section>

      <Section id="solutions-section" >
        <Container>
          <div className='solutions-section'>
            <div className='content-left'>
              <h1>Vivo Cloud</h1>
              <h2>Solu????es para empresas de todos os portes</h2>
              <p className='p-1'>A Vivo Empresas oferece <strong>as melhores solu????es em nuvem</strong> para auxiliar na evolu????o digital das mais diversas organiza????es. Portanto, somos uma <strong>provedora multicloud</strong>; ou seja, disponibilizamos no portf??lio servi??os de nuvem p??blica de diversos parceiros (AWS Cloud, Google Cloud, Microsoft Azure, Huawei Cloud, IBM Cloud e Oracle Cloud) e solu????es em nuvem p??blica e privada com o Vivo Cloud Plus (VCP) . </p>
              <p className='p-2'>Um dos benef??cios de escolher os servi??os Vivo Cloud ?? a <strong>capacidade de garantir a seguran??a na prote????o de dados corporativos.</strong></p>
            </div>
            <div className='content-right'>
              <img className='box-shadow-purple-lg' src={womanWorking2Img} alt="" />
            </div>
          </div>
        </Container>
      </Section>
      <Section id="complete-solutions" customClass='purple-gradient' bgMask={bgMaskImg}>
        <Container>
          <div className='complete-solutions-section'>
            <div className='content'>
              <div className='content-left'>
                <img className='box-shadow-purple-lg' src={manWorkingImg} alt="" />
              </div>
              <div className='content-right'>
                <h1>Solu????es completas para Cloud</h1>
                <p className='p-1'>O portf??lio ?? composto por <strong>tr??s grandes grupos</strong> que englobam um cat??logo de servi??os de nuvem, servi??os de colabora????o e servi??os profissionais e gerenciados. Os servi??os de nuvem e de colabora????o podem ser administrados pela <strong>Plataforma Digital</strong>, que abriga todos os servi??os digitais, <strong>facilitando o acesso e a gest??o dos recursos</strong> por meio de um <strong>painel de controle simplificado</strong>.</p>
                <UsabilityHelp img={handClickWhiteImg} color='#fff'>
                  Clique nos conceitos para <br /> expandir as informa????es.
                </UsabilityHelp>
              </div>
            </div>
            <VerticalTabViewWithImage data={VerticalTabViewWithImageData} />
          </div>
        </Container>
      </Section>
      <Section id="cloud-services-public" >
        <Container>
          <div className='cloud-services-public'>
            <div className='content-left'>
              <h2>Servi??os de nuvem</h2>
              <h1>Cloud p??blica</h1>
              <p className='p-1'>O primeiro grupo ?? composto pelos servi??os dispon??veis de nuvens p??blica e privada; contudo, mais especificamente no segmento de nuvens p??blicas, oferecemos as melhores solu????es <strong>dos l??deres de mercado</strong>, que garantem a mais alta qualidade e seguran??a.</p>
              <p className='p-2'>Al??m disso, ?? poss??vel <strong>realizar a integra????o de ambientes p??blico e privado</strong> (Cloud h??brida).</p>
              <img src={publicServicesImg} alt="Servi??os p??blicos na nuvem" />
            </div>
            <div className='content-right'>
              <img className='box-shadow-purple-lg' src={womanWorking3Img} alt="Mulheres trabalhando" />
            </div>
          </div>
        </Container>
      </Section>
      <Section id="cloud-services-private" >
        <Container>
          <div className='cloud-services-private'>
            <div className='content-left'>
              <img className='box-shadow-purple-lg' src={manInPhoneImg} alt="Mulheres trabalhando" />
            </div>
            <div className='content-right'>
              <h2>Servi??os de nuvem</h2>
              <h1>Cloud privada</h1>
              <p className='p-1'>Contamos com solu????es reconhecidas pela ind??stria de TI, como o Vivo Cloud Plus Dedicado (VCP), que consiste em um servi??o em nuvem totalmente automatizado que permite aos clientes Vivo utilizem recursos de computa????o por meio de um portal web din??mico. Esse portal possibilita o gerenciamento de servi??os virtualizados de computa????o, armazenamento, redes, banco de dados, entre outros.</p>
              <img src={privateServicesImg} alt="Servi??os p??blicos na nuvem" />
            </div>
          </div>
        </Container>
      </Section>
      <Section id="cloud-services-vivo-plus">
        <Container>
          <div className='cloud-services-vivo-plus'>
            <div className='content-left'>
              <h2>Servi??os de nuvem</h2>
              <h1>Benef??cios Vivo Cloud Plus</h1>
              <h2 className='h-3'>M??ltiplas modalidades de contrata????o</h2>
              <UsabilityHelp img={handClickPurpleImg} color='#660099'>
                Clique para conhecer <br /> mais detalhes.
              </UsabilityHelp>
              <VerticalAccordion data={AccordionVivoCloudPlusData} withIcon={false} />
            </div>
            <div className='content-right'>
              <img className='box-shadow-purple-lg' src={womanWorking5Img} alt="Mulheres trabalhando" />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cloud-services-vivo-server" >
        <Container>
          <div className='cloud-services-vivo-server'>
            <div className='content-left'>
              <img className='box-shadow-purple-lg' src={womanWorking4Img} alt="Mulheres trabalhando" />
            </div>
            <div className='content-right'>
              <h2>Servi??os de nuvem</h2>
              <h1>Vivo Cloud Server</h1>
              <p className='p-1'>O <strong>Vivo Cloud Server (VCS)</strong> ?? uma solu????o em nuvem na qual arquivos, dados e aplica????es armazenados no computador ou notebook <strong>s??o transferidos para servidores virtualizados e acess??veis via internet</strong>, a partir de qualquer dispositivo.</p>
              <p className='p-2'> A vantagem para uma organiza????o ?? n??o precisar investir em servidores f??sicos, infraestrutura ou equipe de manuten????o.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="service-collaboration" customClass='purple-gradient' bgMask={bgMaskImg}>
        <Container>
          <div className='service-collaboration-section'>
            <div className='content-left'>
              <h1>Servi??os de colabora????o</h1>
              <p className='p-1'> Os servi??os de colabora????o oferecem uma solu????o completa e que permite tornar o trabalho mais produtivo, integrado e criativo.</p>

              <UsabilityHelp img={handClickWhiteImg} color='#fff'>
                Clique nos servi??os para <br /> expandir as informa????es.
              </UsabilityHelp>
              <VerticalAccordion data={AccordionServiceCollaborationData} withIcon={false} />
            </div>
            <div className='content-right'>
              <img className='box-shadow-purple-lg' src={manWorking1Img} alt="Mulheres trabalhando" />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="professional-services" >
        <Container>
          <div className='professional-services-section'>
            <div className='content-left'>
              <img className='vivinho' src={vivinhoImg} alt="logo da vivo" />
              <img className='box-shadow-purple-lg' src={manWorking2Img} alt="Mulheres trabalhando" />
            </div>
            <div className='content-right'>
              <h1>Servi??os profissionais</h1>
              <p className='p-1'>S??o servi??os de consultoria em que o cliente contrata horas de nossos especialistas para um apoio t??cnico em sua jornada Cloud. O <strong>formato de contrata????o ?? similar ao de um projeto</strong>, pois possui in??cio, meio e fim. A proposta ?? que os especialistas <strong>orientem sobre o melhor caminho, os benef??cios e os custos envolvidos</strong>. Esses servi??os tamb??m realizam migra????o para Cloud, em que o planejamento e execu????o da atividade s??o realizadas pelo time Vivo.</p>
              <UsabilityHelp img={handClickPurpleImg} color='#660099'>
                Clique para conhecer <br /> mais detalhes.
              </UsabilityHelp>
              <VerticalAccordion data={AccordionProfessionalServicesData} withIcon={false} />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="managed-services" >
        <Container>
          <div className='managed-services-section'>
            <div className='content-left'>
              <h1>Servi??os gerenciados</h1>
              <p className='p-1'>Consistem na administra????o do ambiente de TI do cliente. Nosso time de especialistas ?? respons??vel por <strong>monitorar o ambiente, atuando proativamente e reativamente na resolu????o de problemas</strong>, visando atenuar riscos de seguran??a, garantindo alto desempenho e controle de custos, aplicando as melhores pr??ticas para manter o ambiente atualizado e otimizado, eliminando os impactos de mau funcionamento do ambiente organizacional e garantindo a disponibilidade.</p>
              <UsabilityHelp img={handClickPurpleImg} color='#660099'>
                Clique para conhecer <br /> mais detalhes.
              </UsabilityHelp>
              <VerticalAccordion data={AccordionManagedServicesData} withIcon={false} />
            </div>
            <div className='content-right'>
              <img className='box-shadow-purple-lg' src={womanWorking6Img} alt="Mulheres trabalhando" />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="differentials-solutions" customClass='purple-gradient' bgMask={bgMaskImg}>
        <Container>
          <div className='differentials-solutions-section'>
            <div className='content'>
              <div className='header-content'>
                <h1>Diferenciais das solu????es Vivo</h1>
                <UsabilityHelp img={handClickWhiteImg} color='#fff'>
                  Clique nos conceitos para <br />
                  expandir as informa????es.
                </UsabilityHelp>
              </div>
              <TabViewWithImage data={TabViewWithImgData} />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="question">
        <Container>
          <div className='question-section'>
            <div className='content'>
              <h1>Considerando tudo o que foi visto, selecione a op????o que melhor define os principais benef??cios das solu????es Vivo Cloud:</h1>

              <FlipCards2 customClass='flip-cards'>
                {FlipCardQuestions.map((item, index) => (
                  <FlipCardItem key={'1' + index} customClass='flip-card-item'>
                    <FrontCard customClass='front-flip-card'>
                      <ul>
                        {item.question.map((question, key) => (
                          <li key={key} dangerouslySetInnerHTML={{ __html: question }}></li>
                        ))}
                      </ul>
                    </FrontCard>
                    <BackCard customClass='back-flip-card' style={{ backgroundColor: item.feedback.bgColor }}>
                      <img src={item.feedback.icon} />
                      <div>
                        <h4>{item.feedback.title}</h4>
                        <p>{item.feedback.paragraph}</p>
                      </div>
                    </BackCard>
                  </FlipCardItem>
                ))}
              </FlipCards2>
            </div>
          </div>
        </Container>
      </Section>
      <Section id='signature' customClass='purple-gradient' bgMask={bgMaskImg}>
        <Container>
          <div className='signature-section'>
            <img src={assinaturaImg} alt="Assinatura vivo" />
          </div>
        </Container>
      </Section>
    </>
  );
}

export default CloudPage;