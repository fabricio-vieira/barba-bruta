import ItemServico from './ItemServico'
import servicos from '@/data/constants/servicos'
import Titulo from '../shared/TituloSecao'

export default function NossosServicos() {
  return (
    <div className="flex flex-col gap-y-10 items-center justify-center">
      <Titulo
        tag="Serviços"
        primario="Do Classico ao Rock"
        secundario="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som do rock pesado."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {servicos.map((servico) => (
          <ItemServico key={servico.id} servico={servico} />
        ))}
      </div>
    </div>
  )
}

// DUVIDAS

// 1. COMO FAÇO O DIMENSIONAMENTO DA SEÇÃO DE SERVIÇOS E DEMAIS SEÇÕES
// 2. COMO FAÇO PARA QUE A IMAGEM SERVIÇO OCUPE TODO O ESPAÇO VERTICAL DA DIV
// Adicione h-40 na div principal para definir uma altura fixa
// Na div da imagem:
// Adicione relative para permitir posicionamento absoluto da imagem
// Defina h-full para ocupar toda altura do pai
// Adicione w-40 para manter uma largura fixa
// Na Image:
// Troque width/height por fill
// Adicione object-cover para garantir que a imagem cubra todo o espaço mantendo a proporção
// Se você quiser que a altura seja dinâmica baseada no conteúdo, pode remover o h-40 da div principal.

// 3. COMO FAÇO PARA QUE O TEXTO FICAR CENTRALIZADO VERTICALMENTE COM EXTENSÃO MENOR QUE A DESCRIÇÃO
// 5. COMO FAÇO PARA QUE A IMAGEM DE BACKGROUND DA SEÇÃO DE SERVIÇOS SEJA FIXA E COM TAMANHO DE 100% DA DIV
// 6. COMO FAÇO PARA QUE O A IMGAMEM DO CARD NÃO DESENQUADRE DE TAMAMHO QUANDO O TAMANHO DA IMAGEM FICAR MENOR
