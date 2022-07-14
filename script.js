function Header() {
    return(
        <header>
            <nav>
            <img src="react-logo.png" width="100px"/>
            </nav>
        </header>
    )
}

function MainContent() {
    return(
        <div>
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
        <footer>
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



