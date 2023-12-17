import Image from "next/image";
import profile from "@/public/profile.png";

const Me = () => {
  return (
    <>
      <div className="text-[#E4E4E4] pt-24 pb-4 flex gap-2 justify-evenly px-5 bg-[#161616] max-md:flex-col">
        <div className="flex-initial md:w-[35%] flex md:justify-end max-md:pb-5">
          <Image
            src={profile}
            width={350}
            alt="profile"
            className="max-md:w-[300px]"
          />
        </div>
        <div className="flex-initial md:w-1/2 flex justify-start">
          <div>
            <h1 className="text-blue-300 text-4xl max-md:text-3xl font-semibold pb-3 max-sm:text-2xl">
              // About
            </h1>
            <p className="leading-7 font-sans text-justify max-md:text-sm">
              Welcome to the virtual domain of{" "}
              <span className="text-blue-300 md:font-bold">Uzair Masood</span>,
              your go-to person for all things web and data. I'm a web wizard,
              conjuring up awesome online experiences from scratch. I'm also a
              brainiac in machine and deep learning, delving into the world of
              smart algorithms and data mysteries. Right now, I'm student of
              data science residing in pakistan. Meanwhile, as a freelancer, I'm
              your guy for all things web-related. Whether you're after a
              website that's not just pretty but works like a charm, or you're
              curious about the cool stuff machines can do with data, I've got
              you covered. It's not just about tech for me; it's about making
              the web a cooler place for everyone. Join me on this digital
              journey, where tech meets simplicity, and websites turn into
              wonders!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#121212] px-5 pt-2 pb-2">
        <h1 className="me-page-h1">// Skills</h1>
        <div className="py-2 flex max-sm:flex-col max-sm:gap-2">
          <div className="bg-[#1e1e1e] p-3 rounded-lg w-full mr-2">
            <p className="text-blue-300 font-semibold max-sm:font-normal">
              Web development
            </p>
            <div className="text-[#E4E4E4] flex flex-wrap gap-3 pt-2 text-sm">
              <span className="span-styling">Next js</span>
              <span className="span-styling">Django</span>
              <span className="span-styling">React</span>
              <span className="span-styling">Three.js</span>
              <span className="span-styling">MongoDb</span>
              <span className="span-styling">Firebase</span>
              <span className="span-styling">MySql</span>
              <span className="span-styling">PostgreSQL</span>
              <span className="span-styling">HTML</span>
              <span className="span-styling">CSS</span>
              <span className="span-styling">Tailwind Css</span>
              <span className="span-styling">Bootstrap</span>
              <span className="span-styling">JavaScript</span>
              <span className="span-styling">Typescript</span>
              <span className="span-styling">JQuery</span>
            </div>
          </div>
          <div className="bg-[#1e1e1e] p-3 rounded-lg w-full mr-2">
            <p className="text-blue-300 font-semibold max-sm:font-normal">
              Machine/Deep learning
            </p>
            <div className="text-[#E4E4E4] flex flex-wrap gap-3 pt-2 text-sm">
              <span className="bg-[#121212] p-1 rounded-md">Sckit-learn</span>
              <span className="span-styling">Tensorflow</span>
              <span className="span-styling">Pandas</span>
              <span className="span-styling">Matplolib</span>
              <span className="span-styling">Numpy</span>
            </div>
          </div>
          <div className="bg-[#1e1e1e] p-3 rounded-lg w-full mr-2">
            <p className="text-blue-300 font-semibold max-sm:font-normal">
              Extras
            </p>
            <div className="text-[#E4E4E4] flex flex-wrap gap-3 pt-2 text-sm">
              <span className="span-styling">Python</span>
              <span className="span-styling">C/C++</span>
              <span className="span-styling">Blender</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1B1D] px-5 pt-2 pb-2">
        <h1 className="me-page-h1">// Projects</h1>
        <p className="text-[#E4E4E4] flex justify-evenly max-sm:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="bg-[#161616] px-5 pt-2 pb-2">
        <h1 className="me-page-h1">// Experiences</h1>
        <p className="text-[#E4E4E4] flex justify-evenly max-sm:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="bg-[#121212] pt-2 pb-4 flex flex-col justify-evenly px-5">
        <h1 className="me-page-h1">// Contact</h1>
        <div className="flex justify-evenly max-sm:flex-col max-sm:justify-center px-3">
          <p className="flex flex-col w-44">
            <span className=" text-blue-300 font-semibold text-sm">Email:</span>{" "}
            <span className="text-[#E4E4E4] text-xs pl-1 flex-initial">
              uzairmasood050@gmail.com
            </span>
          </p>
          <p className="flex flex-col">
            <span className=" text-blue-300 font-semibold text-sm">
              Linkedin:
            </span>{" "}
            <span className="text-[#E4E4E4] text-xs pl-1 flex-initial">
              https://www.linkedin.com/in/uzair-masood-9053b7276/
            </span>
          </p>
          <p className="flex flex-col">
            <span className=" text-blue-300 font-semibold text-sm">
              Github:
            </span>{" "}
            <span className="text-[#E4E4E4] text-xs pl-1 flex-initial">
            https://github.com/Uzair-Mas00d
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Me;
