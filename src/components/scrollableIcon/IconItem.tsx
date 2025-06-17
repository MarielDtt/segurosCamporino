import Link from 'next/link';

export type IconItemProps = {
    icon: React.ReactNode;
    href: string
    title: string
};

const IconItem = ({ icon, href, title }: IconItemProps) => {

    return (
        <Link href={href} title={title}>
            <div className="flex flex-shrink-0 items-center justify-center w-[70px] h-[70px] bg-Background-Lilac rounded-full">
                {icon}
            </div>
        </Link>
    )
}

export default IconItem;