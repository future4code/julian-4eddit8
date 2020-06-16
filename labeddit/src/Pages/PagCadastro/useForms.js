import React, { useState } from 'react';

export default function useForms (initialState) {

    const [form, setForm] = useState(initialState)

    const onChangeInput = (event) => {
        const newValue = event.target.value
        const fieldName = event.target.name

        setForm({ ...form, [fieldName]: newValue })

    }

    return [form, onChangeInput]
}