import {useRef, useState} from "react";

const Contact = () => {

    const formRef = useRef(null);
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = ({target:{name,value}}) => {
        setForm({...form,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            setForm({
                name: "",
                email: "",
                message: "",
            });

            if (formRef.current) {
                formRef.current.reset();
            }
        }, 1000);
    };

    return (
        <section id="contact" className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col ">
                {/*<img src="/assets/terminal.png" alt="terminal background" className="hidden sm:block absolute inset-0 min-h-screen"/>*/}
                <div className="contact-container">
                    <h3 className="head-text">
                        Let's Talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique
                        project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required
                                   className="field-input" placeholder="Pawan"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required
                                   className="field-input" placeholder="Pawan@gmail.com"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea  name="message" value={form.message} onChange={handleChange} required
                                       rows={5}
                                   className="field-input" placeholder="Hi, I'm interested in ..."/>
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading?"Sending...":"Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
