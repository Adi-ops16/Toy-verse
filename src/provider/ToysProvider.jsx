import React, { createContext, useEffect, useState } from 'react';
export const ToysContext = createContext()
const ToysProvider = ({ children }) => {
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true)
    // toys data fetch
    useEffect(() => {
        const fetchToys = async () => {
            const res = await fetch("/toys.json")
            const toys = await res.json()
            setTimeout(() => {
                setToys(toys)
                setLoading(false)
            }, 2000)
        }
        fetchToys()
    }, [])

    const toysData = {
        toys,
        setToys,
        loading,
        setLoading
    }


    return <ToysContext.Provider value={toysData}>
        {children}
    </ToysContext.Provider>
};

export default ToysProvider;