import { useForm } from "@tanstack/react-form";
import { FC } from "react";
import { useCreateContact } from "../../hooks/useContact";
import { useModalStore } from "../../store";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { contactSchema } from '../../validation'
import { FieldInfo } from "../FieldInfo";

export const CreateModalContent: FC = () => {
    const { mutate } = useCreateContact();
    const { onClose } = useModalStore()

    const form = useForm({
        validatorAdapter: zodValidator(),
        validators: {
            onChange: contactSchema,
        },
        defaultValues: {
            name: "",
            userName: "",
            phone: "",
            profilePicture: `https://random-image-pepebigotes.vercel.app/api/random-image`,
        },
        onSubmit: async ({ value }) => {
            mutate(value, {
                onSuccess: () => {
                    onClose();
                }
            })
        },
    });

    return <form onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
    }}
        className="flex flex-col gap-2">
        <form.Field
            name="name"
            children={(field) => {

                return <>
                    <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value.trim())}
                        className="p-2 border rounded-md"
                        placeholder="Enter name"
                    />
                    <FieldInfo field={field} />
                </>
            }}
        />

        <form.Field
            name="userName"
            children={(field) => {
                return <>
                    <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value.trim())}
                        className="p-2 border rounded-md"
                        placeholder="Enter username"
                    />
                    <FieldInfo field={field} />
                </>
            }}
        />

        <form.Field
            name="phone"
            children={(field) => {

                return <>
                    <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value.trim())}
                        className="p-2 border rounded-md"
                        placeholder="Enter phone number"
                    />
                    <FieldInfo field={field} />
                </>
            }
            }
        />

        <div className="flex gap-2">
            <button className="bg-lightBlue text-white px-3 py-2 rounded-md" >Submit</button>
            <button 
                className="bg-red text-white px-3 py-2 rounded-md" 
                type="reset" 
                onClick={onClose}>Cancle</button>
        </div>
    </form>
}