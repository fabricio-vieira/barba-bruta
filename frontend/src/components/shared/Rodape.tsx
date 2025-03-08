import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from '@tabler/icons-react'
import Logo from './Logo'

export default function Rodape() {
  return (
    <footer>
      <div className="container flex flex-col bg-black py-10">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-10 items-center mb-8">
          <Logo />
          <div className="flex flex-col gap-2 items-center">
            <span className="font-bold text-2xl pb-2">Sobre</span>
            <span className="text-zinc-400 hover:text-zinc-200">
              Nossa História
            </span>
            <span className="text-zinc-400 hover:text-zinc-200">
              Políticas de Privacidade
            </span>
            <span className="text-zinc-400 hover:text-zinc-200">
              Termos de Uso
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="font-bold text-2xl pb-2">Contato</span>
            <span className="text-zinc-400 hover:text-zinc-200">
              barbabruta@gmail.com
            </span>
            <div className="flex items-center gap-2">
              <IconBrandWhatsapp
                size={28}
                stroke={1}
                className="text-green-500"
              />
              <span className="text-zinc-400 hover:text-zinc-200">
                67-3046 0579
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-zinc-500 mt-10">
          <div className="flex gap-2">
            <IconBrandInstagram size={28} stroke={1} />
            <IconBrandFacebook size={28} stroke={1} />
            <IconBrandYoutube size={28} stroke={1} />
            <IconBrandLinkedin size={28} stroke={1} />
          </div>
          <div>
            <p>&copy; 2025 - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
