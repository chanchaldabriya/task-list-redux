import React, { useState } from 'react';

export default function(initialValue) {
    const [state, setState] = useState(initialValue);
    const setValue = e => {
        setState(e.target.value);
    };
    const reset = () => {
        setState(initialValue);
    }

    return [state, setValue, reset];
}