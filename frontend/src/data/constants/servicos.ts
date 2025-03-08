import Servico from '../../core/servico/Servico'

const servicos: Servico[] = [
  {
    id: '1',
    nome: 'Corte Viking',
    descricao:
      'Venha receber um corte viking, com lamina na pele e estilo de guerreiro. Saia pronto para enfrentar qualquer batalha com um visual que impoe respeito',
    preco: 55,
    qtdeSlots: 5,
    imagemUrl: '/servicos/corte-de-cabelo.jpg',
  },
  {
    id: '2',
    nome: 'Barba de Lenhador',
    descricao:
      'Venha dar um trato na sua barba de lenhador, com aparo preciso e estilo de macho raiz. Saia com uma barba que impoe respeito e faz até as arvores tremerem',
    preco: 45,
    qtdeSlots: 2,
    imagemUrl: '/servicos/corte-de-barba.jpg',
  },
  {
    id: '3',
    nome: 'Garras Brutais',
    descricao:
      'Venha transformar suas patas de urso em garras de lobo. Nosso serviço de manicure e pedicure é tão bruto quanto você, mas com um toque de classe',
    preco: 4,
    qtdeSlots: 2,
    imagemUrl: '/servicos/manicure-pedicure.jpg',
  },
  {
    id: '4',
    nome: 'Combo Alpha',
    descricao:
      'Nosso combo Alpha inclui um corte de Viking, uma barba de lenhador e uma manicure e pedicure de gladiador. Saia pronto para enfrentar qualquer batalha com estilo e unhas afiadas',
    preco: 95,
    qtdeSlots: 2,
    imagemUrl: '/servicos/combo.jpg',
  },
  {
    id: '5',
    nome: 'Pequeno Caçador',
    descricao:
      'Transforme seu pequeno aventureiro em um mini caçador, com um corte cheio de atitude e estilo. Cabelo afiado como uma guitarra e maneiro como uma harley',
    preco: 60,
    qtdeSlots: 2,
    imagemUrl: '/servicos/corte-infantil.jpg',
  },
  {
    id: '6',
    nome: 'Noivo Raiz',
    descricao:
      'Prepare-se para o grande dia com um tratamento digno de um verdadeiro guerreiro da estrada. Corte de cabelo afiado, barba de lenhador e manicure de motoqueiro, tudo enquando voce relaxa ao som de rock pesado ',
    preco: 189,
    qtdeSlots: 5,
    imagemUrl: '/servicos/dia-de-noivo.jpg',
  },
]

export default servicos
