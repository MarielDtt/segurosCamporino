import Image from "next/image";
const SplashScreen = () => {

    return (
        <div className="h-screen bg-primary-600">
            <div className="flex  justify-center">
                <Image
                    src="/LogoCompleto.png"
                    width={433}
                    height={433}
                    alt="Logo Completo Seguros Camporino"
                />

            </div>

        </div>
    )
}
export default SplashScreen;