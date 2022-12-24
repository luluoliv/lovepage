import NavBar from "../NavBar";
import ButtonHome from "./ButtonHome";

function Home() {
    return (
        <div className='home flex bg-[#252525] w-full h-screen'>
            <NavBar />
            <div className="home-container w-full">
                <div className="my-10 mx-20 text-xl text-[#FDE3A8]">
                    <div className="flex flex-row gap-12 my-10">
                        <ButtonHome to={"/photos"} className="fa-solid fa-camera-retro text-3xl" name="Photos" />
                        <ButtonHome to={"/games"} className="fa-solid fa-gamepad text-3xl" name="Games" />
                        <ButtonHome to={"/movies"} className="fa-solid fa-film text-3xl" name="Movies" />
                    </div>
                    <div className="flex flex-row gap-10">
                        <ButtonHome to={"/notes"} className="fa-solid fa-book text-3xl" name="Notes" />
                        <ButtonHome to={"/places"} className="fa-solid fa-earth-america text-3xl" name="Places" />
                        <ButtonHome to={"/home"} className="fa-solid fa-headphones text-3xl" name="Soon" />
                    </div>
                </div>
                <div className="m-auto my-10 bg-[#f5f5f5] w-11/12 h-0.5"></div>
                <div className=""></div>
            </div>
        </div>
    );
}

export default Home;