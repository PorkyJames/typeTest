import { useEffect, useState } from "react";

interface User {
    Username: string;
    Email: string;
    Password: string;
}

export default function UserPage() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetch('http://localhost:8080/user')
        .then((res) => res.json())
        .then((data: User) => setUser(data))
        .catch((err) => console.error('Error fetching user:', err));
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div style={{ padding: '20px' }}>
        <h1>User Info</h1>
        <p><strong>Username:</strong> {user.Username}</p>
        <p><strong>Email:</strong> {user.Email}</p>
        </div>
    );
}
