import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";
import {StaticImage} from "gatsby-plugin-image";

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-20 bg-amber-50 px-4 py-20 text-center md:mt-40 md:py-40">
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold md:text-5xl">{t('testimonialsSection.title')}</h1>
                <p className="mb-8 text-sm md:text-base">{t('testimonialsSection.description')}</p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <div className="overflow-hidden rounded-xl shadow">
                        <StaticImage src="../../images/testimonials/1.jpg" alt="Opinia 1"/>
                    </div>
                    <div className="overflow-hidden rounded-xl shadow">
                        <StaticImage src="../../images/testimonials/2.jpg" alt="Opinia 2"/>
                    </div>
                    <div className="overflow-hidden rounded-xl shadow">
                        <StaticImage src="../../images/testimonials/3.jpg" alt="Opinia 3"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;