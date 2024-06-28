import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";
import LinkButton from "../common/LinkButton";
import EnglishIcon from '../../images/courses/english.svg';
import GermanIcon from '../../images/courses/german.svg';
import MathIcon from '../../images/courses/math.svg';
import PhysicsIcon from '../../images/courses/physics.svg';
import {StaticImage} from "gatsby-plugin-image";

const CoursesSection: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section id="courses" className="text-center px-4 mt-20">
            <h1 className="text-3xl font-bold mb-8">{t('coursesSection.title')}</h1>
            <p className="text-sm mb-8">{t('coursesSection.description')}</p>

            <div className="flex flex-wrap justify-center mb-8 gap-8">
                <div className="w-64 px-6 py-8 border rounded-lg shadow">
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

                    <ul className="flex flex-col list-none list-inside mb-10 gap-2 pl-4">
                        <li className="flex flex-row items-center gap-3"><StaticImage
                            src={'../../images/courses/math.svg'} height={32} width={32}
                            transformOptions={{fit: 'cover'}} alt={"math icon"}/> {t('coursesSection.math')}</li>
                        <li className="flex flex-row items-center gap-3"><StaticImage
                            src={'../../images/courses/english.svg'} height={32} width={32}
                            transformOptions={{fit: 'cover'}} alt={"english icon"}/> {t('coursesSection.english')}</li>
                        <li className="flex flex-row items-center gap-3"><StaticImage
                            src={'../../images/courses/german.svg'} height={32} width={32}
                            transformOptions={{fit: 'cover'}} alt={"german icon"}/> {t('coursesSection.german')}</li>
                        <li className="flex flex-row items-center gap-3"><StaticImage
                            src={'../../images/courses/physics.svg'} height={32} width={32}
                            transformOptions={{fit: 'cover'}} alt={"physics icon"}/> {t('coursesSection.physics')}</li>
                    </ul>
                    <LinkButton className={"text-black bg-amber-500"}
                                href="/korepetycje/">{t('coursesSection.chooseDate')}</LinkButton>
                </div>

                <div className="w-64 px-6 py-8 border rounded-lg shadow">
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

                    <ul className="flex flex-col list-none list-inside mb-10 gap-2 pl-4">
                        <li className="flex flex-row items-center gap-3"><StaticImage
                            src={'../../images/courses/math.svg'} height={32} width={32}
                            transformOptions={{fit: 'cover'}} alt={"math icon"}/> {t('coursesSection.math')}</li>
                        <li className="flex flex-row items-center gap-3"><StaticImage
                            src={'../../images/courses/english.svg'} height={32} width={32}
                            transformOptions={{fit: 'cover'}} alt={"english icon"}/> {t('coursesSection.english')}</li>
                    </ul>
                    <LinkButton className={"text-black bg-amber-500"}
                                href="/kursy-grupowe/">{t('coursesSection.chooseGroup')}</LinkButton>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;