import Styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav className={Styles.nav}>
            <ul className={Styles.navlist}>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
        </nav>
    )
}
export default Navbar