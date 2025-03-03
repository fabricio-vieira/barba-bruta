import Servico from '@/core/servico/Servico'
import Image from 'next/image'

interface ItemServicoProps {
  servico: Servico
}

export default function ItemServico(props: ItemServicoProps) {
  const { servico } = props
  return (
    <div className="flex bg-zinc-800 overflow-hidden rounded-xl ">
      <div className="relative h-full w-40">
        <Image
          src={servico.imagemUrl}
          alt={servico.nome}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 justify-between h-full flex-1 p-4">
        <span className="text-xl font-black text-white">{servico.nome}</span>
        <span className="flex-1 text-zinc-400 text-xs span-3">
          {servico.descricao}
        </span>

        <span className="text-xg font-bold">R$ {servico.preco.toFixed(2)}</span>
      </div>
    </div>
  )
}
