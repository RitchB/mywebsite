import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import Image from 'next/image'
import LogoEAP from '@/images/logos/LogoEAP.jpg'
import ConvertkitForm1 from "../components/ConvertkitForm1";

function SpeakingSection({ children, ...props }) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    )
}

function Appearance({ title, description, event, cta, href }) {
    return (
        <Card as="article">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Eyebrow decorate>{event}</Card.Eyebrow>
            <Card.Description>{description}</Card.Description>
            <Card.Cta>{cta}</Card.Cta>
        </Card>
    )
}

export default function Newsletter() {
    return (
        <>
            <Head>
                <title>Newsletter - Everything's a process - Richard Beauregard</title>
                <meta
                    name="description"
                    content="Newsletter - Everything's a process - Richard Beauregard"
                />
            </Head>
            <SimpleLayout
                title="Everything's a Process"
                intro="Sing up for my newsletter called Everything's a Process and receive my weekly emails where I share about self-development, productivity and content creation."
            >

                {/*  <div className="">
                        <Image
                            src={LogoEAP}
                            alt=""
                            width={150}
                            quality={100}
                            className=""
                        />
                    </div>
*/}
                <div className=" lg:pl-16 xl:pl-24">
                    <ConvertkitForm1 />
                </div>


            </SimpleLayout>
        </>
    )
}
