
import './globals.css'

export const metadata = {
  title: 'AI Script Platform',
  description: 'Premium AI Script Platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
