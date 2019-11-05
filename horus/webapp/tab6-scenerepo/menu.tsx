import React from 'react'
import { HorusMenu } from '../route/HorusMenu'

export const ScenerepoMenu = (props: { subsection: string; section: string }) => {
  return (
    <HorusMenu
      {...props}
      names={[{ title: 'Scene repo' }, 'Builder Pool', 'Empty parcels']}
    />
  )
}
