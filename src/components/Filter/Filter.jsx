import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

export const Filter = ({ text, filterInput }) => (
  <label className={css.labelName}>
    Знайти по імені
    <input type="text" value={text} onChange={filterInput} placeholder="Введіть ім'я" />
  </label>
);

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  filterInput: PropTypes.func.isRequired,
};
