import { FiberManualRecord } from '@material-ui/icons'

export default function ActiveStatusDot({ status }) {
  return (
    <FiberManualRecord
      style={{
        fontSize: '0.8rem',
        color: status ? '#64ff4f' : '#d9d9d9',
      }}
    />
  )
}
