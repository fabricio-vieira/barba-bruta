import NossosServicos from '@/components/servico/NossosServicos'
import NossosProfissionais from '@/components/profissional/NossosProfissionais'
import SecaoBackground from '@/components/shared/SecaoBackground'
import Rodape from '@/components/shared/Rodape'
import SessaoHeroi from '@/components/landing/SessaoHeroi'
import NossosClientes from '@/components/cliente/NossosClientes'
export default function Main() {
  return (
    <div className="flex flex-col bg-black font-sans text-white">
      <SessaoHeroi />
      <SecaoBackground imagem="/banners/servicos.webp">
        <NossosServicos />
      </SecaoBackground>

      <SecaoBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </SecaoBackground>

      <SecaoBackground imagem="/banners/clientes.webp">
        <NossosClientes />
      </SecaoBackground>
      <Rodape />
    </div>
  )
}
