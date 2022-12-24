import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav flex flex-col justify-between items-center w-14 h-full p-8 rounded-r-3xl text-2xl text-[#FDE3A8] bg-[#313131]">
            
            <div className="nav-top flex flex-col gap-9 justify-between items-center">
                <button className="nav-btn hover:text-[#f5f5f5] fa-solid fa-user"></button>
                <Link to={"/home"}>
                    <button className="nav-btn hover:text-[#f5f5f5] fa-solid fa-house"></button>
                </Link>
            </div>

            <div className="nav-bottom flex flex-col gap-9 justify-between items-center">
                <Link to={"/photos"}>
                    <button className="nav-btn hover:text-[#f5f5f5] fa-solid fa-camera-retro"></button>
                </Link>
                <Link to={"/games"}>
                    <button className="nav-btn hover:text-[#f5f5f5] fa-solid fa-gamepad"></button>
                </Link>
                <Link to={"/movies"}>
                    <button className="nav-btn hover:text-[#f5f5f5] fa-solid fa-film"></button>
                </Link>
                <Link to={"/notes"}>
                    <button className="nav-btn hover:text-[#f5f5f5] fa-solid fa-book"></button>
                </Link>
                <Link to={"/places"}>
                    <button className="nav-btn hover:text-[#f5f5f5] fa-solid fa-earth-america"></button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;