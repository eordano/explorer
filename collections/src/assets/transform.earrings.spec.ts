import { resolve, join } from 'path'
import { mkdirSync, statSync } from 'fs'
import { processAsset } from './processAsset'

describe('sample asset: earrings', () => {
  it('creates an output folder with the expected values', async () => {
    const assetFolder = resolve(__dirname, '..', '..', 'base-avatars', 'earring', 'F_BlueStar')
    const outputFolder = resolve(__dirname, '..', '..', 'tmp')
    try {
      mkdirSync(outputFolder)
    } catch (e) {}

    await processAsset(assetFolder, outputFolder)
    expect(statSync(join(outputFolder, 'AvatarWearables_TX.png'))).toBeTruthy()
  })
})
