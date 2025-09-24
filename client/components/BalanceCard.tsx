import { MoreHorizontal } from "lucide-react";

export function BalanceCard() {
  return (
    <div className="relative bg-white rounded-lg p-6 overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 opacity-6">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 427 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0"
          preserveAspectRatio="none"
        >
          <path
            d="M81.0357 81.8744L0 212.262L75.8655 334H304V0L299.153 12.1986H293.983L291.559 23.6209H288.328C287.466 25.5246 285.678 29.332 285.42 29.332C285.161 29.332 283.481 31.6164 282.673 32.7587L275.726 36.1853L271.686 40.7542L265.224 36.1853L261.831 32.7587L256.984 40.7542H251.975L247.774 32.7587C246.159 31.6164 242.863 29.332 242.604 29.332C242.346 29.332 240.234 27.0475 239.211 25.9053H236.626L230.486 29.332L225.155 32.7587L222.731 40.7542L215.461 44.1809L211.744 47.6076L207.544 53.3187L203.504 67.0254H201.727L196.88 63.5987L192.195 53.3187L188.156 47.6076H185.732L181.531 44.1809L175.553 47.6076H169.898L164.243 53.3187L158.588 60.1721L154.388 67.0254L149.864 70.4521L143.724 67.0254L138.877 70.4521L134.03 73.8788L129.506 70.4521L123.367 78.4477L118.196 73.8788L113.026 78.4477H108.018L102.686 81.8744H97.1925L91.6992 85.301L86.3674 78.4477L81.0357 81.8744Z"
            fill="url(#balanceGradient)"
          />
          <defs>
            <linearGradient
              id="balanceGradient"
              x1="152"
              y1="0"
              x2="152"
              y2="334"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5754E3" stopOpacity="0.06" />
              <stop offset="1" stopColor="#7F56D9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-manrope font-bold text-gray-900">
            Balance
          </h2>
          <button>
            <MoreHorizontal className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Balance Amount */}
        <div className="mb-4">
          <div className="text-4xl font-manrope font-bold text-gray-800 leading-tight">
            $10,500.00 USD
          </div>
        </div>

        {/* Available Label */}
        <div className="text-base font-manrope font-bold text-gray-700">
          Available
        </div>
      </div>
    </div>
  );
}
