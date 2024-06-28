import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";
import LinkButton from "../common/LinkButton";
import UnderlineWave from "../../images/underline-wave.svg";

const HeroSection: React.FC = () => {
    const {t} = useTranslation();

    return <section className="hero text-center px-4 mt-8">
        <div className="flex items-center flex-col mb-8">
            <h1 className="text-3xl font-bold">{t('heroSection.titleTop')}</h1>
            <h1 className="text-3xl font-bold relative"><span>{t('heroSection.titleBottom')}</span><UnderlineWave className="absolute w-14 -left-2 -bottom-1/3"/></h1>
        </div>
        <p className="text-sm mb-8">{t('heroSection.description')}</p>
        <LinkButton href={"#courses"}>{t('heroSection.chooseClasses')}</LinkButton>
    </section>
}

export default HeroSection;

