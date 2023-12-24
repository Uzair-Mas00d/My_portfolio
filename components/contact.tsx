"use client";

import toast from "react-hot-toast";
import { contactAction } from "./contact-action";
import { contactSchema } from "@/lib/type";
import { useRef, useState } from "react";

export const Contact = () => {
  const clientAction = async (formData: FormData) => {
    setIsLoading(true);

    const newData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const result = contactSchema.safeParse(newData);
    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". ";
      });
      toast.error(errorMessage);

      return;
    }
    const response = await contactAction(result.data);
    if (response?.error) {
      toast.error(response.error);
    }
    if (response?.success) {
      toast.success(response.success);
      ref.current?.reset();
    }

    setIsLoading(false);
  };

  const [isLoading, setIsLoading] = useState<boolean>();
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        clientAction(new FormData(e.currentTarget));
      }}
      className="flex flex-col gap-3 w-3/4 max-sm:w-full"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="form-ele"
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Your Email"
        className="form-ele"
        required
      />
      <textarea
        name="message"
        placeholder="Share your thought"
        className="form-ele"
        cols={5}
        rows={3}
        required
      ></textarea>
      <button
        disabled={isLoading}
        className={`bg-[#E4E4E4] text-black font-medium py-4 mt-8 transform hover:translate-y-[-10px] transition-transform duration-500 linear hover:border-b-4 border-blue-300 ${
          isLoading ? "bg-[#9a9a9a]" : ""
        }`}
      >
        SHARE YOUR FEEDBACK
      </button>
    </form>
  );
};
