type ButtonProps = {
    text: string; // Texto que se mostrará en el botón
    className?: string; // Clases adicionales opcionales
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export function ButtonComponent({ text, className, onClick }: ButtonProps) {

    return (
        <div className="flex justify-center">
            <button
                className={`mt-8 bg-button w-[104px] h-10 rounded-md font-bold text-Background-Lilac hover:bg-[#004D76] ${className}`}
                onClick={(event) => {
                    if (onClick) {
                        onClick(event);
                    }
                }}
            >
                {text}
            </button>
        </div>
    )
}