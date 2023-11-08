export enum EChatboxPerson {
    USER = 'USER',
    AI_DEBATER = 'AI_DEBATER',
    AI_ARBITER = 'AI_ARBITER'
}

export const BUBBLE_BG_COLOR: Record<EChatboxPerson, string> = {
    [EChatboxPerson.USER]: 'blue.600',
    [EChatboxPerson.AI_DEBATER]: 'gray.600',
    [EChatboxPerson.AI_ARBITER]: 'green.600',
} as const;

export const BUBBLE_JUSTIFY: Record<EChatboxPerson, string> = {
    [EChatboxPerson.USER]: 'end',
    [EChatboxPerson.AI_DEBATER]: 'start',
    [EChatboxPerson.AI_ARBITER]: 'start',
} as const;