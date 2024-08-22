import React from 'react'

function Text({ children }: { children: string }) {
  const message = children.split('\n').map((str, i, array) => {
    return (
      <React.Fragment key={i}>
        {str}
        {i === array.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })

  return <div>{message}</div>
}

export default Text
