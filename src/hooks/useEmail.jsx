import { useState } from "react";

export default function useEmail() {
    const [email, setEmail] = useState(null);
    return {
        email,
        setEmail
    }
}