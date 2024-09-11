import {useTranslation} from "gatsby-plugin-react-i18next";
import React from "react";
import {twMerge} from "tailwind-merge";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";
import {ClassesData} from "../../pages/classes";

type TeamMemberTileProps = {
    image: IGatsbyImageData;
}

const TeamMemberTile: React.FC<TeamMemberTileProps> = ({image}) => {
    const imageEeee = getImage(image)

    return <div
        className={twMerge('flex w-full flex-col items-center justify-center gap-4 md:max-w-none md:flex-row md:gap-16')}
    >
        <GatsbyImage
            image={imageEeee!}
            alt={"asd"}
        />
    </div>
}

type TeamSectionProps = {
    teamMembers: ClassesData['allWpMisjaPiClass']
}

const TeamSection: React.FC<TeamSectionProps> = ({teamMembers}) => {
    const {t} = useTranslation();

    return (
        <section className="mt-20 px-4 text-center md:mt-40">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold md:text-5xl">{t('whyUsSection.title')}</h1>
                <p className="mt-12 text-sm md:text-base">{t('whyUsSection.description')}</p>
                <div className="mt-12 flex flex-col items-center gap-16 md:mt-20 md:text-left">
                    {teamMembers.nodes.map((m, i) => <TeamMemberTile
                        key={i}
                        image={m.polaOfertowe.picture.node.localFile.childImageSharp.gatsbyImageData}
                    />)}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;