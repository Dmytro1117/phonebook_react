import { ContactList } from '../../components/ContactList/ContactList';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
import { Section } from '../../components/Section/Section';

export default function Contacts() {
  return (
    <Section title="Ваші контакти:">
      <ContactFilter />
      <ContactList />
    </Section>
  );
}
