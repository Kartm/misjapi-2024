import React from 'react';

interface MenuItem {
    url: string;
    label: string;
}

interface NavbarProps {
    menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({menuItems}) => {
    return (
        <nav className="bg-blue-500 text-white">
            <ul className="flex space-x-4 p-4">
                {menuItems.map((item) => (
                    <li key={item.url}>
                        <a href={item.url} className="hover:underline">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;