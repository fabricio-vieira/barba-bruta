import Profissional from '@/core/profissional/Profissional'
import Avaliacao from '@/components/shared/Avaliacao'
import Image from 'next/image'
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconBrandLinkedin,
} from '@tabler/icons-react'

interface ItemProfissionalProps {
  profissional: Profissional
}

export default function ItemProfissional(props: ItemProfissionalProps) {
  const { profissional } = props
  return (
    <div className="flex flex-col bg-zinc-800 overflow-hidden rounded-xl">
      <div className="relative w-full h-72">
        <Image
          src={profissional.imagemUrl}
          alt={profissional.nome}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-5 p-4">
        <div className="flex flex-col gap-5">
          <span className="text-white text-2xl font-black">
            {profissional.nome}
          </span>
          <span className="text-zinc-400 text-sm">
            {profissional.descricao}
          </span>
          <div className="flex gap-2">
            <Avaliacao
              nota={profissional.avaliacao}
              qtdeAvaliacoes={profissional.quantidadeAvaliacoes}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <IconBrandInstagram stroke={1} />
          <IconBrandWhatsapp stroke={1} />
          <IconBrandX stroke={1} />
          <IconBrandLinkedin stroke={1} />
        </div>
      </div>
    </div>
  )
}
