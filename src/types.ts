export type ContactType = {
  id: string
  name: string
  userName: string
  phone: string
  profilePicture: string;
}
export type NewContactType = Omit<ContactType, "id">