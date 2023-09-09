// import content
import { createElement } from "react";
import { content } from "../Content";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import profileJson from "../assets/lottieJSON/profile.json";
const Hero = () => {
  const { hero, Contact } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-center justify-center items-center">
        {/* <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div> */}

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="text-[#8cbdef]">
            {hero.firstName} {hero.LastName}
          </h2>
          <br />
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <a href="#contact">
              <button className="btn">{hero.btnText}</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-row gap-5 mt-10">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <a
                  className="font-Poppins flex"
                  href={content.link}
                  target="_blank"
                >
                  <h4 className="">{createElement(content.icon)}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="hidden sm:block md:h-[37rem] h-96">
          {/* <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          /> */}
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src={profileJson}
            style={{ height: "500px", width: "500px" }}
          >
            {/* <Controls
              visible={true}
              buttons={["play", "repeat", "frame", "debug"]}
            /> */}
          </Player>
        </div>
      </div>
    </section>
  );
};

export default Hero;
