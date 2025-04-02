import { gabarito } from '@/app/ui/fonts'
import Image from 'next/image'
import siteImg from '/public/siteImage.png'

export const Banner = () => {
    return (
        <header className="w-full md:flex md:gap-20 lg:gap-40">
            <aside className="mb-10 flex justify-center gap-4 md:flex-col md:gap-0 lg:mt-40">
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
                    className="h-50 w-50 opacity-70 sm:h-60 sm:w-60 md:h-65 md:w-65 lg:h-80 lg:w-80"
                    src={siteImg}
                    alt="Sail boat"
                    height={512}
                    width={512}
                />
            </div>
        </header>
    )
}
