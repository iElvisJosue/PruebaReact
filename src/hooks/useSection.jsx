import { useState } from "react";

export default function useSection() {
    const [section, setSection] = useState("Login");

    return {
        section,
        setSection
    }
}