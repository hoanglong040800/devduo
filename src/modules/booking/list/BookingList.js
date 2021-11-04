import { Box } from '@material-ui/core'
import { useRouter } from 'next/router'
import MenteeBookingItem from './item/MenteeBookingItem'
import MentorBookingItem from './item/MentorBookingItem'

export default function BookingList({ list, type = 'mentor',onCancel }) {
  const router = useRouter()

  return (
    <Box display="flex" flexDirection="column" mx="auto" maxWidth={600}>
      {
        //
        list
          ? type === 'mentor'
            ? list.map(item => <MentorBookingItem key={item.id} item={item} onCancel={onCancel} />)
            : list.map(item => <MenteeBookingItem key={item.id} item={item} onCancel={onCancel}/>)
          : null
      }
    </Box>
  )
}
