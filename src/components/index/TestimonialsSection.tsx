import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";
import {StaticImage} from "gatsby-plugin-image";

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="testimonials px-4 py-8 bg-gray-100 text-center mt-20">
            <h1 className="text-3xl font-bold mb-8">{t('testimonialsSection.title')}</h1>
            <p className="text-sm mb-8">{t('testimonialsSection.description')}</p>

            <div className="flex flex-wrap justify-center gap-4">
                <div className="rounded-xl shadow overflow-hidden">
                    <StaticImage src="../../images/testimonials/1.jpg" alt="Opinia 1"/>
                </div>
                <div className="rounded-xl shadow overflow-hidden">
                    <StaticImage src="../../images/testimonials/2.jpg" alt="Opinia 2"/>
                </div>
                <div className="rounded-xl shadow overflow-hidden">
                    <StaticImage src="../../images/testimonials/3.jpg" alt="Opinia 3"/>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;