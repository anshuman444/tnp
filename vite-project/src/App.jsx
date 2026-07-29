import React from 'react'
import Greeting from './Greeting'
import StudentCard from './StudentCard'

export default function App() {
    return (
        <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
            <h1>React components Demo</h1>
            <Greeting />

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 12,
                    marginTop: 16,
                }}
            >
                <StudentCard name="Aniket" course="MERN Stack" image="https://picsum.photos/seed/aniket/400/200" />

                <StudentCard name="Rahul" course="Java Full Stack" image="https://picsum.photos/seed/rahul/400/200" />

                <StudentCard name="Aditya" course="Data Science" image="https://picsum.photos/seed/aditya/400/200" />

                <StudentCard
                    name="Ansuman Dash"
                    course="TNP"
                    roll="24cseaiml059"
                    subject="TNP"
                    image="https://picsum.photos/seed/ansuman/400/200"
                />
            </div>
        </div>
    )
}