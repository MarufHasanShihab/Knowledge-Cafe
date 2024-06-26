import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <header className="px-8 py-4 flex justify-between items-center">
            <h1 className="text-4xl font-bold">Knowledge-Cafe</h1>
            <img src={profile}/>
        </header>
    );
};

export default Header;