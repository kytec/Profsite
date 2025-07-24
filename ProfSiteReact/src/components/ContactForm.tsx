import './ContactForm.css';

const ContactForm = () => (
  <form className="contact-form">
    <label htmlFor="contact-person">Contact Person</label>
    <input type="text" id="contact-person" name="contact-person" placeholder="Enter contact person name" required />

    <label htmlFor="email">Email Address</label>
    <input type="email" id="email" name="email" placeholder="example@example.com" required />

    <label htmlFor="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone" placeholder="Please enter a valid phone number" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" rows={5} placeholder="How can we help you?"></textarea>

    <button type="submit" className="cta-btn">Send Message</button>
  </form>
);

export default ContactForm; 