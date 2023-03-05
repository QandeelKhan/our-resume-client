import * as React from "react";
const DiceIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        {...props}
        viewBox="0 0 20 20"
        className="power-icon"
        fill="white"
        // fill="currentColor"
    >
        <path d="M5.5 16c-.827 0-1.5-.673-1.5-1.5S4.673 13 5.5 13s1.5.673 1.5 1.5S6.327 16 5.5 16zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM5.5 12c-.827 0-1.5-.673-1.5-1.5S4.673 9 5.5 9 7 9.673 7 10.5 6.327 12 5.5 12zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM5.5 8C4.673 8 4 7.327 4 6.5S4.673 5 5.5 5 7 5.673 7 6.5 6.327 8 5.5 8zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM13.5 8c-.827 0-1.5-.673-1.5-1.5S12.673 5 13.5 5s1.5.673 1.5 1.5S14.327 8 13.5 8zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM13.5 12c-.827 0-1.5-.673-1.5-1.5S12.673 9 13.5 9s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM13.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />
        <path d="M15.5 19h-12A2.503 2.503 0 0 1 1 16.5v-12C1 3.122 2.122 2 3.5 2h12C16.878 2 18 3.122 18 4.5v12c0 1.378-1.122 2.5-2.5 2.5zM3.5 3C2.673 3 2 3.673 2 4.5v12c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-12c0-.827-.673-1.5-1.5-1.5h-12z" />
    </svg>
);
export default DiceIcon;
