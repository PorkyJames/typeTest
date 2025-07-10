"use client"

//! Styling 
import "./Dashboard.css"
import { FaUserCircle } from 'react-icons/fa';

//! Imports
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();

    const goToLogin = () => {
        router.push("/login")
    }

    return (
        <>
            <div className='login-icon' onClick={goToLogin}>
                <FaUserCircle />
            </div>
        </>
    )
}
