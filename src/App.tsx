import { useState, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { AppreciationSection } from './components/AppreciationSection';
import { TeacherSelection } from './components/TeacherSelection';
import { SaradaModal } from './components/SaradaModal';
import { KrantiModal } from './components/KrantiModal';
import { QuoteSection } from './components/QuoteSection';
import { FinalSection } from './components/FinalSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import type { ToastData } from './components/Toast';
import type { MiniSurprise } from './types';

export function App() {
  const [activeTeacher, setActiveTeacher] = useState<'sarada' | 'kranti' | null>(null);
  const [toast, setToast] = useState<ToastData | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelectTeacher = (id: 'sarada' | 'kranti') => {
    setActiveTeacher(id);
  };

  const handleCloseModal = () => {
    setActiveTeacher(null);
  };

  const handleTriggerSurprise = (surprise: MiniSurprise) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    setToast({
      id: `${surprise.id}-${Date.now()}`,
      icon: surprise.icon,
      label: surprise.label,
      message: surprise.message,
      subtext: surprise.subtext,
    });

    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleCloseToast = () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* Vertical Floating Sidebar on Left & Mobile Drawer */}
      <Sidebar onSelectTeacher={handleSelectTeacher} />

      {/* Main Page Flow */}
      <main className="flex-1 w-full">
        {/* Full-screen Hero Section */}
        <Hero 
          onTriggerSurprise={handleTriggerSurprise} 
          onSelectTeacher={handleSelectTeacher} 
        />

        {/* Introduction Section: "More Than a Teacher" */}
        <AppreciationSection />

        {/* Teacher Selection Section: "Two Special Surprises" */}
        <TeacherSelection onSelectTeacher={handleSelectTeacher} />

        {/* Quote Section with Starlight */}
        <QuoteSection />

        {/* Final Thank-You Section & Celebration */}
        <FinalSection />
      </main>

      {/* Heartfelt Footer */}
      <Footer />

      {/* Sarada Madam Dedicated Modal Experience */}
      <SaradaModal
        isOpen={activeTeacher === 'sarada'}
        onClose={handleCloseModal}
      />

      {/* Kranti Madam Dedicated Modal Experience */}
      <KrantiModal
        isOpen={activeTeacher === 'kranti'}
        onClose={handleCloseModal}
      />

      {/* Interactive Mini-Surprise Floating Toast */}
      <Toast 
        toast={toast} 
        onClose={handleCloseToast} 
      />
    </div>
  );
}

export default App;
