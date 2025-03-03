interface TituloSecaoProps {
  primario: string
  secundario: string
  tag?: string
}

export default function TituloSecao(props: TituloSecaoProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {props.tag && (
        <div className=" bg-zinc-700 mb-2 text-white text-sm md:text-base font-bold px-2 rounded-sm ">
          {props.tag}
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl text-gradient sm:text-4xl dm:text-5xl font-bold">
          {props.primario}
        </h2>
        <h3 className="text-zinc-500 md:w-[450px] px-7 md:px-0 text-center mt-2">
          {props.secundario}
        </h3>
      </div>
    </div>
  )
}
