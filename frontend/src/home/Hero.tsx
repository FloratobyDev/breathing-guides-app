import React from "react";
import brandImage from "../asset/breath-image.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col gap-y-12 md:flex-row-reverse items-center">
      <img
        src={brandImage}
        alt=""
        className="xs:h-72 xs:w-72 lg:h-80 lg:w-80"
      />
      <div className="flex flex-col sm:items-start items-center gap-y-6">
        <div className="flex flex-col items-center text-center md:items-start md:text-start">
          <h2 className="xs:text-5xl font-koulen xss:text-3xl lg:text-7xl">
            BREATHING IS LIVING.
          </h2>
          <p className="font-kodchasan text-xs lg:text-sm md:w-[80%] lg:w-[50%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <Link
          to="/app"
          className="border flex items-center border-primary px-6 py-0.5 rounded-lg font-koulen hover:bg-primary hover:text-background"
        >
          GO TO APP
        </Link>
      </div>
    </div>
  );
}

export default Hero;
