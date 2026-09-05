import { useState, useRef, useEffect } from 'react';
import { CursorProvider, useCursor } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { DepartmentJourney } from './components/DepartmentJourney';
import { AppreciationSection } from './components/AppreciationSection';
import { FacultySection } from './components/FacultySection';
import { SaradaModal } from './components/SaradaModal';
import { BhagawanModal } from './components/BhagawanModal';
import { KrantiModal } from './components/KrantiModal';
import { KishoreModal } from './components/KishoreModal';
import { RadhaKrishnaModal } from './components/RadhaKrishnaModal';
import { QuoteSection } from './components/QuoteSection';
import { FinalSection } from './components/FinalSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import type { ToastData } from './components/Toast';
import type { MiniSurprise, TeacherId } from './types';

function MainApp() {
  const [activeTeacher, setActiveTeacher] = useState<TeacherId | null>(null);
  const [toast, setToast] = useState<ToastData | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { setCursorType } = useCursor();

  // Synchronize modal state with custom cursor
  useEffect(() => {
    if (activeTeacher === 'sarada') {
      setCursorType('sarada-modal');
    } else if (activeTeacher === 'bhagawan') {
      setCursorType('bhagawan-modal');
    } else if (activeTeacher === 'kranti') {
      setCursorType('kranti-modal');
    } else if (activeTeacher === 'kishore') {
      setCursorType('kishore-modal');
    } else if (activeTeacher === 'radhakrishna') {
      setCursorType('radhakrishna-modal');
    } else {
      setCursorType('default');
    }
  }, [activeTeacher, setCursorType]);

  const handleSelectTeacher = (id: TeacherId) => {
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

        {/* AIML 7-Stage Department Learning Journey */}
        <DepartmentJourney />

        {/* Introduction Section: "More Than a Teacher" */}
        <AppreciationSection />

        {/* The People Behind Our Journey: Asymmetric 5-Mentor Faculty Section */}
        <FacultySection onSelectTeacher={handleSelectTeacher} />

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

      {/* Bhagawan Sir Dedicated Modal Experience */}
      <BhagawanModal
        isOpen={activeTeacher === 'bhagawan'}
        onClose={handleCloseModal}
      />

      {/* Kranti Madam Dedicated Modal Experience */}
      <KrantiModal
        isOpen={activeTeacher === 'kranti'}
        onClose={handleCloseModal}
      />

      {/* Kishore Sir Dedicated Modal Experience */}
      <KishoreModal
        isOpen={activeTeacher === 'kishore'}
        onClose={handleCloseModal}
      />

      {/* Radha Krishna Sir Dedicated Modal Experience */}
      <RadhaKrishnaModal
        isOpen={activeTeacher === 'radhakrishna'}
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

export function App() {
  return (
    <CursorProvider>
      <CustomCursor />
      <MainApp />
    </CursorProvider>
  );
}

export default App;
