import * as React from "react";

const RedoIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        {...props}
        {...props}
        viewBox="0 0 20 20"
        className="redo-icon"
        fill="white"
        // fill="currentColor"
    >
        <path d="M2.49 4.49C4.095 2.885 6.23 2 8.5 2s4.405.884 6.01 2.49S17 8.23 17 10.5v1.293l2.146-2.146a.5.5 0 0 1 .707.707l-3 3a.498.498 0 0 1-.708 0l-3-3a.5.5 0 0 1 .707-.707l2.146 2.146V10.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5a.5.5 0 0 1 0 1c-2.27 0-4.405-.884-6.01-2.49s-2.49-3.74-2.49-6.01c0-2.27.884-4.405 2.49-6.01z" />
    </svg>
);
export default RedoIcon;
