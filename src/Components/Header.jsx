import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink tp='/'>Home</NavLink>
            <NavLink tp='/users'>Users</NavLink>
            <NavLink tp='/signup'>SignUp</NavLink>
            <NavLink tp='/'>Home</NavLink>
        </div>
    );
};

export default Header;