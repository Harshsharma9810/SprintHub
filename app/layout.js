import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/functional-components/Header/header';
import { ClerkProvider } from '@clerk/nextjs';
import { shadesOfPurple } from '@clerk/themes';
import HeaderWrapper from '@/components/functional-components/Header/HeaderWrapper';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SprintHub',
  description: 'A project management tool for agile teams',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: '#3b82f6',
          colorBackground: '#1a202c',
          colorInputBackground: '#2D3748',
          colorInputText: '#F3F4F6',
        },
        elements: {
          formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
          card: 'bg-gray-800',
          headerTitle: 'text-blue-400',
          headerSubtitle: 'text-gray-400',
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} land-background`}>
          {/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
          <ThemeProvider attribute="class" defaultTheme="light">
            <HeaderWrapper />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>This app is subjected to harsh sharma</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
