import Carrusel from "@/components/carrusel";
import Elegirnos from "@/components/elegirnos";
import Form from "@/components/form";
import Resenia from "@/components/resenia";
import ScrollableIcon from "@/components/scrollableIcon";
export default function Home() {
  return (
    <div>
      <div className="w-[390px] h-[336px] p-6 flex justify-center items-center bg-Background-Default mt-6 m-auto">
        <Carrusel />
      </div>
      <div className="w-[390px] h-[76px] mt-6 flex overflow-hidden justify-center items-center m-auto ">
        <ScrollableIcon/>
      </div>
      <div className="w-[390px] h-[1876x] mt-6 flex justify-center items-center bg-Background-Default m-auto">
        <Elegirnos />
      </div>
        <div className="w-[390px] h-[400px] mt-6 flex justify-center items-center bg-Background-Default-400 m-auto">
        <Resenia/>
      </div>
        <div className="w-[390px] h-[528px] mt-6 flex justify-center items-center bg-Background-Default m-auto">
        <Form />
      </div>
    </div>
  );
}
