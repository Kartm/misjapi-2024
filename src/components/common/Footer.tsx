import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 py-6 text-white ">
            <div className="container mx-auto text-center text-sm md:text-base">
                <div className="mb-4">
                    <p>{t('footer.companyName', {year: new Date().getFullYear()})}</p>
                    <p>{t('footer.allRightsReserved')}</p>
                </div>
                <div className="flex justify-center space-x-4">
                    {/*<a href="/terms" className="hover:underline">*/}
                    {/*    {t('footer.terms')}*/}
                    {/*</a>*/}
                    <a href="/kontakt" className="hover:underline">
                        {t('footer.contact')}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;