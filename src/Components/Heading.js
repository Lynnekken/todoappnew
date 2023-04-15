import React, { useState } from 'react'


function Heading({title, newClass}) {

  const [headerText, setHeaderText] = useState ("");
  return (
<div>
    <input value={headerText} onChange={(e) => setHeaderText(e.target.value)}/>
    <h1 className={newClass}>{title}</h1> 
    {/* //mit heading title = xy kann das abgerufen werden
    // mit newClass = xy kann eine neue Klasse definiert werden, für separates Styling */}
    </div>
  )
}

export default Heading