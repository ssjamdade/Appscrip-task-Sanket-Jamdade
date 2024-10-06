
const Navbar = () => {
    return (
        <nav>
            <header>

                <div className="strip">Lorem ipsum dolor</div>

                <div className='title'>
                    <div className="symbol">
                        <img className="hamburgur" src="/hamburgur.svg" alt="Hamburgur" />
                        <img className="logo" src="/logo.svg" alt="Logo" />
                    </div>
                    <div className="head1">LOGO</div>
                    <div className="icons">
                        <div className="svgs">
                            <img src="/search.svg" alt="Search" />
                            <img src="/heart.svg" alt="Search" />
                            <img src="/bag.svg" alt="Search" />
                            <img className="profile" src="/profile.svg" alt="Search" />
                            <div className="lang">

                                <span>ENG </span>
                                <img src="/downarrow.svg" alt="Down arrow" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tags">
                    <span>SHOP</span>
                    <span>SKILLS</span>
                    <span>STORIES</span>
                    <span>ABOUT</span>
                    <span>CONTACT US</span>
                </div>
            </header>
            <div className="toggle">
                <span className="home">HOME | </span>
                <span>SHOP</span>
            </div>
        </nav>
    )
}

export default Navbar
