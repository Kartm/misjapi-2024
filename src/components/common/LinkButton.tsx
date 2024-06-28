import React from "react";
import {twMerge} from "tailwind-merge";

type LinkButtonProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    className?: string;
    children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = function ({children, className, ...otherProps}) {
    const mergedClassName = twMerge('inline-flex text-white font-bold bg-black focus:ring-4 focus:ring-gray-300 rounded-full px-10 py-2.5 focus:outline-none', className)

    return <a
        className={mergedClassName} {...otherProps}>{children}</a>;
}

export default LinkButton;