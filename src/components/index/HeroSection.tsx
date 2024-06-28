import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";
import LinkButton from "../common/LinkButton";
import UnderlineWave from "../../images/underline-wave.svg";
import {StaticImage} from "gatsby-plugin-image";

const HeroSection: React.FC = () => {
    const {t} = useTranslation();

    return <section className="mt-10 md:mt-20">
        <div className="container mx-auto flex items-center justify-between px-4 md:flex-row">
            <div className="text-center md:text-left">
                <div className="mb-8 flex flex-col items-center md:items-start">
                    <h1 className="text-3xl font-bold md:text-5xl">{t('heroSection.titleTop')}</h1>
                    <h1 className="relative text-3xl font-bold md:text-5xl">
                        <span>{t('heroSection.titleBottom')}</span><UnderlineWave
                        className="absolute -bottom-1/3 -left-2 w-14"/></h1>
                </div>
                <p className="text-sm text-gray-500 md:text-base">{t('heroSection.description1')}</p>
                <p className="mb-8 text-sm text-gray-500 md:text-base">{t('heroSection.description2')}</p>
                <LinkButton href={"#courses"}>{t('heroSection.chooseClasses')}</LinkButton>
            </div>
            <div className={"hidden md:block"}>
                <StaticImage src={"../../images/hero.svg"} alt={"Hero image"} width={256}/>
            </div>
        </div>
    </section>
}

export default HeroSection;

