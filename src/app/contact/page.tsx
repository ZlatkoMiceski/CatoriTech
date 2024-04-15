
import PersistentDrawerLeft from "../components/Nav2";
import ContactForm from "../components/ContactForm";

export default async function ContactPage() {

  const response = await fetch('http://localhost:3000/api/contact', {cache: 'no-store'});
  const data = await response.json();

  return (
    <div>
      <PersistentDrawerLeft>
        <ContactForm />
      </PersistentDrawerLeft>
    </div>
  );
}
