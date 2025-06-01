import Carrusel from "@/components/carrusel";
import Elegirnos from "@/components/elegirnos";
import Form from "@/components/form";
import MiniCarrusel from "@/components/minicarrusel";
import Resenia from "@/components/resenia";
export default function Home() {
  return (
    <div>
      <div className="w-[390px] h-[336px] p-24 flex justify-center items-center bg-yellow-200 mt-6 m-auto">
        <Carrusel />
      </div>
      <div className="w-[390px] h-[76px] mt-6 bg-slate-400 flex justify-center items-center m-auto">
        <MiniCarrusel />
      </div>
      <div className="w-[390px] h-[1380px] mt-6 flex justify-center items-center bg-red-500 m-auto">
        <Elegirnos />
      </div>
        <div className="w-[390px] h-[420px] mt-6 flex justify-center items-center bg-Background-Default m-auto">
        <Resenia/>
      </div>
        <div className="w-[390px] h-[528px] mt-6 flex justify-center items-center bg-fuchsia-700 m-auto">
        <Form />
      </div>
    </div>
  );
}
