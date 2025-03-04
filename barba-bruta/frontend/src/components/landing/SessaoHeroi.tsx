import Cabecalho from '@/components/shared/Cabecalho'
import Image from 'next/image'
import Link from 'next/link'
export default function SessaoHeroi() {
  return (
    <div className="h-[450px] sm:h-[720px] relative">
      <Image
        src="/banners/principal.webp"
        alt="Barbearia"
        fill
        className="object-cover"
      />
      <div className=" absolute flex flex-col items-center top-0 left-0 w-full h-full bg-black/50">
        <Cabecalho />
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider font-thin">
              Transformações
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient">
              Lendárias
            </span>
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg font-extralight">
            🤘 Seu estilo é o nosso Rock!🤘
          </p>
          <Link href="/agendamento" className="botao mt-3 text-base sm:text-lg">
            <span>Agende agora</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
