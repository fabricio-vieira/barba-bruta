import Logo from '@/components/shared/Logo'
import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className="bg-black/60 px-4 self-stretch">
      <nav className="flex justify-between items-center container h-24">
        <Logo />
        <div>
          <Link href="/entrar" className="text-white font-bold text-sm">
            Entrar
          </Link>
        </div>
      </nav>
    </header>
  )
}
