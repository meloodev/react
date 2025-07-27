import Feature from './features-post/Feature';
import './appFeatures.css'

const featurePosts = [
    {
        id: 1,
        title: 'Community Driven',
        text: 'Get support, share tips, and build together with thousands of developers.'
    },
    {
        id: 2,
        title: 'Learning Resources',
        text: 'Access curated tutorials, challenges, and projects to boost your skills.'
    },
    {
        id: 3,
        title: 'Job Board',
        text: 'Explore developer jobs and freelance gigs tailored to your stack.'
    }
];

const AppFeatures = () => {
    return (
        <section className="features">
            <h2>Why Choose Us?</h2>

            {featurePosts.map(({ title, text, id }) => (
                <Feature key={id}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </Feature>
            ))}
        </section>
    )
}

export default AppFeatures;