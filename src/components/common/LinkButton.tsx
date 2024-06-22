import React from "react";

type LinkButtonProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({children, className, ...otherProps}) => <a
    className={`text-white font-bold bg-black focus:ring-4 focus:ring-gray-300 rounded-full text-base px-5 py-2.5 focus:outline-none ${className}`} {...otherProps}>{children}</a>

export default LinkButton;