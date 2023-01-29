type headerProps= {
  children: string
}

export const Heading = (props: headerProps) => {
  return (
    <h1>{props.children}</h1>
  )
}