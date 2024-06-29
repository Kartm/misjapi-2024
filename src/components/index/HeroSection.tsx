import React from "react";
import {Trans, useTranslation} from "gatsby-plugin-react-i18next";
import LinkButton from "../common/LinkButton";
import {StaticImage} from "gatsby-plugin-image";

const HeroSection: React.FC = () => {
    const {t} = useTranslation();

    return <section className="px-4 py-20 text-center md:py-40">
        <div className="container mx-auto flex items-end justify-between px-4 md:flex-row md:justify-start md:gap-56">
            <div className="text-center md:text-left">
                <div className="mb-8 flex flex-col items-center md:items-start">
                    <h1 className="text-3xl font-bold sm:whitespace-nowrap md:text-5xl">{t('heroSection.titleTop')}</h1>
                    <h1 className="text-3xl font-bold sm:whitespace-nowrap md:text-5xl"><Trans i18nKey="heroSection.titleBottom">
                        <span className="whitespace-nowrap"></span>
                    </Trans></h1>
                </div>
                <p className="text-sm text-gray-500 md:text-base">{t('heroSection.description1')}</p>
                <p className="mb-8 text-sm text-gray-500 md:text-base">{t('heroSection.description2')}</p>
                <LinkButton href={"#courses"}>{t('heroSection.chooseClasses')}</LinkButton>
            </div>
            <div className={"hidden md:block"}>
                <StaticImage src={"../../images/hero.svg"} alt={"Hero image"} width={280}/>
            </div>
        </div>
    </section>
}

export default HeroSection;

