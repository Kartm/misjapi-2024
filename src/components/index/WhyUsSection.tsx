import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";
import ControlIllustration from '../../images/why-us/control.svg';
import CreativityIllustration from '../../images/why-us/creativity.svg';
import DedicationIllustration from '../../images/why-us/dedication.svg';

const WhyUsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="why-us p-8 text-center mb-20">
            <h1 className="text-3xl font-bold mb-4">{t('whyUsSection.title')}</h1>
            <p className="text-sm mb-4">{t('whyUsSection.description')}</p>

            <div className="flex flex-wrap justify-center">
                <div className="p-4 mb-4 flex flex-col items-center">
                    <DedicationIllustration className="h-28 mb-2"/>
                    <h3 className="text-lg font-bold mb-2">{t('whyUsSection.teachersWithPassion')}</h3>
                    <p className="text-sm">{t('whyUsSection.teachersDescription')}</p>
                </div>
                <div className="p-4 mb-4 flex flex-col items-center">
                    <ControlIllustration className="h-28 mb-2"/>
                    <h3 className="text-lg font-bold mb-2">{t('whyUsSection.everythingUnderControl')}</h3>
                    <p className="text-sm">{t('whyUsSection.controlDescription')}</p>
                </div>
                <div className="p-4 mb-4 flex flex-col items-center">
                    <CreativityIllustration className="h-28 mb-2"/>
                    <h3 className="text-lg font-bold mb-2">{t('whyUsSection.youngCreativeTeam')}</h3>
                    <p className="text-sm">{t('whyUsSection.teamDescription')}</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;