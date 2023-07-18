import { Navigation } from "./components/Navigation"
import './globals.css'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/lux/bootstrap.min.css" />
      </head>
      <body >
      <Navigation />
        {children}
        </body>
    </html>
  )
}
