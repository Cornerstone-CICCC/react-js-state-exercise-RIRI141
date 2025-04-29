
type Props = {
    onCount: () => void
}

const ClickCounter = (props: Props) => {
  return (
     <button onClick={props.onCount}>Add One</button>
  )
}

export default ClickCounter