import Terminal from "@/components/terminal";

export default function Home() {
  return (
    <div className="flex justify-evenly px-3 flex-col md:flex-row">
      <div className="flex flex-col justify-stretch">
        <div className="text-[#E4E4E4] flex-initial text-center md:h-[500px] h-[400px] flex flex-col justify-center font-san">
          <span className="text-end px-3 text-lg font-semibold text-blue-400">
            // Freelancer{" "}
          </span>
          <h1 className="text-7xl px-2 font-semibold max-[350px]:text-6xl text-blue-300">
            Uzair Masood
          </h1>
          <p className="text-xl pt-2 font-semibold">
            Full Stack Web Developer & Machine/Deep Learning Expert
          </p>
        </div>
        <div className="flex justify-evenly max-md:hidden">
          <p className="flex flex-col border-r w-44">
            <span className=" text-blue-300 font-semibold text-sm">Email:</span>{" "}
            <span className="text-[#E4E4E4] text-xs pl-1 flex-initial">
              uzairmasood050@gmail.com
            </span>
          </p>
          <p className="flex flex-col">
            <span className=" text-blue-300 font-semibold text-sm">Linkedin:</span>{" "}
            <span className="text-[#E4E4E4] text-xs pl-1 flex-initial">
            https://www.linkedin.com/in/uzair-masood-9053b7276/ 
            </span>
          </p>
        </div>
      </div>
      <div className="text-[#E4E4E4] flex-initial md:mt-48 md:w-[40rem] w-auto">
        <Terminal />
      </div>
    </div>
  );
}
