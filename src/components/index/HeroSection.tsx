import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";
import LinkButton from "../common/LinkButton";
import UnderlineWave from "../../images/underline-wave.svg";

const HeroSection: React.FC = () => {
    const {t} = useTranslation();

    return <section className="mt-8 px-4 text-center">
        <div className="mb-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold">{t('heroSection.titleTop')}</h1>
            <h1 className="relative text-3xl font-bold"><span>{t('heroSection.titleBottom')}</span><UnderlineWave className="absolute -bottom-1/3 -left-2 w-14"/></h1>
        </div>
        <p className="mb-8 text-sm">{t('heroSection.description')}</p>
        <LinkButton href={"#courses"}>{t('heroSection.chooseClasses')}</LinkButton>
    </section>
}

export default HeroSection;

