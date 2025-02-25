import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";
import "../../App.css";
import { H2, H3, H4, P } from "../../Utils/styled/Typograpyhy";
import lineline from "../../assets/icon/lineLine.png";
import {
  standardPrograms,
  advancedPrograms,
  internationalPrograms,
} from "../../constants";
import pathline from "../../assets/icon/pathLine.png";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <StyledProductSection >
      <header id="programs" data-aos="fade-down">
        <H2
          color="var(--Title-Text)"
          pdmb="7.2rem"
          mdlh="48px"
          lh="32px"
          mdwidth="40vw"
          tA="center"
        >
          Personalized Programs to Boost Your Career Success
        </H2>
      </header>

      <Flex display="block" mdalign="start" data-aos="fade-right" >
        <section className="hides">
          <section className="hide"></section>
          <img src={pathline} alt="" className="dk" />
        </section>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          pagination={{
            el: ".hide",
            clickable: true,
            renderBullet: (index, name) => {
              return (
                '<p class="' +
                name +
                '"> <span class="pagetext' +
                index +
                '"></span> </p>'
              );
            },
          }}
          autoHeight={true}
          touchReleaseOnEdges={true}
          autoplay={{
            delay: 10000,
          }}
          className="swipe"
        >
          <SwiperSlide className="sp">
            <div>
            <H3 color="#333" fs="1.8rem" mb="1rem" mdmb="1rem" pt="4.8rem"  mdfs="2.8rem">
              Standard Programs
            </H3>
            <Flex wrap="wrap" gap="15px" >
              {standardPrograms.map((programs, index) => (
                <Card
                  key={index}
                  link={programs.link}
                  img={programs.img}
                  headText={programs.headText}
                  subText={programs.subText}
                />
              ))}
            </Flex>
            </div>
          </SwiperSlide>
          <SwiperSlide >
          <H3 color="#333" fs="1.8rem" pt="4.8rem" mdfs="2.8rem" mb="1rem" mdmb="1rem">
              Advanced Programs
            </H3>
            <Swiper
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={1}
            autoHeight={true}
            className="swi"
            autoplay={{ 
              delay: 5000
            }}
          >
            <SwiperSlide className="ad">
                  <Flex wrap="wrap" gap="15px" >
                  {advancedPrograms.filter((programs,index) => index < 2 ).map((programs,index) => (
                    <Card
                    key={index}
                    link={programs.link}
                    img={programs.img}
                    headText={programs.headText}
                    subText={programs.subText}
                  />
                  ))}
                </Flex>
              </SwiperSlide>
              <SwiperSlide className="ad">
                  <Flex wrap="wrap" gap="15px" mdalign="stretch" >
                  {advancedPrograms.filter((programs,index) => index > 1 ).map((programs,index) => (
                    <Card
                    key={index}
                    link={programs.link}
                    img={programs.img}
                    headText={programs.headText}
                    subText={programs.subText}
                    linkText={programs.linkText}
                  />
                  ))}
                </Flex>
              </SwiperSlide>
          </Swiper>
          </SwiperSlide>
          <SwiperSlide className="ip">
            <div>
            <H3 color="#333" fs="1.8rem" pt="4.8rem" mdfs="2.8rem" mb="1rem" mdmb="1rem">
              International Programs
            </H3>
            <Flex wrap="wrap" gap="15px" >
              {internationalPrograms.map((programs,index) => (
                <Card
                  key={index}
                  link={programs.link}
                  img={programs.img}
                  headText={programs.headText}
                  subText={programs.subText}
                  linkText={programs.linkText}
                />
              ))}
            </Flex>
            </div>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </StyledProductSection>
  );
};

export default ProductSection;

export const Card = ({ img, headText, subText, link, linkText }) => {
  return (
    <StyledCard>
      <Link to={link}>
      <img src={img} alt="subText" className="cardImg" />
      <div className="overlay">

      </div>
      <section>
        <div>
          <H4 fs="clamp(14px,4.20vw,18px)" mdfs="clamp(18px,1.322vw,20px)" >{headText}</H4>
          <P fs="clamp(12px,3.27vw,14px)" mdfs="clamp(14px,1.05vw,16px)" color="#F7F7F7" pb="1rem">
            {subText}
          </P>
        </div>
        <Flex gap="8px" justify="none" mdjustify="end">
          <H4 fs="clamp(12px,3.73vw,16px)" mdfs="clamp(18px,1.322vw,20px)">{linkText || 'Learn more'}</H4>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M15.037 18.1567L13.626 16.7388L16.896 13.4838L3.29103 13.4707L3.29303 11.4707L16.861 11.4838L13.646 8.25375L15.063 6.84375L20.707 12.5138L15.037 18.1567Z" fill="white"/>
          </svg>
        </Flex>
      </section>
      </Link>
    </StyledCard>
  );
};

const StyledProductSection = styled.div`
  background: url(${lineline});
  background-repeat: no-repeat;
  background-size: 20%;
  padding: 6.7rem 2.4rem;
  color: var(--Title-Text);
  header {
    display: flex;
    justify-content: center;
    padding-bottom: 6.4rem;
  }
  span.pagetext0::before {
  content: "Standard";
}
span.pagetext1::before {
  content: "Advanced";
}
span.pagetext2::before {
  content: "International";
}

.hide {
  display: flex;
  justify-content: center;
  align-items: center;
}

 .swiper-pagination-bullet {
  /* position: relative; */
  margin:0 auto;
  padding: 7px 0px;
  color: rgba(24, 24, 24, 0.35);
  width: 104px;
  font-size: 14px;
  text-align: center;
  height: 34px;
  border-radius: 4px;
  background-color: #d2d2d2;
  opacity: 100%;
  z-index: 20;
}
 .swiper-pagination-bullet-active {
  background-color: #baeafa;
  border: 1px solid #00f;
  color: #0046ff;
}
.hides {
  position: relative;
}
  @media (min-width: 1024px) {
    padding: 12.1rem 9.6rem;
    background-size: 10%;
    header {
      display: flex;
      justify-content: center;
      padding-bottom: 6.4rem;
    }
    .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: 200px;

  }
 .swiper-pagination-bullets{
    display: flex;
    align-items: center;
  }
  .hide {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 128px;
  }
  section img.dk {
    display: block;
    position: absolute;
    right: 185px;
    top: 24px;
  }
  span.pagetext0,
  span.pagetext1,
  span.pagetext2 {
    position: absolute;
    left: 30px;
  }
 .swiper-pagination-bullet {
    display: block;
    position: relative;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    width: 24px;
    height: 24px;
    background-color: #d2d2d2;
    opacity: 100%;
  }
  .swiper-pagination-bullet-active {
    background-color: #baeafa;
  }
  }
`;
const StyledCard = styled.div`
  width: fit-content;
  position: relative;
  section {
    position: absolute;
    bottom: 0;
    background: rgba(24, 24, 24, 0.55);
    backdrop-filter: blur(6px);
    border-radius: 0px 0px 20px 20px;
    width: 100%;
    padding: 10px 16px 10px 16px;
  }
  .overlay{
    position: absolute;
    background: rgba(0, 0, 0,0.4);
    border-radius: 20px;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  img {
    border-radius: 20px;
    width : 88.4vw;
    height: 48vw;
  }
  @media (min-width: 1024px) {
    section {
      padding: 15px 16px;
    }
    img{
    width: 32vw;
    height: 18.37vw;
    max-width : 53.6rem;
    max-height : 24.8rem;
    }
  }
`;

export const Flex = styled.div`
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.align || "center"};
  width: ${(props) => props.width || "100%"};
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};
  justify-content: ${(props) => props.justify};
  @media (min-width: 760px) {
    flex-wrap: ${(props) => props.mediumwrap};
  }
  @media (min-width: 1024px) {
    display: ${(props) => props.mddisplay || "flex"};
    gap: ${(props) => props.mdgap};
    justify-content: ${(props) => props.mdjustify};
    align-items: ${(props) => props.mdalign || "center"};
    width: ${(props) => props.mdwidth};
    flex-wrap: ${(props) => props.mdwrap};
    padding-top: ${(props) => props.mdpt};
    padding-bottom: ${(props) => props.mdpb};
    padding-right: ${(props) => props.mdpr};
    padding-left: ${(props) => props.mdpl};
  }
`;
