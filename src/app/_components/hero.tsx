
//Importe de componentes
import StartButton from "./startbutton";
import Header from "./Header";
import Image from "next/image";
import DataCarHome from './DataCarHome';


//Importe de imagens e ícones
import rainIcon from '../../../public/home/rain_icon.svg'
import witheCarImage from '../../../public/home/home 1.png'
import iconTemperature from '../../../public/icon_temperature.svg'
import iconThunder from '../../../public/icon_thunder.svg'
import iconKM from '../../../public/icon_km.svg'

const carInfo = [
    {
        icon: iconTemperature,
        title: "24°",
        subtitle: "TEMPERATURE",
        altImage: "Ícone de termômetro de temperatura"
    },
    {
        icon: iconKM, // Se quiser adicionar mais depois
        title: "873",
        subtitle: "MILEAGE",
        altImage: "Ícone de quilometragem"
    },
    {
        icon: iconThunder,
        title: "94%",
        subtitle: "BATTERY",
        altImage: "Ícone de bateria"
    }
];

export default function Hero() {


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
                            {carInfo.map((info, index) => (
                                <DataCarHome
                                    key={index}
                                    icon={info.icon}
                                    title={info.title}
                                    subTitle={info.subtitle}
                                    altImage={info.altImage}
                                />
                            ))
                            }
                        </div>
                        <StartButton />
                    </div>
                </article>
            </div>


        </section>
    )
}