import AppHero from './hero/AppHero';
import AppFeatures from './features/AppFeatures';
import AppBlog from './blog/AppBlog';
import AppTestimonials from './testimonials/AppTestimonials';
import AppSidebar from './sidebar/AppSidebar';
import './appMain.css';

const AppMain = () => {
    return (
        <main>
            {/* Hero Section */}
            <AppHero />
            {/* Features Section */}
            <AppFeatures />
            {/* Blog Posts */}
            <AppBlog />
            {/* Testimonials */}
            <AppTestimonials />
            {/* Sidebar/About */}
            <AppSidebar />
        </main>
    )
}

export default AppMain;