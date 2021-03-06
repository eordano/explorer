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

export const Sections: Section[] = [
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
      }
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

export const mapSections = (Sections
  .map((_) => [_, _.subsections ? [..._.subsections] : []])
  .flat()
  .flat() as Section[]).reduce((prev, next) => {
  prev[next.section] = next
  return prev
}, {} as Record<SectionType, Section>)
