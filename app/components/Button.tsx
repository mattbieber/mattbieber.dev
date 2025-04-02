interface Props {
    background: 'light' | 'dark'
    title: string
    url: string
    icon: React.ReactNode
}

export const Button = ({ background, title, url, icon }: Props) => {
    const fillColor = background === 'dark' ? 'bg-neutral-900' : ''
    const textColor = background === 'dark' ? 'text-white' : 'text-slate-900'
    const hoverColor = background === 'dark' ? 'hover:bg-black' : 'hover:bg-white'
    return (
        <div className="min-w-40">
            <div className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200 p-1 duration-300 ease-out sm:w-auto sm:rounded-full dark:border-neutral-700">
                <div className="absolute top-1/2 left-1/2 hidden h-[200px] w-full origin-center -translate-x-1/2 -translate-y-1/2 scale-100 rounded-xl opacity-0 blur-sm duration-300 ease-out group-hover:opacity-100 sm:block sm:w-[200px] sm:rounded-full">
                    <span className="absolute inset-0 h-full w-full animate-spin rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-200"></span>
                </div>
                <a
                    className={`${fillColor} group z-10 inline-flex w-full sm:justify-center rounded-lg py-2.5 pr-3.5 pl-[38px] text-sm font-semibold shadow-lg ${hoverColor} sm:rounded-full lg:py-3 lg:pr-5 lg:pl-11 lg:text-sm dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white`}
                    href={url}
                    target="_blank"
                >
                    {icon}
                    <span className={`${textColor} flex items-center`}>{title}</span>
                </a>
            </div>
        </div>
    )
}
