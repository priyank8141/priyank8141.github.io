import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiLinkExternal } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { createElement } from "react";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Projects.project_content.map((content, i) => (
            <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
              <figure>
                <img
                  src={content.projectImg}
                  className="rounded-t h-72 w-full object-fill"
                />

                <figcaption className="p-4">
                  {content?.site ? (
                    <a
                      href={content?.site}
                      target="_blank"
                      className="cursor-pointer"
                    >
                      <p className="flex gap-2 items-center text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                        {content.title}
                        {createElement(BiLinkExternal)}
                      </p>
                    </a>
                  ) : (
                    <p className="flex gap-2 items-center text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                      {content.title}
                    </p>
                  )}
                  <small className="leading-5 text-gray-500 dark:text-gray-400">
                    {content.description}
                  </small>
                </figcaption>
              </figure>
              <div className="px-6 pt-4 pb-2">
                {content.techStack.map((tech) => (
                  <span className="inline-block bg-bg_light_primary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              {/* </a> */}
            </div>
          ))}
        </div>

        {/* <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
