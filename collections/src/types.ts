export type SourceJson = {
  name: string;
  i18n: {
    [key: string]: string;
  };
  tags: string[];
  category: string;
  main: {
    type: string;
    model: string;
  }[];
}

export type Wearable = {
  id: WearableId
  type: 'wearable'
  thumbnail: string
  category: string
  image?: string
  replaces?: string[]
  hides?: string[]
  baseUrl: string
  description?: string
  rarity?: string
  i18n: {
    code: string
    text: string
  }[]
  tags: string[]
  representations: BodyShapeRespresentation[]
}
export type WearableId = string

export type BodyShapeRespresentation = {
  bodyShapes: string[]
  mainFile: string
  overrideReplaces?: string[]
  overrideHides?: string[]
  contents: FileAndHash[]
}

export type FileAndHash = {
  file: string
  hash: string
}
