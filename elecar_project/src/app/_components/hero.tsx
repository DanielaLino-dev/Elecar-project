
import StartButton from "./startbutton";

export function Hero() {
    return (
        <section className="bg-[#0A0A0B] relative overflow-hidden">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                Choose The Best Car
            </h1>
            <h2 className="text-3xl ">
                Porsche Mission E
            </h2>
            <div>
                <p className="lg:text-lg">
                    Electric car
                </p>
            </div>
            <div>
                <div>
                    <p>24°</p>
                    <p>TEMPERATURE</p>
                </div>
                <div>
                    <p>873</p>
                    <p>MILEAGE</p>
                </div>
                <div>
                    <p>94%</p>
                    <p>BATTERY</p>
                </div>
            </div>
            <StartButton/>
        </section>
    )
}