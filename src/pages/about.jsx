import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/image-3.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Richard Beauregard</title>
        <meta
          name="description"
          content="I’m Richard. I'm a former actuarial consultant. I now build my own thing."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-eap500 dark:text-eap500 sm:text-4xl">
            Hi! I'm Richard
          </h1>
            <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              Former Actuary & Business Software Expert. Self-development, Productivity, Rookie Software Developer, Future YouTuber, Wannabe Writer, Risks Knower, and Coffee Lover.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Over the last 15 years, I've worked as an actuarial consultant for three significant international companies. 
              My primary expertise is in software development and data projection. 
              I have a degree in Actuarial Sciences from the University of Quebec in Montreal.
              </p>
              <p>
              In 2021, I developed anxiety problems, and in January 2022, my wife was diagnosed with breast cancer. 
              I burned out. In March 2023, I quit my job as a Senior Actuarial Consultant and pursued other interests.
              </p>
              <p>
              I mainly worked with software from 2008 to 2019 before pursuing more traditional actuarial positions. 
              I felt unhappy about what I was doing. I was missing the development environment I had worked for more than a decade. 
              </p>
              <p>
              Today, I spend time writing and developing content I share on social media. 
              I aim to build a community of like-minded people with whom I can share my knowledge about self-development, 
              productivity and content creation while growing my software developer skills.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/IAmRitchB" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/iamritchb/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/RitchB" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/richard-beauregard/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:richard@richardbeauregard.me"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                richard@richardbeauregard.me
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
