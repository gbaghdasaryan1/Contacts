import { FC, useMemo } from "react";
import { EditModalContent } from "./EditModalContent";
import { ModalTypeEnum, useModalStore } from "../../store";
import { ContactType } from "../../types";
import { DeleteModalContent } from "./DeleteModalContent";
import { CreateModalContent } from "./CreateModalContent";

export const Modal:FC = () => {

  const {modalType, isOpen, onClose, params} = useModalStore();
  const content = useMemo(() => {

    switch (modalType) {
      case ModalTypeEnum.Edit:
        return <EditModalContent params={params as ContactType}/>
      case ModalTypeEnum.Delete:
        return <DeleteModalContent params={params as ContactType}/>
      case ModalTypeEnum.Create:
        return <CreateModalContent />
    
      default:
        return null
    }
  }, [modalType, params]);

  if(!isOpen) return null


  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-modalBg bg-opacity-50 z-50" 
      onClick={onClose}>
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6"onClick={(event) => {
        event.stopPropagation();
      }} >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        {content}
      </div>
    </div>
  );
};

