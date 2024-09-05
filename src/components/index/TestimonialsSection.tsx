import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-20 bg-amber-50 px-4 py-20 text-center md:mt-40 md:py-40">
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold md:text-5xl">{t('testimonialsSection.title')}</h1>
                <p className="mb-8 text-sm md:text-base">{t('testimonialsSection.description')}</p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmag.ja.5%2Fposts%2Fpfbid0A8RAbtNNBkEV4L9QugEh6Lm9FBrsSwM9p2WN49Njnyc4ehyUfSuQTrZqR8mAYq9Yl&width=350&show_text=false&height=246&appId"
                        width="350" height="246"  style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02EouvDjP2XCQVJAXXB2MPxbRXKu1JAhRxhqxHXZcWkJj3rmCHGWZojVY4mXcKS4f7l%26id%3D100005922067312&width=350&show_text=false&height=246&appId"
                        width="350" height="246" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ZTkNHMnUx7fSSkbTQwiPu1jQAqEQhNiRAR4iGYug91WrDzcFcJf529SR3DmMasq4l%26id%3D100081119022550&width=350&show_text=false&height=169&appId"
                        width="350" height="169" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Femilia.janowik.5%2Fposts%2Fpfbid0VzNBrrxEUAQS99GUQbqmCspDChnPRPBuGoCKmHi7wumqZ6BtKutkzkVCkaqCAgk5l&width=350&show_text=false&height=207&appId"
                        width="350" height="207" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>


            </div>
        </section>
    );
};

export default TestimonialsSection;