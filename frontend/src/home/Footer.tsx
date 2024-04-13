import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col gap-y-4 items-center font-kodchasan py-6">
      <div className="flex gap-x-2 text-xs">
        <Link to="#">Home</Link>
        <Link to="#">Privacy</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Contact Us</Link>
      </div>
      <div className="flex gap-x-2">
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.548 19.5997C16.6044 19.5997 21.558 12.2119 21.558 5.8061C21.558 5.5958 21.558 5.38708 21.5436 5.17915C22.5072 4.4939 23.3388 3.64309 24 2.66958C23.1024 3.06182 22.1484 3.31906 21.1728 3.43247C22.2 2.82638 22.9692 1.87419 23.3376 0.750633C22.3704 1.31536 21.3132 1.71393 20.2104 1.92778C18.3456 -0.0239828 15.2268 -0.118546 13.2432 1.71743C11.9652 2.90124 11.4216 4.66629 11.8188 6.34985C7.86 6.15374 4.1712 4.31306 1.6704 1.28501C0.3636 3.50022 1.032 6.33305 3.1956 7.75552C2.412 7.73306 1.6452 7.52535 0.96 7.14966V7.21118C0.9612 9.51856 2.6136 11.5053 4.9104 11.9625C4.1856 12.1575 3.4248 12.1858 2.688 12.0452C3.3324 14.0206 5.1816 15.3736 7.2876 15.4125C5.544 16.7618 3.39 17.4944 1.1724 17.492C0.7812 17.4909 0.39 17.4684 0 17.4223C2.2524 18.8448 4.872 19.5997 7.548 19.5961"
            fill="#FFFEE7"
          />
        </svg>

        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.247 2.86812V15.9039C23.247 16.7506 22.5608 17.4376 21.714 17.4376H18.1343V8.74737L12 13.3494L5.86578 8.74737V17.4384H2.28678C1.44003 17.4384 0.753784 16.7521 0.753784 15.9054V15.9046V2.86887C0.753784 1.59837 1.78353 0.567871 3.05403 0.567871C3.57453 0.567871 4.05453 0.741121 4.44003 1.03212L4.43403 1.02762L12 6.70287L19.566 1.02762C19.9455 0.740371 20.4255 0.567871 20.946 0.567871C22.2165 0.567871 23.247 1.59762 23.247 2.86812Z"
            fill="#FFFEE7"
          />
        </svg>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0.0400391C4.5 0.0400391 0 4.53004 0 10.0601C0 15.0601 3.66 19.2101 8.44 19.9601V12.9601H5.9V10.0601H8.44V7.85004C8.44 5.34004 9.93 3.96004 12.22 3.96004C13.31 3.96004 14.45 4.15004 14.45 4.15004V6.62004H13.19C11.95 6.62004 11.56 7.39004 11.56 8.18006V10.0601H14.34L13.89 12.9601H11.56V19.9601C13.9164 19.5879 16.0622 18.3856 17.6099 16.5701C19.1576 14.7547 20.0054 12.4457 20 10.0601C20 4.53004 15.5 0.0400391 10 0.0400391Z"
            fill="#FFFEE7"
          />
        </svg>
      </div>
      <p className="text-xs">@Breath 2024. All rights reserved.</p>
    </div>
  );
}

export default Footer;
