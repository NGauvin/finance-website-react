import "./Contact.css";
import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const form = event.target;
        const formData = new FormData(form);
        formData.append("access_key", "7aae9964-dd62-4c5d-93c7-9391861b3161");
        formData.append("subject", "Contact from The Art of Finance");
        formData.append("from_name", "The Art of Finance");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent! I will get back to you soon.");
                toast.success("Thanks for reaching out!");
                form.reset();
                setTimeout(()=>{setResult("");}, 3000);
            } else {
                setResult("Something went wrong. Please try again.");
                toast.error("Your message could not be sent.");
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
            toast.error("Your message could not be sent.");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <Toaster position="bottom-center" />
            <div className="container">
                <div className="contact-header">
                    <span className="section-badge">CONTACT</span>
                    <h2>Contact Me</h2>
                    <p>Questions about a module or ideas for the site? Send me a message.</p>
                </div>

                <form onSubmit={onSubmit}>
                    <p>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" placeholder="First and last" required minLength="2" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" required />
                    </p>
                    <p>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required minLength="10"></textarea>
                    </p>
                    <div className="form-actions">
                        <button type="submit" className="btn btn-gold">Send Message</button>
                        <p className="result">{result}</p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
