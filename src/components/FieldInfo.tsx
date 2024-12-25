/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldApi } from "@tanstack/react-form"
import { FC } from "react"

type Props = {
    field: FieldApi<any, any, any, any>
}

export const FieldInfo:FC<Props> = ({ field }) => {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <span>{field.state.meta.errors.join(',')}</span>
            ) : null}
            {field.state.meta.isValidating ? 'Validating...' : null}
        </>
    )
}
