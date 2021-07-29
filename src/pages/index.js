import { Button } from '@material-ui/core'

import ContentTemplate from 'components/template/ContentTemplate'

export default function HomePage() {
  return (
    <ContentTemplate>
      <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </ContentTemplate>
  )
}
