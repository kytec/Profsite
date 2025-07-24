import ContactForm from '../components/ContactForm';

const Contact = () => (
  <section className="contact-section">
    <div className="container">
      <h2>Contact Us</h2>
      <div className="contact-flex">
        <ContactForm />
        <div className="contact-info">
          <h3>Company Contact Info</h3>
          <p><strong>Email:</strong> example@example.com</p>
          <p><strong>Phone:</strong> Please enter a valid phone number</p>
          <p><strong>Address:</strong> [Company Address]</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 