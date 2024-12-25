import { FC } from "react";
import { useGetOneContact } from "../hooks/useContact";
import { ModalTypeEnum, useModalStore } from "../store";

type Props = {
    id: string;
}

export const ContactDetails: FC<Props> = ({ id }) => {
    const { data, isPending } = useGetOneContact(id);
    const { onOpen } = useModalStore();

    if (isPending) return <h3>Loading...</h3>

    return <div className="flex gap-5 p-4">
        <img
            src={data?.profilePicture}
            alt={data?.name}
            className="rounded-lg w-36 h-36 object-cover"
        />
        <div className="flex flex-col gap-1">
            <p className="text-2xl font-semibold">{data?.name}</p>
            <p className="text-lightBlue">{data?.userName}</p>
            <p>{data?.phone}</p>

            <div className="flex gap-2">
                <button
                    className="text-lightBlue px-5 py-2 shadow-md hover:shadow-sm transition"
                    onClick={() => onOpen(ModalTypeEnum.Edit, data)} >Edit</button>
                <button
                    className=" text-red px-5 py-2 shadow-md  hover:shadow-sm transition"
                    onClick={() => onOpen(ModalTypeEnum.Delete, data)}>Delete</button>
            </div>
        </div>
    </div>
}