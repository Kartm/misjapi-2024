import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";
import ControlIllustration from '../../images/why-us/control.svg';
import CreativityIllustration from '../../images/why-us/creativity.svg';
import DedicationIllustration from '../../images/why-us/dedication.svg';

const WhyUsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-20 px-4 text-center">
            <h1 className="mb-8 text-3xl font-bold">{t('whyUsSection.title')}</h1>
            <p className="mb-8 text-sm">{t('whyUsSection.description')}</p>

            <div className="flex flex-wrap justify-center gap-12">
                <div className="flex flex-col items-center">
                    <DedicationIllustration className="mb-2 h-28"/>
                    <h3 className="mb-2 text-lg font-bold">{t('whyUsSection.teachersWithPassion')}</h3>
                    <p className="text-sm">{t('whyUsSection.teachersDescription')}</p>
                </div>
                <div className="flex flex-col items-center">
                    <ControlIllustration className="mb-2 h-28"/>
                    <h3 className="mb-2 text-lg font-bold">{t('whyUsSection.everythingUnderControl')}</h3>
                    <p className="text-sm">{t('whyUsSection.controlDescription')}</p>
                </div>
                <div className="flex flex-col items-center">
                    <CreativityIllustration className="mb-2 h-28"/>
                    <h3 className="mb-2 text-lg font-bold">{t('whyUsSection.youngCreativeTeam')}</h3>
                    <p className="text-sm">{t('whyUsSection.teamDescription')}</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;