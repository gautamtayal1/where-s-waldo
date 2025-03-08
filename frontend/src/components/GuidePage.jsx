import React from 'react'

import { useParams } from 'react-router'
import GuideComp from './GuideComp'

const GuidePage = () => {
  const page = useParams()
  const {id} = page
  console.log(id)

  return (
    <div>
      {id == "party" && <GuideComp page="party" />}
      {id == "concert" && <GuideComp page="concert" />}
      {id == "garden" && <GuideComp page="garden" />}
    </div>
  )
}

export default GuidePage