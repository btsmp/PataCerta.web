export {}

declare global {
  type HeaderButtonVariant = 'primary' | 'neutral'

  type HeaderButton = {
    text: string
    onClick: () => void
    variant: HeaderButtonVariant
  }
}
