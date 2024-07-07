import React from 'react';
import LogoIcon from '../../images/logo.svg';
import MenuToggleIcon from '../../images/menu-toggle.svg';

interface MenuItem {
    url: string;
    label: string;
}

interface NavbarProps {
    menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({menuItems}) => {
    const [open, setOpen] = React.useState(false);

    const toggleMenu = () => setOpen(prev => !prev)

    return <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
            <div className="flex items-center space-x-3">
                <LogoIcon className="size-8"/>
                <span className="self-center whitespace-nowrap text-4xl font-thin uppercase">Misja Pi</span>
            </div>
            <button onClick={toggleMenu} type="button"
                    className={`inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 md:hidden md:text-base ${open ? 'bg-gray-100':''} focus:outline-none focus:ring-2 focus:ring-gray-200`}
                    aria-controls="navbar" aria-expanded="false">
                <span className="sr-only">Toggle menu</span>
                <MenuToggleIcon className="size-5"/>
            </button>
            <div className={`w-full md:block md:w-auto ${open ? '':'hidden'}`} id="navbar">
                <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-900 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
                    {menuItems.map((item) => <li key={item.url}>
                        <a href={item.url}
                        className="block rounded px-3 py-2 text-white md:bg-transparent md:p-0 md:text-gray-900"
                        aria-current="page">{item.label}</a>
                        </li>)}
                </ul>
            </div>
        </div>
    </nav>
};

export default Navbar;