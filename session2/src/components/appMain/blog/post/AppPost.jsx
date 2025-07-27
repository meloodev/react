import './appPost.css'

const AppPost = ({ id, title, text, name }) => {
    return (
        <article className="post" id={`post-${id}`}>
            <h3>{title}</h3>
            <p>{text}</p>
            <p>
                <strong>Author:</strong> {name}
            </p>
        </article>
    )
}

export default AppPost;