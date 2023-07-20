type Props = {
    rate: number;
}

export const EmojiRating = ({rate}: Props) => {
    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;

    const rateInt = Math.floor(rate);

    const stars = ' =D'.repeat(rateInt) + ' =('.repeat(5- rateInt);
    
    return (
        <div className="flex items-center text-7xl">
            <div className="bg-zinc-800">{rate.toFixed(1)}</div>
            <div className="ml-4">{stars}</div>
        </div>
    )
};

