import Image from "next/image";
import { motion } from "motion/react"
const SplashScreen = () => {

    return (
        <div className="flex justify-center h-screen bg-primary-600 fixed inset-0 z-50 items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: "easeInOut"
                }}
                className="flex justify-center">
            <Image
                src="/LogoCompleto.png"
                width={433}
                height={433}
                alt="Logo Completo Seguros Camporino"
            />
        </motion.div>
        </div >
    )
}
export default SplashScreen;