import React, { useCallback, useState } from "react";

const useInputs = initState => {
    const [input, setInput] = useState(initState);

    // change
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }, []);

    const reset = useCallback(() => {
        setInput(initState);
    }, [initState]);

    return [input, onChange, reset]
};

export default useInputs;
