import { Bell, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Greeting with sun icon */}
        <div className="flex items-center">
          <h1 className="text-2xl font-manrope font-bold text-gray-900 mr-3">
            Good Morning
          </h1>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 15.3125C14.1841 15.3125 9.45312 20.0435 9.45312 25.8594C9.45312 27.7133 9.9418 29.5363 10.8653 31.134H29.1347C30.0582 29.5363 30.5469 27.7133 30.5469 25.8594C30.5469 20.0435 25.8159 15.3125 20 15.3125ZM20 12.9688C20.6477 12.9688 21.1719 12.4446 21.1719 11.7969V9.45312C21.1719 8.80539 20.6477 8.28125 20 8.28125C19.3523 8.28125 18.8281 8.80539 18.8281 9.45312V11.7969C18.8281 12.4446 19.3523 12.9688 20 12.9688ZM5.9375 24.6875H3.59375C2.94602 24.6875 2.42188 25.2116 2.42188 25.8594C2.42188 26.5071 2.94602 27.0312 3.59375 27.0312H5.9375C6.58523 27.0312 7.10938 26.5071 7.10938 25.8594C7.10938 25.2116 6.58523 24.6875 5.9375 24.6875ZM36.4062 24.6875H34.0625C33.4148 24.6875 32.8906 25.2116 32.8906 25.8594C32.8906 26.5071 33.4148 27.0312 34.0625 27.0312H36.4062C37.054 27.0312 37.5781 26.5071 37.5781 25.8594C37.5781 25.2116 37.054 24.6875 36.4062 24.6875ZM35.223 17.0703C34.898 16.5084 34.1781 16.315 33.622 16.6412L31.5929 17.813C31.0321 18.137 30.8398 18.8533 31.1637 19.4141C31.4879 19.9753 32.2059 20.166 32.7648 19.8432L34.7938 18.6713C35.3545 18.3475 35.5468 17.6311 35.223 17.0703ZM26.4453 14.6956C27.003 15.0178 27.7216 14.8287 28.0463 14.2665L29.2182 12.2374C29.5421 11.6766 29.3498 10.9602 28.7891 10.6364C28.2295 10.3102 27.5119 10.5037 27.188 11.0655L26.0162 13.0946C25.6923 13.6554 25.8845 14.3718 26.4453 14.6956ZM11.9537 14.2665C12.2778 14.8277 12.9959 15.0184 13.5547 14.6956C14.1155 14.3717 14.3077 13.6554 13.9838 13.0946L12.812 11.0655C12.4858 10.5037 11.7694 10.3102 11.2109 10.6364C10.6502 10.9603 10.4579 11.6766 10.7818 12.2374L11.9537 14.2665ZM8.40711 17.813L6.37805 16.6412C5.81727 16.315 5.10203 16.5084 4.77703 17.0703C4.45312 17.6311 4.64539 18.3475 5.20617 18.6713L7.23523 19.8432C7.79297 20.1654 8.51156 19.9763 8.83625 19.4141C9.16016 18.8533 8.96789 18.1369 8.40711 17.813Z"
                fill="url(#paint0_linear_header_sun)"
              />
              <path
                d="M38.8281 29.375H1.17188C0.524141 29.375 0 29.8991 0 30.5469C0 31.1946 0.524141 31.7188 1.17188 31.7188H38.8281C39.4759 31.7188 40 31.1946 40 30.5469C40 29.8991 39.4759 29.375 38.8281 29.375Z"
                fill="url(#paint1_linear_header_sun)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_header_sun"
                  x1="20"
                  y1="31.134"
                  x2="20"
                  y2="8.28125"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FD5900" />
                  <stop offset="1" stopColor="#FFDE00" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_header_sun"
                  x1="20"
                  y1="31.7188"
                  x2="20"
                  y2="29.375"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE59A" />
                  <stop offset="1" stopColor="#FFFFD5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right side - Notification and Profile */}
        <div className="flex items-center space-x-6">
          {/* Notification Bell */}
          <button className="relative p-3 bg-primary-25 rounded-full">
            <Bell className="h-6 w-6 text-gray-800" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <span className="text-white font-medium text-lg">K</span>
            </div>
            <span className="text-gray-900 font-manrope font-bold text-xl">
              Kathryn
            </span>
            <ChevronDown className="h-6 w-6 text-gray-800" />
          </div>
        </div>
      </div>
    </header>
  );
}
