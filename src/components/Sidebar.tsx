import { Link } from "@tanstack/react-router";
import { FC, useState } from "react";
import { useGetContacts } from "../hooks/useContact";
import { ModalTypeEnum, useModalStore } from "../store";


const Sidebar:FC= () => {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string>("")
  const {data} = useGetContacts()
  const {onOpen} = useModalStore();
  
  const filteredContacts = data?.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="border-r">
     <form className="flex items-center gap-3 p-4 border-b">
     <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-2 border rounded w-full h-10"
      />
      <button 
        type="button"
        className="border h-10 px-2 rounded bg-lightBlue text-white" 
        onClick={() => onOpen(ModalTypeEnum.Create)}>New</button>
     </form>
      <ul>
        {filteredContacts?.map((contact, index) => (
          <li
            key={index}
            onClick={() => setSelectedId(contact.id)}
            className={`flex items-center cursor-pointer ${selectedId === contact.id ? "bg-darkBlue text-white" : ""}`}
          >
            <Link 
              to="/contact/$contactId" 
              params={{contactId: contact.id.toString()}}
              className="w-full p-2">{contact.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
