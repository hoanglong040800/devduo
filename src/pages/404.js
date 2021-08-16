import Link from 'next/link'
import Image from 'next/image'
import DefaultLayout from 'components/layout/DefaultLayout'
import { Box, makeStyles, Typography } from '@material-ui/core'

export default function NotFound() {
  return (
    <DefaultLayout>
      <div style={{ height: 230, position: 'relative', marginTop: 40 }}>
        <Image src="/404.png" layout="fill" alt="404" objectFit="contain" />
      </div>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3">This page cannot be found</Typography>

        <Typography variant="h6">
          Return to
          <span style={{ color: '#4487f2' }}>
            <Link href="/">
              <a> Home page</a>
            </Link>
          </span>
        </Typography>
      </Box>
    </DefaultLayout>
  )
}
