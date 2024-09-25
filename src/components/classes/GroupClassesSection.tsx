import React from "react";
import {Spinner} from "../common/Spinner";
import {useTranslation} from "gatsby-plugin-react-i18next";

const GroupClassesSection: React.FC = () => {
    const {t} = useTranslation();

    const traits: string[][] = t('groupCoursesSection.traits', {returnObjects: true});

    return (
        <section className="my-20 px-4 text-center md:mt-40">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold md:text-5xl">{t('groupCoursesSection.title')}</h1>
                <p className="mb-8 mt-12 text-sm text-gray-500 md:text-base">{t('groupCoursesSection.description')}</p>

                <ul className="flex flex-col items-center gap-2 pl-4 text-sm md:text-base">
                    {traits.map((trait, i) => <li
                        className="flex gap-2"
                        key={i}
                    >
                        <div className="text-base">{trait[0]}</div>
                        {trait[1]}</li>)}</ul>

                <div className="mt-12 flex flex-wrap justify-center gap-4 md:mt-20 md:grid-cols-3 md:gap-16 md:text-left">
                    <div className='activenow-form-container activenow-form-94514-container'>
                        <Spinner/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GroupClassesSection;