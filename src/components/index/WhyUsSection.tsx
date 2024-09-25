import {useTranslation} from "gatsby-plugin-react-i18next";
import React, {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {StaticImage} from "gatsby-plugin-image";

type ReasonTileProps = {
    image: ReactNode;
    title: string;
    description: string;
    traits: string[][];
    direction: 'image-left' | 'image-right'
}

const ReasonTile: React.FC<ReasonTileProps> = ({image, title, description, traits, direction = 'image-left'}) => <div
    className={twMerge('flex w-full flex-col items-center justify-center gap-4 md:max-w-none md:flex-row md:gap-16', direction === 'image-left' ? '' : 'md:flex-row-reverse')}
>
    <div className="w-full max-w-96">
        {image}
    </div>
    <div className="flex w-full max-w-96 flex-col gap-4 text-justify ">
        <h3 className="text-center text-lg font-bold md:text-left md:text-2xl">{title}</h3>
        <p className="text-sm text-gray-500 md:text-base">{description}</p>
        <ul className="flex flex-col gap-4 text-sm text-gray-500 md:text-base">
            {traits.map((trait, i)=> <li className="flex gap-4" key={i}><div className="grow basis-8 text-3xl">{trait[0]}</div><div className="inline-flex">{trait[1]}</div></li>) }
    </ul>
</div>
</div>

const WhyUsSection: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section className="mt-20 px-4 text-center md:mt-40">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold md:text-5xl">{t('whyUsSection.title')}</h1>
                <p className="mt-12 text-sm text-gray-500 md:text-base">{t('whyUsSection.description')}</p>
                <div className="mt-12 flex flex-col items-center gap-16 md:mt-20 md:text-left">
                    <ReasonTile
                        image={<StaticImage
                            className="shadow-xl"
                            src={'../../images/why-us/teachers.jpg'}
                            alt={'title'}
                            layout={'constrained'}
                            height={256}
                            width={384}
                            quality={80}
                            transformOptions={{fit: "cover", cropFocus: "attention"}}
                        />}
                        title={t('whyUsSection.teachers.title')}
                        description={t('whyUsSection.teachers.description')}
                        traits={t('whyUsSection.teachers.traits', { returnObjects: true })}
                        direction={'image-left'}
                    />
                    <ReasonTile
                        image={<StaticImage
                            className="shadow-xl"
                            src={'../../images/why-us/creativity.jpg'}
                            alt={'title'}
                            layout={'constrained'}
                            height={256}
                            width={384}
                            quality={80}
                            transformOptions={{fit: "cover", cropFocus: "attention"}}
                        />}
                        title={t('whyUsSection.team.title')}
                        description={t('whyUsSection.team.description')}
                        traits={t('whyUsSection.team.traits', { returnObjects: true })}
                        direction={'image-right'}
                    />
                    <ReasonTile
                        image={<StaticImage
                            className="shadow-xl"
                            src={'../../images/why-us/manage.jpg'}
                            alt={'title'}
                            layout={'constrained'}
                            height={256}
                            width={384}
                            quality={90}
                            transformOptions={{fit: "cover", cropFocus: 'attention'}}
                        />}
                        title={t('whyUsSection.control.title')}
                        description={t('whyUsSection.control.description')}
                        traits={t('whyUsSection.control.traits', { returnObjects: true })}
                        direction={'image-left'}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;