import React from 'react'

function ErrorComponet({message}) {
  return (
    <div className="error">
         <h4>{message}</h4>
    </div>
  )
}

export default ErrorComponet