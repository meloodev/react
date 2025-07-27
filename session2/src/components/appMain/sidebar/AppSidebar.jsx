import './appSidebar.css'

const AppSidebar = () => {
    return (
        <aside className="sidebar">
            <h2>About DevConnect</h2>
            <img
                src="https://avatars.githubusercontent.com/u/98865593?s=280&v=4"
                alt="DevConnect Logo"
            />
            <p>We are a global platform built for developers, by developers.</p>
            <p>
                Join our mission to make tech education and networking accessible to
                everyone.
            </p>
        </aside>
    )
}

export default AppSidebar;