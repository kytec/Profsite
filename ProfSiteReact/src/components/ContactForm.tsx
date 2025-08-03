import './ContactForm.css';

const ContactForm = () => (
  <form className="contact-form">
    <input type="text" id="contact-person" name="contact-person" placeholder="Your Name" required />
    <input type="email" id="email" name="email" placeholder="Your Email" required />
    <input type="tel" id="phone" name="phone" placeholder="Your Phone" required />
    {/* <input type="datetime-local" id="datetime" name="datetime" placeholder="Date/Time" /> */}
    <textarea id="message" name="message" rows={4} placeholder="Message (Optional)"></textarea>
    <button type="submit" className="cta-btn">Send Message</button>
  </form>
);

export default ContactForm; 