'use client'

import { useContext } from "react";
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import { FeedbackContext } from "@/context/feedback";
import Alert from "@/components/UIKit/Alert";

export default function Home() {
  const { feedback, setFeedback } = useContext(FeedbackContext)

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
      {feedback && (
        <Alert
          status={feedback?.status}
          text={feedback?.text}
          autoHideDuration={6000}
          onClose={() => setFeedback(null)}
        />
      )}
    </>
  )
}
