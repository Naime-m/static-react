function Header() {
    return(
        <header>
            <nav className= "nav">
            <img className = "logo" src="react-logo.png" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return(
        <div className="content">
        <h1>Title of my page</h1>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
        </div>
    )
}

function Footer() {
    return(
        <footer className ="footer">
            <p>© 2022 Naime Medjek</p>
        </footer>
    )
}


function Page() {
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page/>,document.getElementById("root"))



