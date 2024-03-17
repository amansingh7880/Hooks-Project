import React, { memo, useState } from 'react'
import ChildsB from './ChildsB'
function ChildsA() {
  return (
    <div>
      <ChildsB/>
    </div>
  )
}

export default memo(ChildsA)