import { SectionType } from './store'

export type Section = {
  section: SectionType
  logo: string
  active?: boolean
  cantselect?: boolean
  component?: Function
  subsections?: Subsection[]
}

type Subsection = Section

export const sidebar: Section[] = [
  {
    section: 'Explorer',
    cantselect: true,
    logo: '🗺',
    subsections: [
      {
        section: 'Status',
        logo: '🌎',
      },
      {
        section: 'Networking',
        logo: '📡',
      },
    ],
  },
  {
    section: 'Scenes',
    cantselect: true,
    logo: '🌆',
    subsections: [
      {
        section: 'Map',
        logo: '🗺',
      },
      {
        section: 'Running scenes',
        logo: '👟',
      },
      {
        section: 'ECS State',
        logo: '⏯',
      },
      {
        section: 'Messages',
        logo: '📨',
      },
    ],
  },
  {
    section: 'Renderer',
    cantselect: true,
    logo: '📽',
    subsections: [
      {
        section: 'Incoming',
        logo: '📥',
      },
      {
        section: 'Outgoing',
        logo: '📤',
      },
    ],
  },
]

export const mapSections = (sidebar
  .map((_) => [_, _.subsections ? [..._.subsections] : []])
  .flat()
  .flat() as Section[]).reduce((prev, next) => {
  prev[next.section] = next
  return prev
}, {} as Record<SectionType, Section>)

console.log(mapSections)
