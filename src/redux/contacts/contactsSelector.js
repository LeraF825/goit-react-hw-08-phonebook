export const getContacts = store =>
  store.contacts.contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(store.contacts.filter.toLowerCase());
  });

export const getFiltered = store => store.contacts.filter;