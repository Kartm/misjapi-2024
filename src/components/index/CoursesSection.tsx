import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";
import LinkButton from "../common/LinkButton";
import EnglishIcon from '../../images/courses/english.svg';
import GermanIcon from '../../images/courses/german.svg';
import MathIcon from '../../images/courses/math.svg';
import PhysicsIcon from '../../images/courses/physics.svg';

const CoursesSection: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section id="courses" className="text-center px-4 mt-20">
            <h1 className="text-3xl font-bold mb-8">{t('coursesSection.title')}</h1>
            <p className="text-sm mb-8">{t('coursesSection.description')}</p>

            <div className="flex flex-wrap justify-center mb-8 gap-8">
                <div className="w-72 p-8 border rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">{t('coursesSection.individualTutoring')}</h3>
                    <p className="text-sm mb-8">{t('coursesSection.individualTutoringDescription')}</p>

                    <div className="flex flex-row items-stretch justify-center gap-2 mb-8">
                        <div className="flex flex-col justify-end">
                            <p className="text-base font-bold relative bottom-0.5">{t('coursesSection.priceFrom')}</p>
                        </div>
                        <h1 className="text-6xl font-bold">{70}</h1>
                        <div className="flex flex-col items-start">
                            <p className="text-base font-bold">{t('coursesSection.priceCurrency')}</p>
                            <p className="text-sm text-gray-500">/60 {t('coursesSection.priceMinutes')}</p>
                        </div>
                    </div>

                    <p className="font-bold mb-2">{t('coursesSection.subjects')}</p>
                    <ul className="list-none list-inside mb-10">
                        <li className="flex flex-row justify-center items-center gap-2"><MathIcon
                            className="w-8 h-8 inline"/> {t('coursesSection.math')}</li>
                        <li className="flex flex-row justify-center items-center gap-2"><EnglishIcon
                            className="w-8 h-8 inline"/> {t('coursesSection.english')}</li>
                        <li className="flex flex-row justify-center items-center gap-2"><GermanIcon
                            className="w-8 h-8 inline"/> {t('coursesSection.german')}</li>
                        <li className="flex flex-row justify-center items-center gap-2"><PhysicsIcon
                            className="w-8 h-8 inline"/> {t('coursesSection.physics')}</li>
                    </ul>
                    <LinkButton className={"text-black bg-amber-500"} href="/korepetycje/">{t('coursesSection.chooseDate')}</LinkButton>
                </div>

                <div className="w-72 p-8 border rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">{t('coursesSection.groupCourses')}</h3>
                    <p className="text-sm">{t('coursesSection.groupCoursesDescription1')}</p>
                    <p className="text-sm mb-8">{t('coursesSection.groupCoursesDescription2')}</p>

                    <div className="flex flex-row items-stretch justify-center gap-2 mb-8">
                        <h1 className="text-6xl font-bold">{35}</h1>
                        <div className="flex flex-col items-start">
                            <p className="text-base font-bold">{t('coursesSection.priceCurrency')}</p>
                            <p className="text-sm text-gray-500">/60 {t('coursesSection.priceMinutes')}</p>
                        </div>
                    </div>

                    <p className="font-bold mb-2">{t('coursesSection.subjects')}</p>
                    <div className="list-none list-inside mb-10">
                        <li className="flex flex-row justify-center items-center gap-2"><MathIcon
                            className="w-8 h-8 inline"/> {t('coursesSection.math')}</li>
                        <li className="flex flex-row justify-center items-center gap-2"><EnglishIcon
                            className="w-8 h-8 inline"/> {t('coursesSection.english')}</li>
                    </div>
                    <LinkButton className={"text-black bg-amber-500"} href="/kursy-grupowe/">{t('coursesSection.chooseGroup')}</LinkButton>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;