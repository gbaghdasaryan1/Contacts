import { FC } from "react";
import { ContactType } from "../../types";
import { useDeleteContact } from "../../hooks/useContact";
import { useModalStore } from "../../store";
import { useNavigate } from "@tanstack/react-router";

type Props = {
    params: ContactType
}

export const DeleteModalContent: FC<Props> = ({params}) => {
    const {mutate} = useDeleteContact();
    const {onClose} = useModalStore();
    const navigate = useNavigate();

    const handleDeleteContact = () => {
        mutate(params.id, {
            onSuccess: () => {
                onClose();
                navigate({to: "/", replace: true})
            }
        })
    }

    return  <div>
        <h3>Do you want to delete this Contact?</h3>
        <div className="flex gap-2">
            <button className="bg-lightBlue text-white px-3 py-2 rounded-md" onClick={handleDeleteContact}>Submit</button>
            <button className="bg-red text-white px-3 py-2 rounded-md" type="reset" onClick={onClose}>Cancle</button>
        </div>
    </div>
}