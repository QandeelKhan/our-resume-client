import * as React from "react";
const ContactEnvelopeIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        // viewport height, width
        width={20}
        height={20}
        // viewBox height, width
        {...props}
        viewBox="0 0 20 20"
        // need common naming convention here
        className="about-user-icon"
        fill="white"
        // fill="currentColor"
    >
        <path
            // fill=" rgb(187, 186, 186)"
            d="M17.5 6h-16C.673 6 0 6.673 0 7.5v9c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5zm0 1c.03 0 .058.003.087.008l-7.532 5.021c-.29.193-.819.193-1.109 0L1.414 7.008A.494.494 0 0 1 1.501 7h16zm0 10h-16a.5.5 0 0 1-.5-.5V7.934l7.391 4.927c.311.207.71.311 1.109.311s.798-.104 1.109-.311L18 7.934V16.5a.5.5 0 0 1-.5.5z"
        />
    </svg>
);
export default ContactEnvelopeIcon;
