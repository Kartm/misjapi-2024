import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";
import ExampleVideo from '../../videos/example.webm';

const WhyUsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-20 px-4 text-center md:mt-40">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold md:text-5xl">{t('whyUsSection.title')}</h1>
                <p className="mt-10 text-sm md:text-base">{t('whyUsSection.description')}</p>

                <div className="mt-10 flex flex-wrap justify-center gap-12 md:mt-20">
                    <div className="flex max-w-96 flex-col items-center">
                        <video autoPlay muted loop>
                            <source src={ExampleVideo} type="video/webm"/>
                        </video>
                        <h3 className="mt-2 text-lg font-bold md:mt-4 md:text-2xl">{t('whyUsSection.teachersWithPassion')}</h3>
                        <p className="mt-2 text-sm md:mt-4 md:text-base">{t('whyUsSection.teachersDescription')}</p>
                    </div>
                    <div className="flex max-w-96 flex-col items-center">
                        <video autoPlay muted loop>
                            <source src={ExampleVideo} type="video/webm"/>
                        </video>
                        <h3 className="mt-2 text-lg font-bold md:mt-4 md:text-2xl">{t('whyUsSection.youngCreativeTeam')}</h3>
                        <p className="mt-2 text-sm md:mt-4 md:text-base">{t('whyUsSection.teamDescription')}</p>
                    </div>
                    <div className="flex max-w-96 flex-col items-center">
                        <video autoPlay muted loop>
                            <source src={ExampleVideo} type="video/webm"/>
                        </video>
                        <h3 className="mt-2 text-lg font-bold md:mt-4 md:text-2xl">{t('whyUsSection.everythingUnderControl')}</h3>
                        <p className="mt-2 text-sm md:mt-4 md:text-base">{t('whyUsSection.controlDescription')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;