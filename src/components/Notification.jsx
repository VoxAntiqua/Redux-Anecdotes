import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification) // temporary display
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  return (
    <div style={notification !== '' ? style : { display: 'none' }}>
      {notification}
    </div>
  )
}

export default Notification
