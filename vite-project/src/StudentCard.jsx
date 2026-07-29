import React from 'react'

function StudentCard({ name, course, roll, subject, image }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
      {image && (
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: 'auto', borderRadius: 6, marginBottom: 8 }}
        />
      )}
      <h2 style={{ margin: '6px 0' }}>{name}</h2>
      <p style={{ margin: '4px 0' }}>
        <strong>Course:</strong> {course}
      </p>
      {roll && (
        <p style={{ margin: '4px 0' }}>
          <strong>Roll:</strong> {roll}
        </p>
      )}
      {subject && (
        <p style={{ margin: '4px 0' }}>
          <strong>Subject:</strong> {subject}
        </p>
      )}
    </div>
  )
}

export default StudentCard
