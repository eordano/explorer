import { Wearable } from '../types'

export type IndexedCatalog = Record<string, Wearable>

const raw: Array<{ id: string; wearables: Wearable[] }> = [
  {
    id: 'base-avatars',
    wearables: [
      {
        id: 'dcl://base-avatars/BaseFemale',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'BaseFemale.glb',
            contents: [
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'BaseFemale.glb', hash: 'QmbUTiTiq2yFob8ekoqZ1VyhHnAVnj6v4EaL7RZCgPeD4V' },
              { file: 'Brows_00.png', hash: 'QmUisLcARDLsqizgg1ryUEd4JWhxez8ieh7JVjUo7BT8Em' },
              { file: 'Eyes_00.png', hash: 'QmcGyxo3ctfJ8Y8QBjoP7UvfDYFEyGgSdQ5kPhHwo3Tzkt' },
              { file: 'Mouth_00.png', hash: 'QmSpExz2AUR3Dd9kAJL6iUbkefxEGXg8GPPdRxc33az6AU' }
            ]
          }
        ],
        type: 'wearable',
        category: 'body_shape',
        tags: ['body', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Woman' },
          { code: 'es', text: 'Mujer' }
        ],
        thumbnail: 'QmQo9oNMzYTDdcGTixkioFdb4ArrB42ZgrHVGNua36gXpn',
        image: ''
      },
      {
        id: 'dcl://base-avatars/BaseMale',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'BaseMale.glb',
            contents: [
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'BaseMale.glb', hash: 'QmRhw6iFmT1r8KTbComWMKFLPxf7pFZqFwKrEY1Az2whZ8' },
              { file: 'EyeBrows_00.png', hash: 'QmP4823KZpn5d5iAEwXJyGTZy19HriJsJYkCJ22ERmpFMa' },
              { file: 'Eyes_00.png', hash: 'QmUYEYptrfbtvAr53C4X3ReAtYYuQsuN41dB5D5cfuLxkh' },
              { file: 'Mouth_00.png', hash: 'QmTZXe8CyZWCfV9KvjKx6LpYwDXAzCeRCozoZRuRUth7qP' }
            ]
          }
        ],
        type: 'wearable',
        category: 'body_shape',
        tags: ['body', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Man' },
          { code: 'es', text: 'Hombre' }
        ],
        thumbnail: 'QmbEoKs839SoKDSHF9tkgc3S6ge777ywU9X85W8K42WePu',
        image: ''
      },
      {
        id: 'dcl://base-avatars/blue_star_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_BlueStar.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_BlueStar.glb', hash: 'QmRH8R6EcnmpkwZkuDp92nspsVZy4SHmAhnktYMr9yiW1s' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Blue Star Earring' },
          { code: 'es', text: 'Aro Azul con Forma de Estrella' }
        ],
        thumbnail: 'QmeGtEgb9XkachCtGJ1PP2XhxFdh946Lfdfcz3XttYWy5n',
        image: ''
      },
      {
        id: 'dcl://base-avatars/green_feather_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Earring_GreenFeather.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Earring_GreenFeather.glb', hash: 'QmT2nsJ2Ru4QiJ7ZgWmdMxuCD8hFFDCb9aj6Cp4aWR552y' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Green Feather Earring' },
          { code: 'es', text: 'Aro de Pluma Verde' }
        ],
        thumbnail: 'Qmen8Ag1sybXsF7G6s9cbWgQPQJ6dGbjZxGftdXpxdXuWg',
        image: ''
      },
      {
        id: 'dcl://base-avatars/square_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Earring_SquareEarring.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Earring_SquareEarring.glb', hash: 'QmZV6kdpqzGrVC74Lav1zUgPGY5qMTjM3EdsfTSsFJ7Jkz' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Square Earring' },
          { code: 'es', text: 'Aro Cuadrado' }
        ],
        thumbnail: 'Qme7v7zUQqaK2KxHLRr9hhdvjM9YMJcPu3khAxLECxtT92',
        image: ''
      },
      {
        id: 'dcl://base-avatars/pink_gem_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_PInkGem.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_PInkGem.glb', hash: 'QmaoFHchzxGNGCpYuJiLwPfT7ttC9J8RL98n4amxSgUTJN' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Pink Gem Earrings' },
          { code: 'es', text: 'Pendientes de Gema Rosa' }
        ],
        thumbnail: 'Qmej61PRfY4ZtHpwWTQkGKqdVwoNxpTa2aryES5v1kuZWd',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_skull_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_Skull.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_Skull.glb', hash: 'QmVNoT6xiPrWQ8LdTQ53JFSDWMqckRKxk5Mv42BfvGGAeQ' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Skull Earring' },
          { code: 'es', text: 'Pendiente de Calavera' }
        ],
        thumbnail: 'QmNiDpusFKEQM9UPQRYY9vnjhsRdqhk9ZF6JSjCRwQND3S',
        image: ''
      },
      {
        id: 'dcl://base-avatars/thunder_02_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_Thunder.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_Thunder.glb', hash: 'QmadRF5x2aBzzY5y2ikZKh18joNFbjr6JCAECjDYx3HwR5' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Thunder Earrings' },
          { code: 'es', text: 'Pendientes con Forma de Rayos' }
        ],
        thumbnail: 'QmUjaceDvC8tSPT9zzcEgWmP6CJmddyfk5u4DFTMhVufL2',
        image: ''
      },
      {
        id: 'dcl://base-avatars/punk_piercing',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'F_Earrings_PunkPiercing.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_PunkPiercing.glb', hash: 'QmYmKo1kRCf3mn6e4v8CZ1oACkkiL4GBD8iWzUu9oiPC9m' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_PunkPiercing.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_PunkPiercing.glb', hash: 'QmYmKo1kRCf3mn6e4v8CZ1oACkkiL4GBD8iWzUu9oiPC9m' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Punk Piercing' },
          { code: 'es', text: 'Piercing Punk' }
        ],
        thumbnail: 'QmSyNq1dtKdGY21NP75hHQ2UmeCdHYwbx2hZVyE9nPbtLi',
        image: ''
      },
      {
        id: 'dcl://base-avatars/golden_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'RightGoldEarring_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'RightGoldEarring_01.glb', hash: 'QmaHyd4y5iE4hjVZ9ZL5fUCjhuKsMLR35231UvizW8j9Wd' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'RightGoldEarring_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'RightGoldEarring_01.glb', hash: 'QmaHyd4y5iE4hjVZ9ZL5fUCjhuKsMLR35231UvizW8j9Wd' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Golden Earring' },
          { code: 'es', text: 'Aro Dorado' }
        ],
        thumbnail: 'QmXfxp77bePhM2EHcneMCU5RCVk5r41PXQcYepXCfP7VFB',
        image: ''
      },
      {
        id: 'dcl://base-avatars/Thunder_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'F_Earrings_ThunderRight.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_ThunderRight.glb', hash: 'QmS4n1VQb2r8yJHqLiwtek7DHqKRw1usXukE61L9MRhttG' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_ThunderRight.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_ThunderRight.glb', hash: 'QmS4n1VQb2r8yJHqLiwtek7DHqKRw1usXukE61L9MRhttG' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Thunder Right Earring' },
          { code: 'es', text: 'Aro con Forma de Rayo' }
        ],
        thumbnail: 'QmWz3Kucd25izeexM9VemszMXHRAEEeyPykj61kdzo3DiM',
        image: ''
      },
      {
        id: 'dcl://base-avatars/toruspiercing',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'TorusPiercing.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'TorusPiercing.glb', hash: 'QmQtDiwnqKDUHt3ucaydSP3Qhe2TBPPX9Yo16ibJSwf5qn' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'TorusPiercing.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'TorusPiercing.glb', hash: 'QmQtDiwnqKDUHt3ucaydSP3Qhe2TBPPX9Yo16ibJSwf5qn' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Torus Piercing' },
          { code: 'es', text: 'Torus Piercing' }
        ],
        thumbnail: 'Qma4HiW1UBP1tTudMyBKJJNz3N3XmM5ZCMnCjiGaRmD8Fp',
        image: ''
      },
      {
        id: 'dcl://base-avatars/triple_ring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Earrings_TripleRing.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Earrings_TripleRing.glb', hash: 'QmSB37TLGwQMyFQTHTLxar6CtfjiAVRRqKhXcK3eumiWkG' }
            ]
          },
          {
            bodyShapes: ['Basefemale'],
            mainFile: 'M_Earrings_TripleRing.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Earrings_TripleRing.glb', hash: 'QmSB37TLGwQMyFQTHTLxar6CtfjiAVRRqKhXcK3eumiWkG' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'male', 'man', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Triple Ring' },
          { code: 'es', text: 'Tres Pendientes' }
        ],
        thumbnail: 'QmVoDbDLdvEAYUn1AFkFv4bvoYPF6z2vEdhVD245aP6dXg',
        image: ''
      },
      {
        id: 'dcl://base-avatars/pearls_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_Pearls.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_Pearls.glb', hash: 'Qmer11fsTB4KcwQ4L7txZLBx3GBzp8GukHy2fP9TcAZCuo' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Pearls Earrings' },
          { code: 'es', text: 'Pendientes de Perlas' }
        ],
        thumbnail: 'QmQgqjpbmeZdw7o2TjidcQcUyYk7x6mcWJeu4h3QNfokLC',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyebrows_00',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyebrows_00.png',
            contents: [{ file: 'F_Eyebrows_00.png', hash: 'QmXqPxhpVaNx7KfiWDjBoufQK28373nbZhNqWbKSwcGwUr' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'Female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_EyeBrows_00' },
          { code: 'es', text: 'f_EyeBrows_00' }
        ],
        thumbnail: 'QmWf7zZJhJoDhN45uJZVXw2bExuarbXnskrepxWdTtDBwW',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyebrows_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyebrows_01.png',
            contents: [{ file: 'F_Eyebrows_01.png', hash: 'QmVbxn91ZRByw9u5jRSuxzs6wrdnLhMqiTX7LXH27CEngb' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'Female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_EyeBrows_01' },
          { code: 'es', text: 'f_EyeBrows_01' }
        ],
        thumbnail: 'QmV2fzgVkpWuMo8W4UWRbBume6u3BoNMdZJRUXYfWfj2pt',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyebrows_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyebrows_02.png',
            contents: [{ file: 'F_Eyebrows_02.png', hash: 'QmNM7wkfpUDULNJ7FC8AGua7b9hNnUtw9zMR676bt57v6J' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'Female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_EyeBrows_02' },
          { code: 'es', text: 'f_EyeBrows_02' }
        ],
        thumbnail: 'QmQZ8Xb6TTPyo9m9JVDd7NE1P31kWrX5kM2PvR3HiqL2Fd',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyebrows_03',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyebrows_03.png',
            contents: [{ file: 'F_Eyebrows_03.png', hash: 'QmQErsfExFULBqSAnp4csu11ZzBDrubLTyazpnEUSGxnKi' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'Female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_EyeBrows_03' },
          { code: 'es', text: 'f_EyeBrows_03' }
        ],
        thumbnail: 'QmeW6fbyeC8pYps1Fv5x1zszZ2WGojm5Mq8u7bG36gFu31',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyebrows_04',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyebrows_04.png',
            contents: [{ file: 'F_Eyebrows_04.png', hash: 'QmPMh5FgJQGRqyoYrgLeBxX7tF4jKsZ1mZct7bKynzyuoo' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'Female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_EyeBrows_04' },
          { code: 'es', text: 'f_EyeBrows_04' }
        ],
        thumbnail: 'Qmas4AaiSXPaemCwMDrohbrdFF3YLNCfgUUMitMm9nhmZJ',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyebrows_05',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyebrows_05.png',
            contents: [{ file: 'F_Eyebrows_05.png', hash: 'QmQLA3rK18r2yxKjtGT5stCUN8gCLwsEQPawszxzC24hPV' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'Female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_EyeBrows_05' },
          { code: 'es', text: 'f_EyeBrows_05' }
        ],
        thumbnail: 'QmQgT6kW3fV8nT8MRg6E4HkRgbSsvEXX9ZwBLiNeRpdC1j',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyebrows_06',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyebrows_06.png',
            contents: [{ file: 'F_Eyebrows_06.png', hash: 'QmdhHxosuViop4i85K2wYDcv1Pyu5uYEw5tndX1HagtxVs' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'Female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_EyeBrows_06' },
          { code: 'es', text: 'f_EyeBrows_06' }
        ],
        thumbnail: 'QmPnWAuuqgRn8aDne1o1XRBUBdNBcZueLVK5m2PANRFWL1',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyebrows_07',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyebrows_07.png',
            contents: [{ file: 'F_Eyebrows_07.png', hash: 'QmbZt4ucT5r2tMzFmJAw3dEBoRm7LarzAr3VeNiFFsTfhU' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'Female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_EyeBrows_07' },
          { code: 'es', text: 'f_EyeBrows_07' }
        ],
        thumbnail: 'Qmb1Q5G5e5amN6CE3oRW43QzCf27kAHaDERQtrFAkoowEz',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyebrows_00',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_EyeBrows_00.png',
            contents: [{ file: 'M_EyeBrows_00.png', hash: 'QmZWwUgq6UYJLCgtPbzVdhThkPTNPHqezWiQKw7Lg3yqKV' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'EyeBrows_00' },
          { code: 'es', text: 'EyeBrows_00' }
        ],
        thumbnail: 'QmYmTRhaTHM9W5aEWbrrS9ixLQq7iDCHp18Jbm3xKs3nat',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyebrows_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_EyeBrows_01.png',
            contents: [{ file: 'M_EyeBrows_01.png', hash: 'QmbWE3gyKGdm6kQUxxSzF1rBky9UBAx2Kt686QcuVdTgWM' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'EyeBrows_01' },
          { code: 'es', text: 'EyeBrows_01' }
        ],
        thumbnail: 'QmP9Wb8f6ZxseRD7e1T8XcUHbyNuMkk3ZTMQsjoduJAs5C',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyebrows_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_EyeBrows_02.png',
            contents: [{ file: 'M_EyeBrows_02.png', hash: 'QmaPGCFTsiAPGYkhmDbTcxvM5SyqWyhHraPJ65Rzfp4dWi' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'EyeBrows_02' },
          { code: 'es', text: 'EyeBrows_02' }
        ],
        thumbnail: 'QmV8Rg6ZhLdKdzvmhFsSNnPpUcBNJcUVYMa3g8MbTUG4zr',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyebrows_03',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_EyeBrows_03.png',
            contents: [{ file: 'M_EyeBrows_03.png', hash: 'QmYsSia1G9PyFgkR6N72JmxrNYQxqa5UHc6Arp6TiqGynn' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'EyeBrows_03' },
          { code: 'es', text: 'EyeBrows_03' }
        ],
        thumbnail: 'QmU3zbEJu73Dmje6W5NyrTRwwQ6oLHdnfDS1dbL38iGFX5',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyebrows_04',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_EyeBrows_04.png',
            contents: [{ file: 'M_EyeBrows_04.png', hash: 'QmenmqyYDRAyg1P5jZmr8wfFmtsodjfDvzWsVrGM7mBw7f' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'EyeBrows_04' },
          { code: 'es', text: 'EyeBrows_04' }
        ],
        thumbnail: 'QmeyjCMSGXJJ8C4ZeZN5cePhSenn4pEu7RHe7kgUDBJ4Di',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyebrows_05',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_EyeBrows_05.png',
            contents: [{ file: 'M_EyeBrows_05.png', hash: 'QmfYm4Jpjcv5MyBZMAa9LozxDtoegSLYrCAT3HBfFLiMC6' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'EyeBrows_05' },
          { code: 'es', text: 'EyeBrows_05' }
        ],
        thumbnail: 'QmVssjA1W3zL7WQHEuLfG1W8mj16rAmzeP9QZc74FX92t4',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyebrows_06',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_EyeBrows_06.png',
            contents: [{ file: 'M_EyeBrows_06.png', hash: 'QmWvSyafpKiT32YBkhe4kDz3SvJvuUKxJJGx43AAGoh1KT' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'EyeBrows_06' },
          { code: 'es', text: 'EyeBrows_06' }
        ],
        thumbnail: 'QmQ32NaNyjCj1wBDfUZbpb2RQMbpVpaTkQ22hX7Ff7qTfh',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyebrows_07',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_EyeBrows_07.png',
            contents: [{ file: 'M_EyeBrows_07.png', hash: 'QmZGhEFGs2dBhwE1aAcA831d8nPYQZ6AkH3E1dcCWeWf86' }]
          }
        ],
        type: 'wearable',
        category: 'eyebrows',
        tags: ['face', 'eyebrows', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'EyeBrows_07' },
          { code: 'es', text: 'EyeBrows_07' }
        ],
        thumbnail: 'Qmc6f92JP52CReeFHW28WKfzNPP9iqFMLqtK9MXsiABneU',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_00',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_00.png',
            contents: [{ file: 'F_Eyes_00.png', hash: 'QmPt59PBdQkYZw9A7KRHx8hBbUSXkWfXmxEATvnDavJ7gR' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_00' },
          { code: 'es', text: 'f_Eyes_00' }
        ],
        thumbnail: 'Qme5gw36VyXLvEQxJmEAY8vp4cQ3z1hoaqzwh8wQV8pBKF',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_01.png',
            contents: [
              { file: 'F_Eyes_01.png', hash: 'Qmbar9bThqMwjzN6LD7KhtSJshMp6ACAVXC3cgLjnoBBin' },
              { file: 'F_Eyes_01_Mask.png', hash: 'QmWMR45paAvZtYvCTVvt296NBXsHDvcc54pURbqu2qMKje' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_01' },
          { code: 'es', text: 'f_Eyes_01' }
        ],
        thumbnail: 'QmPGPaujnDyCMESAp1XxxKgKbQgpgXcDvY77hP3hqZJEcu',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_02.png',
            contents: [
              { file: 'F_Eyes_02.png', hash: 'QmbiVLgN11AaMuGW8Lu3747gwqxpU8wwuuGdWc32vUBeRP' },
              { file: 'F_Eyes_02_Mask.png', hash: 'QmQj2Nt8s2YNizcb6kmdFCZR7Dao9sDW7te3jXY9xyjSDa' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_02' },
          { code: 'es', text: 'f_Eyes_02' }
        ],
        thumbnail: 'QmdJBnz8YGu3Gh8vejXao1xSCvBnpRBLwTFxVENR1s84mo',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_03',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_03.png',
            contents: [{ file: 'F_Eyes_03.png', hash: 'QmRAymNrDWZ6udwMiEayNZgR623kLHiaKjYCV6wUtBeb3T' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_03' },
          { code: 'es', text: 'f_Eyes_03' }
        ],
        thumbnail: 'QmNNaHcj5MTHaU4EbZY25JGoiiS5BnLhhLXWtqySgh9dFY',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_04',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_04.png',
            contents: [
              { file: 'F_Eyes_04.png', hash: 'QmW86GNt8Khf2Zpq2J584eEz4WqQjpoXCQ5cWyNAFxAW3k' },
              { file: 'F_Eyes_04_Mask.png', hash: 'QmW4f5g2geLPRUSp3hBh6CRhG3NSmXLCY62xiUKqvL8cX6' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_04' },
          { code: 'es', text: 'f_Eyes_04' }
        ],
        thumbnail: 'QmNyzNnjYt6rzaKDj1BwGTWkMxNMoGA1hPSTBvstepfVPk',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_05',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_05.png',
            contents: [{ file: 'F_Eyes_05.png', hash: 'QmRy1tM8RgaaAGzSdBEt5UtDrfese9Zm3LreBZieSJZtxL' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_05' },
          { code: 'es', text: 'f_Eyes_05' }
        ],
        thumbnail: 'QmYLehHLMf5hrKaGK5RYxwL7XFgWARmTAEifeMtXQACCAE',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_06',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_06.png',
            contents: [
              { file: 'F_Eyes_06.png', hash: 'QmYE6US2MZKmMHUyt9pG1ZzZJFoVVa5fkYrEDySqzFuGHY' },
              { file: 'F_Eyes_06_Mask.png', hash: 'QmUZ3aeo1X66TZzsf9Brn7eudTzJKw8BQ2KTAqAgkuoizD' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_06' },
          { code: 'es', text: 'f_Eyes_06' }
        ],
        thumbnail: 'QmVS8NbaMYYoQNmKqckCgg9T1CSgkqpNzkbPbPuttiJ6Tv',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_07',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_07.png',
            contents: [
              { file: 'F_Eyes_07.png', hash: 'QmcjwBHKkdhQryfNbKuspLN1qbLcMxtik5D91rN1LyQkQS' },
              { file: 'F_Eyes_07_Mask.png', hash: 'QmZE8o4qjA9nW2o52grpXyV8B2YB36mwwABkjNpGeoMhwE' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_07' },
          { code: 'es', text: 'f_Eyes_07' }
        ],
        thumbnail: 'QmYQK1u4FScHcsixxz3m6tneHFKcWYZXEhME7tYJE3aAmG',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_08',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_08.png',
            contents: [
              { file: 'F_Eyes_08.png', hash: 'QmTAQdTdSLcuYfprcs9W7aL7KLkjtZCcjxQfqqo56S5EXy' },
              { file: 'F_Eyes_08_Mask.png', hash: 'QmX5rk9V7LzoZpPiWvXWExmdiTFqmuEnuoqFcKwTLb8JPS' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_08' },
          { code: 'es', text: 'f_Eyes_08' }
        ],
        thumbnail: 'QmT4mPmzDKg76vor3hMyhjt2fL2PpCev2ojWLmGz556Yqz',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_09',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_09.png',
            contents: [
              { file: 'F_Eyes_09.png', hash: 'QmQRF9rj8HrC96pXRpHvC4n2w6FssxStFaqdLu3A23nFVp' },
              { file: 'F_Eyes_09_Mask.png', hash: 'QmP11yu5UQye34nFSLjmifX8Ht3zJXfNZ8uv1Ew6KSYHUL' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_09' },
          { code: 'es', text: 'f_Eyes_09' }
        ],
        thumbnail: 'QmbtSbpcS2BJqUTuHrDqHnGA3EPYo3vWQ6GfBCb74NaEDm',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_10',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_10.png',
            contents: [
              { file: 'F_Eyes_10.png', hash: 'QmTsVfs4MZvj54eFQJhQGBcjGZ92fd3TwfsgTjjNcvKzP4' },
              { file: 'F_Eyes_10_Mask.png', hash: 'QmZdskRNYZaeMZBD74kQAZAgatyndvFoF9oDrukV3sL63T' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_10' },
          { code: 'es', text: 'f_Eyes_10' }
        ],
        thumbnail: 'QmPHh7MVzGb1h1NkWgHSehKFPLcaU1iqFHViAjbQESvJBt',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_eyes_11',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyes_11.png',
            contents: [
              { file: 'F_Eyes_11.png', hash: 'QmTHXXLgeJJiZ4iYB8sv4dTHqXUvivFFMGz8aiQsfTgLRo' },
              { file: 'F_Eyes_11_Mask.png', hash: 'QmUpE32bQ1iCiLSXU69gHvoFkAEo25qh9e16xyN3jYF8Vg' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Eyes_11' },
          { code: 'es', text: 'f_Eyes_11' }
        ],
        thumbnail: 'QmX3ZiecZ1VZaR57yq5zqNDC4JAnkzG7dGHh1kpxnhkKJB',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_00',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_00.png',
            contents: [{ file: 'M_Eyes_00.png', hash: 'QmdPqHWhGTu6H3Dtn1SgvatmpxWeCR9Dm2Qb2hofAHqg1A' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_00' },
          { code: 'es', text: 'Eyes_00' }
        ],
        thumbnail: 'Qmb4sN5eAcJN2WNNVi8Ui4WDh2CX5Wt6m31teaMpPGuUPz',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_01.png',
            contents: [{ file: 'M_Eyes_01.png', hash: 'Qma1q4mpb3moQYFSqTLShzWMJ6gMhMSR74cCyg8zgZGCnC' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_01' },
          { code: 'es', text: 'Eyes_01' }
        ],
        thumbnail: 'QmX6m5PzUheR9jHe29nVCeYD1ELRPPPWPWa8aoTfK22Acq',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_02.png',
            contents: [
              { file: 'M_Eyes_02.png', hash: 'QmeTxEdW7kp52RV8vZHsrzqed268D5m41T5dVp9JjLXiEr' },
              { file: 'M_Eyes_02_Mask.png', hash: 'QmYs9ec68TjZkRpjz2Sov2GcNhP5AD8JUNGm3MrahpF9RB' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_02' },
          { code: 'es', text: 'Eyes_02' }
        ],
        thumbnail: 'QmNkmTvKSfuMU616o1CH7H94ho3kzdt47nRiazbKShFbq9',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_03',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_03.png',
            contents: [{ file: 'M_Eyes_03.png', hash: 'QmUuiz4pY1SvxkzwbzCoHD9xXbuT51E7ZFrD5aC31CjUW2' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_03' },
          { code: 'es', text: 'Eyes_03' }
        ],
        thumbnail: 'QmR9N5DaD3XafNh83mpkLSfSDNsPWZSE5vvuTbfLSNgNqp',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_04',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_04.png',
            contents: [
              { file: 'M_Eyes_04.png', hash: 'QmRQSdpHpmKEYf4JzEWZCRHZDYBc7RN5cqxvxMcL6sMzTq' },
              { file: 'M_Eyes_04_Mask.png', hash: 'QmepaHZWSGzBDAWCSKAdBxtkQKzEHUADvy1uwvT4kHDndh' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_04' },
          { code: 'es', text: 'Eyes_04' }
        ],
        thumbnail: 'Qmcx127G2PhhvYfAavMVsDbWq2PmvjnGrp7G2trhsq7ypw',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_05',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_05.png',
            contents: [{ file: 'M_Eyes_05.png', hash: 'QmaZBKp3h9dZgBCqbfdMDYjuPFqVdFXMLTmS5cD98wykfY' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_05' },
          { code: 'es', text: 'Eyes_05' }
        ],
        thumbnail: 'QmP3bzVHhZmFfGx9CC5oiUBE48ExoVTZCydG3nwwD9WtKQ',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_06',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_06.png',
            contents: [
              { file: 'M_Eyes_06.png', hash: 'QmYjB8VKjD6ZibVpErKCPgb3T3oHDXWuwj3FTcXsnawHYJ' },
              { file: 'M_Eyes_06_Mask.png', hash: 'QmeSiuufQxtZwezma5RMeNp8J1nv4ZFrbWzoWRndpiis7A' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_06' },
          { code: 'es', text: 'Eyes_06' }
        ],
        thumbnail: 'QmPfGPNSX4nmgH5bMEnHRjCvpSBSPryMHVS7EqurELMsrm',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_07',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_07.png',
            contents: [
              { file: 'M_Eyes_07.png', hash: 'QmXQijrrpU5DWSjnLZND71UTankGvkow97DH6DTzK7wheN' },
              { file: 'M_Eyes_07_Mask.png', hash: 'QmXyrpkyVuwx6eQoyuvBjQ1euRN9kVemMLj9GnzvQe6qG8' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_07' },
          { code: 'es', text: 'Eyes_07' }
        ],
        thumbnail: 'QmRFWayAqSovd7kHbBHHhVhZQesxDrKJ71TzpHXDFQwQCk',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_08',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_08.png',
            contents: [
              { file: 'M_Eyes_08.png', hash: 'QmbYXQxmRVgZLkJLy16XgM11iTV6h5YWwK1sijemX46qCr' },
              { file: 'M_Eyes_08_Mask.png', hash: 'QmVhDRzq95uEbXAuZuJhb5ysCQNPVpYnvDrPKPP3p4KmGW' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_08' },
          { code: 'es', text: 'Eyes_08' }
        ],
        thumbnail: 'QmZTUfpr24tyvQzz4E6GdmC8z4DPw8w6PVNrQoqH2HoDtg',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_09',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_09.png',
            contents: [{ file: 'M_Eyes_09.png', hash: 'QmRz8wJmyZnmLZSVc1YBv3xwrkiNHdRQLrGZi1kRrLobQ6' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_09' },
          { code: 'es', text: 'Eyes_09' }
        ],
        thumbnail: 'QmZ3KpbP7FfxAfirwWC8hwMKMFauZPTfLhAbueTEUWLwQa',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_10',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_10.png',
            contents: [{ file: 'M_Eyes_10.png', hash: 'QmQrXXoYnnpx3SBA9U78gHvczKXS77cQJDxWtkoK4xKazd' }]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_10' },
          { code: 'es', text: 'Eyes_10' }
        ],
        thumbnail: 'QmeWrBArU3zzbXTog4vch72YDqPzM5xELeCgStnme77E6S',
        image: ''
      },
      {
        id: 'dcl://base-avatars/eyes_11',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyes_11.png',
            contents: [
              { file: 'M_Eyes_11.png', hash: 'QmPmtaiV74A6jgwo1KcdWwoyHznizT1EX3RzxV7UyDAxsy' },
              { file: 'M_Eyes_11_Mask.png', hash: 'QmYLXh1vKyXjU9wQK3Rp3dWdjfLJs4J3qYBGfjrRteZtwB' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyes',
        tags: ['face', 'eyes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Eyes_11' },
          { code: 'es', text: 'Eyes_11' }
        ],
        thumbnail: 'QmUkvmjQkec1QquB4gc5jWW4x8x37RL7HAHNjUM4XdYoms',
        image: ''
      },
      {
        id: 'dcl://base-avatars/black_sun_glasses',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'F_Eyewear_BlackSunglasses.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Eyewear_BlackSunglasses.glb', hash: 'QmXLrokLeJkmyFD64xGicQyD3R3M4AWcPFLXJMNQx9U7eK' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_BlackSunglasses.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Eyewear_BlackSunglasses.glb', hash: 'QmXLrokLeJkmyFD64xGicQyD3R3M4AWcPFLXJMNQx9U7eK' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'woman', 'women', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Black Sunglasses' },
          { code: 'es', text: 'Anteojos Negros' }
        ],
        thumbnail: 'QmdZ1vLFPWnVF7xMFMskA6LSpKfCVxA9JRi4jsYtrCnrya',
        image: ''
      },
      {
        id: 'dcl://base-avatars/cyclope',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'F_Eyewear_Cyclope.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_Cyclope.glb', hash: 'QmXQA2ai3r6QBUub9YQqDufoU3c537V25oNjyVwjcc3g1v' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_Cyclope.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_Cyclope.glb', hash: 'QmXQA2ai3r6QBUub9YQqDufoU3c537V25oNjyVwjcc3g1v' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'male', 'man', 'female', 'Woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Cyclope Glasses' },
          { code: 'es', text: 'Gafa de Cíclope' }
        ],
        thumbnail: 'QmStaoSsdCyV4g9B6ynUVJZEpBr7sdyV68qwsPgzdUS2AR',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_glasses_cat_style',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_CatStyle.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_CatStyle.glb', hash: 'QmXVGQTKqfvXuX8hTWzbviAVHievAGEFFaWFcPhQXRUEdr' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Cat Style Glasses' },
          { code: 'es', text: 'Gafas de Estilo Gato' }
        ],
        thumbnail: 'QmTz5FqD8PberQpKyFMyR8A47S5NT243s26TBGzmCoUaC9',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_glasses_city',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_CitySunglasses.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_CitySunglasses.glb', hash: 'QmUyWgViJa6oqDHdjFLDXyJsBjBpEq6HYRiNQKotS1FzNg' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'City Style Glasses' },
          { code: 'es', text: 'Gafas de Estilo Urbano' }
        ],
        thumbnail: 'QmXZqxFSMpxifiQR2Nad7NpzttjjY22fTRBRVxktqzHprS',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_glasses_fashion',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_Fashion.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_Fashion.glb', hash: 'QmeNcjX6anZQHGwHoxpWj9jSCdmpG9uepKpjWf1cTP7wTj' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'High Fashion Sunglasses' },
          { code: 'es', text: 'Gafas de Estilo' }
        ],
        thumbnail: 'QmcA5XjwSbKTSREzQ6WtUW3Uqc6A1VpGCvkt9QxhfCsUnB',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_glasses',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Glasses_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Glasses_01.glb', hash: 'QmcUT5SRXdbigpo1DLPyM1R8jbnLTMxcbwqeowRiNWCm7h' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Glasses' },
          { code: 'es', text: 'Gafas Rojas' }
        ],
        thumbnail: 'QmbEvVLQ6i3mVNqY5JrJX4TUqQG5Q923CzApFp9yRgCoCe',
        image: ''
      },
      {
        id: 'dcl://base-avatars/heart_glasses',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_Heart.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Eyewear_Heart.glb', hash: 'QmcDD7KRyXPUs27c5v1PfCdpTDwDPfSMj239Tg6Hcq4WTt' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Heart Shaped Sunglasses' },
          { code: 'es', text: 'Anteojos con Forma de Corazón' }
        ],
        thumbnail: 'QmX4Duxpi6hZPDjjvaEygKkBcEQKWggb5BrDvezcq1DYN7',
        image: ''
      },
      {
        id: 'dcl://base-avatars/italian_director',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'F_Eyewear_ItalianDirector.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_ItalianDirector.glb', hash: 'QmNmfg1NvCJNo6gNobQWawcdK3BHZLuDRYXXCWVPxnEa5Z' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_ItalianDirector.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_ItalianDirector.glb', hash: 'QmNmfg1NvCJNo6gNobQWawcdK3BHZLuDRYXXCWVPxnEa5Z' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'male', 'man', 'female', 'Woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Italian Director Sunglasses' },
          { code: 'es', text: 'Gafas de Director de Cine Italiano' }
        ],
        thumbnail: 'QmQcayuAR4UDMQoHqg7HCKgruGuaqDbRN1S9zt8ccWYaje',
        image: ''
      },
      {
        id: 'dcl://base-avatars/aviatorstyle',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyewear_AviatorStyle.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Eyewear_AviatorStyle.glb', hash: 'Qmbv617p43YUd9g2Xo8YzmgutGXjGt8AXU89fL3TzZvN3L' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Aviator Sunglasses' },
          { code: 'es', text: 'Gafas de Aviador' }
        ],
        thumbnail: 'QmTnNj1hRjdPbhQPo7Gg71RPT5FXiw2zLeqwZNYhwnhdhQ',
        image: ''
      },
      {
        id: 'dcl://base-avatars/matrix_sunglasses',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Eyewear_MatrixSunGlasses.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Eyewear_MatrixSunGlasses.glb', hash: 'QmbcqMEDxoeztWuS244cRnt53bDWbYzmm6hHryc3uxX9Xa' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'M_Eyewear_MatrixSunGlasses.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Eyewear_MatrixSunGlasses.glb', hash: 'QmbcqMEDxoeztWuS244cRnt53bDWbYzmm6hHryc3uxX9Xa' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'men', 'man', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Matrix Sunglasses' },
          { code: 'es', text: 'Gafas de Matrix' }
        ],
        thumbnail: 'QmeXtir64MeetpyaSuRumTLktYrbBXzJBDp2Evdj5Xsk8P',
        image: ''
      },
      {
        id: 'dcl://base-avatars/piratepatch',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'PiratePatch.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'PiratePatch.glb', hash: 'QmcWkEPk3mGVxbqDMkoj6wBhbeotLUUV6uFhqf4tJ3kzCF' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'PiratePatch.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'PiratePatch.glb', hash: 'QmcWkEPk3mGVxbqDMkoj6wBhbeotLUUV6uFhqf4tJ3kzCF' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'man', 'men', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Pirate Patch' },
          { code: 'es', text: 'Parche Pirata' }
        ],
        thumbnail: 'QmRUwHtqrhoVUvyn2sSxcvfUguff8zPQM1Bp4adfMztku1',
        image: ''
      },
      {
        id: 'dcl://base-avatars/retro_sunglasses',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'F_Eyewear_RetroGlasses.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_RetroGlasses.glb', hash: 'QmRp9LNqA2nvpNVUzVEFPd63UqJbkt2yZhkiDZSHhrdKzF' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_RetroGlasses.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_RetroGlasses.glb', hash: 'QmRp9LNqA2nvpNVUzVEFPd63UqJbkt2yZhkiDZSHhrdKzF' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'male', 'man', 'female', 'Woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Retro Sunglasses' },
          { code: 'es', text: 'Gafas Retro' }
        ],
        thumbnail: 'QmSovNhd9n3M54GXK6K2HUSxZApwSroqxYNP3MEZQdCcKA',
        image: ''
      },
      {
        id: 'dcl://base-avatars/rounded_sun_glasses',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'RoundSunglasses_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'RoundSunglasses_01.glb', hash: 'QmdVVt3AdVxdUgiDeS4xSdFNQWRS7Po4NfKmwC7PyzNYFm' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'RoundSunglasses_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'RoundSunglasses_01.glb', hash: 'QmdVVt3AdVxdUgiDeS4xSdFNQWRS7Po4NfKmwC7PyzNYFm' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Rounded Sun Glasses' },
          { code: 'es', text: 'Gafas de Sol Circulares' }
        ],
        thumbnail: 'QmZ5HCqjQs1nmQfYnaNffzw7pJ4x4UEvnKaeaUGSSkiWnb',
        image: ''
      },
      {
        id: 'dcl://base-avatars/thug_life',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'ThugLife_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'ThugLife_01.glb', hash: 'QmaADjbRBcBn5tt76RdzkRKs13fEuzgoJMq6Yx8HXuBzJp' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Thug Life' },
          { code: 'es', text: 'Gafas de fanfarrón' }
        ],
        thumbnail: 'Qmf8EKPF2wjFAMFJXZJ26FR592T7niEHst5R12JzjKAwRb',
        image: ''
      },
      {
        id: 'dcl://base-avatars/balbo_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_BalbooBeard.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_BalbooBeard.glb', hash: 'QmVPP2Y6mqkb7WYw1kLffYq2nGMwx3Y1LmVJJmfafpuZys' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Balbo' },
          { code: 'es', text: 'Balbo' }
        ],
        thumbnail: 'QmTcMounmnAnWrSXY2za4f8ZxeStP3WKEm5LNvunC1xnS6',
        image: ''
      },
      {
        id: 'dcl://base-avatars/lincoln_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_BeardGoatee.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_BeardGoatee.glb', hash: 'Qmdk3A8gyqHiGsfNRLRDdQuLsq8DGqYddVsBFgsEjVSUJY' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Lincoln' },
          { code: 'es', text: 'Barba en Collar ' }
        ],
        thumbnail: 'QmQYqgiiasA4BpprThx4r8NCExuxEyf16woHAhp7U1tBGM',
        image: ''
      },
      {
        id: 'dcl://base-avatars/beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Beard_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Beard_01.glb', hash: 'QmY2eXCDj9arFjXD7ofoVLfJvKqJdXVm7zA9o9Macp7mTv' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Beard' },
          { code: 'es', text: 'Barba' }
        ],
        thumbnail: 'QmRiGkR84p6CNXgKuic7iMswsAqb9TeV9gBrMFeRFpnxcm',
        image: ''
      },
      {
        id: 'dcl://base-avatars/chin_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_ChinBeard.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_ChinBeard.glb', hash: 'QmUx2wWGjwKLZ1jmb7ZQYmSCcYyxjb1bcMnCD18isgTZn5' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Soul Patch' },
          { code: 'es', text: 'Chiva' }
        ],
        thumbnail: 'QmTteia8jurfjfnnBwoCCFWC953AkW9GLT2NLyYgFM1pfb',
        image: ''
      },
      {
        id: 'dcl://base-avatars/french_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_FrenchMustache.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_FrenchMustache.glb', hash: 'QmQLtmNwBETwf4aAPQ3WSZniRUdk18ZK3kfvuA9d8RpUzM' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'French Mustache' },
          { code: 'es', text: 'Bigote Francés' }
        ],
        thumbnail: 'Qme41zoA4iq2oV9USE9mAgdVSuEJsrxRTQDJE33H3EpoBX',
        image: ''
      },
      {
        id: 'dcl://base-avatars/full_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_FullBeard.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_FullBeard.glb', hash: 'QmcE5TQzGCBTf536nHRpbMVUGsDtFH2BdZHyomMgJAMbL4' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Full Beard' },
          { code: 'es', text: 'Barba Completa' }
        ],
        thumbnail: 'QmZZQVFuDaFpLwSbbue5wBigKRb58TNcz3Snk2xQCHfKZs',
        image: ''
      },
      {
        id: 'dcl://base-avatars/goatee_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_Goatee.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_Goatee.glb', hash: 'Qmdr7x6aWaJ1FEUW6zjetKQ3JMuppQcQokoYm8uUkG4UgZ' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Goatee' },
          { code: 'es', text: 'Goatee' }
        ],
        thumbnail: 'QmVDF3MqXkp9mteAKjjh88oJjcFVzdUUAUPu7ndtRN6xG6',
        image: ''
      },
      {
        id: 'dcl://base-avatars/granpa_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_GrandPaMustache.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_GrandPaMustache.glb', hash: 'QmSfSXHC4p4DSL2qii7uRbo5xK8TTWjcUMTXqYaYLrLHf2' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Walrus' },
          { code: 'es', text: 'Walrus' }
        ],
        thumbnail: 'QmXwBHH2vptaaBwmpzF4PhRaPYU8ZHMgK9abW7JbjxMmvr',
        image: ''
      },
      {
        id: 'dcl://base-avatars/horseshoe_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_LongMustache.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_LongMustache.glb', hash: 'QmUL3UfQzCWfib8DouQuyh63qkQxNt8eZa2UjxiPhzvNM2' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Horseshoe' },
          { code: 'es', text: 'Horseshoe' }
        ],
        thumbnail: 'QmXim7wvUvRHKhdD1HomSj7JzJnu7pKLFkBNDWVfx2RaSh',
        image: ''
      },
      {
        id: 'dcl://base-avatars/handlebar',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Moustache_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Moustache_01.glb', hash: 'QmZ1x2hPwEsMnwHWAxC2gehAUTSmiy2ZmV6jT68EVEngbA' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Handlebar' },
          { code: 'es', text: 'Bigote Inglés' }
        ],
        thumbnail: 'QmaNwVGJnENHdTKP8EE8oYzGRgBavnkCZqYq9pXN8FA63Y',
        image: ''
      },
      {
        id: 'dcl://base-avatars/Mustache_Short_Beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_MustacheShortBeard.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_MustacheShortBeard.glb', hash: 'QmfDkg8FHnfPVgPAcfyx1SvbTRfS1W5DV3D7GZXFh6NKvz' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Anchor Beard' },
          { code: 'es', text: 'Ancla' }
        ],
        thumbnail: 'QmQD9nHU3xWjgbmooBamU7KtEdnHSo3HkNRpKu3khyqAA7',
        image: ''
      },
      {
        id: 'dcl://base-avatars/short_boxed_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_MustacheSmallBeard.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_MustacheSmallBeard.glb', hash: 'QmUuPWHPR9uYveYDScrU2Uad2CqVcnLmDCfT128bFP9GYY' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Short Boxed' },
          { code: 'es', text: 'Barba Corta con Bigote' }
        ],
        thumbnail: 'QmYDwSQosBTfPjbCa3GE3dhkFHpMjvMYdpLE8JfgVmrnue',
        image: ''
      },
      {
        id: 'dcl://base-avatars/old_mustache_beard',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_FacialHair_OldMustache.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_FacialHair_OldMustache.glb', hash: 'QmXgvQY9AuYToabJnVphqHRNQJQWpP3BEGRhMUYPjhNkph' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['face', 'facial_hair', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Chevron' },
          { code: 'es', text: 'Chevron' }
        ],
        thumbnail: 'QmVtR6dTc8j8TjNzE92S1LqyXa6d8N1PedYM4qTNWG2wcv',
        image: ''
      },
      {
        id: 'dcl://base-avatars/bear_slippers',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'BearSlippers_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkin.png', hash: 'QmU3omTrtqYBtdHcC2FZjYvyLmVVmBKaaKa52CmBF2bn9U' },
              { file: 'BearSlippers_01.glb', hash: 'QmZFQB5jwnK4ePqqokqHDrag9FEXwbTNa4kiNuaysyAS9Q' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'BearSlippers_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkin.png', hash: 'QmU3omTrtqYBtdHcC2FZjYvyLmVVmBKaaKa52CmBF2bn9U' },
              { file: 'BearSlippers_01.glb', hash: 'QmZFQB5jwnK4ePqqokqHDrag9FEXwbTNa4kiNuaysyAS9Q' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Bear Slippers' },
          { code: 'es', text: 'Pantuflas de Oso' }
        ],
        thumbnail: 'QmW1RfnBXBL7vMxeZRPJ8DZp88W3CgRUFYpiDU7mDRMEPk',
        image: ''
      },
      {
        id: 'dcl://base-avatars/citycomfortableshoes',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'CityComfortableShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'CityComfortableShoes.glb', hash: 'QmXunF4VyY28yRAYxHtQoAkw6pLLEP8hu8oL2adXhKHB1v' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'CityComfortableShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'CityComfortableShoes.glb', hash: 'QmXunF4VyY28yRAYxHtQoAkw6pLLEP8hu8oL2adXhKHB1v' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Comfortable Shoes' },
          { code: 'es', text: 'Zapatos cómodos' }
        ],
        thumbnail: 'QmNXhvGjCeyeSasfEKJRkunTuw4G6SBebBSSSa863UheQh',
        image: ''
      },
      {
        id: 'dcl://base-avatars/classic_shoes',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_ClassicShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_Feet_ClassicShoes.glb', hash: 'QmQXQGrtZ3RLxukdQukXBCo11Q8LPH2c3285soh4UC7vYw' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'M_Feet_ClassicShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_Feet_ClassicShoes.glb', hash: 'QmQXQGrtZ3RLxukdQukXBCo11Q8LPH2c3285soh4UC7vYw' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Classic Shoes' },
          { code: 'es', text: 'Zapatos Clásicos' }
        ],
        thumbnail: 'QmVbc4ZcMzzELVeBnsZGbvrFVtpNNXoFxD7jPx8rDgg94u',
        image: ''
      },
      {
        id: 'dcl://base-avatars/crocs',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Crocs.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'Crocs.glb', hash: 'Qme78hNjjWbwAc2vFDPFNUHrT1aPaJAyH65vKXh1K4Tg6y' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Crocs.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'Crocs.glb', hash: 'Qme78hNjjWbwAc2vFDPFNUHrT1aPaJAyH65vKXh1K4Tg6y' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Crocs' },
          { code: 'es', text: 'Crocs' }
        ],
        thumbnail: 'QmVrAqvhXZMhwq1bw3xqEAjJ2imANnSTNF32ftamGP48Jt',
        image: ''
      },
      {
        id: 'dcl://base-avatars/crocsocks',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'CrocsSocks.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'CrocsSocks.glb', hash: 'QmYQ2FfBnuw1Btwo7pKH6cEdEBawgbEdJdywsQ6W9PzNiq' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'CrocsSocks.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'CrocsSocks.glb', hash: 'QmYQ2FfBnuw1Btwo7pKH6cEdEBawgbEdJdywsQ6W9PzNiq' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Croc Socks' },
          { code: 'es', text: 'Medias Croc' }
        ],
        thumbnail: 'QmWKeVrN2aXreSzfF7QmmfxiGZ5LYVScUbJZjxWmNDaP2z',
        image: ''
      },
      {
        id: 'dcl://base-avatars/Espadrilles',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_Espadrilles.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkin.png', hash: 'Qmf28utefDBX51n6op1camuz9nW6xFHkkZRSNkvRGJThsx' },
              { file: 'M_Feet_Espadrilles.glb', hash: 'QmRERcffGRci5zonAHVccDq5JKfcNYyFMaZ4EiFATCbVRo' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'M_Feet_Espadrilles.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkin.png', hash: 'Qmf28utefDBX51n6op1camuz9nW6xFHkkZRSNkvRGJThsx' },
              { file: 'M_Feet_Espadrilles.glb', hash: 'QmRERcffGRci5zonAHVccDq5JKfcNYyFMaZ4EiFATCbVRo' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Espadrilles' },
          { code: 'es', text: 'Alpargatas' }
        ],
        thumbnail: 'QmNVoydQ5Q7zHMF51sJKciz2EVQSCqm6rwp2g9Yj3R6URi',
        image: ''
      },
      {
        id: 'dcl://base-avatars/bun_shoes',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_BunShoes_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_BunShoes_01.glb', hash: 'QmTeuWKr5yHFVhigEfWC18jxnCV1XfXCGiXLS6i4mHzK8j' },
              { file: 'SkinWoman.jpg', hash: 'QmdcU2hPGvHjvfRvZRRfY1rX681PG1ESFAHTPiKNp5njZH' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Bun shoes' },
          { code: 'es', text: 'Zapatillas de Lona' }
        ],
        thumbnail: 'QmYbe52pSJHpbbYEd7bH8gPZv8kJtrybnKN91Tmjap5ZU2',
        image: ''
      },
      {
        id: 'dcl://base-avatars/comfy_green_sandals',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_ComfortGreenSandals.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_Feet_ComfortGreenSandals.glb', hash: 'QmVSEabN4SQqFgYpr1rcCr8MXHiQJr9c9ZHr9Gbrmx3ZdB' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Comfy Green Sandals' },
          { code: 'es', text: 'Sandalias Verdes' }
        ],
        thumbnail: 'QmS5g7Kw24goxuDN3WuMsHsEhNP1ghCi4cuMR3aHc39NBV',
        image: ''
      },
      {
        id: 'dcl://base-avatars/pink_sleepers',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_PinkSleepers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_Feet_PinkSleepers.glb', hash: 'QmbXtJe3cSBo4jKMQNZVAF94nHirYGeFG7dqgsqQvEcNab' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Pink Sleepers' },
          { code: 'es', text: 'Pantúflas Rosas' }
        ],
        thumbnail: 'QmdxraL5hW8FerNebsp2T7ByjcTrahMqYWiB9QKQ6BSx7x',
        image: ''
      },
      {
        id: 'dcl://base-avatars/ruby_blue_loafer',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_RubyBlueSleepers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_Feet_RubyBlueSleepers.glb', hash: 'QmNZoH8vbt7Si9jxurSppEBiQJ1D1sakhz1A8WDJsKP4Ay' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Loafer Blue Shoes' },
          { code: 'es', text: 'Zapatos Holgados Azules' }
        ],
        thumbnail: 'QmVcCxEfdziWtAc8exRFw8N4nGUwshmMQi91P15GqMZbQr',
        image: ''
      },
      {
        id: 'dcl://base-avatars/ruby_red_loafer',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_RubyRedSleepers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_Feet_RubyRedSleepers.glb', hash: 'QmNvViTSkaGg9xhLutky2GPw8nJm8sFfp3PbDy89JbkgHG' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Loafer Red Shoes' },
          { code: 'es', text: 'Zapatos Holgados Rojos' }
        ],
        thumbnail: 'QmbMgYVCkxgf7YUvUCDa8cK67PVPAccz4aF1pj6T1jkZ8w',
        image: ''
      },
      {
        id: 'dcl://base-avatars/Moccasin',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_SchoolShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Feet_SchoolShoes.glb', hash: 'QmWKBmYUfQNUn8PYbVSHWvMXmBJgqSUCyradtUcZSMWU4e' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Moccasin' },
          { code: 'es', text: 'Mocasines' }
        ],
        thumbnail: 'QmS9KVDeC4aP6igw5teFPFa99bgbBhPTNwSBkavcP2r7ko',
        image: ''
      },
      {
        id: 'dcl://base-avatars/sport_black_shoes',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'F_Feet_SportBlackShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_Feet_SportBlackShoes.glb', hash: 'QmaDhseiXo6xk3jHa15ikYeRmhwtkFXDrKSF2Ti887GTqW' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_SportBlackShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_Feet_SportBlackShoes.glb', hash: 'QmaDhseiXo6xk3jHa15ikYeRmhwtkFXDrKSF2Ti887GTqW' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Sport Black Shoes' },
          { code: 'es', text: 'Zapatos Deportivos Negros' }
        ],
        thumbnail: 'QmYu8p9tXKpBh8RwvxUgYZvp3KK3Q9M98evTBShTiGrCVs',
        image: ''
      },
      {
        id: 'dcl://base-avatars/sport_colored_shoes',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_SportColorShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_Feet_SportColorShoes.glb', hash: 'QmafAq3ZiEYjow6sCMo5DAknDrAj4wD35hWTiVrzFXXyit' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Sport Colored Shoes' },
          { code: 'es', text: 'Zapatos Deportivos Coloreados' }
        ],
        thumbnail: 'QmTwGkfsviTSk4N8L9kgveQ3afFztCPqeDxejMYt2Ac6H6',
        image: ''
      },
      {
        id: 'dcl://base-avatars/pink_blue_socks',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_PinkBlueSocks.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Feet_PinkBlueSocks.glb', hash: 'QmcracE2BNc34N4mo3FHouxXNqqAvgLSXKEX9oskghEJAj' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Pink and Blue Socks' },
          { code: 'es', text: 'Medias Rosadas y Azules' }
        ],
        thumbnail: 'QmYpjks4Dr4nAHQTMwBgatpinfWB5jc6kqNhs4eJAvPr9S',
        image: ''
      },
      {
        id: 'dcl://base-avatars/red_sandals',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_RedSandals.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_Feet_RedSandals.glb', hash: 'Qma3MUgtSzmikEuioLZzd4prgEsHVc3ucXVWzAwCY1zpUM' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'woman', 'women', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Sandals' },
          { code: 'es', text: 'Sandalias Rojas' }
        ],
        thumbnail: 'QmSggdcHwt3jkyd95mnzLWfK2UKSj1rNHhGXmyMSyS5EUJ',
        image: ''
      },
      {
        id: 'dcl://base-avatars/comfy_sport_sandals',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_ComfortSportSandals.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_Feet_ComfortSportSandals.glb', hash: 'QmaN7g1LygyPuDUwQrm7dikpLrtRNwb6RJ4vYuTJdHKek1' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Comfy Sport Sandals' },
          { code: 'es', text: 'Sandalias Deportivas' }
        ],
        thumbnail: 'QmYWJ447uAEA6ZD7BdoQTeJhsvU8VqskAxpxXTtN6XyB4K',
        image: ''
      },
      {
        id: 'dcl://base-avatars/m_greenflipflops',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_GreenFlipFlops.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_Feet_GreenFlipFlops.glb', hash: 'QmVVHB1CqnUSZtQ3sbpoyVss3vnSf4bSzhbiBSaQJVaxNr' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'man', 'men', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Green Flip Flops' },
          { code: 'es', text: 'Chancletas Verdes' }
        ],
        thumbnail: 'QmeT9F7gV314xtaB2K6vV8gSSj8EQw83gc3RuJZg4GKPM5',
        image: ''
      },
      {
        id: 'dcl://base-avatars/m_mountainshoes.glb',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_MountainShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_Feet_MountainShoes.glb', hash: 'QmTnQoZFTfH2G5FQnihdi3A9Ni2FQrDf4nTquyRyAKDoGw' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'man', 'men', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mountain Boots' },
          { code: 'es', text: 'Botas de Montaña' }
        ],
        thumbnail: 'QmdF3Cfc3X8xtRfD7RCSQkR2brNr5RC8gds4hWgzGK9hnd',
        image: ''
      },
      {
        id: 'dcl://base-avatars/m_feet_soccershoes',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_SoccerShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Feet_SoccerShoes.glb', hash: 'QmQDxVFse6DbpQ7zENhKzyryTCZv7wUEYTBUsDKYSdgAio' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'man', 'men', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Soccer Cleats' },
          { code: 'es', text: 'Botines' }
        ],
        thumbnail: 'QmZLEeSuHTes832cRi2z6wTnED1Xeu5Pze1vjyFRjgMQgQ',
        image: ''
      },
      {
        id: 'dcl://base-avatars/moccasin',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_Moccasin.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkin.png', hash: 'Qmf28utefDBX51n6op1camuz9nW6xFHkkZRSNkvRGJThsx' },
              { file: 'M_Feet_Moccasin.glb', hash: 'QmSS8MifZ1va6s9Yo6uypvMnarDQTwYAYHRM2fvC6jLPxk' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Moccasins' },
          { code: 'es', text: 'Mocasines' }
        ],
        thumbnail: 'QmP5cPciaXVe4Rz48n22aPXQ8Kpq42SBF9DRvYpnNkmns3',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_m_sandals',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_Sandals.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkin.png', hash: 'Qmf28utefDBX51n6op1camuz9nW6xFHkkZRSNkvRGJThsx' },
              { file: 'M_Feet_Sandals.glb', hash: 'QmTJbLoM8TGoJzkEoN4HL9QvePmW9khaHtRjbnxJHT7qHB' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'M_Feet_Sandals.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkin.png', hash: 'Qmf28utefDBX51n6op1camuz9nW6xFHkkZRSNkvRGJThsx' },
              { file: 'M_Feet_Sandals.glb', hash: 'QmTJbLoM8TGoJzkEoN4HL9QvePmW9khaHtRjbnxJHT7qHB' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Sandals' },
          { code: 'es', text: 'Sandalias' }
        ],
        thumbnail: 'QmRkAvsEw3hKrB5ecYQ5aEQKYRxyXU5qV5gugr9iprq6he',
        image: ''
      },
      {
        id: 'dcl://base-avatars/sneakers',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Sneakers_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'Sneakers_01.glb', hash: 'QmesD6ZPWqCjHCTbKHNokrdDJTzt3wX5zuyy1Ft83uoDa8' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Sneakers_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'Sneakers_01.glb', hash: 'QmesD6ZPWqCjHCTbKHNokrdDJTzt3wX5zuyy1Ft83uoDa8' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Sneakers' },
          { code: 'es', text: 'Zapatillas' }
        ],
        thumbnail: 'QmXWRP5pXMXeArQTQciFDt8yuVSoTBhCzL3VAdAEpZksnH',
        image: ''
      },
      {
        id: 'dcl://base-avatars/sport_blue_shoes',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_SportBlueShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_Feet_SportBlueShoes.glb', hash: 'QmT24PcJBo4oBj8NxqF7VpJyJ8CpobMiyku4ujCYH96NPY' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'M_Feet_SportBlueShoes.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_Feet_SportBlueShoes.glb', hash: 'QmT24PcJBo4oBj8NxqF7VpJyJ8CpobMiyku4ujCYH96NPY' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['shoes', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Sport Blue Shoes' },
          { code: 'es', text: 'Zapatillas Deportivas Azules' }
        ],
        thumbnail: 'QmQxgP7Cpm4xdGJZd1HWPQgsMKY1nA376AbfzJy7tMbEtL',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_anime_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Anime_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_Anime_01.glb', hash: 'QmTyiSdzK4S8L4TSS5E31eXXQW9Dw8cuzHxC8CunbUoSBw' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Idol' },
          { code: 'es', text: 'Celebridad' }
        ],
        thumbnail: 'QmPksZ9BzNPuSjvyQmMzZrhyEyDKBrtm6TXippVCiCc2Dn',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_undere',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Anime_03.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_Anime_03.glb', hash: 'QmRWdYxSnFmosSX6meCEM9XJ8Gd1xDf2Tz13ch1XhT4wbn' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Undere Hair Style' },
          { code: 'es', text: 'Estilo de pelo Undere' }
        ],
        thumbnail: 'QmYBTESZQguKaPDwj2RpKYEiDczTUSqCsiZAB7FCDXpc1P',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_bun',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Bun.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_Bun.glb', hash: 'QmezjxyDBHMRfwGnwurTjR8RSrqHRzn2YfQQGDjNQqt15X' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Hair Bun' },
          { code: 'es', text: 'Rodete' }
        ],
        thumbnail: 'QmTxX6AEcCDq9QFeKdGygforKLTXNBpVU8M7U2fSborACa',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_coolshortstyle',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_CoolShortStyle.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_CoolShortStyle.glb', hash: 'QmduBoSSNhcoMjvgQYV9xVpj7Kfhi9Kib2qR2jG7T4Tp4x' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Short Modern Style' },
          { code: 'es', text: 'Pelo Corto Moderno' }
        ],
        thumbnail: 'QmRLbMqsxFW3H2PN9hRp6PfdovXM9WoCSYTYkXh71kC44Q',
        image: ''
      },
      {
        id: 'dcl://base-avatars/cornrows',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Cornrows.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_Cornrows.glb', hash: 'QmNNCfnf1ynQWMoRHdVWJQodYDPd5R5w9AZLNsETy4hW97' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Cornrow' },
          { code: 'es', text: 'Trenzas' }
        ],
        thumbnail: 'Qmd2UtiZejTaWn5KPwGQmULzLJg7ingeoyg1AUwoBXaW3X',
        image: ''
      },
      {
        id: 'dcl://base-avatars/double_bun',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_DoubleBun.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_DoubleBun.glb', hash: 'QmcugEWKWqDdqRMWVPPHtkBthwHhZWzwWf5xW8yJ9an4Kd' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Double Bun' },
          { code: 'es', text: 'Doble Rodete' }
        ],
        thumbnail: 'QmaR2hPwYkGXBn873anY34k1zJ76YMX59trYNtt6TeVLTB',
        image: ''
      },
      {
        id: 'dcl://base-avatars/modern_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_ModernHair.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_ModernHair.glb', hash: 'QmSm1PSFNBk7Y45Vofq4Vtoq7F7we8VBv1DruGDSLqPJbP' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Modern Style' },
          { code: 'es', text: 'Peinado Moderno' }
        ],
        thumbnail: 'QmbRmkXBVaQY9PcyfcqXPYRw4SsdaabCSWiDMxcjBoYUBp',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_f_oldie',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Oldie_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_Oldie_01.glb', hash: 'Qmc1SAMNH22QaNLbB1oXRTgVYRXEss9NNHgfUyoxhYi7QV' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Short Grandma Style' },
          { code: 'es', text: 'Peloc Corto de Abuela' }
        ],
        thumbnail: 'QmS2dwTqyakQQccvzQAe9bnhSC3W75TsQuDNq4rkPM4LjC',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_f_oldie_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Oldie_02.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_Oldie_02.glb', hash: 'QmU3DaZzDe6B2BterdjMukM2CXZZjVSX7YrU4qSTuyGZ4P' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Short Hair' },
          { code: 'es', text: 'Pelo Corto' }
        ],
        thumbnail: 'QmaHkfMJcwyM1Hg4YXjrjy5otFZpVZoYLKRsGaThNpeLXS',
        image: ''
      },
      {
        id: 'dcl://base-avatars/pompous',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_PompousHair.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_PompousHair.glb', hash: 'Qmev1u9dYbj95oBXWKZTiQdVHz9qBXtrLavETCi2ZyMr33' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Pompous Hair' },
          { code: 'es', text: 'Pelo Pomposo' }
        ],
        thumbnail: 'QmbAujzXu2gDruCXzCsgdD1hhVKm3D4oRpDM9GhMcPMxnk',
        image: ''
      },
      {
        id: 'dcl://base-avatars/pony_tail',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_PonyTail.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_PonyTail.glb', hash: 'QmUQFLp1hoxwMJfTC2NWkjYfkgu9mxuiTkXdjkh3sbSioi' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Pony Tail' },
          { code: 'es', text: 'Cola de caballo' }
        ],
        thumbnail: 'Qmcg3CDzayCCwKqnXkFq2wxPBbtYr5W53Lp3wfDaBHNjCb',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_punk',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Punk.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_Punk.glb', hash: 'QmX6VMLzcGM4v8EhuSAutZLw9FRWk27GRVzjRBjjkQN6GM' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Punk' },
          { code: 'es', text: 'Punk' }
        ],
        thumbnail: 'QmVTWdxMKpFkwnmeJsYQUvWAsSWnBkNAu1cph2VPnyVHD5',
        image: ''
      },
      {
        id: 'dcl://base-avatars/shoulder_bob_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_ShoulderBobHair.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_ShoulderBobHair.glb', hash: 'QmP7Ux14YDhfoJqFZjyy9LMXduGv6aTQJH8NCYitULQJMi' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Shoulder Bob Hair' },
          { code: 'es', text: 'Corte Carré' }
        ],
        thumbnail: 'QmddBJtE31vVch92wSGAMrC7wXYRi7zGMH4VKfDeQEzE9A',
        image: ''
      },
      {
        id: 'dcl://base-avatars/curly_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_ShoulderCurlyHair.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_ShoulderCurlyHair.glb', hash: 'QmdrEc6RGFKJYqZvTptp6RiA6gT3XZKy7fWSKHcnTyqwaY' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Curly Hair' },
          { code: 'es', text: 'Pelo Rizado' }
        ],
        thumbnail: 'QmYXjS996goGHErKyA1DuxhsTXWrf4NFUXqj4S8bKRswBM',
        image: ''
      },
      {
        id: 'dcl://base-avatars/shoulder_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_ShoulderHair.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_ShoulderHair.glb', hash: 'QmcTpZcWPVkZp4dWqB9xVpEqwsEhTioc7LkQTF2sMyuHoG' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Shoulder Hair' },
          { code: 'es', text: 'Pelo al hombro' }
        ],
        thumbnail: 'QmTGoPAWBdRMsksWBaR9sYs4uqRiEiksoxzHo39dk2Pxtm',
        image: ''
      },
      {
        id: 'dcl://base-avatars/standard_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Standard.glb',
            contents: [
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_Standard.glb', hash: 'Qmbgt2AnZu9JMdxk4tCgERrbzcUYw82ivEDViywwh3dkp7' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Classic Style' },
          { code: 'es', text: 'Peinado Clásico' }
        ],
        thumbnail: 'QmZzSgyzKprxwmuT94cotTitrPZiMa5tPnfRhrSXGMWmxE',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_stylish_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_StylishHair.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_StylishHair.glb', hash: 'QmUWBCjEab7XjhFvmvjKMKjRJSrPa8YMpMXiEF1W7GosoE' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Short Stylish Hair' },
          { code: 'es', text: 'Peinado Corto Elegante' }
        ],
        thumbnail: 'QmTUJXt2MbW7UP858qpLePQNWpBrDK3vLeHbTczVpzeHpe',
        image: ''
      },
      {
        id: 'dcl://base-avatars/two_tails',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_TwoTails.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'AvatarWearables_TX.png.001.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_Hair_TwoTails.glb', hash: 'QmcXTZZwgY4qtefx1KBCK2FNP1tqkTrygAEzQFxfE2Dfhs' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Two Tails' },
          { code: 'es', text: 'Dos Trenzas' }
        ],
        thumbnail: 'Qmey72Fk8J7ywW8u1VXLFmej994ki3i4HKCStwYXMu9ML5',
        image: ''
      },
      {
        id: 'dcl://base-avatars/moptop',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Beatle_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_Beatle_01.glb', hash: 'QmZuQPWZXo1SS2P7uHwtZBha4t8QiVppgyDeQ3iyk4yMJR' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Moptop' },
          { code: 'es', text: 'Moptop' }
        ],
        thumbnail: 'QmU165fqP5y7jDdeSE7txShU875tjH1rCZa7r5N4JWudF7',
        image: ''
      },
      {
        id: 'dcl://base-avatars/curtained_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_BookStyle.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_BookStyle.glb', hash: 'QmYUwzynDURZm5dFwgFDTp2MXRoBPs7G9ARkwvhGY4w9yX' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Curtained hair' },
          { code: 'es', text: 'A Dos Aguas' }
        ],
        thumbnail: 'QmQ5nAtpVM91i1FSkTRTqfGb3de2dnrZdJ9n1XJ8JqKkWS',
        image: ''
      },
      {
        id: 'dcl://base-avatars/cool_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Cool_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_Cool_01.glb', hash: 'QmWLkcDh313RuCJBz2kJrnMK8sicFFuzU69ESzYUcr21Wi' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Cool Hair' },
          { code: 'es', text: 'Peinado con Estilo' }
        ],
        thumbnail: 'QmUewAj3jGfHUjShFsiLgWJFZiBJGqND87HvybS1X9E1fW',
        image: ''
      },
      {
        id: 'dcl://base-avatars/keanu_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Keanu.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_Keanu.glb', hash: 'QmQMsnMuX4NeJ1zTEn4MFYBBMaFggLTucBtc37JX3WSQBW' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Keanu Hair Style' },
          { code: 'es', text: 'Estilo Keanu' }
        ],
        thumbnail: 'QmaRTBsxPhbRk65i9jixJMdAK1vzgvABF1gYgfGUvb5Psm',
        image: ''
      },
      {
        id: 'dcl://base-avatars/slicked_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Lamas.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_Lamas.glb', hash: 'Qmb1odSvLRMtkJzRSKrRWKXcn9W3dJxEURo9cd8BN4Hzt1' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Slicked hairstyle' },
          { code: 'es', text: 'Peinado Engominado' }
        ],
        thumbnail: 'QmYJNzGNTvJEev14Q7FftuEDdfJYj6JpyczkBXqWsiMjeV',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hair_oldie',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Oldie_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_Oldie_01.glb', hash: 'QmTiSBPjT4kAHuNqPKetbtUTyrs6jvnCJpE3D4Qr8p6GoH' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Oldie' },
          { code: 'es', text: 'Peinado Antiguo' }
        ],
        thumbnail: 'QmQZyPLidPxTmKqsQUyhNqAsUm8RXf1KR4MwRHWCfuKN3x',
        image: ''
      },
      {
        id: 'dcl://base-avatars/punk',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Punk_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_Hair_Punk_01.glb', hash: 'QmZQPNWdBc1wtcRtknuRvPJdKkTwPFW2K76VimfF9MeX3s' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Punk Crest' },
          { code: 'es', text: 'Cresta Punk' }
        ],
        thumbnail: 'QmPxPWeVkuX74XS1jDnCPwbZhf23gjQkXKHrqzu9GF24wq',
        image: ''
      },
      {
        id: 'dcl://base-avatars/rasta',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Rasta_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_Hair_Rasta_01.glb', hash: 'QmWkMBdSYYK1MkLe4jEzSBh9cCLNqP3FLCVsyqf1d5jDX1' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Dreads' },
          { code: 'es', text: 'Rasta' }
        ],
        thumbnail: 'QmVXHkejvjCAkkh3TvX1ga996ETooYp85UtmXoxpcJEWrb',
        image: ''
      },
      {
        id: 'dcl://base-avatars/semi_afro',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_SemiAfro_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_Hair_SemiAfro_01.glb', hash: 'QmNjokzuMD9WpbvHpx1ETUt9TkpePn98Gd2XdXsPBww4d1' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Small Afro' },
          { code: 'es', text: 'Pequeño Afro' }
        ],
        thumbnail: 'QmeogciAKz1qN2TQKGEFPZG6d7Gj3UZWKVp9fPH5hVb4c6',
        image: ''
      },
      {
        id: 'dcl://base-avatars/semi_bold',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_SemiBald_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_Hair_SemiBald_01.glb', hash: 'QmZ4vJF7Tu7RUYRjUvFUeDGJUaJNdFngoZDbUSj1pjqyrG' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Bald On Top' },
          { code: 'es', text: 'Semi Pelado' }
        ],
        thumbnail: 'QmTXEMpWR7FbrRFGY63tqpG9hJoFj7DyPs8dTQTUmTbQpy',
        image: ''
      },
      {
        id: 'dcl://base-avatars/short_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_ShortHair_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_Hair_ShortHair_01.glb', hash: 'QmVKeSMvi9KDGWEtgu3DG1Db2jCbWb9uKxW9ZU4wQcPNfK' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Short Hair' },
          { code: 'es', text: 'Pelo Corto' }
        ],
        thumbnail: 'Qmc7rw768C29g35QU4Ar75D8Zd8Zip7desFQzHLwtuZxmN',
        image: ''
      },
      {
        id: 'dcl://base-avatars/casual_hair_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Standard_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_Standard_01.glb', hash: 'QmQtwaQT8etWM4XHZANtvBYdpqiiSg3rXFREDKacx7FDkF' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Casual Hair Style' },
          { code: 'es', text: 'Corte Casual' }
        ],
        thumbnail: 'QmYWFjBTWggspxmbRqGsodQnMUeuUj2F6EYJoDGN4XzbWw',
        image: ''
      },
      {
        id: 'dcl://base-avatars/casual_hair_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Standard_02.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_Standard_02.glb', hash: 'QmfHZehCoSk99cH6uFLj1Rh7V2vrSc372wm6eo12ACUP5T' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Elvis Wannabe' },
          { code: 'es', text: 'Corte a lo Elvis' }
        ],
        thumbnail: 'Qmetn1PXjsvzjyUFzXwvbvKsdT6HDMtKxNkgh8ZoMNvpkC',
        image: ''
      },
      {
        id: 'dcl://base-avatars/casual_hair_03',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Standard_03.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_Hair_Standard_03.glb', hash: 'QmSqjeHL7mHsJXGDBP4Dk2AUfC9mLKbNdnhUJRrMT2hNzT' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Simple Hairstyle' },
          { code: 'es', text: 'Corte Sencillo' }
        ],
        thumbnail: 'QmY5K8D9FSLxXRrFQYaBSrCZA3SC4gvi4mcZBQNxuDCkAd',
        image: ''
      },
      {
        id: 'dcl://base-avatars/tall_front_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_TallFront_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_TallFront_01.glb', hash: 'QmQ8zS15AASH4ftKrgnXYYxJWkHpJuXt7oX393ygejvrZN' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['hair', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Pompadour hair' },
          { code: 'es', text: 'Peinado con Jopo' }
        ],
        thumbnail: 'QmVhfhwYaA5xMBGmxSjPWTouXWbBLt23FjkyFPuSRy7QYz',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_african_leggins',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_AfricanLeggings.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_lBody_AfricanLeggings.glb', hash: 'QmWJiYDnp1aeqWRCHydFKZcyT966WWtzA2hgS1E7dkHmpE' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'African Leggins' },
          { code: 'es', text: 'Leggins Africanos' }
        ],
        thumbnail: 'Qmc4W2ENVei6GML7tbJfHodS929prrSrfYPrZtcSvao2aU',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_capris',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_BrownKneesTrousers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_lBody_BrownKneesTrousers.glb', hash: 'QmZvyZs22HHNe2uTLz1uyJCqy4H3zLFQ9MDoiQChbNiLbS' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Brown Capris' },
          { code: 'es', text: 'Capris Marrones' }
        ],
        thumbnail: 'QmRtoZzupmMmaMqcZTHY2dFEaB3duvUymyF5RQyHut6fFU',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_brown_skirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_BrownSkirtDress.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_lBody_BrownSkirtDress.glb', hash: 'QmNhJEozFAz6qihW3fb66UXi5CRmaUTt4cHZ4UXaY4N1xm' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Brown Skirt' },
          { code: 'es', text: 'Falda Marrón' }
        ],
        thumbnail: 'QmbaV3Za1qoaZfvpBWvJbpadysmCW6Wrx3eLdyvJW1KGfG',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_brown_trousers',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_BrownTrousers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_lBody_BrownTrousers.glb', hash: 'QmasEnGYtXn4cqM7642YEGdDU838JqWftE724cLV5tWTs3' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'New Brown Trousers' },
          { code: 'es', text: 'Pantalones Marrones Nuevos' }
        ],
        thumbnail: 'QmWJTsabfYvoyTQ2iEdBSA3cHXjKhjXic6Lg447X9MF3c4',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_country_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_CountryPant.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_lBody_CountryPant.glb', hash: 'QmUu1bMULkwGSKPBuaFt5MxAM8EwRzdN1of3XpNyRUffop' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Country Music Pants' },
          { code: 'es', text: 'Pantalones de Música Country' }
        ],
        thumbnail: 'Qmc2EjNvKHKVufifPetjGwdaKrsQQ2JMjSpbiYqrga5xMy',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_diamond_leggings',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_DiamondLeggings.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_lBody_DiamondLeggings.glb', hash: 'QmaXjTFAFz477xitMpUjqwEdrT4K4rEDLFqLBUgWmpXin4' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Diamond leggings' },
          { code: 'es', text: 'Leggings con Estampado de Diamantes' }
        ],
        thumbnail: 'QmPLa3yda98ZqZzwEc6RogJ1inGnzB4gDMJHKqEm969eyK',
        image: ''
      },
      {
        id: 'dcl://base-avatars/distressed_black_Jeans',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_DistressedBlackJeans.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_lBody_DistressedBlackJeans.glb', hash: 'QmWPqqWzqTkNXP55LbzeT6qSQ1ZmPy29kJebw24ZPq8TMs' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Worn out black Jeans' },
          { code: 'es', text: 'Jeans Gastados Negros' }
        ],
        thumbnail: 'QmeKZCRUWGWV3ZjfB9e6hhxcEuojiyKHUMv9BypMQjEWPB',
        image: ''
      },
      {
        id: 'dcl://base-avatars/elegant_blue_trousers',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_ElegantBlueTrousers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_lBody_ElegantBlueTrousers.glb', hash: 'QmQsjSAjT8UKHm4ByvMs7qzzritZ3b3iwiEFXbUBKnzoQB' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Elegant Blue Trousers' },
          { code: 'es', text: 'Pantalones Elegantes Azules' }
        ],
        thumbnail: 'QmNmNzupz9qpqWFQUYNU5d4imNMBmRCPrSacdNRC71X1ei',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_jeans',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_Jeans_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_lBody_Jeans_01.glb', hash: 'QmNXsTqL9MS24Wae8N7VXi2u4YrDnvaiZRiK8U29DZAC2z' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Jeans' },
          { code: 'es', text: 'Jeans' }
        ],
        thumbnail: 'QmYMjpmNQ7NMennyfXAgkkgwuT9iATj2zbkad4vU2jjxP3',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_red_comfy_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_RedComfortPants.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_lBody_RedComfortPants.glb', hash: 'QmSj3SjGiKzU4eE48WkqrpuUgNBpd8o8VYoZyELU8k7nxo' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Comfy Pants' },
          { code: 'es', text: 'Pantalones Cómodos Rojos' }
        ],
        thumbnail: 'QmdpyYqcGu94eZYfv5CCspQMdecmDJ7HhtPxiPzdpUJnza',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_red_modern_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_RedModernPant.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_lBody_RedModernPant.glb', hash: 'QmdyzVmYWU4wy65snD2oAfiL6pM9J8U2fDXGjUxeWh8MBP' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Modern Pants' },
          { code: 'es', text: 'Pantalones Modernos Rojos' }
        ],
        thumbnail: 'QmRDEejvaxqERWvfMTec5YbMw1Kj2XwzKKwKhhHXa6Cgbu',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_roller_leggings',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_RollerLeggings.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_lBody_RollerLeggings.glb', hash: 'QmNhgXc165pD4TabUWJWdaLUWxAP3Z4gYt1LHs1PFDYLnp' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Roller leggings' },
          { code: 'es', text: 'Roller leggings' }
        ],
        thumbnail: 'QmetLTR7WXRCK7L3DcSyGBsw5gAAUAFHqH4QA8sBWQZYtx',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_school_skirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_SchoolSkirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_lBody_SchoolSkirt.glb', hash: 'QmVCxKXwz2cJbXhpdsaqhXYJt1RnQshDP5Mw51Nku7BS2q' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'School Skirt' },
          { code: 'es', text: 'Falda Escolar' }
        ],
        thumbnail: 'QmTwAHSG1dzA4hZWaJLbnVriY5yQNQJR3Uwnwxcbb8kPh9',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_short_blue_jeans',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_ShortBlueJeans.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_lBody_ShortBlueJeans.glb', hash: 'QmaWd6PnB5QZD8N68LN7P572dMy9aGezzywSDLRGDR2U8u' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Short Blue Jeans' },
          { code: 'es', text: 'Pantalones Cortos de Jean' }
        ],
        thumbnail: 'QmR5vnGNjEiqNEQpgUsQUm5uVmFrXgjbSWay3HpZ8Nqu7v',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_short_colored_leggins',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_ShortColoredLeggings.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_lBody_ShortColoredLeggings.glb', hash: 'Qma6DGbvpFs3RMCX1YHW6dgWv5ZfajLppeZu71nbnsYUNa' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Short Colored Leggins' },
          { code: 'es', text: 'Leggins Cortos de Colores' }
        ],
        thumbnail: 'QmTYqTBz3YcpY9446GyAhpdft5krDDoTLgCpomkUtQFev8',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_sport_shorts',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_SportShorts.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_lBody_SportShorts.glb', hash: 'QmPSoPKhjVfP4ayXi7CvBWJ1kwkFW1YStqoNdMbUBz8Tvv' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Sport Shorts' },
          { code: 'es', text: 'Pantalones Cortos Deportivos' }
        ],
        thumbnail: 'QmX8zVCQaYXagCSz9LUGUMAAHNXoSicaAgNp5qjy9AvDqr',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_stripe_long_skirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_StripeLongSkirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_lBody_StripeLongSkirt.glb', hash: 'Qmc3AHhCmEiFaNrJYG8Xcktjc4tesJB1T5rEWz2wGswZyZ' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Long Striped Skirt' },
          { code: 'es', text: 'Falda Larga a Rayas' }
        ],
        thumbnail: 'QmVLrKMvrf5mSF9bW2K7m1DuUGHU47ooASBKW3nzkSMA8K',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_stripe_white_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_StripeWhitePant.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_lBody_StripeWhitePant.glb', hash: 'QmYbLMCgH12LrfH65ZywK5UvPAWpKDeb5u7pcv3fDExLvt' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Striped White Pants' },
          { code: 'es', text: 'Pantalones Blancos con Rayas' }
        ],
        thumbnail: 'Qmc4As7x1y9uRTyPi7g1eLv6no9Sj2Bu1hwEuCv5re3CrR',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_yoga_trousers',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_YogaTrousers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'F_lBody_YogaTrousers.glb', hash: 'QmU5oGymPixHbNmRuWzeE8X9hkf5oCgN27zJomHDsNH5AD' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Yoga Trousers' },
          { code: 'es', text: 'Pantalones de Yoga' }
        ],
        thumbnail: 'QmP1UcvkYBGKVDdoxBZrRVd6M4CrTcuvsPUxDhEwtTt9hD',
        image: ''
      },
      {
        id: 'dcl://base-avatars/basketball_shorts',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_BasketballShorts.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_lBody_BasketballShorts.glb', hash: 'QmXHjcnhAFvoUYaTaKPfvgDZchk7gK1nctr3jazyMrgGJp' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Basketball Shorts' },
          { code: 'es', text: 'Pantalones Cortos de Basket' }
        ],
        thumbnail: 'QmWHgLzb9ihPCnmTqrRNFZnLfbhCCPXPBYZjgmXukZjF5L',
        image: ''
      },
      {
        id: 'dcl://base-avatars/brown_pants_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_BrownPants.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_lBody_BrownPants.glb', hash: 'QmYzk189Fx1rdQ9ZGLfcaVVSYVuPR1RBeXLQjhnViQQiL2' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Brown Pants' },
          { code: 'es', text: 'Pantalones Marrones' }
        ],
        thumbnail: 'QmSKpoitKYoMHWqvXJGBmtS5ohSsnUeTBWH5D6RwXf5YQV',
        image: ''
      },
      {
        id: 'dcl://base-avatars/cargo_shorts',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_CargoShorts.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_lBody_CargoShorts.glb', hash: 'QmeHwoDFZm1KaAVE1JnPsBNY7gk1NiLfMpSFhZZvEYBibb' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Cargo Shorts' },
          { code: 'es', text: 'Pantalones Estilo Cargo' }
        ],
        thumbnail: 'QmT5PT3Qz2y9mdy3BnMtMsPDHLBtTDeV2o7kynBzqs5JdA',
        image: ''
      },
      {
        id: 'dcl://base-avatars/comfortablepants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_ComfortablePants.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_lBody_ComfortablePants.glb', hash: 'QmZF9pVCDy3ZE9HPLufQDFVsNbnEigm5qBvDDFGu1rwZAf' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Comfortable Pants' },
          { code: 'es', text: 'Pantalones Cómodos' }
        ],
        thumbnail: 'QmT5fgxVWRp1bFoPBoRwMrA1VHL39RLszZn3UtvMrZ32sG',
        image: ''
      },
      {
        id: 'dcl://base-avatars/grey_joggers',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_GreyJoggers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_lBody_GreyJoggers.glb', hash: 'QmWNqkuhiCL6YHRvbwYniwqYPC6yvm62cHyky8eUaP2aRM' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Grey Joggers' },
          { code: 'es', text: 'Pantalones de Chándal' }
        ],
        thumbnail: 'QmSWqcYdV5dvWSg6MCp4YaPB8vpTPUQjdNmVghdH86znTF',
        image: ''
      },
      {
        id: 'dcl://base-avatars/hip_hop_joggers',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_HipHopJoggers.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_lBody_HipHopJoggers.glb', hash: 'QmRg7DGviK3WzwVe2tVnWJQEGKs9BcFGiorciYrcGxxUVs' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Hip Hop Joggers' },
          { code: 'es', text: 'Pantalones de Hip Hp' }
        ],
        thumbnail: 'QmNZR5tqNjwFKN3fdfVfn5SvJQ2GycGw679XgjiwFzPT4W',
        image: ''
      },
      {
        id: 'dcl://base-avatars/kilt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_Kilt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_lBody_Kilt.glb', hash: 'QmXt5rfRf2UbMhLSX8sw8WL8KjT4hXen98R2TT64CfSLby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Kilt' },
          { code: 'es', text: 'Falda escocesa' }
        ],
        thumbnail: 'QmUpEQD67ACX8iKERbxNLxfre8uSLzm2th4pXEnG8DxKN5',
        image: ''
      },
      {
        id: 'dcl://base-avatars/brown_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_LongPants_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_lBody_LongPants_01.glb', hash: 'QmVBByC2XaeoxY9oowr9r9N3NX8DyMfVdT5vHe7ZYbjYbN' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Brown Pants' },
          { code: 'es', text: 'Pantalón Marrón' }
        ],
        thumbnail: 'QmYfiy3eC93vpXLN66rtRue4EnHTyeg27KAoqskTKrbsuX',
        image: ''
      },
      {
        id: 'dcl://base-avatars/oxford_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_OxfordPants.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_lBody_OxfordPants.glb', hash: 'QmUy1ZaLszmQa2iXFcZ15g1FrBStgLpRatCyktUx3SnTuf' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Oxford Pants' },
          { code: 'es', text: 'Pantalón Oxford' }
        ],
        thumbnail: 'QmWrU6iuCdENNXsU2cYbjbccJ7KJhycy7NBMS43w6ygVf1',
        image: ''
      },
      {
        id: 'dcl://base-avatars/safari_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_SafariPants_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_lBody_SafariPants_01.glb', hash: 'QmWh7ozpiuW2iiMg2R64KPC7DYEBxdub3KLiT6C5FvF9zV' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Safari Pants' },
          { code: 'es', text: 'Pantalón de Safari' }
        ],
        thumbnail: 'QmVKKgRLYPjttEtZKZ75iHbarBuxmzpT1pPEjbMaxQFYDm',
        image: ''
      },
      {
        id: 'dcl://base-avatars/jean_shorts',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_ShortPants_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkin.png', hash: 'QmU3omTrtqYBtdHcC2FZjYvyLmVVmBKaaKa52CmBF2bn9U' },
              { file: 'M_lBody_ShortPants_01.glb', hash: 'QmVkCWsHTN5v7xxHYVqWTFcqgEz3LWNYzGdxL4zDXX83oT' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Jean Shorts' },
          { code: 'es', text: 'Pantalón Corto de Jean' }
        ],
        thumbnail: 'QmXyVbRThTcy9iS8UaVGy6g6NsHZto5ksygXxgM9ZjTMF1',
        image: ''
      },
      {
        id: 'dcl://base-avatars/soccer_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_SoccerPants.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_lBody_SoccerPants.glb', hash: 'Qmc22wZHxCdZDRVMbbtZoJ1eyQrSbSwNUAiZJd3adPhdLa' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Soccer Pants' },
          { code: 'es', text: 'Pantalón Corto de Fútbol' }
        ],
        thumbnail: 'QmY8mAhs2UU7f62F9zECXmrn26LViaJ6A1eo2iNUmfesdt',
        image: ''
      },
      {
        id: 'dcl://base-avatars/pijama_pants',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_StripePijama_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'M_lBody_StripePijama_01.glb', hash: 'QmUi62XgKyZodUQtPPUtD7Y9hG63ZJ57GjcAtF2sNodp74' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'Male', 'Man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Striped Pajama Pants' },
          { code: 'es', text: 'Pantalón de Pijama Rayado' }
        ],
        thumbnail: 'Qma7tcbf8dq1uiuYXZcvceMGv9BHLrKLnVCpqEoFre5SPP',
        image: ''
      },
      {
        id: 'dcl://base-avatars/striped_swim_suit',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_StripeSwimSuit.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_lBody_StripeSwimSuit.glb', hash: 'QmY7cwEUxGTwcHnNpGdrWM5BMG59YvV3NGzWxjTJfLLe2k' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'Male', 'Man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Striped Swimsuit' },
          { code: 'es', text: 'Traje de baño rayado' }
        ],
        thumbnail: 'QmY91X4FxW6ejnpA1osEwPCPeZrWY2NFfDbKBDPAQX5GBp',
        image: ''
      },
      {
        id: 'dcl://base-avatars/swim_short',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_SwimShort.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_lBody_SwimShort.glb', hash: 'QmPDtmPvTgTxPx3TGd9Dy2GXL2FTGdakePUcCVMTZGfrCf' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'Male', 'Man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Swim Short' },
          { code: 'es', text: 'Traje de baño Corto' }
        ],
        thumbnail: 'QmbCFrY7f2baZnaYPHYP8vbgrGpG8e8LK25Qnh2Psf51tr',
        image: ''
      },
      {
        id: 'dcl://base-avatars/trash_jean',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_TrashJeans_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkin.png', hash: 'QmU3omTrtqYBtdHcC2FZjYvyLmVVmBKaaKa52CmBF2bn9U' },
              { file: 'M_lBody_TrashJeans_01.glb', hash: 'QmNMnCA1fAWVevwM4FiEJ1Ef7ca7Awn7BY6XF49RzGvpqP' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['bottom', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Trash Jeans' },
          { code: 'es', text: 'Jeans Usados' }
        ],
        thumbnail: 'QmQU66we1cS5ohVS8riUj99oSH6ejmqod7jBSatyWEcnuA',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_00',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_00.png',
            contents: [{ file: 'F_Mouth_00.png', hash: 'QmdG4aqspAAksNFyr68sz8XqFcN2ynENaQovJ2BBsyWtD2' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_00' },
          { code: 'es', text: 'f_Mouth_00' }
        ],
        thumbnail: 'QmbEvia7NzapnaWWPkyYzz35aNvb7TKBsJcZfWnTcoZMRE',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_01.png',
            contents: [{ file: 'F_Mouth_01.png', hash: 'QmZo5JVQTyR9Ua5VcEXn2e47KKW99L6cYuj15zFWMya7dR' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_01' },
          { code: 'es', text: 'f_Mouth_01' }
        ],
        thumbnail: 'Qmcd9AxqxRcXGU7S9kASh5x7jXqoAnKoK8D1FGHdUPprcx',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_02.png',
            contents: [{ file: 'F_Mouth_02.png', hash: 'QmV8rtHCvztYEPHA78BybsGsbqder8nTm2uezdnHfNz6Tv' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_02' },
          { code: 'es', text: 'f_Mouth_02' }
        ],
        thumbnail: 'QmU1rXTtAhjPZz4xQKwnp8AHGCHAg8ajtHjCRsfXDoomgi',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_03',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_03.png',
            contents: [{ file: 'F_Mouth_03.png', hash: 'QmepuvwanooeXqaNcLxGuWe92yc4Z1STbw3MRwUm8C45tw' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_03' },
          { code: 'es', text: 'f_Mouth_03' }
        ],
        thumbnail: 'Qmc9UTEoZpweg4snnysQY8ti6NTcsSsb2RSiJG6d1ZuzUK',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_04',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_04.png',
            contents: [{ file: 'F_Mouth_04.png', hash: 'QmdFDnVsaCySMW8pumn9qFBairTwxLFqbmuZJVEZx8VWgL' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_04' },
          { code: 'es', text: 'f_Mouth_04' }
        ],
        thumbnail: 'QmbUcY3Myps4RmrNXvBJFAEWw6tCNk7RZXzFDe1YYUfohs',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_05',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_05.png',
            contents: [{ file: 'F_Mouth_05.png', hash: 'Qmf16cQidTNPwViHR2A9YmSbSYXFz7dP7YYxdsNwwHF3fG' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_05' },
          { code: 'es', text: 'f_Mouth_05' }
        ],
        thumbnail: 'QmaMGqPMtGb3kPzLcm9RYQUFUVpdhrJJVFBDtYryd7i1Sp',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_06',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_06.png',
            contents: [{ file: 'F_Mouth_06.png', hash: 'QmVq2nQJSDBVotXazfu1TkCiZs8RPnTG2hxvgusjCKEnFd' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_06' },
          { code: 'es', text: 'f_Mouth_06' }
        ],
        thumbnail: 'QmeUcLZJcD1V6i7EqeESmZTvVYEfXVofTt4Moyy4azTQPL',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_07',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_07.png',
            contents: [{ file: 'F_Mouth_07.png', hash: 'QmRrKyedET3zXWQVnEb4NYasBQAbucHrbU16Mtj5uD2Lge' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_07' },
          { code: 'es', text: 'f_Mouth_07' }
        ],
        thumbnail: 'QmRQ6f3dP886Bax5ywxgfWsmmPhonLdXKSUqYieTrEToqw',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_mouth_08',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mouth_08.png',
            contents: [{ file: 'F_Mouth_08.png', hash: 'Qmc7LQtTLzecFH2g2eJRcgZnBUjE9VYWS6agJWvGv4amvT' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'f_Mouth_08' },
          { code: 'es', text: 'f_Mouth_08' }
        ],
        thumbnail: 'QmWgfEmq4WWep4PGVQf2sVzPhZFBGbMNtND2ojC1oAC379',
        image: ''
      },
      {
        id: 'dcl://base-avatars/mouth_00',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Mouth_00.png',
            contents: [{ file: 'M_Mouth_00.png', hash: 'QmQZ6MAyHpGaPpntHJnU3x4o2dUvz5KhvNtWbbzvbAE34T' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mouth_00' },
          { code: 'es', text: 'Mouth_00' }
        ],
        thumbnail: 'QmTyFPAEEDDrXfmY8MpLJFUQDCDpwg4EJMArDDLJANmHsr',
        image: ''
      },
      {
        id: 'dcl://base-avatars/mouth_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Mouth_01.png',
            contents: [{ file: 'M_Mouth_01.png', hash: 'QmbmS6hy2CyiB3XxDATfJ96pF9ge1KqNYEgeU8kSyUQiRj' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mouth_01' },
          { code: 'es', text: 'Mouth_01' }
        ],
        thumbnail: 'QmS24KW6GyKXb32kgrHabAwDRgX4JZsNbWoyyCAdn5aoJr',
        image: ''
      },
      {
        id: 'dcl://base-avatars/mouth_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Mouth_02.png',
            contents: [{ file: 'M_Mouth_02.png', hash: 'QmPeDgQ6TgKiK8er9H8udHUhggBf1gKtrBrYh5m6StjufB' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mouth_02' },
          { code: 'es', text: 'Mouth_02' }
        ],
        thumbnail: 'QmYfm4JMs4WYprDucHjQnN7bKnkZZJoXWvuGVmMbLMfK5v',
        image: ''
      },
      {
        id: 'dcl://base-avatars/mouth_03',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Mouth_03.png',
            contents: [{ file: 'M_Mouth_03.png', hash: 'QmVkJS2PgS1EZXJS76JYY2jCYbj5mCrJCWieZCg3B9RK2B' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mouth_03' },
          { code: 'es', text: 'Mouth_03' }
        ],
        thumbnail: 'QmVXAg1szbKwJnv6xEHfPq389QeKMpWjAXLKQVA8r3KtXF',
        image: ''
      },
      {
        id: 'dcl://base-avatars/mouth_04',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Mouth_04.png',
            contents: [{ file: 'M_Mouth_04.png', hash: 'Qmckm8DfKGjVRWV8SbLmdE6La6AZ3ybEFYZBX7jtpp4Gim' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mouth_04' },
          { code: 'es', text: 'Mouth_04' }
        ],
        thumbnail: 'QmST9uYnYT87XKVjYPAJre4PPiGPvYH6bdmvEb3WND9wNj',
        image: ''
      },
      {
        id: 'dcl://base-avatars/mouth_05',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Mouth_05.png',
            contents: [{ file: 'M_Mouth_05.png', hash: 'QmdHVjonR2TNxQ5azeMYem3F3v9yViqkTUYyVHM9EsmfWj' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mouth_05' },
          { code: 'es', text: 'Mouth_05' }
        ],
        thumbnail: 'QmRU6Vco3R5tmHcezXRwERnHWob1zn2YZwRSWjknV53T4L',
        image: ''
      },
      {
        id: 'dcl://base-avatars/mouth_06',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Mouth_06.png',
            contents: [{ file: 'M_Mouth_06.png', hash: 'QmRm3yzEmQACsKmiFm1JXmmpb62cgCFCoNKtprHty6kcnF' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mouth_06' },
          { code: 'es', text: 'Mouth_06' }
        ],
        thumbnail: 'QmUMiuooASGNmR2ZfdRoN5EreHsm9MTvfJr6nEr7WjAsM9',
        image: ''
      },
      {
        id: 'dcl://base-avatars/mouth_07',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Mouth_07.png',
            contents: [{ file: 'M_Mouth_07.png', hash: 'QmXTvQ7rj1pZWsbad67xD9iC9XA8ZhvkvhddyET9bHkVXY' }]
          }
        ],
        type: 'wearable',
        category: 'mouth',
        tags: ['face', 'mouth', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Mouth_07' },
          { code: 'es', text: 'Mouth_07' }
        ],
        thumbnail: 'QmSNVsEckjqKhUmADf9eiHyLf1mTdUttemBJsYL8QdDkg7',
        image: ''
      },
      {
        id: 'dcl://base-avatars/blue_bandana',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'BlueBandana.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'BlueBandana.glb', hash: 'Qma4gTPkjhTdXk5yBFah8rYUHsG1yCBaadPtfLs32DCXr7' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'BlueBandana.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'BlueBandana.glb', hash: 'Qma4gTPkjhTdXk5yBFah8rYUHsG1yCBaadPtfLs32DCXr7' }
            ]
          }
        ],
        type: 'wearable',
        category: 'tiara',
        tags: ['accesories', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Blue Bandana' },
          { code: 'es', text: 'Bandana Azul' }
        ],
        thumbnail: 'QmahWKqgJud9386Vxw53KeViHzELhxsNMjko8ERskR5x1y',
        image: ''
      },
      {
        id: 'dcl://base-avatars/diamond_colored_tiara',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Tiara_ColoredDiamond.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Tiara_ColoredDiamond.glb', hash: 'QmYq2MH5THhhCWSErEmLADt3qxCMM6bYLv3zTPDvcjrvUb' }
            ]
          }
        ],
        type: 'wearable',
        category: 'tiara',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Diamond Colored Tiara' },
          { code: 'es', text: 'Tiara Colorida de Diamantes' }
        ],
        thumbnail: 'QmWy9NM3UsCSYDjrbDEY79LaAVkdQpzyrET2HwzL2grBRu',
        image: ''
      },
      {
        id: 'dcl://base-avatars/green_stone_tiara',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Tiara_GreenStone.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Tiara_GreenStone.glb', hash: 'QmNUgXHirqnLWXKgd2LpeL6aoZTk7uKdKWE8FvNjRKopZB' }
            ]
          }
        ],
        type: 'wearable',
        category: 'tiara',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Green Gemstone Tiara' },
          { code: 'es', text: 'Tiara con Gema Verde' }
        ],
        thumbnail: 'QmQmxYiXQeWs4hGepMeuU6rdHhx7QEtBWsPkwNb3MHaPvL',
        image: ''
      },
      {
        id: 'dcl://base-avatars/laurel_wreath',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Tiara_LaurelWreath.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Tiara_LaurelWreath.glb', hash: 'Qmdy3UrRGBaZxbBf78rXK7zevW4eFRvJWrn1TivWAdoWjP' }
            ]
          }
        ],
        type: 'wearable',
        category: 'tiara',
        tags: ['accesories', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Laurel Wreath' },
          { code: 'es', text: 'Corona de laureles' }
        ],
        thumbnail: 'QmWv8hCX5L1Z1gVDm8qeGLKb5gQLSncmS54L5fumw5hxWV',
        image: ''
      },
      {
        id: 'dcl://base-avatars/red_bandana',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'RedBandana.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'RedBandana.glb', hash: 'QmTQaVXvE4QSUsQ9m4QNtpNu7cBdrJ4kH6LESR4B8Nahxa' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'RedBandana.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'RedBandana.glb', hash: 'QmTQaVXvE4QSUsQ9m4QNtpNu7cBdrJ4kH6LESR4B8Nahxa' }
            ]
          }
        ],
        type: 'wearable',
        category: 'tiara',
        tags: ['accesories', 'male', 'man', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Bandana' },
          { code: 'es', text: 'Bandana Roja' }
        ],
        thumbnail: 'QmVoEgBeCp24ud5TkApArWccxawTcsoxY81vizNMMXGE4p',
        image: ''
      },
      {
        id: 'dcl://base-avatars/bee_t_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_BeeTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_BeeTShirt.glb', hash: 'QmTA6EHFiqBPuT8ESafQGyp2VnKXrnYV8faBWpvmbeM6v5' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Bee T-Shirt' },
          { code: 'es', text: 'Remera con Estampado de Abeja' }
        ],
        thumbnail: 'QmZJFQrujoxYX7kbFwJ6xQDJMSwD8tmQXTm6tZy1uFpJfp',
        image: ''
      },
      {
        id: 'dcl://base-avatars/black_top',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_BlackTop.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_BlackTop.glb', hash: 'QmRCHh9iaSZy2GsbBHfywRENN6YkqKGArm85EXyvvvkpz2' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Black Top' },
          { code: 'es', text: 'Top Negro' }
        ],
        thumbnail: 'QmfLjjfVvfNnPpEeJS5bwKDLZEwtbuDXajZWpHzciSBU8D',
        image: ''
      },
      {
        id: 'dcl://base-avatars/simple_blue_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_BlueBasicTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_BlueBasicTShirt.glb', hash: 'QmYBJCzbMGHNQJoE6DA1XZgMKGEFggHFgHsF6LJY9JVDN4' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Simple Blue T-shirt' },
          { code: 'es', text: 'Camiseta Azul' }
        ],
        thumbnail: 'QmSEuj7SRe5nLYdbcQXxbaCFGeU7fQrhSVuYcKwHedLThk',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_blue_elegant_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_BlueElegantShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_BlueElegantShirt.glb', hash: 'QmdEokScwThby3RDwRwxr7h6oGvoTKJ57jLpZZ26xF9WW1' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Blue Elegant Shirt' },
          { code: 'es', text: 'Camisa Azul Elegante' }
        ],
        thumbnail: 'QmRqT8pDgCjw3kSUxijP53nxznNEj89KdBq32DX33e6MQF',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_blue_jacket',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_BlueJacket.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_BlueJacket.glb', hash: 'QmTzJp7RYEevQjge43Y9k3nf3DdyKady5AxniPToh9cpMS' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Blue Jacket' },
          { code: 'es', text: 'Chaqueta Azul' }
        ],
        thumbnail: 'QmZBu4APNb4cUc6LqUPyDZfQq8RLVSog2WpG8VfrezZzEA',
        image: ''
      },
      {
        id: 'dcl://base-avatars/brown_sleveless_dress',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_BrownSlevelessDress.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_BrownSlevelessDress.glb', hash: 'Qme2B2gKazkDumtPB1ixvGxxgaXHSxTWjoNWZ4f6DnK8Kh' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Brown Sleeveless Dress' },
          { code: 'es', text: 'Vestido Marrón Sin Mangas' }
        ],
        thumbnail: 'QmShWNGSsztStJHpzmgHNcxtdwFVN6P8QAEsESKJXF8b45',
        image: ''
      },
      {
        id: 'dcl://base-avatars/croupier_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_CasinoShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_CasinoShirt.glb', hash: 'QmRh8Jq1aQ9enXTt7Z4rxmH1pTh7Qxd9FtWSnZLQsQVUsq' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Croupier Shirt' },
          { code: 'es', text: 'Camisa de croupier' }
        ],
        thumbnail: 'QmcLf7BpuDcH3DxvYVa98hLAJqea3LzTZpGJJfgiUZvhg4',
        image: ''
      },
      {
        id: 'dcl://base-avatars/colored_sweater',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_ColoredPullover.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_ColoredPullover.glb', hash: 'QmZAoaE1dGz8uxyGfP5syZ2Yav7676hTB6ydzULZzaT7Wa' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Colored Sweater' },
          { code: 'es', text: 'Sweater de Colores' }
        ],
        thumbnail: 'QmYhGoxpW1w1cvprzot5erNn1XJjADZMRGFYFcPDTgb9Jn',
        image: ''
      },
      {
        id: 'dcl://base-avatars/elegant_striped_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_ElegantStripeShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_ElegantStripeShirt.glb', hash: 'QmR6xosqNRbJbWpArUh8rBm6GecDhZ7H3bPProGpzm2YEj' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Elegant Striped Shirt' },
          { code: 'es', text: 'Remera Elegante a Rayas' }
        ],
        thumbnail: 'QmY5Wb2ToLFUXhcR3zktieqjC3PXVbiV5u6bgcgW7FD4yL',
        image: ''
      },
      {
        id: 'dcl://base-avatars/simple_green_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_GreenBasicTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_GreenBasicTShirt.glb', hash: 'QmaKurN81Zs78MvxoqyNoSHz1gnScpP5VETj6oAeEzf7J2' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Simple Green T-Shirt' },
          { code: 'es', text: 'Camiseta Verde' }
        ],
        thumbnail: 'QmUmAR9du38GmxARdPuhyEu8csgwWnnXDtgXM2BXwmqZnr',
        image: ''
      },
      {
        id: 'dcl://base-avatars/light_green_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_LightGreenShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_LightGreenShirt.glb', hash: 'QmPouH9WV9DgdefPRVDWVLUzTyY1gLkc6kyL2QaNXcevrv' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Light Green Shirt' },
          { code: 'es', text: 'Camisa Verde Claro' }
        ],
        thumbnail: 'QmfA6cgRuSGAzEf8KGkBSgxeU3TWodFx4xjg3ScvkemZko',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_pink_simple_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_PinkBasicTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_PinkBasicTShirt.glb', hash: 'QmdTkU9M7HCQ26WegiAfy3vJuGsvWDhbQuWJgS35VMvjKP' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Simple Pink T-Shirt' },
          { code: 'es', text: 'Camiseta Rosa Simple' }
        ],
        thumbnail: 'QmZZnC5z4cxcsecrBtAxgBf2mCL1iSzfRnRxUYdh94pn17',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_pride_t_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_PrideTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_PrideTShirt.glb', hash: 'Qmcfj9jLCaxuo9ddMpdxEaH4AwdWUxj7Z27TwMV4zDAjCk' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Gay Pride T-Shirt' },
          { code: 'es', text: 'Remera del Orgullo Gay' }
        ],
        thumbnail: 'QmXp9QiDF1v3bYxRbPrk8vE84iSR461CPAdCf9gt1GsQbw',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_red_simple_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_RedBasicTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_RedBasicTShirt.glb', hash: 'QmejWxVGuM7gfuLiks5wKUGXTUw5Nzwfi4GtKtK4Qs3oJE' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Simple T-Shirt' },
          { code: 'es', text: 'Camiseta Roja Simple' }
        ],
        thumbnail: 'QmZ28L2a9YKKVakmbkimLGRn5ACw2W5qgduThwH9tjWMm8',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_red_elegant_jacket',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_RedElgantJacket.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_RedElgantJacket.glb', hash: 'QmQu8qh6TypCjtSurxgBppp9sga4JMWR4GLJFQWpi7F7Ye' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Elegant Jacket' },
          { code: 'es', text: 'Chaqueta Elegante Roja' }
        ],
        thumbnail: 'QmZqpgmpPJjJ924R6VAoGawAxYgBhpRiEjBZfCAVbBAqex',
        image: ''
      },
      {
        id: 'dcl://base-avatars/Red_topcoat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_RedJacket.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_RedJacket.glb', hash: 'QmddjyfjWfnCKx35FFHYftkNCkAu6yiSZ8ULf972VzsFYU' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Topcoat' },
          { code: 'es', text: 'Top Negro' }
        ],
        thumbnail: 'QmNciypNoX2LMmp3LZMVHGUaCG7dWWWzteH5jxaLwaYV1n',
        image: ''
      },
      {
        id: 'dcl://base-avatars/roller_outfit',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_RollerOutfit.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_RollerOutfit.glb', hash: 'QmZ4HUPRFTR38E2348V9sjLEt1n6ak1vSyCRXSPo2Axq1g' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Roller Skate Outfit' },
          { code: 'es', text: 'Remera de Roller Skate' }
        ],
        thumbnail: 'QmZRPHTmKujbSsYcPuYpLguwMeRFWipcj45gBs61WbhNwa',
        image: ''
      },
      {
        id: 'dcl://base-avatars/school_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_SchoolShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_SchoolShirt.glb', hash: 'QmNNVJPP1DGGDZFUP3P4rgU3KxoKvinKX9kP7TMYJAbhcn' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'School Shirt' },
          { code: 'es', text: 'Camisa Escolar' }
        ],
        thumbnail: 'QmbqWek1Ek8wD9g1VhoKJZq95mk62Tc8kypHBLGpTLQS91',
        image: ''
      },
      {
        id: 'dcl://base-avatars/baggy_pullover',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_SolidPullover.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_SolidPullover.glb', hash: 'Qma49qKaG6g8HkbLnFv2hK8UZDviSWoXG41Abp5DnpNm6k' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Baggy Pullover' },
          { code: 'es', text: 'Suéter de Lana Holgado' }
        ],
        thumbnail: 'QmQeG8bDonxcRKeib5oP3ejZrvy6HaX8d9UDwh7FbsJgjJ',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_sport_purple_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_SportPurpleTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_SportPurpleTShirt.glb', hash: 'QmcJhsj19MXjivm15xZPLfd7wqiX235pfFgpCmx8ZNsDHb' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Purple Sport T-shirt' },
          { code: 'es', text: 'Camiseta Deportiva Violeta' }
        ],
        thumbnail: 'QmQFXJGh4MoccifA8nVbe45HtfRxo2PDU37tAq9UHgrnnA',
        image: ''
      },
      {
        id: 'dcl://base-avatars/striped_top',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_StripeTop.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_StripeTop.glb', hash: 'Qmanvbs8yq7GZyAHdgUpMhCnRFLMLTzgxPcd5yf7JgApNB' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Striped Top' },
          { code: 'es', text: 'Top a Rayas' }
        ],
        thumbnail: 'QmWoiL1GL8eXFUiiPhfZgf7Mtd46i6x3FM1oqaXLQ4pZcD',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_sweater',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_Sweater_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_Sweater_01.glb', hash: 'QmUog3pt3CHwGDCB2QXbnKKY1GoBsJo71L8qdzV9u133Ph' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Yellow Sweater' },
          { code: 'es', text: 'Suéter Amarillo' }
        ],
        thumbnail: 'QmcBB9qUtjzmu4qLyqBJ5oAd5dqCw5tgVUwfpG2NYsWESk',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_body_swimsuit',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_Swimsuit_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_Swimsuit_01.glb', hash: 'QmSMKNyyXmVk78Kaok2h3mR6EvWxYT2spoCetNYtSDZo6V' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Swimsuit' },
          { code: 'es', text: 'Traje de Baño' }
        ],
        thumbnail: 'QmQ3a3Gim1TcboAgHfrtLD6JfiVfGTciVYnQTwvrYZ3LPM',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_white_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_WhiteShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_WhiteShirt.glb', hash: 'QmNUJnRAHwJQarfnQD242JfqzTbN3sFpQs1S5b6KWgQjBr' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'White Shirt' },
          { code: 'es', text: 'Camisa Blanca' }
        ],
        thumbnail: 'QmPyuhk6Y12pQN83KSY3aFYiX7LWZXDTuTpiVQ35BQnDfk',
        image: ''
      },
      {
        id: 'dcl://base-avatars/white_top',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_WhiteTop.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_WhiteTop.glb', hash: 'QmTrtEadB5NJv2r2kJ6EFngW1SLyviM6YV6wQBrX4LpyPw' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'White Top' },
          { code: 'es', text: 'Top Blanco' }
        ],
        thumbnail: 'QmNYWuCyPqaQ8aW7mSUHRyZtegpZs2oCeYv32Jo93wycrW',
        image: ''
      },
      {
        id: 'dcl://base-avatars/f_simple_yellow_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_YellowBasicTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_YellowBasicTShirt.glb', hash: 'QmZaBqDeVkRwKQah1UGMw956G2miJkVYATVqXC1NndfPxh' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Simple Yellow T-shirt' },
          { code: 'es', text: 'Camiseta Amarilla' }
        ],
        thumbnail: 'QmNM2n5AcmqBFXSK23GQBJwxddgW3PmDuDf1FfLbe6FoA1',
        image: ''
      },
      {
        id: 'dcl://base-avatars/lovely_yellow_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_YellowLovelyTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmVGmsPD6KkjuFiz3C1UES7MQVWdVUeVDzGuUupZLVGgHJ' },
              { file: 'F_uBody_YellowLovelyTShirt.glb', hash: 'QmQkwPGPnZqWx39KMFkQ2vKkmj5vm4deNbYM1fnkzurdiF' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'female', 'woman', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Lovely Yellow Shirt' },
          { code: 'es', text: 'Adorable Camisa Amarilla' }
        ],
        thumbnail: 'QmTwuuhRrkTGcC91hDD2QjsmbciMwWpdiejqpDEGrVeoV5',
        image: ''
      },
      {
        id: 'dcl://base-avatars/black_jacket',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_BlackJacket_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_BlackJacket_01.glb', hash: 'QmRLF2GTcc2wBmQqoVz2wgtfjty5BZg54mscgGdi5KvYqm' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Black Jacket' },
          { code: 'es', text: 'Chaqueta Negra' }
        ],
        thumbnail: 'QmRnUCD6wQQVmMGHoahYBM1FRXujGGiBGuMUmTGgFqAmFW',
        image: ''
      },
      {
        id: 'dcl://base-avatars/blue_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_BlueTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_BlueTShirt.glb', hash: 'QmQg11EPKSf9FMxnWndKssTPmrv4MyMaLxCNGWDcSLWwRV' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Blue T-Shirt' },
          { code: 'es', text: 'Remera Azul' }
        ],
        thumbnail: 'QmYMLHYbxkGyGzxbPD5po7KqCJUuyYcryrrzDb7cwTFhrU',
        image: ''
      },
      {
        id: 'dcl://base-avatars/elegant_sweater',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_ElegantSweater.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_ElegantSweater.glb', hash: 'QmUBunybTbVpRbZD8AFiSFPotzWr6ajuBSJ1CUMLZBxUXx' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Elegant Sweater' },
          { code: 'es', text: 'Sweater Elegante' }
        ],
        thumbnail: 'QmVvCiaoKHBwRT2HNfj4nxGA9DkU6f4EUSiWTX6XqQCGK7',
        image: ''
      },
      {
        id: 'dcl://base-avatars/green_square_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_GreenSquareShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_uBody_GreenSquareShirt.glb', hash: 'QmeySwHDQyrPsd5z8HfSrvWDjxSV4xRoWt63kPkJBxj2fs' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Green Square Shirt' },
          { code: 'es', text: 'Camisa a Cuadros Verde' }
        ],
        thumbnail: 'QmXjZD3fRpPnVqdnjkHM8jDvcxm1iMaMavDQS6NZ7Ym6Qn',
        image: ''
      },
      {
        id: 'dcl://base-avatars/green_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_GreenTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_GreenTShirt.glb', hash: 'QmfKssVuMmVWiF1Qy7xrNUdukinmfoovsCGNnuEJVczWEs' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Green T-Shirt' },
          { code: 'es', text: 'Remera Verde' }
        ],
        thumbnail: 'Qmayvq1F3tFDoC5dLdpGR6LmKkhzTANjnungxmhGYVBBKw',
        image: ''
      },
      {
        id: 'dcl://base-avatars/green_hoodie',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_Hoodie_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_Hoodie_01.glb', hash: 'QmSHjzk2Uc2QU5dMx1WZEWxqi6Zrijy8FhHZeatjDApS2e' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Green Hoodie' },
          { code: 'es', text: 'Sudadera Verde con Capucha' }
        ],
        thumbnail: 'QmQUxvePLJ4udd5hqFHBrUUy1DFLPVX8Vp2iuBCxCixnVm',
        image: ''
      },
      {
        id: 'dcl://base-avatars/pride_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_PrideTshirt_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_uBody_PrideTshirt_01.glb', hash: 'Qmd88kK8fbtkn39MezciToXg6v7QkyuEabE22KTo7GDwz7' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Gay Pride T-Shirts' },
          { code: 'es', text: 'Remera del Orgullo Gay' }
        ],
        thumbnail: 'QmT2XgK25VVWsn8D75tf45QGEca5uxBrft8UfsLsyMCtjn',
        image: ''
      },
      {
        id: 'dcl://base-avatars/puffer_jacket_hoodie',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_PuffJacketHoodie_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_PuffJacketHoodie_01.glb', hash: 'QmPiQh6WNf8pwdqKbvJQc8xSkzTA59HZN964s5P85zTEL2' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Puffer Jacket Hoodie' },
          { code: 'es', text: 'Chaqueta Mullida con Capucha' }
        ],
        thumbnail: 'QmPDUM6R8wxwZQgr9n41r2ib9jSRA4hbJnz9xE1jXKqMK1',
        image: ''
      },
      {
        id: 'dcl://base-avatars/puffer_jacket',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_PuffJacket_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_PuffJacket_01.glb', hash: 'QmfQEUbvJzVKAhSfd5qQaXineoywFpDw66jAt3oCBWnuKL' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Puffer Jacket' },
          { code: 'es', text: 'Chaqueta Mullida' }
        ],
        thumbnail: 'QmRAjm9Xf4U1qb3L33t5YeRdMqj2vNh5oKWAwYAGXdyEPQ',
        image: ''
      },
      {
        id: 'dcl://base-avatars/red_square_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_RedSquareShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_uBody_RedSquareShirt.glb', hash: 'QmddvidheXyoS9yYmbG9McGD2nk389rY1VDxfrAWa1jJvW' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red Square Shirt' },
          { code: 'es', text: 'Camisa a Cuadros roja' }
        ],
        thumbnail: 'QmTgBRu7rfTUAVM9kcjrb9FEed4P7CRax82ckfge24eYwJ',
        image: ''
      },
      {
        id: 'dcl://base-avatars/red_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_RedTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_RedTShirt.glb', hash: 'QmekeLFLmyqL1jcaTzye3iBcJ1t8QZpXMrj3Ngcug3LJZ2' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Red T-Shirt' },
          { code: 'es', text: 'Remera Roja' }
        ],
        thumbnail: 'Qmd2aY5Y1CH3d6cXY4MLHvoVtfJBWtxPmy97q5Wa9sPzjG',
        image: ''
      },
      {
        id: 'dcl://base-avatars/safari_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_SafaraiShirt_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_SafaraiShirt_01.glb', hash: 'QmStGBtyb2YWa1XPSpTt3KbDyyCzgDJzwS8Gevvkjb9ySU' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Safari Shirt' },
          { code: 'es', text: 'Camisa de Safari' }
        ],
        thumbnail: 'QmavuFXoUKNJMdhWcWsSQyD8bpRVJAHaH8jDgHmHkgzx1H',
        image: ''
      },
      {
        id: 'dcl://base-avatars/sleeveless_punk_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_SleevelessPunkShirt_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_SleevelessPunkShirt_01.glb', hash: 'QmaALYRP5h9prKXWouq11tzpdmXhmV1oqeJa61dUMJtwS7' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Sleeveless Punk shirt' },
          { code: 'es', text: 'Musculosa Punk' }
        ],
        thumbnail: 'QmNR4SSLiWxNBhLorg9VH6NkdxZsQ2dAnhXDyn3mkj4NHf',
        image: ''
      },
      {
        id: 'dcl://base-avatars/soccer_shirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_SoccerTshirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_SoccerTshirt.glb', hash: 'QmVgjLpbCvU2EaLNFb2HZncErskzULXi9X2CubCjABV1JT' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Soccer T-Shirt' },
          { code: 'es', text: 'Remera de Fútbol' }
        ],
        thumbnail: 'Qmb33D4NrEgodWcoUsghyncxjVfostrkhW23v3SkCwMEtX',
        image: ''
      },
      {
        id: 'dcl://base-avatars/sport_jacket',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_SportJacket.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_SportJacket.glb', hash: 'QmQ1mfZjT95ChiNFmY8CMGdKvYzqPJqVjQkqep3RhpzZBp' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Sport Jacket' },
          { code: 'es', text: 'Chaqueta Deportiva' }
        ],
        thumbnail: 'Qmdvv3NzARqT8trCvgPu7tW1Htp6PAj3VNRWG9W8e4c5xa',
        image: ''
      },
      {
        id: 'dcl://base-avatars/striped_pijama',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_StripePijama_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_StripePijama_01.glb', hash: 'QmXpfwSYEJd9FGJCbziipwjPHBTGvwNnfNwTdpi2rX2Hcf' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Striped Pajama Shirt' },
          { code: 'es', text: 'Remera de Pijama Rayada' }
        ],
        thumbnail: 'QmUJ8TbqKByjr3LkEebxeS2AKkzDBXd4Cq6vaPiEVaZVNy',
        image: ''
      },
      {
        id: 'dcl://base-avatars/striped_shirt_01',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_StripedShirt_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_StripedShirt_01.glb', hash: 'QmQMTyHCMwLz8336rGy4nSPhGxwK7N8tvq47s8bUpusyWL' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Green Striped Shirt' },
          { code: 'es', text: 'Remera Rayada Verde' }
        ],
        thumbnail: 'QmbjYwVLU5qUuhjnrVYYiWSQCv91odUxaP7hAaSjctZPAm',
        image: ''
      },
      {
        id: 'dcl://base-avatars/m_sweater',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_Sweater_01.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_Sweater_01.glb', hash: 'QmR5vHPpp8TdT7BRGUTbwbrk8ZEB5xcbnhn84wuwymta6M' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Blue and Red Sweater' },
          { code: 'es', text: 'Suéter Azul y Rojo' }
        ],
        thumbnail: 'QmcBpQ6afDr1ZJSbQ4b9k5VyCpSoAWFXHBUx4qoF2f9HBs',
        image: ''
      },
      {
        id: 'dcl://base-avatars/m_sweater_02',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_Sweater_02.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_Sweater_02.glb', hash: 'Qmdgxzapgg9SF7rmj2aRyJHFAGyWcxkzeUbgEjxnDf1hgU' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Christmas Sweater' },
          { code: 'es', text: 'Suéter de Navidad' }
        ],
        thumbnail: 'QmcX2PysCv6331Lys462bZtCPP535wquiy8MsAmoU7U9bP',
        image: ''
      },
      {
        id: 'dcl://base-avatars/turtle_neck_sweater',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_TurtleNeckSweater.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_TurtleNeckSweater.glb', hash: 'QmUMeDePeNhy1EKMC8MSeJiaQwJNbCCtpBW9YUkjH2GiPn' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'Turtle Neck Sweater' },
          { code: 'es', text: 'Sweater con Cuello de Tortuga' }
        ],
        thumbnail: 'Qmd9VHYDVR3Tinya33rFhNay9a4YPiFwid2Np8nDtZN4pv',
        image: ''
      },
      {
        id: 'dcl://base-avatars/yellow_tshirt',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_YellowTShirt.glb',
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmdyPfi4sRYU3eMFWxeXArnCeQ78sZw7oSGxFrntAPqHhy' },
              { file: 'M_uBody_YellowTShirt.glb', hash: 'QmVWbNJWCNCimS8pvS2isATak2gk573DgTvGXb4b6zxvMD' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['top', 'male', 'man', 'base-wearable'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/base-avatars',
        i18n: [
          { code: 'en', text: 'YellowT-Shirt' },
          { code: 'es', text: 'Remera Amarilla' }
        ],
        thumbnail: 'Qme7Dps7EwMtjLssfAWfuQ8mkofRLfG9NY5TTuTKXJy9Bb',
        image: ''
      }
    ]
  },
  {
    id: 'halloween_2019',
    wearables: [
      {
        id: 'dcl://halloween_2019/bride_of_frankie_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_Spider.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earrings_Spider.glb', hash: 'QmYHXAKgu2T1eJoduxHfcU1rfrWawYJhAsHyBvPr9WiNZh' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'exclusive', 'earrings', 'halloween', 'spider', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Spider Earrings' },
          { code: 'es', text: 'Pendientes de Araña' }
        ],
        thumbnail: 'QmSfe6dHYXAvsbMBTNGWwHtsr2aBoMjUrCW2TeLbCPw4oZ',
        image: 'QmZsnoehbtLDfk2FKbpDAk8nFatknSFQFqphF6RQu3Nkd7',
        replaces: [],
        hides: [],
        description: "It may be someone else's head but that doesn't mean you can't look good",
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/bee_suit_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earring_BeeSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earring_BeeSuit.glb', hash: 'QmTGyieAqLDpECUGuNt3sAazw4dq2j3ARpTPncyMMeoJaR' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'exclusive', 'earrings', 'halloween', 'bee', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bee Earrings' },
          { code: 'es', text: 'Pendientes de Abeja' }
        ],
        thumbnail: 'QmYf2C2hw5FmJF4iwroGHZyQ3rPAzf2xrGYmdvJZz3BPmR',
        image: 'QmWuRnK8DdKQCFUGBa1XZkvT11DbariHmEg96kDUBZfwjN',
        replaces: [],
        hides: [],
        description: 'Do bees even have ears? They do now!',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/jester_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earring_Jester.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Earring_Jester.glb', hash: 'QmYvEXtfPWXCWafqLLomhd9PebXgQhdtSkhWjQPZuxdAZs' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'exclusive', 'earrings', 'halloween', 'jingle', 'jester', 'bells', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Jingle Bells Earrings' },
          { code: 'es', text: 'Pendientes de Cascabel' }
        ],
        thumbnail: 'QmaeAAt1pf7ozMABNeRimTvH9Fc4FDE6w13PrBr2WGbf2J',
        image: 'QmZJYmcYLRavRXQmQJbEpXegaRKgdDs4Fy2GP9Bk5Huro5',
        replaces: [],
        hides: [],
        description: 'Shiny lobe danglers to distract from that last terrible gag',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/spy_suit_eyewear',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Eyewear_Spy.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Eyewear_Spy.glb', hash: 'QmSS7ayoqygJDaab1hxSi6M9GBvyJuaKJmveiQ8RXWgqNp' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'exclusive', 'earrings', 'halloween', 'spy', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Spy Suit Eyewear' },
          { code: 'es', text: 'Anteojos de Espía' }
        ],
        thumbnail: 'QmR2gAbsCNLyAHj5XH7nmN7QubQzxFzoHvy2naij3PPTyr',
        image: 'QmbPCNGhLNjU5Tf3Pity2EmddLUd4kKcFERKa1nRH68EVo',
        replaces: ['mask', 'helmet'],
        hides: [],
        description: "So stylish it's a shame you're undercover",
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/bee_suit_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_BeeSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_Feet_BeeSuit.glb', hash: 'QmbDiQhmeHQeCeohB1BXvWa5NBD19yJHiatgHN6fyxoz8a' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bee Suit Shoes' },
          { code: 'es', text: 'Zapatos de Abeja' }
        ],
        thumbnail: 'QmWTpghyHtHKWTwbFKTx4ddn7yzEZTmykHZJqFkqkjvzdE',
        image: 'QmaF7y1Knwu6HscNqYP8smZR7NsDAGhHwV99o9CrodhM56',
        replaces: [],
        hides: [],
        description: 'Do bees have feet? They do now!',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/bride_of_frankie_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_BrideOfFrankie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_Feet_BrideOfFrankie.glb', hash: 'QmYi81XdCvpTrpBpeupUtvLu1gAePdcaTvCMToVC4EzgBZ' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bride of Frankie Shoes' },
          { code: 'es', text: 'Zapatos de la  Novia de Frankie' }
        ],
        thumbnail: 'QmcVZS5CXEKfK1BkcNkpS3BqqpU2rvhg8asr6F33doT8mb',
        image: 'QmTGPDo3bArMKiujGcziTbXro3Kmp5V1Ynt2EX2Nk52Zvg',
        replaces: [],
        hides: [],
        description: 'Lurch around slowly in comfort',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/creepy_nurse_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_CreepyNurse.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'Blood.png', hash: 'QmQdvgkQnqUcJkKhGp3XnjNZ7Hs6ps1Zj9a1KV7ftVHGZD' },
              { file: 'F_Feet_CreepyNurse.glb', hash: 'QmNcsW7fZcF8FmfVXpyv6ERdFAD7e1RBzBtCTFZMmU3FBL' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Creepy Nurse Shoes' },
          { code: 'es', text: 'Zapatos de Enfermera Siniestra' }
        ],
        thumbnail: 'QmZgsgy6tHbs1c9duqihm9ncGYvd7TyZi8KD6ymsfnDJMC',
        image: 'QmPMTxx6FxrJLy6yRA55ueTqe6ZUpfTBj7GJ3agv8jTNuK',
        replaces: [],
        hides: [],
        description: 'Blood-splattered but also comfortable and hard-wearing for those long shifts on the ward',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/jester_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_Jester.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_Feet_Jester.glb', hash: 'QmRJN9dj6jWq6AWF6z8s9gg2wpKqjMC4wT1uyKd78rrAJi' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Jester Shoes' },
          { code: 'es', text: 'Zapatos de Bufona' }
        ],
        thumbnail: 'QmZ6UqN2g9ciS17ak3odr9pS568Q7H1oGHnHyHm5RX2tqX',
        image: 'QmTwgUDDk4RTcFrPSNFiZSoT6w8oxP3LzJUVAi6RAG5q8f',
        replaces: [],
        hides: [],
        description: 'Run from dissatisfied royalty in style',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/spy_suit_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_Spy.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_Feet_Spy.glb', hash: 'QmT8miu75TAytvduvoUXLFswo7GsfXSYBkA4sJpedwfBMt' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Spy Suit Shoes' },
          { code: 'es', text: 'Zapatos de Espía' }
        ],
        thumbnail: 'QmaSacF69ZazS8PjwXH46Xa6WAs2WFj95K1D9agFF75av1',
        image: 'QmPQs4ZsQnPeSsBgn8HbmyMWWZnSgS9LPS1FJDTzjmYZ5o',
        replaces: [],
        hides: [],
        description: 'Extra quiet, extra light and extra grip',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/witch_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Feet_Witch.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_Feet_Witch.glb', hash: 'Qmc7ch8upqSjQDRhuuQbeN4KQrKh5BhTvFLYy6CEg2924E' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Witch Shoes' },
          { code: 'es', text: 'Zapatos de Bruja' }
        ],
        thumbnail: 'QmZvWZPUUgF3svwk7fN94g4srS33cgXALGBxUy1rHaEoea',
        image: 'QmT6zgwPD2X9v26nnWkJXuFMtT933Pv5pbsmFArXvGzWUL',
        replaces: [],
        hides: [],
        description: "An excellent covering for your cloven demon' hooves",
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/sad_clown_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_Clown.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Feet_Clown.glb', hash: 'QmSQjjP22YasSLxBhN2e6GsLHBQ4R3LMxxTHPSxnmNUwPW' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Sad Clown Shoes' },
          { code: 'es', text: 'Zapatos de Payaso Triste' }
        ],
        thumbnail: 'QmPPj6v7RYedDn7NUchDgZtdUrkPavFdjo3BktJQGYDnyr',
        image: 'QmS7pqsdR1UHpP2S1vHrVSsxAYAUKvZqRC14TjNwRx3YvK',
        replaces: [],
        hides: [],
        description: 'To go with your sad clown body',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/frankie_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_Frankie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_Feet_Frankie.glb', hash: 'QmSjxy33ZUoHyQ83M6wxE95qhWVgMDKDFFqpD1CNM89b3k' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Frankie Shoes' },
          { code: 'es', text: 'Zapatos de Frankie' }
        ],
        thumbnail: 'QmXDj73FMWHT742ZkKmWmqdoLyzyty6KxbC1dedWE84woL',
        image: 'QmVZYRHcJVHem4VTFvWpv4kav6xRYYka4x2HqS3iTcDcw7',
        replaces: [],
        hides: [],
        description: 'Lurch around slowly in comfort',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/skeleton_suit_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_SkeletonSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'M_Feet_SkeletonSuit.glb', hash: 'QmbHq6uc1U7oBardCHUB6qUyzzdHyf6GJFzGf7N1eZJfTf' },
              { file: 'Suits_v2.jpg', hash: 'QmegQy6FDykUwwwqqHdcvXzSB3cs4DGtDvVaWp7gxjJgNv' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Skeleton Suit Feet' },
          { code: 'es', text: 'Pies de Esqueleto' }
        ],
        thumbnail: 'QmQuUNtiwwE1Gfzw7QKDpEJ4V8htnw2dbKHG6yJpe1z9QH',
        image: 'QmdyWW9J3AsAsRUZLfxTFDifwLzhFCQZwPoyCMyfAggjfK',
        replaces: [],
        hides: [],
        description: 'Connected to the shin bones...',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/vampire_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_Vampire.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Feet_Vampire.glb', hash: 'QmQ21g3BkBQq1hwbQmJDp8qDCfMSdr5gNB365WdQ34CM1b' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Vampire Shoes' },
          { code: 'es', text: 'Zapatos de Vampiro' }
        ],
        thumbnail: 'QmfC9k9K7AWKC42GDZ45yqi6grPqyzHdFwhyotppHWq6fC',
        image: 'QmeoFTCm9pdCAgwoX2eFEBCyBE3TNYPLELiounFELzFEDo',
        replaces: [],
        hides: [],
        description: 'Not that you’ll need them with all that floating around',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/zombie_suit_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Feet_Zombie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_Feet_Zombie.glb', hash: 'QmSvbScd1WFhfZv9zjFUdrgLsEwQ5w7eXhQHXuo5wytZFu' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Zombie Boots' },
          { code: 'es', text: 'Botas de Zombie' }
        ],
        thumbnail: 'QmbssPLoy2m7h5bwLYR4tuGfKJUCUByF7mY24B1eie8VMD',
        image: 'QmeQ9VUb1ZsirCtkaTLYHd1xXFHkHMjczhouee8HpvPemV',
        replaces: [],
        hides: [],
        description: 'Used (and a little bit rancid) but good to go!',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/bride_of_frankie_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_BrideOfFrankie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_BrideOfFrankie.glb', hash: 'QmUTUQhXmfxcsmUmtDBjnwktLXLHfsxE65JAoMAzeGPMct' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['accesories', 'exclusive', 'hair', 'jester', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bride of Frankie Hair' },
          { code: 'es', text: 'Peinado de la novia de Frankie' }
        ],
        thumbnail: 'QmaNDBkHirKnBQgGpR8Jukk88piCjEGgR99eaoADk2A4wV',
        image: 'QmX9nminqSbUQGQ1roSkDmdw87f79k3Pa3N7iKEtuEjJx9',
        replaces: ['hat', 'helmet'],
        hides: [],
        description: 'Engineered for style',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/jester_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Jester.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_Jester.glb', hash: 'QmdEqSqj8FDiEwTPNkhNxgzDm75nXPGL7WkGTWzQav8ekM' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['accesories', 'exclusive', 'hair', 'jester', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Jester Hair' },
          { code: 'es', text: 'Peinado de Bufona' }
        ],
        thumbnail: 'QmQdvUYTzVA5uUkyf3wQEpkg9ER2WnkB6v1YmKMeUxNTFk',
        image: 'QmRiNoperx7q1cBPtCP8uc3tVj1AJiiPKvuwbtPoHHxqbj',
        replaces: ['hat', 'helmet'],
        hides: [],
        description: 'Made from the hair of actual jesters!',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/spy_suit_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hair_Spy.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hair_Spy.glb', hash: 'QmPNYGYMi4wRB7EuYwR9WfZ6MyJmJ2uVJ1fhxKuGCAq975' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['accesories', 'exclusive', 'hair', 'ponytail', 'spy', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Pony Tail Hair' },
          { code: 'es', text: 'Peinado de Cola de Pony' }
        ],
        thumbnail: 'QmZG5Kfa67HwocXvWCdooygLQi4irnTw3n2jJQoPY3PT19',
        image: 'QmTW7FDtR5G7NPB7f7ND9tVakrz8NfXG4Hm2o3rNC9f5pq',
        replaces: ['hat', 'helmet'],
        hides: [],
        description: 'Tightly cropped for extra sleekness',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/vampire_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hair_Vampire.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hair_Vampire.glb', hash: 'QmcWWozAKB52n6hfPBTQQTAgHJMNH5vCBcEtXZ8hU8z4Ze' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hair',
        tags: ['accesories', 'exclusive', 'hair', 'vampiro', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Vampire Hair' },
          { code: 'es', text: 'Peinado de Vampiro' }
        ],
        thumbnail: 'QmbNt5CvzVs3fi9xeU2onebtZL1nLkjeBARX9JPM8q9GB1',
        image: 'QmbrwaboL3fw4Rqtuc3PH3hfViThNbdfQ6ETHYBvWHbU8V',
        replaces: ['hat', 'helmet'],
        hides: [],
        description: 'Classic slick style befitting the Prince of Darkness',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/creepy_nurse_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_CreepyNurse.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Blood.png', hash: 'QmQdvgkQnqUcJkKhGp3XnjNZ7Hs6ps1Zj9a1KV7ftVHGZD' },
              { file: 'F_Hat_CreepyNurse.glb', hash: 'QmYX8rQTgBcvkGnm2GTpyiycFtbLHtAifKsH6WRHdVRJY1' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'mexican', 'hat', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Creepy Nurse Hat' },
          { code: 'es', text: 'Sombrero de Enfermera Siniestra' }
        ],
        thumbnail: 'QmbDP5FsvjM5TagHbQfwQwmFZY5yjWYUUZ5jTUhvKv8RFF',
        image: 'Qmc217vA3ZD2SPHnBwSd9a78uH6cUq1SAvGiJQ99J3gCUQ',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: "Even if you're a murderous psycho nurse you need to stay smart",
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/witch_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_Witch.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Witch.glb', hash: 'QmUyKAVjfj4u2UDD9tq8WFFqdYnAPcQ9v8akn6kuzhVzPD' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'halloween', 'hat', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Witch Hat' },
          { code: 'es', text: 'Sombrero de Bruja' }
        ],
        thumbnail: 'QmQpx8oSHdBohCPZGBBQndyzG8qsHaL8WUGDnbEpEr3LqB',
        image: 'QmWjcpdntT15diSkPUc3y9CpKRV7zYUwDKbWyyiQRqduva',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'Witch hat? This one',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/frankie_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Hat_Frankie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Hat_Frankie.glb', hash: 'QmR8HLzwKr63xc4BvLfzJpFDnrUqK77phcch3ME3spjZhm' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'hat', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Frankie Hat' },
          { code: 'es', text: 'Sombrero de Frankie' }
        ],
        thumbnail: 'QmYSkVuZCAvdGa2gRXeNsk8G37XhkRgqLk4GwzdaC82UWg',
        image: 'QmPHahsXfYifzDDh2tM5QjHaZp99DZoJLhXD7n8tYmC1HM',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'With that legendary high hair',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/mexican_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_Mexican_01.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Mexican_01.glb', hash: 'QmbLZGCoeMs3pqZ77KLT2mK6aN4J5W32kHPWwN6tAeaiJt' },
              { file: 'M_Hat_Mexican_01.glb', hash: 'QmeR2k9KX3NQk2qzdmbewi92pYZvppXMXdPXHdiK1nYuvm' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_Mexican_01.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Mexican_01.glb', hash: 'QmbLZGCoeMs3pqZ77KLT2mK6aN4J5W32kHPWwN6tAeaiJt' },
              { file: 'M_Hat_Mexican_01.glb', hash: 'QmeR2k9KX3NQk2qzdmbewi92pYZvppXMXdPXHdiK1nYuvm' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'mexican', 'hat', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Mexican Hat' },
          { code: 'es', text: 'Sombrero Mexicano' }
        ],
        thumbnail: 'QmVTsiv2AcyowsZZuo9aoqfdL5VbiZZjeawK1pwbKEjcL8',
        image: 'QmZeDzyMKY5i5t1mWyhKj8vwpvA2maqHGuJENwYi88ymMR',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'Óraleeee',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/mariachi_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_Mexican_02.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Mexican_02.glb', hash: 'QmWstFA4xpKJajzj8KgfVbAhkopRPpGP8UzyxSBpCzwy37' },
              { file: 'M_Hat_Mexican_02.glb', hash: 'QmXzbqGteTPmtgYmdcZWTennF5kSbzAjnp5UirVLUU9ubP' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_Mexican_02.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Mexican_02.glb', hash: 'QmWstFA4xpKJajzj8KgfVbAhkopRPpGP8UzyxSBpCzwy37' },
              { file: 'M_Hat_Mexican_02.glb', hash: 'QmXzbqGteTPmtgYmdcZWTennF5kSbzAjnp5UirVLUU9ubP' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'mexican', 'hat', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Mariachi Hat' },
          { code: 'es', text: 'Sombrero Mariachi' }
        ],
        thumbnail: 'Qmad3ZzsthdnAWN8EorMb3kZWmgv97zpg3XXh7ewoS2jg7',
        image: 'QmcgqVkwygPns8jji8SxaCnX9a8uSUBipycVtk2dP68B7Q',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'Guitar not included',
        rarity: 'swanky'
      },
      {
        id: 'dcl://halloween_2019/classic_top_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_TopHat01.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_TopHat01.glb', hash: 'QmcfbgcPFSNzMuUNZAnXb6LdYLMuZUBtVHHZEwf9jdshVy' },
              { file: 'M_Hat_TopHat01.glb', hash: 'QmTuLdfBXYKgVbZW7dLowmo5Zo9qfZ5ZM1CFaNBuYWG7i5' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_TopHat01.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_TopHat01.glb', hash: 'QmcfbgcPFSNzMuUNZAnXb6LdYLMuZUBtVHHZEwf9jdshVy' },
              { file: 'M_Hat_TopHat01.glb', hash: 'QmTuLdfBXYKgVbZW7dLowmo5Zo9qfZ5ZM1CFaNBuYWG7i5' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'mexican', 'hat', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Classic Top Hat' },
          { code: 'es', text: 'Sombrero de Copa Clásico' }
        ],
        thumbnail: 'QmRqxnetDgNTp6avdMxSj769HnE9M6knVu7Pnb9VrEakN4',
        image: 'QmVqRwiBPR3TVQwfKKgncmxSbChYD8VQCXArnhoHGjfwr3',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'Rabbit not included',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/skeleton_suit_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_SkeletonSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Hat_SkeletonSuit.glb', hash: 'QmZG1kmfHRR2BxgsCz2bdCvoJvGL5r2NCvsBPhnqUbKV7R' },
              { file: 'skullpattern01.jpg', hash: 'QmVQcaFVMaCqsk6NWjhD3jhYp2wvxbBC6j2KJyTWQeXpeE' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'mexican', 'hat', 'halloween', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Skull Mexican Hat' },
          { code: 'es', text: 'Sombrero de Calaveras Mexicanas' }
        ],
        thumbnail: 'QmVDRndmYv9x1Fzj6R6Uf2EvvS2tb7Ay1QcKzeLVTPNhvc',
        image: 'QmTcqkcEca9jx2vE2pfXKxWPiyvcwPW218Estw2qRT8LTq',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: "Now that's one hell of a stylish Day of the Dead hat!",
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/creepy_pumpkin_helmet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Helmet_Pumpkin.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Helmet_Pumpkin.glb', hash: 'QmQttitH7iyZ3wqVYZEjj6M1CmvMSRa9Trx9Zh4LSHB1kD' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Helmet_Pumpkin.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Helmet_Pumpkin.glb', hash: 'QmQttitH7iyZ3wqVYZEjj6M1CmvMSRa9Trx9Zh4LSHB1kD' }
            ]
          }
        ],
        type: 'wearable',
        category: 'helmet',
        tags: ['accesories', 'exclusive', 'halloween', 'helmet', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Creepy Pumpkin' },
          { code: 'es', text: 'Pumpkin Siniestro' }
        ],
        thumbnail: 'Qmav7Rfxi32mrXT8p4Lch3vfvSL6xPAZNjFAw6E5eRWbcy',
        image: 'QmeJ1VvSwsKTM2xMDzRshQfHi9kQQDbypvESV21jDZwCvo',
        replaces: ['tiara', 'hat', 'top_head', 'mask', 'eyewear'],
        hides: ['hair', 'earring', 'facial_hair'],
        description: "Just in case wearing a pumpkin as a helmet wasn't creepy enough for you",
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/happy_pumpkin_helmet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Helmet_Pumpkin2.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Helmet_Pumpkin2.glb', hash: 'QmNPteYvMBGj1n2uMTbBHzX2dNwDBUCrF9ECgPTS9GybyT' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Helmet_Pumpkin2.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Helmet_Pumpkin2.glb', hash: 'QmNPteYvMBGj1n2uMTbBHzX2dNwDBUCrF9ECgPTS9GybyT' }
            ]
          }
        ],
        type: 'wearable',
        category: 'helmet',
        tags: ['accesories', 'exclusive', 'halloween', 'helmet', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Happy Pumpkin' },
          { code: 'es', text: 'Pumpkin Feliz' }
        ],
        thumbnail: 'QmUsitVuBFPqk17U2jEDmCLNo9zeo9qKbTwHUbvw1JjkQh',
        image: 'QmNvxSJjB6Vw2k2RNue3Vzdfd75FP58QsQM5WTZPnvtBZw',
        replaces: ['tiara', 'hat', 'top_head', 'mask', 'eyewear'],
        hides: ['hair', 'earring', 'facial_hair'],
        description: 'Flesh and seeds removed free of charge!',
        rarity: 'swanky'
      },
      {
        id: 'dcl://halloween_2019/undead_pirate_helmet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Helmet_UndeadPirate.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_Helmet_UndeadPirate.glb', hash: 'QmcDE2XirAQS8yJi7i4Z17JoENdJGt1ksXNwV43NK16188' }
            ]
          }
        ],
        type: 'wearable',
        category: 'helmet',
        tags: ['accesories', 'exclusive', 'halloween', 'helmet', 'undead', 'pirate', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Undead Pirate Head' },
          { code: 'es', text: 'Cabeza de Esqueleto Pirata' }
        ],
        thumbnail: 'QmRYJvYgykngBMbd4qGQUyjwpZ8QBPXTdexZJ9wysaxxtF',
        image: 'QmTWrEycp9bdgt1M8Grmti9WnjNS2DtYfg2vLr3PkN3BoP',
        replaces: ['tiara', 'hat', 'top_head', 'mask', 'eyewear'],
        hides: ['hair', 'earring', 'facial_hair', 'head'],
        description: 'Even undead pirates need to look their best',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/bee_suit_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_BeeSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_lBody_BeeSuit.glb', hash: 'QmXfLZHfksp6NgisG3sGgMMLNcWZutmM4wJhHJBeHSV39t' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bee Suit Leggings' },
          { code: 'es', text: 'Calzas de Traje de Abeja' }
        ],
        thumbnail: 'QmY3NRJWuJpmiTQVF624tVzJ2g3gfgBxZHBoCuPraTfpcg',
        image: 'QmaDjMenugg3RNwZnNqvrPVVFLL19iZDPYRax68s5mCDd8',
        replaces: [],
        hides: [],
        description: "You'll be the talk of the hive in these striking black and gold bee leggings",
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/bride_of_frankie_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_BrideOfFrankie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_lBody_BrideOfFrankie.glb', hash: 'QmNfsFG6Wso3wsM8xeJvxJ9tx9PKix4Cs2t9wtRpK1uCXa' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'skirt', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bride of Frankie Skirt' },
          { code: 'es', text: 'Pollera de la novia de Frankie' }
        ],
        thumbnail: 'QmfQsEQjbt3oygqiWDXgKCTyrjQfWtk2f4p7WGaAFHoKwM',
        image: 'QmRj23zH5BFoW5jB7wCPrFufQ95Pas9zUZBGvTATKDDxRf',
        replaces: [],
        hides: [],
        description: 'Doubles as a handy waitress outfit',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/creepy_nurse_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_CreepyNurse.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'Blood.png', hash: 'QmQdvgkQnqUcJkKhGp3XnjNZ7Hs6ps1Zj9a1KV7ftVHGZD' },
              { file: 'F_lBody_CreepyNurse.glb', hash: 'QmYMyWKhRjL6yfsTnCYvsXzv9wjUoaV7Dfg7M4A311q3qr' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'skirt', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Creepy Nurse Skirt' },
          { code: 'es', text: 'Pollera de Enfermera Siniestra' }
        ],
        thumbnail: 'QmeWjA4BcHut3W7st1HWdAtDbHD9KbNqAQoinksGkx4Rcs',
        image: 'QmNVYAtyzhGjHgHTUKhL9raFkxVQu4Dh431SxcXm1HCjKU',
        replaces: [],
        hides: [],
        description: 'With real virtual blood splatters!',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/jester_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_Jester.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_lBody_Jester.glb', hash: 'QmZaKzm2QZzZvbQNtqdb3L7PpRYyLLsug1wXFtgBkqdowd' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'leggings', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Jester Leggings' },
          { code: 'es', text: 'Calzas de Bufona' }
        ],
        thumbnail: 'QmWdesG7sbf5nWicx7iKo7EHPMp7S7qzcsiiXK2S83MPGv',
        image: 'QmSRUBwmfB1zvv2QNNbqTnRYzAEmECREJJciqUE5UUx3Fr',
        replaces: [],
        hides: [],
        description: 'Fits neatly into jester_upper_body',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/spy_suit_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_Spy.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_lBody_Spy.glb', hash: 'QmP1c9iBnaLU16H6mLsPo1VQ8EwfoZUR5Aa6tfU4NzTV58' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'leggings', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Spy Suit Pants' },
          { code: 'es', text: 'Pantalones de Espía' }
        ],
        thumbnail: 'Qmcn2Do2Qmkoq7L1GMrhyWg5qi8nRkizFQRPM4ri8Sr76H',
        image: 'QmWwAPr5VyWCvHB58V91zaHijhxAr6gQ31VQ15PNV3h57e',
        replaces: [],
        hides: [],
        description: 'Form fitting and friction-free material',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/witch_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_Witch.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_lBody_Witch.glb', hash: 'QmerLW5xdsyE1jXRqY3RG7ByLHEjrdNq12Jjgi1ttTM5nY' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'skirt', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Witch Skirt' },
          { code: 'es', text: 'Pollera de Bruja' }
        ],
        thumbnail: 'QmYy7D2aHviz4vyd1uERikt8AXCc5pRUJs5kngz55dMHRy',
        image: 'QmckbGcPbBKWBfnpEYBSKS1dRM47EHw7s8REyFEUqHpuRE',
        replaces: [],
        hides: [],
        description: 'Designed to withstand burnings, drownings and ritual stonings',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/sad_clown_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_Clown.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_lBody_Clown.glb', hash: 'QmWkTq4i63SQNscSzLTCEdop3HBP7vYWkERsNJUtdYxvM1' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'leggings', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Sad Clown Pants' },
          { code: 'es', text: 'Pantalones de Payaso Triste' }
        ],
        thumbnail: 'QmfKft2VdFB2qx9zF5xjAFZ1HAsSZfx5SDns9uKc3SbWUB',
        image: 'QmaASweubXcVg2KbYsALyv6GbNbdp7hkVm4CDFNtPDYL3v',
        replaces: [],
        hides: [],
        description: 'Little known fact: blue, red and gold are the saddest colours',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/frankie_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_Frankie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_lBody_Frankie.glb', hash: 'QmXQQ517KtY7CNyF7frPDpTJzc8Cd8nXxz7bHQxjLE2HTU' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'leggings', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Frankie Pants' },
          { code: 'es', text: 'Pantalones de Frankie' }
        ],
        thumbnail: 'QmUpcekgwaCsoYnC6dVAdqUHwrpC6sjawhJ8qS17mWBz5t',
        image: 'QmZzJkczo4bbNt2hVpyYADJJ6UZ2hYqBXaDef4ETa5raum',
        replaces: [],
        hides: [],
        description: 'Engineered for maximum chills',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/skeleton_suit_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_SkeletonSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'M_lBody_SkeletonSuit.glb', hash: 'QmV5Ru6rd9ANVJDexwVcTBgfGBVLm25GKsAnXT6WA2Wubf' },
              { file: 'Suits.jpg', hash: 'QmcZaXDALViPrCWoSSDwNPD5zWpwAZZVL77d86gDobcW1i' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'leggings', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Skeleton Suit Pants' },
          { code: 'es', text: 'Pantalones de Esqueleto' }
        ],
        thumbnail: 'QmXUWuzuA4JDbEwKiEBA4rApDTJSoYGC5GN2RfeBi8oGoM',
        image: 'QmVhH7eu1aDNXq6kmSyKToWMTtkWZngAy2L6axThJqyqnE',
        replaces: [],
        hides: [],
        description: 'Anatomically correct in a light-wearing, form-fitting design',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/undead_pirate_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_UndeadPirate.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_lBody_UndeadPirate.glb', hash: 'QmRjYdjCzHPiZau6ay1cYt2hUyPfkC2RF7VNvLtqQ3qGMW' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'undead', 'pants', 'pirate', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Undead Pirate Pants' },
          { code: 'es', text: 'Pantalones de Esqueleto Pirata ' }
        ],
        thumbnail: 'QmWNruTnb57hdmSFQ97djgD1SJX3TQ4ZMZfeNB9Q2s7t8C',
        image: 'QmZrVpR95iWTX6hDXMNXn4EkQJgWie3u7DGASjBkxAajqT',
        replaces: [],
        hides: ['feet'],
        description: 'Featuring low rise trousers for maximum comfort',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/vampire_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_Vampire.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_lBody_Vampire.glb', hash: 'Qmf9P9kG89NLLRng3ZDV8gc2aZkunQ9L7UNbjAHboE41Bw' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'Vampire', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Vampire Pants' },
          { code: 'es', text: 'Pantalones de Vampiro' }
        ],
        thumbnail: 'QmYKpsDn9zeN7ktBeQMTXb4aS2WAi7YT6yMhRv7b2eKKZX',
        image: 'QmNfrYPiEEfdeijvFJnSRDLsDAWc1MeACbC3uQXzrrto4U',
        replaces: [],
        hides: [],
        description: 'Tailored trousers with quick-morph bat fabric',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/zombie_suit_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_Zombie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_lBody_Zombie.glb', hash: 'QmPM2RsimL4u5vEXHLXaeEYVJAKymS6b9h2NBkcPPvnmFx' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'halloween', 'pants', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Zombie Suit Pants' },
          { code: 'es', text: 'Pantalones de Zombie' }
        ],
        thumbnail: 'Qmb5mirPv4KZ3qsLr4fGFzH2oRmKWrRf3eWjtH615kCcZU',
        image: 'QmVSvXAivrDSEtzpKau7FkD9FgKXrxmZL2m3Lnx3wk8i4C',
        replaces: [],
        hides: [],
        description: 'When we say suit, we mean suit. Look your zombie best!',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/jester_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Mask_Jester.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Mask_Jester.glb', hash: 'QmXABvGcrLKBg8uDxMXHcMaXXNDgvw1jwVvEarsJWk5P8z' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'jester', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Jester Mask' },
          { code: 'es', text: 'Máscara de Bufona' }
        ],
        thumbnail: 'QmaCQuKj9nbAsEWueAbsJDb8gAyT8rPUTWugWnCxeKpiBz',
        image: 'Qmda5sgk6kYhNZifyBoHWrHxUmp38yCdYqwdqe99oDNyWE',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Disguise your identity when the jokes fall flat',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/cat_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_Cat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Cat.glb', hash: 'QmcRWJp8vfvnNAVzyH3dxAdnUHoAw1zntgtVK6uH71xLNM' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_Cat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Cat.glb', hash: 'QmcRWJp8vfvnNAVzyH3dxAdnUHoAw1zntgtVK6uH71xLNM' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Cat Mask' },
          { code: 'es', text: 'Máscara de Gato' }
        ],
        thumbnail: 'QmR3X7Vr8QKDiukYer2KHxgG7A7tmTrVz8Y9jKNjMRcFXa',
        image: 'QmdbR35g3waFW1Yv2GMtMMGUDWKFy8rNVruaWQGY1MHdDQ',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Do cats have eyebrows? They do now!',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/sad_clown_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_Clown.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Clown.glb', hash: 'QmTNPrXL5Uc2oupzJayKdXjtVVEdgiyauxkJo4vNcMGAfS' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Sad Clown Mask' },
          { code: 'es', text: 'Máscara de Payaso Triste' }
        ],
        thumbnail: 'QmVzVBsF7QsWjToqwsxb6bacvNXUy7xw3EpjiPt9biwkm3',
        image: 'QmNPDxKbPTcP3hKxhNFQYHpUXb7sDgFN84sGe833E155Dr',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Sad, but let’s be honest—still kinda freaky',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/muzzle_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_Muzzle.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Muzzle.glb', hash: 'QmTHGdspd6n49UcE8wghqfwm9nJFgYxtSVDbWrPxzFtMcy' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_Muzzle.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Muzzle.glb', hash: 'QmTHGdspd6n49UcE8wghqfwm9nJFgYxtSVDbWrPxzFtMcy' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Muzzle Mask' },
          { code: 'es', text: 'Bozal' }
        ],
        thumbnail: 'QmNM4UdV1VzdwQaLEmSwzdozCofCQ4aYr35oYAmiL74sRA',
        image: 'Qma2MnP3UNhKh8AbPEVqjzkfmkcA97JmP3SdAJfAyNf76b',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'For that special serial killer in your life',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/funny_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_Skull.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Skull.glb', hash: 'QmambJCFtx3Kvy7TQ9jMM37HuHdCkeAp8QSPdvcvq3ENSr' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_Skull.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Skull.glb', hash: 'QmambJCFtx3Kvy7TQ9jMM37HuHdCkeAp8QSPdvcvq3ENSr' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Funny Skull' },
          { code: 'es', text: 'Calavera Cómica' }
        ],
        thumbnail: 'QmRhft6sMnbZB8qz7ZQA2vCwvkbuLKiS7Vf38i2T4xED2W',
        image: 'QmQ5HKSWxQMMjnsZj4vRPwjAzWYZ1y9WiSStn2PARL7uTs',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'The funny bit is scaring people out of their wits',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/monkey_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_Skull2.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Skull2.glb', hash: 'QmQdYNxdWEBg4ANBRBgGUMzREmqNbdxoRqs4PaT4Pk9u8J' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_Skull2.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Skull2.glb', hash: 'QmQdYNxdWEBg4ANBRBgGUMzREmqNbdxoRqs4PaT4Pk9u8J' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Monkey Skull' },
          { code: 'es', text: 'Calavera de Mono' }
        ],
        thumbnail: 'QmPdcgiN4UGkz5KY681QQHn5UK91dkJ4pmjwRk9SAAXrb3',
        image: 'QmWhYphpVxFB6yszrQwXqmc234qzSDdUn3V9YRRAqDa1tQ',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'No virtual monkeys were harmed in the making of this mask',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/zombie_suit_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_Zombie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Mask_Zombie.glb', hash: 'QmPTtwMZuZrvMMM36Tg7vgRZFoFvneQ6zEq1nwSQPopKsC' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Zombie Mask' },
          { code: 'es', text: 'Máscara de Zombie' }
        ],
        thumbnail: 'QmYYZyAZs5L1tBqNjtp3hzxhE7EXcFPrPZWW29Q1NFQ8F5',
        image: 'QmdH2U7vWUTwK1jJDc3ggmj4pkTFQBznk1ayJxVQnos8NW',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'No hiding from the fact that this is one hideous outfit!',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/floral_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_ddm01.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask1-01.png', hash: 'QmR13dEwDYhAudeoYiYLhYmTjuUphikH494fwC3dnRn6r7' },
              { file: 'Mask_ddm01.glb', hash: 'QmTghQWDmLNwHS1gmhxBeE7so2XR3EHQQdqBNFVHVu2iSw' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_ddm01.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask1-01.png', hash: 'QmR13dEwDYhAudeoYiYLhYmTjuUphikH494fwC3dnRn6r7' },
              { file: 'Mask_ddm01.glb', hash: 'QmTghQWDmLNwHS1gmhxBeE7so2XR3EHQQdqBNFVHVu2iSw' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Floral Skull' },
          { code: 'es', text: 'Calavera Floral' }
        ],
        thumbnail: 'QmRXgHRtyqpCUw7ALKa4tTexx8gbupVwZGbRYFjdsL9Sxg',
        image: 'Qmf15Mh72WMnDuChxfdDckpeS2CVYns8vWy7WirDESoe7e',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Ornate Day of the Dead mask with floral pattern',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/lirio_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_ddm02.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask2-01.png', hash: 'QmfLhAawqLvLUaTkXXuznRYwaWLUS1XVMiYfvxJtYzfFb3' },
              { file: 'Mask_ddm02.glb', hash: 'Qmf51RgyEhriF53oxWuPFTgpsV2Lw32Y23YPQ2vpjaNqsp' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_ddm02.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask2-01.png', hash: 'QmfLhAawqLvLUaTkXXuznRYwaWLUS1XVMiYfvxJtYzfFb3' },
              { file: 'Mask_ddm02.glb', hash: 'Qmf51RgyEhriF53oxWuPFTgpsV2Lw32Y23YPQ2vpjaNqsp' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Lirio Skull' },
          { code: 'es', text: 'Calavera de Lirio' }
        ],
        thumbnail: 'QmNvxaWjxaZQ1R8dY1HwQ1YULbyhCvuLpa9Vp2wz7b2tLJ',
        image: 'Qmcv4GhkJJDHjYnG9qeMJcuVDjWoFtQfMkmuZeJQtn4oHX',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Classic Day of the Dead lily design',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/trippy_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_ddm03.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask3-01.png', hash: 'QmS9AXGUcf6V9RggB78mYa7zKF1jrh18n3N48JmZ6SYtHp' },
              { file: 'Mask_ddm03.glb', hash: 'Qme8Hc86T9sZAYPVd3VyWBUdPEtsYrxqJHg2UKa2GvAGMG' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_ddm03.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask3-01.png', hash: 'QmS9AXGUcf6V9RggB78mYa7zKF1jrh18n3N48JmZ6SYtHp' },
              { file: 'Mask_ddm03.glb', hash: 'Qme8Hc86T9sZAYPVd3VyWBUdPEtsYrxqJHg2UKa2GvAGMG' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Trippy Skull' },
          { code: 'es', text: 'Calavera de Lirio' }
        ],
        thumbnail: 'QmSTaXrFqQSdZoxyNfSuqcgRty6KzEYg16AZEUTjHZQYM2',
        image: 'QmaoXmp6YbWMSbLsRc4L9pM5hTmFhcHDJ74wyC2AybhoSD',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Just in case the other Day of the Dead masks weren’t trippy enough for you',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/diamond_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_ddm04V1.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask4-01.png', hash: 'QmPMyY37V8yiqzffJyLfidcAruQZxffcrPVrC9j5dSEm79' },
              { file: 'Mask_ddm04V1.glb', hash: 'QmNrhQV5xVm4j3pgDamFNEnHPhzZrTbrh4D9URUEYWEn9P' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_ddm04V1.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask4-01.png', hash: 'QmPMyY37V8yiqzffJyLfidcAruQZxffcrPVrC9j5dSEm79' },
              { file: 'Mask_ddm04V1.glb', hash: 'QmNrhQV5xVm4j3pgDamFNEnHPhzZrTbrh4D9URUEYWEn9P' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Diamond Skull' },
          { code: 'es', text: 'Calavera de Diamante' }
        ],
        thumbnail: 'QmTDrHtEm59EtfH4KbiN6gyZ6DCX7VuaDvE67TdLeJLknq',
        image: 'QmVhntusrSFWwACrqraUtfZioaEuSQn821abZi1UoR1XxA',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Ornate Day of the Dead mask with diamond',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/rose_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_ddm04V2.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask4-01.png', hash: 'QmPMyY37V8yiqzffJyLfidcAruQZxffcrPVrC9j5dSEm79' },
              { file: 'Mask_ddm04V2.glb', hash: 'QmZC5mb1PEQYHPmKmV3ew9tzo5AKZ1mai1BbRZrWWdiqbN' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_ddm04V2.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask4-01.png', hash: 'QmPMyY37V8yiqzffJyLfidcAruQZxffcrPVrC9j5dSEm79' },
              { file: 'Mask_ddm04V2.glb', hash: 'QmZC5mb1PEQYHPmKmV3ew9tzo5AKZ1mai1BbRZrWWdiqbN' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Rose Skull' },
          { code: 'es', text: 'Calavera de Rosas' }
        ],
        thumbnail: 'QmfWL7gBJFKcXwTjAP4sdyy33yGLxFB1tYwc8dXEEbYy7s',
        image: 'QmW2DXCtgJcaYV6zkKB6y6xzJ7oYA84iYsUQSoordAJXr7',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Ornate Day of the Dead mask with rose',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/star_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_ddm04V3.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask4-01.png', hash: 'QmPMyY37V8yiqzffJyLfidcAruQZxffcrPVrC9j5dSEm79' },
              { file: 'Mask_ddm04V3.glb', hash: 'QmSws23sjvwDUemKfZo2QMQwcNP3PHGpZAvNHSYFMUSJdW' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_ddm04V3.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask4-01.png', hash: 'QmPMyY37V8yiqzffJyLfidcAruQZxffcrPVrC9j5dSEm79' },
              { file: 'Mask_ddm04V3.glb', hash: 'QmSws23sjvwDUemKfZo2QMQwcNP3PHGpZAvNHSYFMUSJdW' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Star Skull' },
          { code: 'es', text: 'Calavera de Estrella' }
        ],
        thumbnail: 'QmNacApx1xcx4jL9BqPsJHFdLNSXfggzvWSRhWQFf2WDbW',
        image: 'QmVYtqn7Arb9QKDeuBmQXr3tkMhc2AoPahxG3Q7HVMAV3U',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Ornate Day of the Dead mask with star',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/cross_skull_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Mask_ddm04V4.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask4-01.png', hash: 'QmPMyY37V8yiqzffJyLfidcAruQZxffcrPVrC9j5dSEm79' },
              { file: 'Mask_ddm04V4.glb', hash: 'QmVbWJ1kQrbLV5pnoQH6rtnbNeSaRkR4xRuZ29w3PKHsh5' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Mask_ddm04V4.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Ddm_Mask4-01.png', hash: 'QmPMyY37V8yiqzffJyLfidcAruQZxffcrPVrC9j5dSEm79' },
              { file: 'Mask_ddm04V4.glb', hash: 'QmVbWJ1kQrbLV5pnoQH6rtnbNeSaRkR4xRuZ29w3PKHsh5' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'mask', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Cross Skull' },
          { code: 'es', text: 'Calavera de Cruz' }
        ],
        thumbnail: 'QmSTyYrpnvCJJoEugwdaRYU2oJ3g7ezXHSDwsRejZitkGw',
        image: 'QmYqSLBvRH8EezFP9PNz45PuVd5ir79sQGBpw3aqJSgKLv',
        replaces: ['helmet', 'tiara', 'hat', 'eyewear'],
        hides: ['facial_hair'],
        description: 'Ornate Day of the Dead mask with cross',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/bee_suit_top_head',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Tophead_BeeSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Tophead_BeeSuit.glb', hash: 'QmadP7H6aWxQeNioERBJJXUzqRUp5nAZgHV56xj4bbDQVL' }
            ]
          }
        ],
        type: 'wearable',
        category: 'top_head',
        tags: ['accesories', 'exclusive', 'top_head', 'halloween', 'bee', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bee Headband' },
          { code: 'es', text: 'Bincha de Abeja' }
        ],
        thumbnail: 'Qmd2sk8BcDTEr3ovsBBsmq6mJcoEWKJSm8rmytsSKLojtJ',
        image: 'QmUEDx5anvMJZmmswoMRGg2t9Qez7sKFARWDz5Yh5JrCUn',
        replaces: ['helmet', 'hat'],
        hides: [],
        description: 'The cutest way to top off your bee suit. Sadly with no actual antennae functionality',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/bloody_knife_headband_top_head',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'TopHead_Knife.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'TopHead_Knife.glb', hash: 'QmYWsSusoQb59yc7sLdfjyLB2paegjhCRtzrbcU6dQjDHD' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'TopHead_Knife.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'TopHead_Knife.glb', hash: 'QmYWsSusoQb59yc7sLdfjyLB2paegjhCRtzrbcU6dQjDHD' }
            ]
          }
        ],
        type: 'wearable',
        category: 'top_head',
        tags: ['accesories', 'exclusive', 'top_head', 'halloween', 'knife', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bloody Knife' },
          { code: 'es', text: 'Cuchillo sangriento' }
        ],
        thumbnail: 'QmaS59qVqQjPQU4TVZbo2PeVrLXDCAKtvxWXgUcaAVhXMz',
        image: 'QmcRoGDy8go25QHbxSbtoLMGrPfgewUzLttkmNAE9BiJJe',
        replaces: ['helmet', 'hat'],
        hides: [],
        description: '',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/machete_headband_top_head',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'TopHead_Machete.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'TopHead_Machete.glb', hash: 'QmZsFZW6MKS41vdWDHoncN6bvN1ZZaZoXWLT25hAeusABY' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'TopHead_Machete.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'TopHead_Machete.glb', hash: 'QmZsFZW6MKS41vdWDHoncN6bvN1ZZaZoXWLT25hAeusABY' }
            ]
          }
        ],
        type: 'wearable',
        category: 'top_head',
        tags: ['accesories', 'exclusive', 'top_head', 'halloween', 'knife', 'machete', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Machete Headband' },
          { code: 'es', text: 'Bincha de Machete' }
        ],
        thumbnail: 'QmaW2fVKb8YVPXCLkgbSrTAZKExf14mao5t3bZNHSSaVf1',
        image: 'QmcF4QqjUvEcucMBd83ZY6E68Xd62MPvs6Zf91YrXkb2fc',
        replaces: ['helmet', 'hat'],
        hides: [],
        description: "If the knife headband wasn't enough to freak out your friends...",
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/bee_suit_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_BeeSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_BeeSuit.glb', hash: 'QmVE9ui6wuWctLkBuuwEhtGSc2xsvxVzvyXcKjTnEVzzuq' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'upper_body', 'halloween', 'bee', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bee Suit' },
          { code: 'es', text: 'Traje de Abeja' }
        ],
        thumbnail: 'QmdEkKpHVcyzaPy2MJ7BPgRGjKj585TJWMnnqDQH2kcnXT',
        image: 'Qmduyzk5nEKR5oP2MWzgzfqkXVH8midy4PF9GSV2ATaFGy',
        replaces: [],
        hides: [],
        description: "Bees beat their wings at around 230 beats per second. We'll be impressed if you can match this",
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/bride_of_frankie_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_BrideOfFrankie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_BrideOfFrankie.glb', hash: 'QmWUSrezFCw1CwgLWYT4e67MULaouixXkWYzrrySZy6Usf' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'upper_body', 'halloween', 'frankie', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Bride of Frankie Suit' },
          { code: 'es', text: 'Traje de la novia de Frankie' }
        ],
        thumbnail: 'QmP1x3cxYutuoB3m6cH5w6qtefUSRquXaSkczccaDhNQsc',
        image: 'QmU6S6aAB1ZhXP4rcrtmHnyUmaQaqiZLh1Z7anime1BrBi',
        replaces: [],
        hides: [],
        description: 'Doubles as a handy waitress outfit',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/creepy_nurse_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_CreepyNurse.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'Blood.png', hash: 'QmQdvgkQnqUcJkKhGp3XnjNZ7Hs6ps1Zj9a1KV7ftVHGZD' },
              { file: 'F_uBody_CreepyNurse.glb', hash: 'Qmf4C1E1qP19F2wzWaepDEi2htjyfqAgvEHV8gBwe9wpto' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'upper_body', 'halloween', 'nurse', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Creepy Nurse Shirt' },
          { code: 'es', text: 'Camisa de Enfermera Siniestra' }
        ],
        thumbnail: 'QmVDxeeqzJJD3Ki7E5QxSUyT36YCx7tDaeXAQ3aiUu15Vc',
        image: 'QmbVK6wpLHWd8uLNJmAJt1HgKqcSVW5U4DQTXyhxLAiCk1',
        replaces: [],
        hides: [],
        description: 'With real virtual blood splatters!',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/jester_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_Jester.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_Jester.glb', hash: 'QmVE3TAxQ3yJPqqXENRW6cyoM1QdLcAWDRRpqEvzVCSHJ6' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'upper_body', 'halloween', 'jester', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Jester Suit' },
          { code: 'es', text: 'Traje de Bufona' }
        ],
        thumbnail: 'QmRY6VEcUNhBwqgUxyAL9c6WP1kjiPevtuf2HEv6NQt3uu',
        image: 'QmXHD9z6LawStjscLhdQXHLVoxWWmjoARdbNsDdckkhTfX',
        replaces: [],
        hides: [],
        description: 'Makes an excellent platform for jester heads',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/spy_suit_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_Spy.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_uBody_Spy.glb', hash: 'QmekDgdZtNAvBmwM1TMjyhdPJqwNt8qDWm5BiXugwaFg1A' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'upper_body', 'halloween', 'spy', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Spy Suit' },
          { code: 'es', text: 'Traje de Espía' }
        ],
        thumbnail: 'QmWZ1rTKnYPZzC3Rn5448FjruCFW16GvQbTC3qxqj9RDk4',
        image: 'Qmcx7wTBYDCnDnGZA98GJwGBSck7x4Rz5Qbpyy65qFe6f9',
        replaces: [],
        hides: [],
        description: 'Form fitting and friction-free material',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/witch_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_Witch.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_FemaleSkinBase.png', hash: 'QmXBeMAkB4sUFCMy42tGQ9DQZ1HC8VLZ3r4e7p2GdMRudT' },
              { file: 'F_uBody_Witch.glb', hash: 'QmQ4okW5z4UhtT8sKxAAyGsXcRZJHK3hL97UBFdNVXCiCM' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'upper_body', 'halloween', 'frankie', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Witch Suit' },
          { code: 'es', text: 'Traje de Bruja' }
        ],
        thumbnail: 'QmcFJ5xyPGPwGwNLttqSZLxkHCRegecZfPrpuG9Bh3c6VJ',
        image: 'Qma6RMTFsLe4CgG1ogLdzRoNgmX1nKtWSkRBtPbtoAJpju',
        replaces: [],
        hides: [],
        description: 'Designed to withstand burnings, drownings and ritual stonings',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/sad_clown_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_Clown.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_uBody_Clown.glb', hash: 'QmUCkpmy48qSZ1NtxaakPcnJDrFtA8fbqBVEYRpVWjDFBF' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'halloween', 'upper_body', 'suit', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Sad Clown Suit' },
          { code: 'es', text: 'Traje de Payaso Triste' }
        ],
        thumbnail: 'QmTK397dYkoUTGh5vYY4yXPMqCXDwhEWhJg4CJFCBwCi2v',
        image: 'QmRAeXiJwFCr4rSnN5mJhGAeRmWCRDsMimDw8LjzipmqsV',
        replaces: [],
        hides: [],
        description: 'Little known fact: blue, red and gold are the saddest colours',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/frankie_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_Frankie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_uBody_Frankie.glb', hash: 'QmVLqvGqCskxxagHTwecPFgw2bLWMmrgonCmGgGD6EDKFo' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'halloween', 'upper_body', 'suit', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Frankie Suit' },
          { code: 'es', text: 'Traje de Frankie' }
        ],
        thumbnail: 'QmRuQMDgDdt24irRR2wGkoNdK4ZYjfcff3AMCiqomzVkvr',
        image: 'QmWcxcGAakwFzhfZwcdcvdGJiUpXtuKZstPXfm2JJdVoVF',
        replaces: [],
        hides: [],
        description: 'When we say suit, we mean suit. Look your zombie best!',
        rarity: 'epic'
      },
      {
        id: 'dcl://halloween_2019/skeleton_suit_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_SkeletonSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'M_uBody_SkeletonSuit.glb', hash: 'QmSwJaVbkKGyHhXU7bvknpv3qLQX9pU4QXBjHKkPhVDA6e' },
              { file: 'Suits.jpg', hash: 'QmcZaXDALViPrCWoSSDwNPD5zWpwAZZVL77d86gDobcW1i' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'halloween', 'upper_body', 'suit', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Skeleton Suit' },
          { code: 'es', text: 'Traje de Esqueleto' }
        ],
        thumbnail: 'Qmapg51qTzCGHgqLA8z6u44Xnox2AymnWLr52ri23d3JeK',
        image: 'QmVQ6JFA8YuhGKvVWLG9FK3Ce2PQ3CFZuFUU8XvUejbNEQ',
        replaces: [],
        hides: [],
        description: 'Anatomically correct in a light-wearing, form-fitting design',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/undead_pirate_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_UndeadPirate.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_uBody_UndeadPirate.glb', hash: 'QmUzK66sKrA4rkhcmKzmB4GbBDv4JmA7kyc72hyecEpq8c' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'halloween', 'pirate', 'undead', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Undead Pirate Torso' },
          { code: 'es', text: 'Torso de Esqueleto Pirata' }
        ],
        thumbnail: 'QmQ1tPWrmdKhJ6sZYUNNE3cSURs6QTXbxUkgryrUmPmz3W',
        image: 'QmX7PtcA6s618GReYhop4eGHhpXRYa6WhRCGZNxhpEFH1R',
        replaces: [],
        hides: [],
        description: 'Almost a body, but you get the drift',
        rarity: 'mythic'
      },
      {
        id: 'dcl://halloween_2019/vampire_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_Vampire.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'M_uBody_Vampire.glb', hash: 'QmSRFwg33MC4DygafwHuRkKS2zdyYbU8X53KDC6ry1h1bS' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'halloween', 'vampiro', 'suit', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Vampire Suit' },
          { code: 'es', text: 'Traje de Vampiro' }
        ],
        thumbnail: 'Qmb7JqfnDya9JpK6UivBAoTrW6ftrqhcY9gxY3xE8XnKwj',
        image: 'QmWSxvH2TUrC9PoSV9ULtsFUuVMZ9nj9fJqmWKufwLQCdw',
        replaces: [],
        hides: [],
        description: 'Check out that fancy cape!',
        rarity: 'legendary'
      },
      {
        id: 'dcl://halloween_2019/zombie_suit_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_Zombie.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'Avatar_MaleSkinBase.png', hash: 'QmRxKVwraeAq8NwgJ1TM9VnrG4AaQ7HbATxg7BGAVcUhvH' },
              { file: 'Blood.png', hash: 'QmQdvgkQnqUcJkKhGp3XnjNZ7Hs6ps1Zj9a1KV7ftVHGZD' },
              { file: 'M_uBody_Zombie.glb', hash: 'QmNrn8gHqNojSzccyaiS7LH65oZzbUUh1XhCKrrGYAzMQv' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'halloween', 'upper_body', 'suit', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/halloween_2019/',
        i18n: [
          { code: 'en', text: 'Zombie Suit' },
          { code: 'es', text: 'Traje de Zombie' }
        ],
        thumbnail: 'QmT11nZYsEpck2GdKJngivpRRNpViQ72CdrwpLcQyxwyLU',
        image: 'QmX57jLLgDAUE487HyLFaThFAEysfc2ZVuHTXNurqSp18S',
        replaces: [],
        hides: [],
        description: 'When we say suit, we mean suit. Look your zombie best!',
        rarity: 'epic'
      }
    ]
  },
  {
    id: 'xmas_2019',
    wearables: [
      {
        id: 'dcl://xmas_2019/snowflake_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_Snowflake.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_Earrings_Snowflake.glb', hash: 'QmYujnXUzgQuS82xZxRSKiG1GNShbAQAM985vSR6w1H63b' },
              { file: 'M_Earrings_Snowflake.glb', hash: 'QmaHNpUAWtZYcADWcmEoXj1AebifS4Ssj8aXxN3FW7uJXR' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Earrings_Snowflake.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_Earrings_Snowflake.glb', hash: 'QmYujnXUzgQuS82xZxRSKiG1GNShbAQAM985vSR6w1H63b' },
              { file: 'M_Earrings_Snowflake.glb', hash: 'QmaHNpUAWtZYcADWcmEoXj1AebifS4Ssj8aXxN3FW7uJXR' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'exclusive', 'earrings', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Snowflake Earrings' },
          { code: 'es', text: 'Pendientes de Copo de Nieve' }
        ],
        thumbnail: 'Qmck5gPyfDd8FxgXhJ6USy5Vjs7yZxDeZhF1ivH9HRbbMr',
        image: 'QmaPau7AF4j5EE5P6KAeXtCjg2hhKRL8QPCURTQ4PVxzA3',
        replaces: [],
        hides: [],
        description: "Get 'em before they melt!",
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/xmas_light_ball_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_XmasBall.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_Earrings_XmasBall.glb', hash: 'QmTHCKPuSiwZ9fxNL5K8SqoYYaqujG6DjiEJnRTTuhpwX7' },
              { file: 'M_Earrings_XmasBall.glb', hash: 'QmXva9RzAGnHYWdkoz262M1xxrdsvN8Jt136mKHCVZpGUK' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Earrings_XmasBall.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_Earrings_XmasBall.glb', hash: 'QmTHCKPuSiwZ9fxNL5K8SqoYYaqujG6DjiEJnRTTuhpwX7' },
              { file: 'M_Earrings_XmasBall.glb', hash: 'QmXva9RzAGnHYWdkoz262M1xxrdsvN8Jt136mKHCVZpGUK' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'exclusive', 'earrings', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Light Ball Earring' },
          { code: 'es', text: 'Pendientes de Bola Lumínica Navideña' }
        ],
        thumbnail: 'QmVC3U7yCuHXZAJT3zshjScAQm3yoSRn8dqbGosPFz3RXM',
        image: 'QmXFCBvGSKaXMEsyqghfsoRcetgLdibHjqZrAhubVsgiSW',
        replaces: [],
        hides: [],
        description: 'Batteries not included.',
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/xmas_ball_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_XmasBall_02.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_Earrings_XmasBall_02.glb', hash: 'QmaDzHn9j7NwdnQDr8iXmuzFNFmqG353reiVRq7es6SSrS' },
              { file: 'M_Earrings_XmasBall_02.glb', hash: 'QmPNBEm6pM8rMHPUxa24Dd9CErRk39WKn9CuNRGYmSFASp' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Earrings_XmasBall_02.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_Earrings_XmasBall_02.glb', hash: 'QmaDzHn9j7NwdnQDr8iXmuzFNFmqG353reiVRq7es6SSrS' },
              { file: 'M_Earrings_XmasBall_02.glb', hash: 'QmPNBEm6pM8rMHPUxa24Dd9CErRk39WKn9CuNRGYmSFASp' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'exclusive', 'earrings', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Ball Earring' },
          { code: 'es', text: 'Pendientes de Bola Navideña' }
        ],
        thumbnail: 'Qmcx4Ah5eZrJxtNyyCStE68MZcWSU9oyy8VEjSAs1mj84v',
        image: 'QmUHak6ThPoCaqRm55ewLGiXnvXoPD6z3xnVKk4P4Scx4m',
        replaces: [],
        hides: [],
        description: 'Ding dong merrily on ears!',
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/xmas_light_tree_earring',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Earrings_XmasTree.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_Earrings_XmasTree.glb', hash: 'Qmade7drNA4EvpJ29KWhoTGFbfqnHmemgTcm1oHdoutGBt' },
              { file: 'M_Earrings_XmasTree.glb', hash: 'QmRAJxdcVRcLarEZqo11pTF14oSUDpQduvhxGwCGvBHXko' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Earrings_XmasTree.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_Earrings_XmasTree.glb', hash: 'Qmade7drNA4EvpJ29KWhoTGFbfqnHmemgTcm1oHdoutGBt' },
              { file: 'M_Earrings_XmasTree.glb', hash: 'QmRAJxdcVRcLarEZqo11pTF14oSUDpQduvhxGwCGvBHXko' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'earring',
        tags: ['accesories', 'exclusive', 'earrings', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Light Tree Earring' },
          { code: 'es', text: 'Pendientes de Árbol Lumínico Navideña' }
        ],
        thumbnail: 'QmZqLdJaD8YbR2ym8yDcSNJ1RhcNCRw2pLCaZpiwvEVXCe',
        image: 'Qmdwp68k4FpbeP7LLbjRYBFUXPXzsznjrJTNXdsd8SM3sC',
        replaces: [],
        hides: [],
        description: 'Batteries not included.',
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/xmas_cyberpunk_eyewear',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Eyewear_CyberPunkXmas.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Eyewear_CyberPunkXmas.glb', hash: 'QmSeRTwfpUGvUZox8ckiGZECEsxRoeDrRBUVmAXrMLrjQz' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TP_TX.png', hash: 'QmS8ow5tnopyj4KuXGGj8FXh5DLX431fsB3pDPLMNCnuYj' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Eyewear_CyberPunkXmas.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Eyewear_CyberPunkXmas.glb', hash: 'QmSeRTwfpUGvUZox8ckiGZECEsxRoeDrRBUVmAXrMLrjQz' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TP_TX.png', hash: 'QmS8ow5tnopyj4KuXGGj8FXh5DLX431fsB3pDPLMNCnuYj' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'exclusive', 'eyewear', 'christmas', 'cyber', 'cyberpunk', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas CyberPunk Eyewear' },
          { code: 'es', text: 'Anteojos de Navidad CyberPunk' }
        ],
        thumbnail: 'QmUMNcDXYARY7c3GEJQKKLFSAAdxS9NCym5C9wkzSZP4SA',
        image: 'QmTzKQhpSg3F5fTigsahPCT2h5USxJXZ9Dv7wStwAZUZPa',
        replaces: ['mask', 'helmet'],
        hides: [],
        description: 'Even cyberpunks celebrate Xmas.',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/xmas_ski_eyewear',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Eyewear_CyberSkiGlasses.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'CyberSkiGlasses.png', hash: 'QmTjfX82edGpbhQKirqSXS3MpGKLwbe9gL8v2KwYaae3t1' },
              { file: 'Eyewear_CyberSkiGlasses.glb', hash: 'QmVkR2xnMX9Trp5YtwhMeNhbAHPwPbgLfRYGn1REay2hrG' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Eyewear_CyberSkiGlasses.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'CyberSkiGlasses.png', hash: 'QmTjfX82edGpbhQKirqSXS3MpGKLwbe9gL8v2KwYaae3t1' },
              { file: 'Eyewear_CyberSkiGlasses.glb', hash: 'QmVkR2xnMX9Trp5YtwhMeNhbAHPwPbgLfRYGn1REay2hrG' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'exclusive', 'eyewear', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Ski Eyewear' },
          { code: 'es', text: 'Anteojos de Navideños de Ski' }
        ],
        thumbnail: 'QmcwxCpDao2bRbrrwTQVQ65GHivjf2Pz3CvPak3L8vE9z8',
        image: 'QmbP87cqFD6em8Et28KRFzZJpCzoxCw1qhnK88hf5N7RKM',
        replaces: ['mask', 'helmet'],
        hides: [],
        description: 'Is it snowing in Decentraland?',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/cyber_xmas_eyewear',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Eyewear_CyberXmas.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Eyewear_CyberXmas.glb', hash: 'QmX5mMtmD8hQwb9W4BwbXtj46NHB4zGhCnYkLQptHyvJTk' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Eyewear_CyberXmas.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Eyewear_CyberXmas.glb', hash: 'QmX5mMtmD8hQwb9W4BwbXtj46NHB4zGhCnYkLQptHyvJTk' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'exclusive', 'eyewear', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Neon Eyewear' },
          { code: 'es', text: 'Anteojos de Navidadeños de Neon' }
        ],
        thumbnail: 'QmU2cDsbJL49Fv3orkTawn8kA3ECZZP9F9zqANhAZsVeMn',
        image: 'QmXMCYkkHgBP8KtgxMK22qDdPjueM1DQRSSYBzVcnwJeFa',
        replaces: ['mask', 'helmet'],
        hides: [],
        description: 'Hack the herald angels sing!',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/xmas_tree_eyewear',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Eyewear_XmasTree.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Eyewear_XmasTree.glb', hash: 'QmRfGU4ktH2RxzZx6ejPQMdV9dzb6UoSghrpSBiaeMCN5f' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TP_TX.png', hash: 'QmS8ow5tnopyj4KuXGGj8FXh5DLX431fsB3pDPLMNCnuYj' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Eyewear_XmasTree.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Eyewear_XmasTree.glb', hash: 'QmRfGU4ktH2RxzZx6ejPQMdV9dzb6UoSghrpSBiaeMCN5f' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TP_TX.png', hash: 'QmS8ow5tnopyj4KuXGGj8FXh5DLX431fsB3pDPLMNCnuYj' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'eyewear',
        tags: ['accesories', 'exclusive', 'eyewear', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Tree Eyewear' },
          { code: 'es', text: 'Anteojos de de Árbol Navidadeño' }
        ],
        thumbnail: 'QmZ4dxqnpZy1TUAZqgu1bUtGXLUUcbfwMxLspy5h5g6LRV',
        image: 'QmW6rCV83zDqjrY28KzyhqgTm1g8iU4fFv3w6V4G8FTT4o',
        replaces: ['mask', 'helmet'],
        hides: [],
        description: 'See Xmas in a whole new light.',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/santa_facial_hair',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'FacialHair_SantaBeard.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'FacialHair_SantaBeard.glb', hash: 'QmVWiPy2XXGBGEqnCmvWAHcQk5FY7E9oWJi5NDQPdD6XaH' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'facial_hair',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Santa Beard' },
          { code: 'es', text: 'Barba de Santa' }
        ],
        thumbnail: 'QmW5HwrZSNautHkotS1aMG36jn3dtdinfkzGCxN8mfWRXB',
        image: 'QmRe4X4NhxmSzgR6zWxqGRFcNo99cBEpt9mfkKKXGYv2Gc',
        replaces: [],
        hides: [],
        description: "Santa's beard. Fake or real?",
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/xmas_elf_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Feet_Elf.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Feet_Elf.glb', hash: 'QmSaJESsdYnGhKL9gTpL74XuXMPg2DE6dd7QRaKdXbzcWA' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Feet_Elf.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Feet_Elf.glb', hash: 'QmSaJESsdYnGhKL9gTpL74XuXMPg2DE6dd7QRaKdXbzcWA' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Elf Shoes' },
          { code: 'es', text: 'Zapatos de Elfo Navideño' }
        ],
        thumbnail: 'Qmbp95GSqD1Rjz6eCFjbd4yfGP1BtkB9TMaKJfRUsb4KPV',
        image: 'Qmb2wu5a84tKeLsMXAKPoeyBdDEJBkdf2D8GEuj39CZ9mc',
        replaces: [],
        hides: [],
        description: 'Rest of elf not included.',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/sledge_sockets_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Feet_SledgeSockets.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Feet_SledgeSockets.glb', hash: 'QmZS7urbJsAjRm5qQXBxPuyvA3DSokAf3SE67Xt377V7x6' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Feet_SledgeSockets.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Feet_SledgeSockets.glb', hash: 'QmZS7urbJsAjRm5qQXBxPuyvA3DSokAf3SE67Xt377V7x6' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Sledge Shoes' },
          { code: 'es', text: 'Zapatos de Trineo Navideño' }
        ],
        thumbnail: 'Qma2mKskuCKqjDhBdb6vmN7fFNxyRbHsfsQyTSRq44uffh',
        image: 'QmT7oW3LAt3jN8Bp9AiBrXBEk2DSo1d8uFTqAXJt3hjnL8',
        replaces: [],
        hides: [],
        description: "We don't recommend them for ice skating.",
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/xmas_sockets_feet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Feet_XmasSockets.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Feet_XmasSockets.glb', hash: 'QmS3611PUsVcL9E3iNKiGCaNMxvR8Co19NMkgPFXCfypgp' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' },
              { file: 'xmas_pullover.png', hash: 'Qmbz3QZjWmRS8L6JeGugre2Zm6Fb4x78pVYrvnwS2xziEF' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Feet_XmasSockets.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Feet_XmasSockets.glb', hash: 'QmS3611PUsVcL9E3iNKiGCaNMxvR8Co19NMkgPFXCfypgp' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' },
              { file: 'xmas_pullover.png', hash: 'Qmbz3QZjWmRS8L6JeGugre2Zm6Fb4x78pVYrvnwS2xziEF' }
            ]
          }
        ],
        type: 'wearable',
        category: 'feet',
        tags: ['accesories', 'exclusive', 'shoes', 'feet', 'christmas', 'cyber', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Sockets' },
          { code: 'es', text: 'Medias Navideñas' }
        ],
        thumbnail: 'QmZgqqhD3udVvthyNvaRKZcJZpwABcTLsmxVYQ5HDwYqRk',
        image: 'QmeeZUqC9wLrvxyTEbdZ8TQQdFRp5ij4wDxgRWt9Yk6wZc',
        replaces: [],
        hides: [],
        description: 'Embrace the spirit of Xmas—from top to toe.',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/xmas_blue_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_BlueXmasHat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_BlueXmasHat.glb', hash: 'QmV9A2eceSBxxThCBrAf4iM3hN237jbPH5HiC4MGrDEjpT' },
              { file: 'M_Hat_BlueXmasHat.glb', hash: 'QmXfcqKgusWttCnpwd8qjmbyc3QAuoJaTuNvyEwr82BpiS' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_BlueXmasHat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_BlueXmasHat.glb', hash: 'QmV9A2eceSBxxThCBrAf4iM3hN237jbPH5HiC4MGrDEjpT' },
              { file: 'M_Hat_BlueXmasHat.glb', hash: 'QmXfcqKgusWttCnpwd8qjmbyc3QAuoJaTuNvyEwr82BpiS' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'christmas', 'cyber', 'hat', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Blue Hat' },
          { code: 'es', text: 'Sombrero Navideño Azul' }
        ],
        thumbnail: 'Qmf4UKnuY7gPpV5WZ9ySsWH5HQos3HtK9jh9553sGkj6zB',
        image: 'QmQSoQfaKqYcx2z76rxnyRUHYN3SDd5WJ7dhMjdy4wZ81P',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'Have a blue, blue, blue, blue Christmas',
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/xmas_elf_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_Elf.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Elf.glb', hash: 'QmVrtJfhEheSs25nnMEh3Z5chGAv2pPy9o7KhcY8f7viKp' },
              { file: 'M_Hat_Elf.glb', hash: 'QmRmiUymP9aUJUMpBvYvL69jAfo7LAZdCS45XwA4MBVAon' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_Elf.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Elf.glb', hash: 'QmVrtJfhEheSs25nnMEh3Z5chGAv2pPy9o7KhcY8f7viKp' },
              { file: 'M_Hat_Elf.glb', hash: 'QmRmiUymP9aUJUMpBvYvL69jAfo7LAZdCS45XwA4MBVAon' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'christmas', 'cyber', 'hat', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Elf Hat' },
          { code: 'es', text: 'Sombrero de Elfo Navideño' }
        ],
        thumbnail: 'QmR96aoDfcJTycvnoLgkoVhGu91Y6LnhqbKuXduktsY5v7',
        image: 'QmPeNjbXY4dQqdcEaTb1MjQGkZP3VJ2RibkXmoPwXw5A6M',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: "Any size you like as long as it's XS.",
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/xmas_green_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_GreenXmasHat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_GreenXmasHat.glb', hash: 'QmSaTGxHAnDayqSUjorz2XkZE4rUgdhtUWGTkSiKBCBRtg' },
              { file: 'M_Hat_GreenXmasHat.glb', hash: 'QmdmqLsBApMrUuHtHnjENyuEkn2kgU2nsapMMt4PEgbhyW' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_GreenXmasHat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_GreenXmasHat.glb', hash: 'QmSaTGxHAnDayqSUjorz2XkZE4rUgdhtUWGTkSiKBCBRtg' },
              { file: 'M_Hat_GreenXmasHat.glb', hash: 'QmdmqLsBApMrUuHtHnjENyuEkn2kgU2nsapMMt4PEgbhyW' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'christmas', 'cyber', 'hat', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Green Hat' },
          { code: 'es', text: 'Sombrero Navideño Verde' }
        ],
        thumbnail: 'QmZRPGMc3S1Bpwx8kVRQwyT7cC5iCoEsCKRAUDGSV2GnN1',
        image: 'QmaZMHACNNQanUKSHUjQCH72UZZDrUYGLC6MPantKSaXmc',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: ' Colour yourself Xmas.',
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/xmas_red_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_RedXmasHat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_RedXmasHat.glb', hash: 'QmQ7KppkJkFapFVDvTHRNZRNUb96kvkx1uDm6XiZwoN9PT' },
              { file: 'M_Hat_RedXmasHat.glb', hash: 'QmchZDwS6G1e3qJXuREsfyXyWiCVEaWt9V188qoRYwVjB3' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_RedXmasHat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_RedXmasHat.glb', hash: 'QmQ7KppkJkFapFVDvTHRNZRNUb96kvkx1uDm6XiZwoN9PT' },
              { file: 'M_Hat_RedXmasHat.glb', hash: 'QmchZDwS6G1e3qJXuREsfyXyWiCVEaWt9V188qoRYwVjB3' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'christmas', 'cyber', 'hat', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Red Hat' },
          { code: 'es', text: 'Sombrero Navideño Rojo' }
        ],
        thumbnail: 'QmPKhpy4pP2J82q9PJgQ8CJWwc1rL7oenKhNSS3CXEZtfL',
        image: 'QmcGjF5rUvyWsc6KzgUVKj7DWSNW5JHQuDRwNeGtcso4ro',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'Colour yourself Xmas.',
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/xmas_reindeer_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_Reeindeer.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Reeindeer.glb', hash: 'QmUFNz3ktNntpXrU59oywVpmpTNwVURUMLYvph3Ngtt14K' },
              { file: 'M_Hat_Reeindeer.glb', hash: 'QmP25EcEijgZSGhM4cpAvXhcWtHXkHCgBae75JHyLb9KVE' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_Reeindeer.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_Reeindeer.glb', hash: 'QmUFNz3ktNntpXrU59oywVpmpTNwVURUMLYvph3Ngtt14K' },
              { file: 'M_Hat_Reeindeer.glb', hash: 'QmP25EcEijgZSGhM4cpAvXhcWtHXkHCgBae75JHyLb9KVE' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'christmas', 'cyber', 'hat', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Reindeer Hat' },
          { code: 'es', text: 'Sombrero Navideño de Reno' }
        ],
        thumbnail: 'QmbsMUbMaAvbyHmZMrAuHAWrUSVndV6F9rvcFQNSp4scfR',
        image: 'Qmc3FK9veGUCXdqR2soVJVnYA6atr46HGh9dMf6ZLaxNqn',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'The Xmas party classic comes to Decentraland.',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/xmas_yellow_hat',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Hat_YellowXmasHat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_YellowXmasHat.glb', hash: 'QmaJzo7bGDyaPpq9RBD3ADNFMyzs63mcbQ9HMpT93WVcCX' },
              { file: 'M_Hat_YellowXmasHat.glb', hash: 'QmPB5dgjzEdqvxxa5oM3JTQmmY9zKDbEB1Uhk1sL2w4aze' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Hat_YellowXmasHat.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'F_Hat_YellowXmasHat.glb', hash: 'QmaJzo7bGDyaPpq9RBD3ADNFMyzs63mcbQ9HMpT93WVcCX' },
              { file: 'M_Hat_YellowXmasHat.glb', hash: 'QmPB5dgjzEdqvxxa5oM3JTQmmY9zKDbEB1Uhk1sL2w4aze' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'hat',
        tags: ['accesories', 'exclusive', 'christmas', 'cyber', 'hat', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Christmas Yellow Hat' },
          { code: 'es', text: 'Sombrero Navideño Azul' }
        ],
        thumbnail: 'QmZY9RbLmAYu3kQf4tND8oqJs7ounKqDTmFoagfjNgo2iZ',
        image: 'QmfEFabVaHxFwVitveCZRLKSemkYWZCdbMgqmd7LCfnRZB',
        replaces: ['helmet', 'tiara', 'top_head'],
        hides: ['hair'],
        description: 'Colour yourself Xmas.',
        rarity: 'epic'
      },
      {
        id: 'dcl://xmas_2019/f_cyber_xmas_helmet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_Helmet_LedSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'CyberHelmet2_v2.png', hash: 'QmYExf9trqUe7jncQxchV7V3YS7PiVvzqW4KmLA6y3cb7q' },
              { file: 'F_Helmet_LedSuit.glb', hash: 'QmQYB16EfPtRQEJ5RRnmNkDcbC1L3rZZiEiu9ZmVSGj6LB' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'helmet',
        tags: ['accesories', 'exclusive', 'cyber', 'xmas', 'christmas', 'helmet', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Cyber Xmas Helmet' },
          { code: 'es', text: 'Casco Cyber Navideño' }
        ],
        thumbnail: 'QmSeFUzkrpXRFKhE14wgJQozenbHSUs4sb6gD2wozddEZG',
        image: 'QmaTZLmFa3YneoeHP5VZVMDRUdb3evut11QU7JtpDbqqpw',
        replaces: ['tiara', 'hat', 'top_head', 'mask', 'eyewear'],
        hides: ['hair', 'earring', 'facial_hair'],
        description: 'Hack the herald angels sing!',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/xmas_snowman_helmet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Helmet_Snowman.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Helmet_Snowman.glb', hash: 'QmayQmFV6gevv4tPW73AF7W8FjhqBbGdmNNbLxFJTvPDgM' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Helmet_Snowman.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'Helmet_Snowman.glb', hash: 'QmayQmFV6gevv4tPW73AF7W8FjhqBbGdmNNbLxFJTvPDgM' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'helmet',
        tags: ['accesories', 'exclusive', 'cyber', 'xmas', 'christmas', 'snowman', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Snowman Head' },
          { code: 'es', text: 'Cabeza de Hombre de Nieve' }
        ],
        thumbnail: 'QmeKvkHJ1eFphwq58P8fb8XP3nqunToK7BDhsM9s2ZKHr2',
        image: 'QmQs5upmWPByJbDVoBdVpspwvarkx8T7dXdRwf6NomPTpx',
        replaces: ['tiara', 'hat', 'top_head', 'mask', 'eyewear'],
        hides: ['hair', 'earring', 'facial_hair'],
        description: "Don't stand too close to the fire.",
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/m_cyber_xmas_helmet',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_Helmet_LedSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'CyberHelmet_v2.png', hash: 'QmWWtyJcCEfkuikY6Mgi7ysE6CfqmekZbMZUgaCKLngBQw' },
              { file: 'M_Helmet_LedSuit.glb', hash: 'QmaffcaE8zbEKjpvWmr1Y6cpHaNkQqwzivkPeZGCLxPm6P' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'helmet',
        tags: ['accesories', 'exclusive', 'cyber', 'xmas', 'christmas', 'helmet', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Cyber Xmas Helmet' },
          { code: 'es', text: 'Casco Cyber Navideño' }
        ],
        thumbnail: 'Qme5XL3zkPhp1SgDpiuUWfxdDYpdzxPBHwZF5TpCqL3J8k',
        image: 'QmUDza3SWDA1SXFyJrdAkKn7ZH7a6WKBv7PwvuvsTbVJjx',
        replaces: ['tiara', 'hat', 'top_head', 'mask', 'eyewear'],
        hides: ['hair', 'earring', 'facial_hair'],
        description: 'Hack the herald angels sing!',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/f_cyber_suit_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_CyberSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_lBody_CyberSuit.glb', hash: 'QmdV82AVSpezoe5UCGtgGSW1Y9Rwb6kP9tCfgzv5eM8wuW' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'cyber', 'xmas', 'pants', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Cyber Pants' },
          { code: 'es', text: 'Pantalones Cibernéticos' }
        ],
        thumbnail: 'Qme1W6Qv6JBWzj7q1EabeJZddiJcjsv3URTBTyNiFGVrQA',
        image: 'QmPfF92u1BwmYtMn56582DELdjPZ6xivnt4UXNt4bpU6UE',
        replaces: [],
        hides: ['feet'],
        description: "Tron's a Xmas movie right?",
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/f_led_suit_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_lBody_LedSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_lBody_LedSuit.glb', hash: 'QmZFAujmaK1st8gsnKQE7N8nHk6FpLwAcHDkZYCoZEBepD' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'cyber', 'xmas', 'pants', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Led Pants' },
          { code: 'es', text: 'Pantalones de Leds' }
        ],
        thumbnail: 'QmcD9gqa9GyXXSquCtHCFXGdhNcGvDaXS5wKGtrh9NJiJQ',
        image: 'QmdGX5nD8wqnjZ3xymLTpJynD31kgsN1FhJHkQu4E95bdU',
        replaces: [],
        hides: ['feet'],
        description: 'Why just put up Xmas lights when you can wear them?',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/m_cyber_suit_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_CyberSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'M_lBody_CyberSuit.glb', hash: 'QmP6VfFYHsstCAwx5LfCEhqArKfw3vJsc6ayuHcTyZVvi9' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'cyber', 'xmas', 'pants', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Cyber Pants' },
          { code: 'es', text: 'Pantalones Cibernéticos' }
        ],
        thumbnail: 'QmNfiXJVLCWFZDcxCFRB5vPujGfAazktBVanuKSzrjNhdN',
        image: 'QmVjVWUKuHFUPPKD8duieubZkmoaXz3EqdnHPd6GbyiDCF',
        replaces: [],
        hides: ['feet'],
        description: "Tron's a Xmas movie right?",
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/m_led_suit_lower_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_lBody_LedSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'M_lBody_LedSuit.glb', hash: 'QmP3cSZodT1q2WduQWVXa93VanTJsDew7EZUmtMmH2fxQ1' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'lower_body',
        tags: ['accesories', 'exclusive', 'cyber', 'xmas', 'pants', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Led Pants' },
          { code: 'es', text: 'Pantalones de Leds' }
        ],
        thumbnail: 'QmXMi6YbhjgmPC9JmbWTnv1AfikPLCf7XeXFQukGebnbBv',
        image: 'QmP67CL8AYLBjp6H8QLbXr2p283xE1Smm3DchaVjy8VDGa',
        replaces: [],
        hides: ['feet'],
        description: 'Why just put up Xmas lights when you can wear them?',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/f_led_suit_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_LedSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_uBody_LedSuit.glb', hash: 'QmZcL6WAsjMNZ4Z5wFDP9quHn5WLbG1M6t89qZP419WTPq' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'xmas', 'cyber', 'christmas', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Led Suit' },
          { code: 'es', text: 'Traje de Leds' }
        ],
        thumbnail: 'QmSF4HSuktPKSmaSmtHbvme7q6YrGXdiQaDbizRUNtoujw',
        image: 'QmZBjfkhnXsTTyGWPLnkgnfXEyP21G4UqKv2StnqQCAvhq',
        replaces: [],
        hides: [],
        description: 'Why just put up Xmas lights when you can wear them?',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/f_cyber_suit_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_CyberSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_uBody_CyberSuit.glb', hash: 'QmVd4jUr97f9Vcfq8SasQiUkyiZQjuzx5xAaZA1n7wW5hA' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'xmas', 'cyber', 'christmas', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Cyber Suit' },
          { code: 'es', text: 'Traje Cibernético' }
        ],
        thumbnail: 'QmUKuCJLM2BShNLz2L8hMo4z2ByEq3qfaZfzmnmUWaThFv',
        image: 'QmaTUX3xwX9cVqRBYxLrUnZzyHJK6o7vCP2GvNAsLYCvYU',
        replaces: [],
        hides: [],
        description: "Tron's a Xmas movie right?",
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/m_led_suit_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_LedSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'M_uBody_LedSuit.glb', hash: 'QmT2tgQBhSuSCLPUBJaaMFYANbQqSvR4TNC1Cdw8FyJqWU' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'xmas', 'cyber', 'christmas', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Led Suit' },
          { code: 'es', text: 'Traje de Led' }
        ],
        thumbnail: 'QmUG4gpKKR8ysaZbn9nisqCax5QUS6gMPKR6GMAabKP53d',
        image: 'QmYLGWBKE1iXf4c4XmWyWn35ggCPLigBieX8MUxLbQY8NA',
        replaces: [],
        hides: [],
        description: 'Why just put up Xmas lights when you can wear them?',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/xmas_cyberpunk_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_CyberPunkJacket.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'M_uBody_CyberPunkJacket.glb', hash: 'QmPLdYn4ahC7GYtZ1FfTpRB13UfEE5c38ANMDdo7nUCBxi' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'xmas', 'cyber', 'christmas', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Cyberpunk Jacket' },
          { code: 'es', text: 'Campera Cyberpunk' }
        ],
        thumbnail: 'QmUudPqEbgL1T1RDgjziCfua6cL2AdroV4AtuqdSpzvikx',
        image: 'QmYUxaXy7xgE6MhY1WnnkPy3AytVf23LDcCN7yJaxut4iu',
        replaces: [],
        hides: [],
        description: 'Coolest. Xmas. Jumper. Ever!',
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/m_cyber_suit_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_CyberSuit.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'M_uBody_CyberSuit.glb', hash: 'QmZcEiLZKVFY7UPTUr28ZfDxH1z4ZCxrojJrr8Ytb1cELB' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'xmas', 'cyber', 'christmas', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Cyber Suit' },
          { code: 'es', text: 'Traje Cibernético' }
        ],
        thumbnail: 'QmUmLCThaiJuknkaNwWrNFsFsQx1E2coxrB2jeeLCSJWk7',
        image: 'Qmb89BJWfQih3GYbSjcViJmdcJJvfCWrWAbF3Wec4JzdbE',
        replaces: [],
        hides: [],
        description: "Tron's a Xmas movie right?",
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/pixel_sweater_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_XmasSweater_01.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_uBody_XmasSweater_01.glb', hash: 'QmS7ekPVW1UDiVKMuPQVBx6pAZ7d5SomcH5VoadF16vQPP' },
              { file: 'M_uBody_XmasSweater_01.glb', hash: 'QmWSdrXX6hZYWE5jgZdxmwKYdtoVE1yJJTvEsYFQ6U9s7q' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' },
              { file: 'xmas_pullover.png', hash: 'Qmbz3QZjWmRS8L6JeGugre2Zm6Fb4x78pVYrvnwS2xziEF' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_XmasSweater_01.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_uBody_XmasSweater_01.glb', hash: 'QmS7ekPVW1UDiVKMuPQVBx6pAZ7d5SomcH5VoadF16vQPP' },
              { file: 'M_uBody_XmasSweater_01.glb', hash: 'QmWSdrXX6hZYWE5jgZdxmwKYdtoVE1yJJTvEsYFQ6U9s7q' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' },
              { file: 'xmas_pullover.png', hash: 'Qmbz3QZjWmRS8L6JeGugre2Zm6Fb4x78pVYrvnwS2xziEF' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'xmas', 'cyber', 'christmas', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: 'Pixel Christmas Sweater' },
          { code: 'es', text: 'Sweater Navideño Pixel' }
        ],
        thumbnail: 'QmU9Rx7PbRUZ1N9KnQDmv29gcS6RHXtNQTCJugTkrGW4nv',
        image: 'QmaAN4LnWwZcm27hyxuBZU8mxec8aXnm6tm1cjpAt8sGHu',
        replaces: [],
        hides: [],
        description: "Even in virtual worlds there's no escape from the Xmas jumper.",
        rarity: 'mythic'
      },
      {
        id: 'dcl://xmas_2019/8bit_sweater_upper_body',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'M_uBody_XmasSweater_02.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_uBody_XmasSweater_02.glb', hash: 'QmRQ5Wh6x7KMYbWhtBYH1jYLiQwZp4RQQvM83MAeCk5a7v' },
              { file: 'M_uBody_XmasSweater_02.glb', hash: 'QmZcwWXUwAU7Y8xoQQbuUrjqDJtZtWVobM9JVMcoRzH42m' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' },
              { file: 'space-invaders_Mesa de trabajo 1.png', hash: 'QmPrNtbwmHyVkheET72vKE6i6CUNbk2K7JR2U4j1DzrbXo' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'F_uBody_XmasSweater_02.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'F_uBody_XmasSweater_02.glb', hash: 'QmRQ5Wh6x7KMYbWhtBYH1jYLiQwZp4RQQvM83MAeCk5a7v' },
              { file: 'M_uBody_XmasSweater_02.glb', hash: 'QmZcwWXUwAU7Y8xoQQbuUrjqDJtZtWVobM9JVMcoRzH42m' },
              { file: 'Xmas_Emissive_TX.png', hash: 'QmZevCdvnXgeUTjewP5H77Pmv3wWb3KDVoE3sL4pChtJ4h' },
              { file: 'Xmas_TX.png', hash: 'QmbQt5kjT5u8Y6TzGXiHwyqMn1FxF7UMEXoxt8opTsciby' },
              { file: 'space-invaders_Mesa de trabajo 1.png', hash: 'QmPrNtbwmHyVkheET72vKE6i6CUNbk2K7JR2U4j1DzrbXo' }
            ]
          }
        ],
        type: 'wearable',
        category: 'upper_body',
        tags: ['accesories', 'exclusive', 'xmas', 'cyber', 'christmas', 'exclusive'],
        baseUrl: 'https://content.decentraland.org/contents/',
        i18n: [
          { code: 'en', text: '8 Bit Christmas Sweater' },
          { code: 'es', text: 'Sweater Navideño 8 Bit' }
        ],
        thumbnail: 'QmQMjQTSkrW8euDyd15CktvZ7Z5U5MaBSrANkKdekbvBYX',
        image: 'QmTSaiw1ZJnKiUiwPkhkY1kHwPMeGfVR41chLrP4BDqJNq',
        replaces: [],
        hides: [],
        description: "Even in virtual worlds there's no escape from the Xmas jumper.",
        rarity: 'mythic'
      }
    ]
  },
  {
    id: 'exclusive_masks',
    wearables: [
      {
        id: 'dcl://exclusive_masks/bird_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'BirdTheater.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'BirdTheater.glb', hash: 'QmcF1VdPk6ee88GMpZdbgBSzjKw6ikfxznLVjgX1JnHzR2' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'BirdTheater.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'BirdTheater.glb', hash: 'QmcF1VdPk6ee88GMpZdbgBSzjKw6ikfxznLVjgX1JnHzR2' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['exclusive', 'accesories', 'male', 'man', 'female', 'woman', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/exclusive_masks/',
        i18n: [
          { code: 'en', text: 'Bird Mask' },
          { code: 'es', text: 'Máscara de Cuervo' }
        ],
        thumbnail: 'Qme3daU4ycWsJnzErcX87GXKmv7X4LqXRAHED9y79tzgeo',
        image: 'QmYxSC7vX2CTnh3SYDfP8nmdNtpW7FdPwC6YNNoBtVv3P2',
        replaces: ['eyewear', 'tiara', 'hat', 'helmet'],
        hides: ['earring', 'facial_hair'],
        description: '',
        rarity: 'legendary'
      },
      {
        id: 'dcl://exclusive_masks/classic_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Classic.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Classic.glb', hash: 'QmXtvgLxt18i6LYXhoHGuB1W1mKqjNuPgoGhtKjxfs92xs' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Classic.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Classic.glb', hash: 'QmXtvgLxt18i6LYXhoHGuB1W1mKqjNuPgoGhtKjxfs92xs' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['exclusive', 'accesories', 'male', 'man', 'female', 'woman', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/exclusive_masks/',
        i18n: [
          { code: 'en', text: 'Classic Mask' },
          { code: 'es', text: 'Máscara Clásica' }
        ],
        thumbnail: 'QmSBc4zKLNYyjnpWnLkWwEiCXB6xybMtfTYgmNdToKCk81',
        image: 'QmaZMNmVwYkLdjRV8SNwZtaWcaCzHb96ye5SdrrSqDJLzA',
        replaces: ['eyewear', 'tiara', 'hat', 'helmet'],
        hides: ['earring', 'facial_hair'],
        description: '',
        rarity: 'legendary'
      },
      {
        id: 'dcl://exclusive_masks/clown_nose',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'ClownNose.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'ClownNose.glb', hash: 'QmPfzA4vjDmJEbYexArbofMrwnAGyp3ddJpwr8ViLrweyx' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'ClownNose.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'ClownNose.glb', hash: 'QmPfzA4vjDmJEbYexArbofMrwnAGyp3ddJpwr8ViLrweyx' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['exclusive', 'accesories', 'male', 'man', 'female', 'woman', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/exclusive_masks/',
        i18n: [
          { code: 'en', text: 'Clown Nose' },
          { code: 'es', text: 'Nariz de Payaso' }
        ],
        thumbnail: 'QmNetfCF4mQxd88wR5Qyc3BLaaGsutg4eWadk72ecKpGKt',
        image: 'QmQCpfzhQLXfRXpSFboVEn23mzC5npPyTSkDNHfMxgvqDp',
        replaces: ['eyewear', 'tiara', 'hat', 'helmet'],
        hides: ['earring', 'facial_hair'],
        description: '',
        rarity: 'legendary'
      },
      {
        id: 'dcl://exclusive_masks/asian_fox',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'FoxAsian.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'FoxAsian.glb', hash: 'QmS1WAbhfkhfyGhanuPVxRW2xW2QigpAE1B8TTiTjNpV2H' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'FoxAsian.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'FoxAsian.glb', hash: 'QmS1WAbhfkhfyGhanuPVxRW2xW2QigpAE1B8TTiTjNpV2H' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'male', 'man', 'female', 'woman', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/exclusive_masks/',
        i18n: [
          { code: 'en', text: 'Asian Fox Mask' },
          { code: 'es', text: 'Máscara de Zorro Asiático' }
        ],
        thumbnail: 'QmSmP5GgQQFA28M9euJjm6Byqc2YHPWb66AFgWLqfXDcok',
        image: 'QmdseBjWduaFpTpSWzuU1C8DpZUXNSZPNFAVNWYmJwUgaB',
        replaces: ['eyewear', 'tiara', 'hat', 'helmet'],
        hides: ['earring', 'facial_hair'],
        description: '',
        rarity: 'legendary'
      },
      {
        id: 'dcl://exclusive_masks/killer_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'Killer.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Killer.glb', hash: 'QmdAdwWyy2ApkJtSBiAmg7dAGigQ3U6WF75gW6VyzxBqTW' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'Killer.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'Killer.glb', hash: 'QmdAdwWyy2ApkJtSBiAmg7dAGigQ3U6WF75gW6VyzxBqTW' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'male', 'man', 'female', 'woman', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/exclusive_masks/',
        i18n: [
          { code: 'en', text: 'Killer Mask' },
          { code: 'es', text: 'Máscara de Asesino' }
        ],
        thumbnail: 'QmPzpgNVenF9ToyHQ9ZPJGCzW7fif3gMdfKkCGAvw7suMF',
        image: 'QmPpKDQmivcXDmsrxLHm5DEmwtmh8gvQPT9YEL9sqvgfSF',
        replaces: ['eyewear', 'tiara', 'hat', 'helmet'],
        hides: ['earring', 'facial_hair'],
        description: '',
        rarity: 'legendary'
      },
      {
        id: 'dcl://exclusive_masks/serial_killer_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'SerialKiller.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'SerialKiller.glb', hash: 'QmQwfvJJu2DfZAHFN41q4y724nrjoz4g9Z4jzqHfnFeeDf' },
              { file: 'Serial_killer_mask.png', hash: 'QmXZhazdrHwbm4NQP5hPXW661zhQP4riNb4CwaGhM6vwV4' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'SerialKiller.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'SerialKiller.glb', hash: 'QmQwfvJJu2DfZAHFN41q4y724nrjoz4g9Z4jzqHfnFeeDf' },
              { file: 'Serial_killer_mask.png', hash: 'QmXZhazdrHwbm4NQP5hPXW661zhQP4riNb4CwaGhM6vwV4' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['exclusive', 'accesories', 'male', 'man', 'female', 'woman', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/exclusive_masks/',
        i18n: [
          { code: 'en', text: 'Serial Killer Mask' },
          { code: 'es', text: 'Máscara de Asesino Serial' }
        ],
        thumbnail: 'QmdanmiBaF8A2VizrvUNinZvLNogxXmCavcHMKmUGLBojc',
        image: 'QmXZhazdrHwbm4NQP5hPXW661zhQP4riNb4CwaGhM6vwV4',
        replaces: ['eyewear', 'tiara', 'hat', 'helmet'],
        hides: ['earring', 'facial_hair'],
        description: '',
        rarity: 'legendary'
      },
      {
        id: 'dcl://exclusive_masks/theater_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'TheaterMask.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'TheaterMask.glb', hash: 'QmS2Kb5rbS3Fr328nUJxVnzD4uHfqRprtBRpK2i55Sae8P' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'TheaterMask.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmWLrKJFzDCMGXVCef78SDkMHWB94eHP1ZeXfyci3kphTb' },
              { file: 'TheaterMask.glb', hash: 'QmS2Kb5rbS3Fr328nUJxVnzD4uHfqRprtBRpK2i55Sae8P' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['accesories', 'exclusive', 'male', 'man', 'female', 'woman', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/exclusive_masks/',
        i18n: [
          { code: 'en', text: 'Theater' },
          { code: 'es', text: 'Máscara de Teatro' }
        ],
        thumbnail: 'Qmf33ApErcqMeL4WVekhLavoBxvawc9ngwVYaGvLimifL9',
        image: 'QmRWpJe94LNE8rLxrCgZrQvDrft64aduTkP46rzbpiN2mr',
        replaces: ['eyewear', 'tiara', 'hat', 'helmet'],
        hides: ['earring', 'facial_hair'],
        description: '',
        rarity: 'legendary'
      },
      {
        id: 'dcl://exclusive_masks/tropical_mask',
        representations: [
          {
            bodyShapes: ['dcl://base-avatars/BaseMale'],
            mainFile: 'TropicalMask.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'TropicalMask.glb', hash: 'QmdLP5xsAUNDqZDZ66sE375UKQNLEeRLb2KNcFxfZNsras' }
            ]
          },
          {
            bodyShapes: ['dcl://base-avatars/BaseFemale'],
            mainFile: 'TropicalMask.glb',
            overrideReplaces: [],
            overrideHides: [],
            contents: [
              { file: 'AvatarWearables_TX.png', hash: 'QmRaHnacT5G7oLYTYGsRWZtLXzXuTNEq7gWAcvXRSxfwEU' },
              { file: 'TropicalMask.glb', hash: 'QmdLP5xsAUNDqZDZ66sE375UKQNLEeRLb2KNcFxfZNsras' }
            ]
          }
        ],
        type: 'wearable',
        category: 'mask',
        tags: ['exclusive', 'accesories', 'male', 'man', 'female', 'woman', 'exclusive'],
        baseUrl: 'https://wearable-api.decentraland.org/v2/collections/exclusive_masks/',
        i18n: [
          { code: 'en', text: 'Tropical Mask' },
          { code: 'es', text: 'Máscara Tropical' }
        ],
        thumbnail: 'QmQHn3N8Yz7P5PFsHtfyKNzwrEZRFWeBAwFK5B4M1eajEK',
        image: 'QmT3fPpLZHvMMTz43thZ3xSJBnQE4ATF5iNScR3ZsyuCVK',
        replaces: ['eyewear', 'tiara', 'hat', 'helmet'],
        hides: ['earring', 'facial_hair'],
        description: '',
        rarity: 'legendary'
      }
    ]
  }
]

export const indexedCatalog: IndexedCatalog = raw.reduce((catalog: IndexedCatalog, collection) => {
  collection.wearables.reduce((_, item) => {
    catalog[item.id] = item
    return catalog
  }, catalog)
  return catalog
}, {})
