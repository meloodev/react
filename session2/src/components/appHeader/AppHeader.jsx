import './appHeader.css';

const AppHeader = () => {
    return (
        <header>
            <div className="logo">
                <h1>DevConnect</h1>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/features">Features</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
            </nav>
        </header>
    )
}

export default AppHeader;