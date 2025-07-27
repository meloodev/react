import AppPost from './post/AppPost'
import './appBlog.css'

const posts = [
    {
        id: 1,
        title: 'Mastering React Components',
        text: 'Components are the heart of React apps. Learn how to structure, style, and optimize them.',
        name: 'Sarah Dev'
    },
    {
        id: 2,
        title: 'Using Props Like a Pro',
        text: 'Make your React components reusable and dynamic with props and destructuring.',
        name: 'John Code'
    },
    {
        id: 3,
        title: 'Understanding State and Effects',
        text: 'Learn the fundamentals of useState and useEffect with real-life examples.',
        name: 'Lina Hooks'
    }
];

const AppBlog = () => {
    return (
        <section className="blog">
            <h2>Latest Articles</h2>

            {posts.map(({ id, title, text, name }) => (
                <AppPost
                    key={id}
                    title={title}
                    text={text}
                    name={name}

                />
            ))}
        </section>
    )
}

export default AppBlog;