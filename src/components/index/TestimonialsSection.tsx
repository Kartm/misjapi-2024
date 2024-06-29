import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();

    const facebookReviewUrls: string[] = [
        'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmag.ja.5%2Fposts%2Fpfbid0A5faH4WxzxQHtg71jZrHNsyLa868FS3Qo7zQwyDM6hKwd9d124B6q4HziVVo2mfHl&show_text=true&width=500',
        'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02EmAKtuXdLP7m521JparrTKGmpEA5agghoZ9tvHsDLZmSvEzHjGAPkxMAPnDUdSGKl%26id%3D100005922067312&show_text=true&width=500',
        'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ZQzmxXw5m9LUHRzRXTyDJiaKmHSeHfPTqjPLvCGcS5q4LYwvj7R2srf1DyA3BNzkl%26id%3D100081119022550&show_text=true&width=500',
        'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Femilia.janowik.5%2Fposts%2Fpfbid0VwcbY36qHMcyP7w3nM9cTjabdQtUs7iHjTyAys1xpDWmSKzfLPKgj2Cxwgx5xKTXl&show_text=true&width=500',
        'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0pC5XgHzX39QSftMEEM1ob47X8gChSH7d7a2wgxh9s486MQowTBDo6yH9JxpmQKjsl%26id%3D100088231114689&show_text=true&width=500',
    ]

    return (
        <section className="mt-20 bg-amber-50 px-4 py-20 text-center md:mt-40 md:py-40">
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold md:text-5xl">{t('testimonialsSection.title')}</h1>
                <p className="mb-8 text-sm md:text-base">{t('testimonialsSection.description')}</p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {
                        facebookReviewUrls.map((url, i) => <div key={i} className="overflow-hidden rounded-xl shadow">
                            <iframe
                                src={url}
                                width="500" height="220" style={{border: 'none', overflow: 'hidden'}} scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>)
                    }


                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;