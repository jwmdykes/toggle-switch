import { ComponentPropsWithRef, useId, useState } from 'react';

interface BackgroundProps extends ComponentPropsWithRef<'svg'> {
  isChecked: boolean;
}

function ToggleBackground({ isChecked, ...props }: BackgroundProps) {
  return (
    <svg
      viewBox="0 0 700 319"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
      }}
      {...props}
    >
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <g id="Sun" transform="matrix(3.12982,0,0,3.12982,-1295.3,-111.684)">
        <circle
          cx="580"
          cy="90"
          r="30"
          className={`filter-[url(#glow)] fill-sun transition-all duration-400 ${
            isChecked ? 'translate-y-full' : 'translate-y-0.5'
          }`}
        />
      </g>
      <g
        id="Moon"
        transform="matrix(0.840582,0,0,0.840582,-9.27571,-0.0962624)"
        className="-translate-x-4 translate-y-1 scale-[10r%]"
      >
        <path
          d="M225.172,130.061C217.397,147.406 199.975,159.5 179.75,159.5C152.292,159.5 130,137.208 130,109.75C130,86.521 145.955,66.989 167.495,61.524C164.714,67.727 163.167,74.601 163.167,81.835C163.167,109.292 185.459,131.585 212.917,131.585C217.145,131.585 221.251,131.056 225.172,130.061Z"
          className={`filter-[url(#glow)] transition-all duration-700 ${
            isChecked ? 'fill-moon' : 'fill-transparent -translate-y-1/2'
          }`}
        />
      </g>

      <g
        id="Stars"
        className={`filter-[url(#glow)] ${
          isChecked ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <path
          d="M85,175C73.556,168.134 22.237,164.731 55.559,82.211C74.98,34.113 82.192,18.123 120,28.69C168.179,42.156 266.58,96.7 180,130C168.143,134.56 66.504,111.05 65,90C62.649,57.089 142.579,24.874 200,15.5C329.387,-5.622 151.759,42.004 150,50C147.737,60.286 169.059,73.713 160,95C153.508,110.254 338.391,57.235 380,5.6C381.691,3.502 480.387,57.078 220,20C65.413,-2.013 649.63,205.169 131,12.544C117.969,7.704 230.661,79.144 328.433,112.365C357.517,122.248 488.602,-64.777 425,100C386.435,199.911 282.898,80.22 250,120C243.364,128.024 195.044,124.981 160,140C158.654,140.577 117.871,201.49 125,145C151.696,134.322 222.764,-11.069 270,30C327.175,79.71 485.719,37.228 480,40C382.595,87.206 233.679,21.293 240,35.6C250.545,59.468 292.231,87.349 210,100C204.066,100.913 360.4,-50.416 270,107.033C265.851,114.26 42.18,138.102 40,153.365C38.112,166.579 105.345,147.218 108.433,147.365C15.202,151.641 70.844,210.657 40,173.215C8.153,134.555 43.955,86.322 50.934,72.365C55.759,62.714 74.123,55.525 75,45C87.826,63.069 62.539,104.641 105,125C106.034,125.496 85.399,197.023 85,180C82.366,67.708 165.59,155.294 200,150C204.259,149.345 308.146,146.25 340.308,133.615C417.006,103.483 457.624,53.188 474.5,8.82C483.22,-14.105 365.908,48.177 340,60C-34.365,230.844 357.799,2.71 320,0C443.467,106.733 436.898,9.651 395.5,20C309.219,41.57 501.56,199.659 380,135C270.866,76.951 192.635,37.888 140,40C5.212,45.408 55.065,158.819 60,144.014C70.72,111.855 427.569,142.905 400,110.121C368.906,73.144 195.219,91.83 180,90C182.745,111.166 114.589,128.593 104.608,140C89.312,157.481 67.125,98.946 55,100C39.477,101.35 13.638,150.655 13.434,150.49C10.737,148.307 19.818,108.48 25.934,102.365C108.959,19.341 181.642,10.681 170,60C159.175,105.858 346.178,75.022 390,85C390.448,86.199 331.11,97.416 331.558,98.615"
          id="starPath"
          className="fill-none -translate-y-2 -translate-x-2"
        />
        <use
          href="#starPath"
          className="stroke-[0.2px] stroke-white [stroke-dasharray:0,60,0,0,0,0]"
        ></use>
        <use
          href="#starPath"
          className="stroke-[0.3px] stroke-white [stroke-dasharray:0,100,0,0,0,0]"
        ></use>

        <use
          href="#starPath"
          className="stroke-[0.5px] stroke-white [stroke-dasharray:0,132,0,0,0,0]"
        ></use>

        <use
          href="#starPath"
          className="stroke-[1px] stroke-white [stroke-dasharray:0,202,0,0,0,0]"
        ></use>
      </g>
      <g id="Mountains" className="translate-y-17 scale-y-[75%]">
        <clipPath id="_clip1">
          <rect x="0" y="107.033" width="700" height="211.967" />
        </clipPath>
        <g clip-path="url(#_clip1)">
          <path
            id="_4"
            d="M-50,220C-50,220 -19.631,180.169 30,174.756C58.671,171.629 92.007,171.117 120,170C152.666,168.697 175.616,158.69 200,150C229.677,139.424 233.84,131.617 250,130C264.762,128.523 275.148,136.032 305,140C333.843,143.834 334.695,143.162 380,150C413.747,155.094 426.443,142.645 460,150C500.923,158.969 512.202,154.906 560,160C607.569,165.07 609.702,173.531 630,180C659.535,189.413 662.827,206.656 700,210C739.937,213.593 740,350 740,350L-40,370L-50,220Z"
            className={`transition-colors duration-300 ${
              isChecked ? 'fill-night-mountain-4' : 'fill-day-mountain-4'
            }`}
          />
          <g
            id="_3"
            className={`transition-colors duration-300 ${
              isChecked ? 'fill-night-mountain-3' : 'fill-day-mountain-3'
            }`}
          >
            <g transform="matrix(1,0,0,0.909595,30,7.18088)">
              <path d="M700,194.98C700,194.98 700.601,184.794 680,180C665.81,176.698 662.815,169.361 653.264,170C649.71,170.238 645.745,169.056 640,170C628.287,171.924 623.837,177.111 615,176.949C610.636,176.869 606.267,179.346 600,180C582.856,181.79 586.351,189.88 567.207,189.98C553.498,190.052 547.343,183.788 535,186.709C531.107,187.63 526.787,187.836 521.92,190C511.492,194.638 504.362,198.35 495,198.555C489.697,198.672 485.082,202.34 480,206.143C474.163,210.511 466.073,212.129 460,215.959C455.433,218.839 448.532,218.55 445,219C438.918,219.775 434.183,225.711 424.971,228.097C417.226,230.104 416.211,241.743 409.193,240C396.847,236.935 370.067,242.696 360,250.103C349.933,257.511 340,380 340,380L720,394.962L700,194.98Z" />
            </g>
            <g transform="matrix(1,0,0,1,-1.42109e-14,34.962)">
              <path d="M0,156.924C0,156.924 7.725,152.776 30,152.36C46.535,152.051 48.519,157.13 60,156.743C65.172,156.569 70.764,163.248 80,159.5C90.646,155.179 99.969,156 106.011,151.761C113.384,146.588 123.794,142.495 134.72,146.924C148.273,152.418 153.246,159.498 173.034,166.924C199.03,176.68 214.075,189.973 215.845,211.235C217.552,231.758 220,360 220,360L0,360L0,156.924Z" />
            </g>
          </g>
          <path
            className={`transition-colors duration-300 ${
              isChecked ? 'fill-night-mountain-2' : 'fill-day-mountain-2'
            }`}
            id="_2"
            d="M0,260C0,260 27.052,233.608 60,230C92.948,226.392 97.422,227.024 110,230C122.578,232.976 138.58,234.724 150,234.943C161.42,235.162 178.657,243.361 200,230C210.634,223.343 237.969,222.852 250,220C263.384,216.827 277.999,210.946 300,210C313.032,209.439 346.369,198.747 360,200C368.596,200.79 380.616,200.865 390,206.201C412.18,218.811 402.653,210.594 420,220C438.323,229.936 442.977,234.637 460,240C477.023,245.363 507.01,259.616 520,270C532.99,280.384 527.874,280.636 540,287.481C552.126,294.326 580,350.823 580,350.823L-10,350L0,260Z"
          />
          <g
            id="_1"
            className={`transition-colors duration-300 ${
              isChecked ? 'fill-night-mountain-1' : 'fill-day-mountain-1'
            }`}
          >
            <path d="M-80,310C-80,310 -36.487,269.246 20,260C76.487,250.754 86.229,229.493 110,250C133.771,270.507 170,290 170,290C170,290 242.525,288.48 280,319C317.475,349.52 -100,360 -100,360L-80,310Z" />
            <path d="M700,300C706.865,298.474 697.485,290.002 678.91,287.481C669.641,286.223 660.33,278.493 650,271.839C642.613,267.081 633.946,258.272 620,261.817C608.665,264.698 596.86,262.503 590,270C580.698,280.166 568.775,282.48 560,283.695C532.125,287.553 521.827,292.515 500,300.683C471.55,311.33 441.413,305.279 420,310C398.587,314.721 370,337.321 370,337.321L710,340L700,300Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

function Toggle() {
  const toggleId = useId();
  const [isChecked, setIsChecked] = useState(false); // To control initial state

  return (
    <>
      <input
        type="checkbox"
        id={toggleId}
        className="sr-only peer"
        aria-label="Toggle"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label htmlFor={toggleId} className="cursor-pointer">
        <div className=" text-base w-[700px] rounded-full p-[0.8em] bg-conic from-bg-bottom via-bg-top to-bg-bottom shadow-glow">
          <div className="z-0 relative shadow-groove rounded-full overflow-hidden p-[1.2em]">
            <ToggleBackground
              isChecked={isChecked}
              className={`-z-10 absolute top-0 left-0 bg-linear-to-b to-60% transition-colors duration-300 w-full ${
                isChecked
                  ? 'from-night-top to-night-bottom'
                  : 'from-day-top to-day-bottom'
              }`}
            />
            <div
              className={`z-10 border-[0.12em] border-dark-border bg-linear-to-r from-bg-top to-bg-bottom rounded-full w-2/5 aspect-square shadow-multiple ${
                isChecked && 'translate-x-[150%]'
              } transition-all duration-300 ease-in-out`}
            ></div>
          </div>
        </div>
      </label>
    </>
  );
}

function App() {
  return (
    <div className="bg-linear-to-b from-bg-top to-bg-bottom h-dvh flex items-center justify-center">
      <Toggle />
    </div>
  );
}

export default App;
