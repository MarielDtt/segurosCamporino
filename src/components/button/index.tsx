type ButtonProps = {
    text: string; // Texto que se mostrará en el botón
    className?: string; // Clases adicionales opcionales
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export function Button({ text, className, onClick }: ButtonProps) {

    return (
        <div className="flex justify-center">
            <button
                className={`mt-8 bg-primary-600 w-[104px] h-10 rounded-md font-bold text-Background-Lilac hover:bg-secondary-500 ${className}`}
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