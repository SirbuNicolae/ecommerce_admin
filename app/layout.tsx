import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

import "./globals.css"
import { Metadata } from "next"
import { ModalProvider } from "@/providers/modal-provider"
import prismadb from "@/lib/prismadb"
import { ToasterProvider } from "@/providers/toast-provider"


export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
      <ClerkProvider>
          <html lang="en">
              <body>
                <ToasterProvider />
                <ModalProvider />
                  {children}
              </body>
          </html>
      </ClerkProvider>
  )
}
