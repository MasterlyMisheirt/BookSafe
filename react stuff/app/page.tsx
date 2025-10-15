import { LandingPage } from "@/components/landing-page"

export default function Home() {
  // In the future, you can add authentication check here
  const isLoggedIn = false // TODO: Replace with actual auth check

  if (!isLoggedIn) {
    return <LandingPage />
  }

  // This will be shown when user is logged in
  return <div className="min-h-screen">{/* Logged in view - to be implemented */}</div>
}
