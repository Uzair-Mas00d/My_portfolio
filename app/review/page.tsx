import { Contact } from "@/components/contact";
import { Toaster } from "react-hot-toast";

const Review = async () => {
  return (
    <>
      <div className="py-40 px-4 flex justify-evenly max-sm:flex-col max-sm:py-24">
        <div className="w-3/6 flex-initial flex justify-center max-sm:w-full max-sm:order-2">
        <Contact />
        <Toaster position="top-right" />
        </div>
        <div className="text-[#E4E4E4] w-3/6 flex-initial flex flex-col gap-12 max-sm:w-full max-sm:py-10 max-sm:order-1">
          <h1 className="text-6xl flex flex-col text-blue-300 font-semibold max-sm:text-center">Contact <span>---&gt; Us</span></h1>
          <p className="flex flex-col">Just say hi👋 <span className="text-blue-300 md:font-bold">Or</span> <span>Leave a review and offer tips for me to improve my portfolio and enhance the overall experience for you</span></p>
        </div>
      </div>
    </>
  );
};

export default Review;
