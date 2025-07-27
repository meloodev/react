import './appTestimonials.css'

const AppTestimonials = () => {
    return (
        <section className="testimonials">
            <h2>What Developers Say</h2>


            <div className="testimonial">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
                    alt="User 1"
                />
                <blockquote>
                    "DevConnect helped me land my first remote React job!"
                </blockquote>
                <p>- Alex Frontend</p>
            </div>


            <div className="testimonial">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
                    alt="User 2"
                />
                <blockquote>
                    "The tutorials and challenges here are better than most courses
                    I've paid for."
                </blockquote>
                <p>- Maria JS</p>
            </div>
        </section>
    )
}

export default AppTestimonials;