type greetProps = {
  name : string
  messages?: number
  isLoggedIn: boolean
}

export const Greet = (props: greetProps) => {
  const { messages = 0 } = props
  return (
    <div>
      {!props.isLoggedIn ? 
      `Welcome ${props.name}! You have ${messages} unread messages.`
      : `Welcome Guest!` }
    </div>
  )
}