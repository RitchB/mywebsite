import React, { useEffect } from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import Image from 'next/image'
import LogoEAP from '@/images/logos/LogoEAP.jpg'

const ConvertkitForm1 = () => {

    return (
        <>
            <script src="https://f.convertkit.com/ckjs/ck.5.js" />
            <form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" action="https://app.convertkit.com/forms/4962151/subscriptions" method="post" data-sv-form="4962151" data-uid="9488faed4d" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">


                <div data-style="clean">
                    <ul data-element="errors" data-group="alert"></ul>




                    <div data-element="fields" data-stacked="false">



                        <div className="w-full sm:max-w-xs">
                            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                <SlEnvolopeLetter className="h-6 w-6 flex-none  text-zinc-600 dark:text-zinc-400" />
                                <span className="ml-3  text-zinc-600 dark:text-zinc-400">Subscribe to my newsletter. It's FREE!</span>
                            </h2>
                            <p className="mt-2 text-sm whitespace-normal sm:whitespace-nowrap text-zinc-600 dark:text-zinc-400">
                                Get notified when I publish something new, and unsubscribe at any time.
                            </p>

                            <div className="flex flex-col mt-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                                <input className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm" name="email_address" aria-label="Email Address" placeholder="  Email Address" required="" type="email" />
                                <button className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-eap500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-eap600 hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eap500 sm:mt-0 sm:ml-3 sm:w-auto" data-element="submit">Subscribe</button>
                            </div>
                        </div>




                    </div>




                </div>

            </form>

        </>
    );
};

export default ConvertkitForm1;

