import { nunitoSans, gabarito } from '@/app/ui/fonts'
import Image from 'next/image'
import siteImg from '/public/siteImage.png'

export const Banner = () => {
    return (
        <header className="w-full md:flex md:gap-20 lg:gap-40">
            <aside className="mb-10 flex md:flex-col justify-center gap-4 md:gap-0 lg:mt-40">
                <div
                    className={`${gabarito.className} text-7xl font-bold tracking-wide text-slate-700 md:text-7xl/30 lg:text-8xl/20`}
                >
                    matt
                </div>
                <div
                    className={`${gabarito.className} text-7xl font-bold tracking-wide text-slate-700 md:text-7xl lg:text-8xl`}
                >
                    bieber
                </div>
            </aside>
            <div className="flex w-full justify-center">
                <Image
                    className="w-50 h-50 opacity-70 sm:w-60 sm:h-60 md:w-65 md:h-65 lg:w-80 lg:h-80"
                    src={siteImg}
                    alt="Sail boat"
                    height={512}
                    width={512}
                />
            </div>
        </header>
    )
}
