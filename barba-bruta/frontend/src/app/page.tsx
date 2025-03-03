import NossosServicos from '@/components/servico/NossosServicos'
import NossosProfissionais from '@/components/profissional/NossosProfissionais'
import SecaoBackground from '@/components/shared/SecaoBackground'
import Rodape from '@/components/shared/Rodape'
export default function Main() {
  return (
    <div className="flex flex-col bg-black font-sans text-white">
      <div className="container">
        <h1 className="text-6xl font-bold">Landing Page</h1>
      </div>
      <SecaoBackground imagem="/banners/servicos.webp">
        <NossosServicos />
      </SecaoBackground>

      <SecaoBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </SecaoBackground>
      <Rodape />
    </div>
  )
}
