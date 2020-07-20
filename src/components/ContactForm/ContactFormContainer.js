//redux
import { connect } from "react-redux";

import ContactForm from "./ContactForm";

import { contactsOperation, contactsSelectors } from "../../redux/contacts";



const mapState = (state) => {
  const contacts = contactsSelectors.getItems(state);
  return { ...contacts }
}

const mapDispatchToProps = {
  onAddContact: contactsOperation.addContacts,
}

export default connect(mapState, mapDispatchToProps)(ContactForm);

