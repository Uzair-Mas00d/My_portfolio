"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Terminal from "@/components/terminal";

export default function Home() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(10440);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(10440);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative"
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />

        <div className="flex justify-evenly px-3 flex-col md:flex-row pb-1 z-10 w-screen">
          <div className="flex flex-col">
            <div className="text-[#E4E4E4] flex-initial text-center md:h-[500px] h-[400px] flex flex-col justify-center font-san -mb-[3.6rem]">
              <span className="text-end px-3 text-lg font-semibold text-blue-400">
                // Freelancer{" "}
              </span>
              <h1 className="text-7xl px-2 font-semibold max-[350px]:text-6xl text-blue-300">
                Uzair Masood
              </h1>
              <p className="text-xl pt-2 font-semibold">
                Full Stack Web Developer & AI Developer
              </p>
            </div>
            <div className="flex justify-evenly max-md:hidden">
              <p className="flex flex-col border-r w-44">
                <span className=" text-blue-300 font-semibold text-sm">
                  Email:
                </span>{" "}
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
            </div>
          </div>
          <div className="text-[#E4E4E4] flex-initial md:mt-48 md:w-[40rem] w-auto">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const Icon = ({ ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
