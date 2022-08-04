import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.postCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        content: 'String',
        author: {
          create: {
            email: 'String3333177',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        content: 'String',
        author: {
          create: {
            email: 'String9447879',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
