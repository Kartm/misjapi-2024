import React, {useCallback} from 'react';
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
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <LogoIcon className="size-16"/>
                <span className="self-center text-5xl font-thin whitespace-nowrap uppercase">Misja Pi</span>
            </div>
            <button onClick={toggleMenu} type="button"
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden ${open ? 'bg-gray-100':''} focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
                    aria-controls="navbar" aria-expanded="false">
                <span className="sr-only">Toggle menu</span>
                <MenuToggleIcon className="w-5 h-5"/>
            </button>
            <div className={`w-full md:block md:w-auto ${open ? '':'hidden'}`} id="navbar">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {menuItems.map((item) => <li key={item.url}>
                        <a href={item.url}
                        className="block py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page">{item.label}</a>
                        </li>)}
                </ul>
            </div>
        </div>
    </nav>
    //
    // return (
    //     <nav className="bg-blue-500 text-white">
    //         <ul className="flex space-x-4 p-4">
    //             {menuItems.map((item) => (
    //                 <li key={item.url}>
    //                     <a href={item.url} className="hover:underline">
    //                         {item.label}
    //                     </a>
    //                 </li>
    //             ))}
    //         </ul>
    //     </nav>
    // );
};

export default Navbar;