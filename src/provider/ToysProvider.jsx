import React, { useEffect, useState } from 'react';
import { ToysContext } from '../Context/ToysContext';

const ToysProvider = ({ children }) => {

    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true)
    // toys data fetch
    useEffect(() => {
        const fetchToys = async () => {
            const res = await fetch(`/toys.json?v2=${Date.now()}`)
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


    return <ToysContext value={toysData}>
        {children}
    </ToysContext>
};

export default ToysProvider;