const SeeStat = (stat) => {
    return (
        <div id="statHolder" className="flex bg-zinc-100 rounded-md mt-5">
            <div 
                id="statName" 
                className="rounded-l-md font-bold bg-zinc-400 pt-2.5 pl-3 pr-3">
                    {stat.name}
            </div>
            <div 
                id="statNum" 
                className="text-center p-2 pr-5">
                    {stat.num}
            </div>
        </div>
    );
}

export default SeeStat;