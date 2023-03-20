import Head from 'next/head'

import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'


function SpeakingSection({ children, ...props }) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    )
}

export default function Youtube() {
    return (
        <>
            <Head>
                <title>Newsletter - Everything's a process - Richard Beauregard</title>
                <meta
                    name="description"
                    content="Follow me on Youtube - Everything's a process - Richard Beauregard"
                />
            </Head>
            <SimpleLayout
                title="Follow me on Youtube"
                intro="Soon!!!"
            >
            </SimpleLayout>
        </>
    )
}
