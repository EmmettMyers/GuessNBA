import setPage from "..";

const Navbar = (game) => {
    return (
        <div id="navBar" className="w-full bg-red-900 flex justify-between">
            <img 
                id="navLogo" 
                onClick={() => setPage('home')} src="homeLogo.png" 
            />
            <div 
                id="modeTitle" 
                className="pr-4 mt-3 text-white font-bold">
                    {game.mode}
            </div>
        </div>
    );
}

export default Navbar;