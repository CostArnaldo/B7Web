type Props= {
    text: string;
    click: () => void
    /*click: (txt: string) => void
    */
}



export const Botao = ({text, click}: Props) => {
    /*const handleClick= () =>{
        click("Alguma frase")
    }*/
    return (
        <button onClick= {click} /*{handleClick}*/ > {text} </button>
    )
}