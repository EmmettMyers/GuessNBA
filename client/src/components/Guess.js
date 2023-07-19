const Guess = (player) => {
    return (
        <div 
            id="guessPlayer" 
            className="w-full border-2 border-zinc-300 bg-white text-center p-2">
                {player.name}
        </div>
    );
}

export default Guess;