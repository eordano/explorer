import { SceneLoader } from '@babylonjs/core'
import * as Loaders from '@babylonjs/loaders'
import { GLTFFileLoader, GLTFLoaderAnimationStartMode } from '@babylonjs/loaders'
import * as Materials from '@babylonjs/materials'
import { RootState } from 'dcl/kernel/core/types'
import React from 'react'
import { Avatar } from './avatar/Avatar'
import { ScenePreview } from './scenePreview/ScenePreview'
import { getCurrentWorldPosition } from 'dcl/kernel/scene-atlas/02-parcel-sight/selectors'
import { setWorldPosition } from 'dcl/kernel/scene-atlas/01-user-position/actions'
import { Position } from './controls/Position'
import { Atlas } from './atlas/Atlas'

console.log('Imported Loaders and Materials: ', Loaders, Materials)
SceneLoader.OnPluginActivatedObservable.add((loader: any) => {
  const prev = loader.preprocessUrlAsync.bind(loader) || ((_: string) => _)
  loader.preprocessUrlAsync = function(url: string) {
    return prev(url)
  }
  if (loader instanceof GLTFFileLoader) {
    loader.animationStartMode = GLTFLoaderAnimationStartMode.NONE
    loader.compileMaterials = true
    loader.validate = true
    loader.animationStartMode = 0
  }
})

export function Main(props: { state: RootState; dispatch: any }) {
  const { state, dispatch } = props
  const [currentScene, setCurrentScene] = React.useState()
  const positionReport = getCurrentWorldPosition(state)
  const setX = (x: number) => dispatch(setWorldPosition({ ...positionReport.position, x }))
  const setY = (y: number) => dispatch(setWorldPosition({ ...positionReport.position, y }))
  const setZ = (z: number) => dispatch(setWorldPosition({ ...positionReport.position, z }))
  return (
    <div>
      <Avatar {...state} />
      {currentScene !== 'undefined' ? <ScenePreview {...state} currentScene={currentScene} /> : <div />}
      <Position {...positionReport.position} {...{ setX, setY, setZ }}></Position>
      <Atlas {...state} setCurrentScene={setCurrentScene}></Atlas>
    </div>
  )
}
