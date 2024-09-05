import {useTranslation} from "gatsby-plugin-react-i18next";
import React, {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {StaticImage} from "gatsby-plugin-image";

type ReasonTileProps = {
    image: ReactNode;
    title: string;
    description: string;
    direction: 'image-left' | 'image-right'
}

const ReasonTile: React.FC<ReasonTileProps> = ({image, title, description, direction = 'image-left'}) => <div
    className={twMerge('flex w-full flex-col items-center justify-center gap-4 md:max-w-none md:flex-row md:gap-16', direction === 'image-left' ? '' : 'md:flex-row-reverse')}
>
    <div className="w-full max-w-96">
        {image}
    </div>
    <div className="w-full max-w-96">
        <h3 className="text-lg font-bold md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm md:mt-4 md:text-base">{description}</p>
    </div>
</div>

const WhyUsSection: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section className="mt-20 px-4 text-center md:mt-40">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold md:text-5xl">{t('whyUsSection.title')}</h1>
                <p className="mt-12 text-sm md:text-base">{t('whyUsSection.description')}</p>
                <div className="mt-12 flex flex-col items-center gap-16 md:mt-20 md:text-left">
                    <ReasonTile
                        image={<StaticImage
                            src={'../../images/why-us/teachers.jpg'}
                            alt={'title'}
                            layout={'constrained'}
                            height={280}
                            width={384}
                            quality={80}
                            transformOptions={{fit: "cover", cropFocus: "attention"}}
                        />}
                        title={t('whyUsSection.teachersWithPassion')}
                        description={t('whyUsSection.teachersDescription')}
                        direction={'image-left'}

                    />
                    <ReasonTile
                        image={<StaticImage
                            src={'../../images/why-us/creativity.jpg'}
                            alt={'title'}
                            layout={'constrained'}
                            height={280}
                            width={384}
                            quality={80}
                            transformOptions={{fit: "cover", cropFocus: "attention"}}
                        />}
                        title={t('whyUsSection.youngCreativeTeam')}
                        description={t('whyUsSection.teamDescription')}
                        direction={'image-right'}
                    />
                    <ReasonTile
                        image={<StaticImage
                            src={'../../images/why-us/manage.jpg'}
                            alt={'title'}
                            layout={'constrained'}
                            height={280}
                            width={384}
                            quality={90}
                            transformOptions={{fit: "cover", cropFocus: "attention"}}
                        />}
                        title={t('whyUsSection.everythingUnderControl')}
                        description={t('whyUsSection.controlDescription')}
                        direction={'image-left'}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;