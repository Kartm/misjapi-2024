import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";
import CreativityVideo from '../../videos/creativity.webm';
import ManageVideo from '../../videos/manage.webm';
import TeachersVideo from '../../videos/teachers.webm';
import {twMerge} from "tailwind-merge";

const WhyUsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-20 px-4 text-center md:mt-40">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold md:text-5xl">{t('whyUsSection.title')}</h1>
                <p className="mt-12 text-sm md:text-base">{t('whyUsSection.description')}</p>

                <div className="mt-12 flex flex-col items-center gap-16 md:mt-20 md:text-left">
                    {
                        [{src: CreativityVideo, title: t('whyUsSection.teachersWithPassion'), description: t('whyUsSection.teachersDescription')},
                            {src: TeachersVideo, title: t('whyUsSection.youngCreativeTeam'), description: t('whyUsSection.teamDescription')},
                            {src: ManageVideo, title: t('whyUsSection.everythingUnderControl'), description: t('whyUsSection.controlDescription')}].map((item, index) => (
                            <div
                                key={index}
                                className={twMerge('flex w-full flex-col items-center justify-center gap-4 md:max-w-none md:flex-row md:gap-16', index % 2 == 0 ? '' : 'md:flex-row-reverse')}>
                                <div className="w-full max-w-96">
                                    <video autoPlay muted loop>
                                        <source src={item.src} type="video/webm"/>
                                    </video>
                                </div>
                                <div className="w-full max-w-96">
                                    <h3 className="text-lg font-bold md:text-2xl">{item.title}</h3>
                                    <p className="mt-2 text-sm md:mt-4 md:text-base">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;