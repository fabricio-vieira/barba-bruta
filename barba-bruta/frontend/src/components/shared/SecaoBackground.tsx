import Image from 'next/image'

export interface SecaoBackgroundProps {
  children: React.ReactNode
  imagem: string
}

export default function SecaoBackground(props: SecaoBackgroundProps) {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0">
        <Image
          src={props.imagem}
          alt="Imagem de fundo"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative bg-black/80 sm:bg-gradient-to-r from-black/70 via-black/90 to-black/70">
        <div className="container py-10">{props.children}</div>
      </div>
    </div>
  )
}
