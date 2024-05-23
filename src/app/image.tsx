import {ImageResponse} from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          width="72"
          height="54"
          viewBox="0 0 72 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_419_888)">
            <path
              d="M45.1019 0H68.2274L36.095 41.9399C36.095 41.9399 21.9722 23.1314 37.6793 4.61022C37.6793 4.61022 40.8689 0.807105 45.1019 0Z"
              fill="url(#paint0_linear_419_888)"
            />
            <path
              d="M71.9704 41.7072C72.414 48.126 67.5768 53.5179 61.3667 53.9659C61.1766 53.987 60.9907 53.9912 60.7963 53.9954H60.7499C60.3654 53.987 59.8162 53.9659 59.1319 53.9152C55.4818 53.6363 48.0423 52.47 41.8363 47.7541L50.1039 36.9195C51.0924 35.732 51.9796 34.8024 53.0442 33.8094H53.0526V33.8009C55.1523 32.0008 57.9194 30.9443 60.9231 31.0458C66.7362 31.2444 71.5691 35.9053 71.9704 41.7072Z"
              fill="url(#paint1_linear_419_888)"
            />
            <path
              d="M32.8506 20.9599C32.8506 16.2398 33.7251 11.6845 35.4487 7.58984L0 53.9963H60.7161C46.3017 49.9185 32.8506 36.6837 32.8506 20.9599Z"
              fill="url(#paint2_linear_419_888)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_419_888"
              x1="68.671"
              y1="-9.04296"
              x2="32.9258"
              y2="27.2677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0085FF" />
              <stop offset="1" stop-color="#004FCC" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_419_888"
              x1="74.4503"
              y1="28.4512"
              x2="46.7762"
              y2="56.4013"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0085FF" />
              <stop offset="1" stop-color="#004FCC" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_419_888"
              x1="50.2602"
              y1="29.2338"
              x2="3.56598"
              y2="62.6604"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#33BAC4" />
              <stop offset="1" stop-color="#00E5C9" />
            </linearGradient>
            <clipPath id="clip0_419_888">
              <rect width="72" height="54" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    {
      width: 72,
      height: 54,
    },
  );
}
