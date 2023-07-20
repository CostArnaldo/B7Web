import { ReactNode } from "react";

type Props = {
    //children: ReactNode; caso queira usar varias tags no jsx
    phrase: string;
    author?: string;

}

export const Card = ({ /*children*/ phrase, author }: Props) => {
    return (
        <div className= "w-96 border-2 border-red-500 p-3 text-2xl text-center italic">
            <h3 className="text-3xl font-bold italic">{phrase}</h3>
            {author && 
            <p className="text-right text-sm">- {author} </p>
            }
            {!author && 
            <p className="text-right text-sm italic">- Autor Desconhecido </p>
            }
        </div>
    )
    //{children} colocar esse código dentro da div caso queira ativar o props children
    //{author ?? "Autor Desconhecido"} renderização condicional
}