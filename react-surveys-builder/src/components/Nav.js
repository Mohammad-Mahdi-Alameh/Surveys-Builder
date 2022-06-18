import Logo from "../assets/Logo.png";
function Nav(){
    return (
        <nav className="top-nav container">
            <div>
            <img src={Logo} alt="" />
            <p>Forms</p>
            </div>
            <button class="add-button" id="add">+</button>
        </nav>
        
    );
}


export default Nav;
