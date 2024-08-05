import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";
import LinkButton from "../common/LinkButton";
import {StaticImage} from "gatsby-plugin-image";

const CoursesSection: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section id="courses" className="mt-20 px-4 text-center md:mt-40">
            <div className={"container mx-auto"}>
                <h1 className="text-3xl font-bold md:text-5xl">{t('coursesSection.title')}</h1>
                <p className="mt-12 text-sm md:text-base">{t('coursesSection.description')}</p>

                <div className="mt-12 flex flex-wrap justify-center gap-12">
                    <div className="flex w-full max-w-64 flex-col rounded-lg border px-6 py-8 shadow md:w-72">
                        <h3 className="mb-2 text-xl font-bold">{t('coursesSection.individualTutoring')}</h3>
                        <p className="mb-8 text-sm md:text-base">{t('coursesSection.individualTutoringDescription')}</p>

                        <div className="mb-8 flex flex-row items-stretch justify-center gap-2">
                            <div className="flex flex-col justify-end">
                                <p className="relative bottom-0.5 text-base font-bold">{t('coursesSection.priceFrom')}</p>
                            </div>
                            <h1 className="text-6xl font-bold">{70}</h1>
                            <div className="flex flex-col items-start">
                                <p className="text-base font-bold">{t('coursesSection.priceCurrency')}</p>
                                <p className="text-sm text-gray-500 md:text-base">/60 {t('coursesSection.priceMinutes')}</p>
                            </div>
                        </div>

                        <ul className="mb-10 flex list-inside list-none flex-col gap-2">
                            <li className="flex flex-row items-center gap-3"><StaticImage
                                src={'../../images/courses/math.svg'} height={32} width={32}
                                transformOptions={{fit: 'cover'}} alt={"math icon"}/> {t('coursesSection.math')}</li>
                            <li className="flex flex-row items-center gap-3"><StaticImage
                                src={'../../images/courses/english.svg'} height={32} width={32}
                                transformOptions={{fit: 'cover'}} alt={"english icon"}/> {t('coursesSection.english')}
                            </li>
                            <li className="flex flex-row items-center gap-3"><StaticImage
                                src={'../../images/courses/german.svg'} height={32} width={32}
                                transformOptions={{fit: 'cover'}} alt={"german icon"}/> {t('coursesSection.german')}
                            </li>
                            <li className="flex flex-row items-center gap-3"><StaticImage
                                src={'../../images/courses/physics.svg'} height={32} width={32}
                                transformOptions={{fit: 'cover'}} alt={"physics icon"}/> {t('coursesSection.physics')}
                            </li>
                        </ul>
                        <LinkButton className={"justify-center justify-self-stretch bg-amber-500 text-black"}
                                    href="/korepetycje/">{t('coursesSection.chooseDate')}</LinkButton>
                    </div>

                    <div className="flex w-full max-w-64 flex-col rounded-lg border px-6 py-8 shadow md:w-72">
                        <h3 className="mb-2 text-xl font-bold">{t('coursesSection.groupCourses')}</h3>
                        <p className="text-sm md:text-base">{t('coursesSection.groupCoursesDescription1')}</p>
                        <p className="mb-8 text-sm md:text-base">{t('coursesSection.groupCoursesDescription2')}</p>

                        <div className="mb-8 flex flex-row items-stretch justify-center gap-2">
                            <h1 className="text-6xl font-bold">{40}</h1>
                            <div className="flex flex-col items-start">
                                <p className="text-base font-bold">{t('coursesSection.priceCurrency')}</p>
                                <p className="text-sm text-gray-500 md:text-base">/60 {t('coursesSection.priceMinutes')}</p>
                            </div>
                        </div>

                        <ul className="mb-10 flex list-inside list-none flex-col gap-2">
                            <li className="flex flex-row items-center gap-3"><StaticImage
                                src={'../../images/courses/math.svg'} height={32} width={32}
                                transformOptions={{fit: 'cover'}} alt={"math icon"}/> {t('coursesSection.math')}</li>
                            <li className="flex flex-row items-center gap-3"><StaticImage
                                src={'../../images/courses/english.svg'} height={32} width={32}
                                transformOptions={{fit: 'cover'}} alt={"english icon"}/> {t('coursesSection.english')}
                            </li>
                        </ul>
                        <LinkButton className={"mt-auto justify-center justify-self-stretch bg-amber-500 text-black"}
                                    href="/kursy-grupowe/">{t('coursesSection.chooseGroup')}</LinkButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;