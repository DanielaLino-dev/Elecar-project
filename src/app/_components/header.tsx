import Image from 'next/image'
import logoElecar from '../../../public/logo_elecar.svg'

export default function Header() {
    return (
        <div className='flex justify-between py-10 px-32'>
            <Image
                src={logoElecar}
                alt='Logo da empresa Elecar, que é um ícone de volante branco'
                className=''
            />
            <div className='flex gap-15 '>
                <a href="#" className='text-white hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition duration-300'>Home</a>
                <a href="#" className='text-white hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition duration-300'>About</a>
                <a href="#" className='text-white hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition duration-300'>Featured</a>
                <a href="#" className='text-white hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition duration-300'>Popular</a>

            </div>

        </div>
    )
}