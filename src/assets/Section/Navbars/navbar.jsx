import "./Navbar.css"
export function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="" alt="" />
            <a className="navbar-brand" href="#">
                BMW</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link active" href="#">Modeller</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">%100 Elektrikli Modeller</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tasarlayın ve Rezerve Edin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Online Hizmetler</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">BMW'yi keşfedin</a>
                    </li>              
             
                </ul>
            </div>
</nav>
    );
}