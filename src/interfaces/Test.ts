export interface Test {
  // Doesnt account for arrays
  children1: JSX.Element

  // Doesnt accept functions
  children2: JSX.Element | JSX.Element[]

  // Not at all an appropriate type; it is a utility
  children3: React.ReactChildren

  // Better
  children4: React.ReactChild[]

  // Accepts everything
  children: React.ReactNode

  // Recommended function as a child render prop type
  functionChildren: (name: string) => React.ReactNode

  // To pass through style props
  style?: React.CSSProperties

  // Form events! the generic parameter is the type of event.target
  onChange?: React.FormEventHandler<HTMLInputElement>

  // To impersonate all the props of a button element without its ref
  props: Props & React.PropsWithoutRef<JSX.IntrinsicElements['button']>
}
