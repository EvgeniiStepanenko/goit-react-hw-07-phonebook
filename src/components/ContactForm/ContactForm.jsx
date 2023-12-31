import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactForm = evt.target;

    const contact = {
      name: contactForm.elements.name.value,
      phone: contactForm.elements.number.value,
    };

    dispatch(addContact(contact));
    contactForm.reset();
  };

  return (
    <>
      <form className={css.formstyle} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <br />
          <input
            className={css.input}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={css.label}>
          Number
          <br />
          <input
            className={css.input}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
