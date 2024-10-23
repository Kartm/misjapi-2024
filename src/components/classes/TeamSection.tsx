import React from "react";
import {twMerge} from "tailwind-merge";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {ClassesData} from "../../pages/korepetycje";
import LinkButton from "../common/LinkButton";
import IframeDialog from "../common/IframeDialog";
import {Spinner} from "../common/Spinner";

type TeamMemberTileProps = {
    data: ClassesData['allWpMisjaPiClass']['nodes'][0]
    onEnrollDialogOpen: () => void;
}

const TeamMemberTile: React.FC<TeamMemberTileProps> = ({data, onEnrollDialogOpen}) => {
    const image = getImage(data.polaOfertowe.picture.node.localFile.childImageSharp.gatsbyImageData)

    console.log(data.polaOfertowe)
    return <div
        className={twMerge('flex text-sm w-full max-w-96 flex-col items-center justify-between relative gap-4 p-8 pb-8 pt-0 font-light')}
    >
        <div className="absolute inset-x-0 bottom-0 top-24 -z-10 border border-t-4 border-gray-200 border-t-black shadow-md"/>

        <div className="flex w-full flex-col items-center gap-4">
            <GatsbyImage
                className="w-52 rounded-full drop-shadow-md"
                image={image!}
                alt={data.polaOfertowe.title}
            />
            <div className="flex flex-col text-center">
                <h4 className="text-xl">{data.polaOfertowe.title}</h4>
                <h5 className="text-sm text-gray-500">{data.polaOfertowe.subtitle}, {data.polaOfertowe.hourlyRate} zł/h</h5>
            </div>
            <div
                className="flex w-full flex-col gap-2 pl-4 text-justify text-sm [&>b]:font-semibold [&>ul>li]:mt-1 [&>ul]:ml-1.5 [&>ul]:list-outside [&>ul]:list-square [&>ul]:text-left"
                dangerouslySetInnerHTML={{__html: data.polaOfertowe.description}}
            />
        </div>

        <div className="flex flex-col gap-4">
            {data.polaOfertowe.unavailable ? <LinkButton
                className="w-48 cursor-pointer justify-center bg-gray-800 uppercase text-gray-50"
                onClick={(e) => {
                    e.preventDefault();
                }}
            >Brak miejsc</LinkButton> : <LinkButton
                className="w-48 cursor-pointer justify-center bg-amber-500 uppercase text-black"
                onClick={(e) => {
                    e.preventDefault();
                    onEnrollDialogOpen()
                }}
            >Zapisz się</LinkButton>}
        </div>
    </div>
}

type TeamSectionProps = {
    teamMembers: ClassesData['allWpMisjaPiClass']
    enrollDialog: {
        open: boolean;
        setOpen: (open: boolean) => void;
    }
}

const TeamSection: React.FC<TeamSectionProps> = ({teamMembers, enrollDialog}) => {
    

    return (
        <section className="my-20 px-4 text-center md:mt-40">
            <IframeDialog
                open={enrollDialog.open}
                onClose={() => enrollDialog.setOpen(false)}
            >
                <div className='activenow-form-container activenow-form-94513-container'>
                    <Spinner/>
                </div>
            </IframeDialog>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold md:text-5xl">Wybierz korepetytora, który najbardziej Ci odpowiada!</h1>
                <div className="mt-12 flex flex-wrap justify-center gap-4 md:mt-20 md:grid-cols-3 md:gap-16 md:text-left">
                    {teamMembers.nodes.filter(m => !m.polaOfertowe.hidden).map((m, i) => <TeamMemberTile
                        onEnrollDialogOpen={() => enrollDialog.setOpen(true)}
                        key={i}
                        data={m}
                    />)}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;