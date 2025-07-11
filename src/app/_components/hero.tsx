
//Importe de componentes
import StartButton from "./startbutton";
import Header from "./header";


//Importe de imagens e ícones
import rainIcon from '../../../public/home/rain_icon.svg'
import witheCarImage from '../../../public/home/home 1.png'
import Image from "next/image";

export function Hero() {
    return (
        <section className="bg-[#0A0A0B] relative overflow-hidden">
            <Header />
            <div className="container mx-auto justify-center py-16 px-4  relative">
                <article className="justify-center flex">
                    <div className="space-y-6 w-fit flex flex-col items-center">
                        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                            Choose The Best Car
                        </h1>
                        <h2 className="text-3xl ">
                            Porsche Mission E
                        </h2>
                        <div className="flex flex-row justify-around w-fit px-5 py-2">
                            <Image
                                src={rainIcon}
                                alt="ícone de raio"
                                className="object-contain flex"
                            />
                            <p className="lg:text-lg flex px-3 py-2">
                                Electric car
                            </p>
                        </div>
                        <Image
                            src={witheCarImage}
                            alt="Carro de alto padrão na cor Branca"
                        />
                        <div className="grid grid-cols-3 w-fit text-center">
                            <div>
                                <p className="font-bold">24°</p>
                                <p className="font-extralight">TEMPERATURE</p>
                            </div>
                            <div>
                                <p className="font-bold">873</p>
                                <p className="font-extralight">MILEAGE</p>
                            </div>
                            <div>
                                <p className="font-bold">94%</p>
                                <p className="font-extralight">BATTERY</p>
                            </div>
                        </div>
                        <StartButton />
                    </div>
                </article>
            </div>


        </section>
    )
}