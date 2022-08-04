import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.userCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String2958694',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        email: 'String1599638',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
