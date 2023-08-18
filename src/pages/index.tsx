import { MainFooter, MainHeader } from '@/components'
import { AppShell } from '@mantine/core'

export default function Home() {
  return (
    <AppShell header={<MainHeader />} footer={<MainFooter />} bg={'#2D2D2D'}>
    </AppShell>
  )
}
