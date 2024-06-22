import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="testimonials py-8 bg-gray-100 text-center">
            <h1 className="text-3xl font-bold mb-4">{t('testimonialsSection.title')}</h1>
            <p className="text-lg mb-8">{t('testimonialsSection.description')}</p>

            <div className="flex flex-wrap justify-center space-x-8">
                {/* Example testimonial */}
                <div className="w-80 p-4 bg-white rounded-lg shadow-lg mb-4">
                    <p className="italic">"Great tutoring service! My grades improved significantly."</p>
                    <p className="font-bold mt-2">- John Doe</p>
                </div>
                <div className="w-80 p-4 bg-white rounded-lg shadow-lg mb-4">
                    <p className="italic">"The group courses were very engaging and helpful."</p>
                    <p className="font-bold mt-2">- Jane Smith</p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;