import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"], variable: "--font-montserrat" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ambassadorhub.ru"),
  title: "Стань амбассадором AI-продукта | Заработок от 300 000 ₽/мес",
  description:
    "Зарабатывай в 10 раз больше как амбассадор AI-продукта. Получи персональный расчёт дохода за 2 минуты. Обучение, поддержка, готовые материалы.",
  keywords: [
    "амбассадор",
    "заработок в интернете",
    "AI продукт",
    "инфлюенсер",
    "партнёрская программа",
    "пассивный доход",
    "блогер заработок",
    "монетизация аудитории",
  ],
  authors: [{ name: "Ambassador Program" }],
  creator: "Ambassador Program",
  publisher: "Ambassador Program",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Стань амбассадором AI-продукта | Заработок от 300 000 ₽/мес",
    description:
      "Зарабатывай в 10 раз больше как амбассадор AI-продукта. Получи персональный расчёт дохода за 2 минуты.",
    siteName: "Ambassador Program",
  },
  twitter: {
    card: "summary_large_image",
    title: "Стань амбассадором AI-продукта | Заработок от 300 000 ₽/мес",
    description:
      "Зарабатывай в 10 раз больше как амбассадор AI-продукта. Получи персональный расчёт дохода за 2 минуты.",
  },
  alternates: {
    canonical: "/",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${orbitron.variable} font-sans antialiased bg-[#050A14] text-white selection:bg-cyan-500/30 selection:text-cyan-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
