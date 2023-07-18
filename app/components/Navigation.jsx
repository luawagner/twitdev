import Link from "next/link";

const links = [{
  label: "Home",
  route: "/"
}, {
  label: "About",
  route: "/about"
}, {
  label: "Posts",
  route: "/posts"
}]

export function Navigation () {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {links.map(({ label, route}) => (
            <li key={route} className="nav-item">
                <Link href={route} className="nav-link active" aria-current="page">
                    {label}
                </Link>
            </li>
        ))}
             
            
             
            </ul>
          </div>
        </div>
      </nav>
          
                
            
       
    )
}