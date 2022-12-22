function Home() {
    return (
        <div className='home flex bg-[#252525] w-full h-screen'>

            <div className="nav flex flex-col fixed justify-between items-center w-14 h-full p-8 top-0 left-0 rounded-r-3xl text-xl text-[#f5f5f5] bg-[#313131]">
                <div className="nav-top">
                    <button className="nav-btn fa-solid fa-user"></button>
                    <button className="nav-btn fa-solid fa-house"></button>
                </div>
                    
                <div className="nav-bottom">
                    <button className="nav-btn fa-solid fa-camera-retro"></button>
                    <button className="nav-btn fa-solid fa-gamepad"></button>
                    <button className="nav-btn fa-solid fa-film"></button>
                    <button className="nav-btn fa-solid fa-book"></button>
                    <button className="nav-btn fa-solid fa-earth-america"></button>
                </div>
            </div>
            
            <div className="home-container">
                
            </div>
        </div>
    );
}

export default Home;