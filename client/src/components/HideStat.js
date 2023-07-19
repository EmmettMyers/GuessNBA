const HideStat = (stat) => {
    return (
        <div id="statHolder" className="flex bg-fuchsia-600 rounded-md mt-5">
            <div 
                id="statName" 
                className="rounded-l-md font-bold bg-fuchsia-400 pt-2.5 pl-3 pr-3">
                    {stat.name}
            </div>
            <div 
                id="statNum" 
                className="text-center p-2 pr-5 font-bold text-yellow-300">
                    &nbsp;???
            </div>
        </div>
    );
}

export default HideStat;