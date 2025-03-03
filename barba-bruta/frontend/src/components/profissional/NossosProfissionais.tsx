import ItemProfissional from './ItemProfissional'
import profissionais from '@/data/constants/profissionais'
import Titulo from '../shared/TituloSecao'

export default function NossosProfissionais() {
  return (
    <div className="flex flex-col gap-y-10 items-center justify-center">
      <Titulo
        tag="Time"
        primario="Nossos Brutos"
        secundario="Só os mais brabos estão aqui! Temos o orgulho de ter o melhor time de profissionais da região."
      />

      <div className="justify-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-zinc-900">
        {profissionais.map((profissional) => (
          <ItemProfissional profissional={profissional} />
        ))}
      </div>
    </div>
  )
}
