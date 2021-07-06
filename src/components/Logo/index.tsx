import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black';
  size?: 'normal' | 'large';
  hideOnMobile?: boolean;
};

const Logo = ({ color = 'white', size = 'normal', hideOnMobile = false }: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 158 48"
      role="img"
      aria-label="Won Games"
    >
      <path
        fill="url(#paint0_linear)"
        d="M.05 15.23L.02 35.87a6 6 0 009.33 5l20.6-13.72 20.54 13.8a6 6 0 009.34-4.97l.04-20A11.81 11.81 0 0044.75 4.62l-.87.25a50.87 50.87 0 01-29.36-.27A11.15 11.15 0 00.05 15.23z"
      />
      <path
        fill="#110F28"
        fillOpacity=".15"
        d="M30.16 27.16l-6.03-4.3a.5.5 0 00-.78.5l1.3 7.3 5.51-3.5z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeOpacity=".4"
        strokeWidth="1.5"
        d="M7.6 7.1c-5.12 2.76-4.53 5-4.53 7.5M57.27 26.1v1M3.05 18.1v2M57.27 30.1v5"
      />
      <path
        stroke="#0A0D27"
        strokeLinecap="round"
        strokeWidth="2"
        d="M13.05 15.1v6M10.04 18.1h6.02"
      />
      <ellipse
        fill="#0A0D27"
        rx="1.51"
        ry="1.5"
        transform="matrix(1 0 0 1 44.72 13.66)"
      />
      <ellipse
        fill="#0A0D27"
        rx="1.51"
        ry="1.5"
        transform="matrix(1 0 0 1 49.74 17.6)"
      />
      <ellipse
        fill="#0A0D27"
        rx="1.51"
        ry="1.5"
        transform="matrix(1 0 0 1 44.72 21.6)"
      />
      <ellipse
        fill="#0A0D27"
        rx="1.51"
        ry="1.5"
        transform="matrix(1 0 0 1 39.7 17.6)"
      />
      <path
        className="text"
        fill="currentColor"
        d="M79.26 12.63h-.06c-.68.1-1.2.44-1.56 1.02a2.36 2.36 0 00-.3 1.5v.03l1.38 9.33c.08.54.34 1 .78 1.35a2.27 2.27 0 001.77.45c.66-.1 1.17-.42 1.53-.96a2.05 2.05 0 00.36-1.5l-1.38-9.33a2.23 2.23 0 00-2.22-1.92l-.3.03zm18.78-.03c-.54 0-1.02.18-1.44.54-.44.36-.7.82-.78 1.38l-1.4 9.51a.88.88 0 00-.04.21c0 .52.17.98.51 1.38.36.46.84.73 1.44.81a2.15 2.15 0 001.98-.69c.3-.32.5-.7.57-1.14v-.06l1.38-9.36v-.03l.03-.3c0-.42-.12-.82-.36-1.2a2.1 2.1 0 00-1.53-1.02h-.06l-.3-.03zm-9.24 8.04h-.06a.99.99 0 00-.24.03 2.2 2.2 0 00-1.4.72l-.4.42-2.19 2.7-.72.84c-.28.34-.5.6-.69.75a3.26 3.26 0 01-1.74.9 3.19 3.19 0 01-1.53-.18c-.32-.12-.6-.29-.84-.5l.75 5.12v.06a3.8 3.8 0 00.18.66c.14.3.35.56.63.78.18.16.38.28.6.36.24.08.5.12.75.12h.1c.15 0 .3 0 .41-.03.46-.1.85-.32 1.17-.66l.3-.3 4.9-6.03 4.73 5.82.45.51c.38.38.83.61 1.35.7h.33c.28 0 .55-.06.81-.16.42-.18.77-.46 1.05-.84.18-.28.3-.59.36-.93v-.06l.75-5c-.34.3-.73.5-1.17.6a2.64 2.64 0 01-1.23.08 2.9 2.9 0 01-.8-.24 4.1 4.1 0 01-1-.75c-.26-.26-.59-.65-.99-1.17L90.9 21.9a5.15 5.15 0 00-.42-.48c-.2-.2-.39-.35-.57-.45a2 2 0 00-1.02-.33h-.09zm19.8.3a2.99 2.99 0 012.02-.8 3.04 3.04 0 012.49 1.35 5.91 5.91 0 012.13-3.16 5.73 5.73 0 013.6-1.23 5.7 5.7 0 014.23 1.77 5.76 5.76 0 011.74 4.23c0 1.66-.58 3.08-1.74 4.26a5.76 5.76 0 01-4.23 1.74 5.95 5.95 0 01-5.76-4.38c-.22.34-.5.63-.84.87-.5.3-1.04.45-1.62.45-.42 0-.83-.08-1.23-.24-.3-.14-.56-.32-.78-.54.5 2.42 1.7 4.42 3.63 6a10.17 10.17 0 006.6 2.34c1.9 0 3.65-.47 5.25-1.4a10.24 10.24 0 003.8-3.82 10.34 10.34 0 001.42-5.28c0-1.9-.47-3.65-1.41-5.25a10.18 10.18 0 00-3.81-3.84 10.18 10.18 0 00-5.25-1.4c-2.46 0-4.65.78-6.57 2.36a10.26 10.26 0 00-3.66 5.97zm2.02-.09c-.66 0-1.21.24-1.65.72-.24.24-.41.53-.51.87a2.61 2.61 0 000 1.32c.08.28.2.53.39.75.44.56 1.03.84 1.77.84.72 0 1.3-.27 1.74-.8.22-.27.37-.55.45-.85.04-.2.06-.4.06-.6 0-.18-.02-.35-.06-.5a2.19 2.19 0 00-.48-1 2.23 2.23 0 00-1.71-.75zm29.65-8.25c-.6 0-1.12.21-1.56.63-.46.44-.7.98-.7 1.62V21c.25-.28.54-.5.88-.66.42-.2.87-.3 1.35-.3h.06a3.03 3.03 0 012.37 1.14l9.8 11.55a2.1 2.1 0 001.78.87 2.2 2.2 0 001.68-.75c.38-.42.57-.92.57-1.5v-6.12a3.17 3.17 0 01-2.25.93c-.56 0-1.08-.13-1.56-.39-.34-.2-.63-.45-.87-.75l-9.87-11.67a2.46 2.46 0 00-.78-.57 2.26 2.26 0 00-.9-.18zm13.98 0c-.62 0-1.14.21-1.56.63-.46.44-.7.98-.7 1.62v8.7c0 .42.15.8.43 1.14a2.2 2.2 0 001.83.84c.54 0 1.02-.15 1.44-.45.52-.4.79-.9.8-1.53v-8.7a2.22 2.22 0 00-.8-1.7c-.42-.37-.9-.55-1.44-.55zm-14.01 8.07c-.6 0-1.11.2-1.53.57-.44.4-.67.88-.7 1.44v8.67c0 .5.16.95.46 1.35.46.6 1.06.9 1.8.9.64 0 1.18-.23 1.62-.69.42-.42.63-.94.63-1.56v-8.67a1.93 1.93 0 00-1.17-1.77 2.31 2.31 0 00-1.05-.24h-.06z"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="29.16"
          x2="30.15"
          y1="-7.4"
          y2="49.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5F5F" />
          <stop offset="1" stopColor="#F062C0" />
          <stop offset="1" stopColor="#F23131" />
        </linearGradient>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Logo
