import { createFileRoute } from '@tanstack/react-router'
import { ContactDetails } from '../../components/ContactDetails';

export const Route = createFileRoute('/contact/$contactId')({
  component: Contact,
})

function Contact() {
  const {contactId} = Route.useParams();

  return <div><ContactDetails id={contactId}/></div>
}
