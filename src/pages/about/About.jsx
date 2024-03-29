import React from "react";
import coffeHouse from "../../assets/cofhouse.jpeg";

const About = () => {
  return (
    <div className="w-full h-auto mb-[30px] px-[2rem] xl:px-[4rem] pt-[100px]  text-white">
      <div className="text-center xl:mb-[60px] mb-[20px]">
        <h1 className="text-[40px] text-[#b08968] ">About Us</h1>
        <p className="w-[350px] mx-auto text-[#b08968] min-[320px]:w-[250px] min-[375px]:w-[300px]">
          Coffee is a beloved beverage enjoyed by millions worldwide for it's
          bold favor, rich aroma, and comforting warmth.
        </p>
      </div>
      <div className="flex sm:items-center xl:items-start gap-6 flex-col xl:flex-row">
        <div className="pt-[30px]">
          <h1 className="xl:text-[45px] text-center sm:text-center xl:text-start text-[30px] mb-3">
            Warm embrace in a cup
          </h1>
          <p className="xl:w-[500px] min-[320px]:w-[270px] w-[380px] leading-[25px] text-center sm:text-center xl:text-start min-[375px]:w-[300px] min-[414px]:w-[350px]">
            Coffee, the beloved beverage enjoyed by millions worldwide. It's
            often considered an essential morning pick-me-up, but can be enjoyed
            at anytime of the day. Whether sipping alone or with a company,
            coffee provides the perfect accomplishment to conversations and
            socializing.
          </p>
          <button className="border border-[#b08968] min-[320px]:ml-[30%] sm:ml-[37%] xl:ml-0 text-[#b08968] mt-5 py-1 px-2 rounded-md ">
            Read more..
          </button>
        </div>
        <div>
          <img
            className="xl:w-[550px] min-[320px]:w-full"
            src={coffeHouse}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
