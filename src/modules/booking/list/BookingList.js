import { Box } from '@material-ui/core'
import MenteeBookingItem from './item/MenteeBookingItem'
import MentorBookingItem from './item/MentorBookingItem'

export default function BookingList({
  list,
  type = 'mentor',
  onCancel,
  onFinish,
  onOpenRatingModal,
}) {
  return (
    <Box display="flex" flexDirection="column" mx="auto" maxWidth={600}>
      {
        //
        list
          ? type === 'mentor'
            ? list.map(item => (
                <MentorBookingItem
                  key={item.id}
                  item={item}
                  onCancel={onCancel}
                  onFinish={onFinish}
                  onOpenRatingModal={onOpenRatingModal}
                />
              ))
            : list.map(item => (
                <MenteeBookingItem
                  key={item.id}
                  item={item}
                  onCancel={onCancel}
                  onFinish={onFinish}
                />
              ))
          : null
      }
    </Box>
  )
}
