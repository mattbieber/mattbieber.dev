import { Banner } from '@/app/components/Banner'
import { Button } from '@/app/components/Button'
import { github, linkedin, resume, email } from '@/app/ui/icons'

export default function Home() {
    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center gap-16 pb-20 sm:p-20 md:p-12 lg:max-w-6xl">
            <main className="row-start-2 flex flex-col items-center gap-[32px] sm:row-start-1">
                <Banner />
                <nav className="flex flex-wrap justify-center gap-3.5">
                    <Button title="Resume" url="/mattbieber-resume.pdf" background="dark" icon={resume()} />
                    <Button title="Github" url="https://github.com/mattbieber" background="light" icon={github()} />
                    <Button title="Email" url="mailto:mattbieber.sf@gmail.com" background="dark" icon={email()} />
                    <Button
                        title="Linkedin"
                        url="https://www.linkedin.com/in/matt-bieber/"
                        background="light"
                        icon={linkedin()}
                    />
                </nav>
                <div className="text-md m-10 leading-8 text-slate-700 sm:m-1">
                    Hi! I&apos;m <strong>Matt</strong>, a Front-end / Full-stack developer living in Portland, Oregon. For
                    over a decade I&apos;ve been devoted to crafting delightful web and mobile experiences - particularly
                    building successful, innovative SaaS applications built with React, Node.js, and Next.js. I value
                    scalability, UI optimization, and data-driven solutions, and I&apos;m super passionate about building
                    products that genuinely improve user experiences. If you&apos;re like-minded or just wanna reach out,
                    please get in touch!
                </div>
            </main>
            <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
        </div>
    )
}
