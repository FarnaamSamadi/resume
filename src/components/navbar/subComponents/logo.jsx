import React from "react";

const Logo = () => {
  return (
    <div className="w-16">
      <svg viewBox="0 0 512 512">
        <path
          fill="#fff"
          d="M394.007 502h-364c-11.046 0-20-8.954-20-20V30c0-11.046 8.954-20 20-20h364c11.046 0 20 8.954 20 20v452c0 11.046-8.954 20-20 20z"
        />
        <circle cx="212.01" cy="146" r="82" fill="#fe6663" />
        <path
          fill="#ffcdac"
          d="M238.007 135.5v6.5c0 14.359-11.641 26-26 26s-26-11.641-26-26v-6.5c0-14.359 11.641-26 26-26s26 11.641 26 26z"
        />
        <path
          fill="#a5ddff"
          d="M212.007 168c-25.38 0-47.064 15.767-55.832 38.033C170.815 219.655 190.432 228 212.007 228s41.192-8.345 55.832-21.967C259.071 183.767 237.387 168 212.007 168z"
        />
        <path
          fill="#ffbc53"
          d="M436.574 160.59l5.714-9.897c8.837-15.305 28.407-20.549 43.713-11.713 15.305 8.837 20.549 28.407 11.713 43.713L371.873 400.656l-55.426-32 54.282-94.02 65.845-114.046z"
        />
        <path
          fill="#fe6663"
          d="M486.002 138.98c-15.305-8.837-34.876-3.593-43.713 11.713l-14.857 25.733 55.426 32 14.857-25.733c8.836-15.305 3.592-34.876-11.713-43.713z"
        />
        <path fill="#9ad8ff" d="M371.873 400.656L307.589 448l8.858-79.344z" />
        <path d="M414.007 398.328c-5.522 0-10 4.477-10 10V482c0 5.514-4.486 10-10 10h-364c-5.514 0-10-4.486-10-10V30c0-5.514 4.486-10 10-10h364c5.514 0 10 4.486 10 10v108.75c0 5.523 4.478 10 10 10s10-4.477 10-10V30c0-16.542-13.458-30-30-30h-364c-16.542 0-30 13.458-30 30v452c0 16.542 13.458 30 30 30h364c16.542 0 30-13.458 30-30v-73.672c0-5.523-4.478-10-10-10z" />
        <path d="M304.007 146c0-50.729-41.271-92-92-92s-92 41.271-92 92c0 26.317 11.11 50.085 28.882 66.869.333.356.687.693 1.074 1 16.371 14.979 38.158 24.13 62.043 24.13s45.672-9.152 62.043-24.13a9.993 9.993 0 001.074-1c17.774-16.784 28.884-40.552 28.884-66.869zm-92-72c39.701 0 72 32.299 72 72 0 15.967-5.231 30.73-14.06 42.683a69.375 69.375 0 00-29.463-24.697c4.71-6.087 7.523-13.712 7.523-21.986v-6.5c0-19.851-16.149-36-36-36s-36 16.149-36 36v6.5c0 8.274 2.813 15.899 7.523 21.986a69.375 69.375 0 00-29.463 24.697c-8.829-11.953-14.06-26.716-14.06-42.683 0-39.701 32.299-72 72-72zm-16 68v-6.5c0-8.822 7.178-16 16-16s16 7.178 16 16v6.5c0 8.822-7.178 16-16 16s-16-7.178-16-16zm-27.491 61.332c8.789-15.585 25.19-25.332 43.491-25.332s34.702 9.747 43.491 25.332C243.405 212.528 228.336 218 212.007 218s-31.399-5.472-43.491-14.668zM266.007 438h-54c-5.522 0-10 4.477-10 10s4.478 10 10 10h54c5.522 0 10-4.477 10-10s-4.478-10-10-10zM266.007 382h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM266.007 326h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM88.366 272.93a10.077 10.077 0 00-7.079-2.93c-2.631 0-5.211 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.092 10.092 0 007.07 2.93c2.64 0 5.21-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM88.366 328.93a10.095 10.095 0 00-7.079-2.93c-2.631 0-5.2 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.092 10.092 0 007.07 2.93c2.64 0 5.21-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM81.287 382c-2.631 0-5.2 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.072 10.072 0 007.07 2.93c2.64 0 5.22-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07a10.095 10.095 0 00-7.079-2.93zM266.007 270h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM491.002 130.32c-9.715-5.609-21.033-7.099-31.871-4.196-10.836 2.904-19.894 9.854-25.502 19.569L307.787 363.656a10.016 10.016 0 00-1.278 3.891l-8.858 79.344a10.004 10.004 0 009.937 11.11 9.99 9.99 0 005.931-1.948l64.284-47.344a9.983 9.983 0 002.73-3.052l125.841-217.963c11.58-20.056 4.684-45.794-15.372-57.374zM324.689 384.962l28.942 16.71-33.568 24.722 4.626-41.432zm43.524 2.034l-38.105-22 100.985-174.91 38.105 22-100.985 174.91zm120.841-209.303l-9.857 17.073-38.105-22 9.857-17.073a21.855 21.855 0 0113.358-10.25 21.85 21.85 0 0116.694 2.198 21.855 21.855 0 0110.25 13.358 21.856 21.856 0 01-2.197 16.694z" />
      </svg>
    </div>
  );
};

export default Logo;