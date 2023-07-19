import setPage from "..";

const EndGame = ({ won, game, player, guesses, hints }) => {
    alert(won + " " + game + " " + player + " " + guesses + " " + hints)
    return (
        <>
            {won ?
                <div className="endGameBox absolute w-full">
                    <div className="flex justify-center">
                        <div id="winTxt1" className="z-10 absolute top-3 text-white font-bold">
                            You are <span className="text-green-400 italic font-black">correct!</span>
                        </div>
                        <div id="winTxt2" className="z-10 absolute top-14 text-yellow-200">
                            The player is...
                        </div>
                        <div id="winTxt3" className="z-10 absolute text-yellow-400 font-bold leading-tight text-center pb-20">
                            {player}
                        </div>
                        <div id="winTxt4" className="z-10 bottom-32 absolute text-white font-bold text-center">
                            You guessed it in <span className="text-green-400 italic font-black">{guesses.length + 1}</span> tries,<br></br>
                            and used <span className="text-green-400 italic font-black">{hints}</span> hints!
                        </div>
                        <div 
                            onClick={() => setPage('game', game.mode)} 
                            className="againBtn z-10 absolute bottom-12 text-center bg-green-500 text-green-900 font-bold rounded-xl p-2">
                                Play Again
                        </div>
                        <div className="absolute w-full h-full bg-black opacity-90"></div>
                    </div>
                </div>
                :
                <div className="endGameBox absolute w-full">
                    <div className="flex justify-center">
                        <div id="loseTxt1" className="z-10 absolute top-5 text-red-300 font-bold leading-tight">
                            You gave up<br></br>after <span className="text-red-500 italic font-black">{guesses.length}</span> tries.
                        </div>
                        <div id="loseTxt2" className="z-10 absolute top-32 text-yellow-200">
                            The correct player was...
                        </div>
                        <div id="winTxt3" className="z-10 absolute text-yellow-400 font-bold leading-tight text-center">
                            {player}
                        </div>
                        <div 
                            onClick={() => setPage('game', game.mode)} 
                            className="againBtn z-10 absolute bottom-12 text-center bg-green-500 text-green-900 font-bold rounded-xl p-2">
                                Try Again
                        </div>
                        <div className="absolute w-full h-full bg-black opacity-90"></div>
                    </div>
                </div>
            }
        </>
    );
}

export default EndGame;