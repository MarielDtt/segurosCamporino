
export type IconItemProps = {
  icon: React.ReactNode;
};

const IconItem = ({icon}: IconItemProps ) => {

    return(
        <div className="flex flex-shrink-0 items-center justify-center w-[70px] h-[70px] bg-Background-Lilac rounded-full">
            {icon}
        </div>
    )
}

export default IconItem;