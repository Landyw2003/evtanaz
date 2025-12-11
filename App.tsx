import { useState } from 'react';
import { StatusPage } from './components/StatusPage';
import { ObrasheniyaPage } from './components/ObrasheniyaPage';
import { DiagnozyPage } from './components/DiagnozyPage';
import { SpravochnikPage } from './components/SpravochnikPage';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'status' | 'obrasheniya' | 'diagnozy' | 'spravochnik'>('obrasheniya');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePageChange = (page: 'status' | 'obrasheniya' | 'diagnozy' | 'spravochnik') => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D6C8FC' }}>
      <nav className="text-white p-4 shadow-lg relative" style={{ backgroundColor: '#857CE8' }}>
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <div className="hidden lg:block">
            <Menu className="w-6 h-6" />
          </div>
          
          <h1 className="text-sm sm:text-base md:text-lg">Медицинская информационная система</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex ml-auto gap-2">
            <button
              onClick={() => handlePageChange('obrasheniya')}
              className="px-4 py-2 rounded text-sm"
              style={{ 
                backgroundColor: currentPage === 'obrasheniya' ? '#A991ED' : 'transparent'
              }}
            >
              Обращения
            </button>
            <button
              onClick={() => handlePageChange('diagnozy')}
              className="px-4 py-2 rounded text-sm"
              style={{ 
                backgroundColor: currentPage === 'diagnozy' ? '#A991ED' : 'transparent'
              }}
            >
              Диагнозы
            </button>
            <button
              onClick={() => handlePageChange('spravochnik')}
              className="px-4 py-2 rounded text-sm"
              style={{ 
                backgroundColor: currentPage === 'spravochnik' ? '#A991ED' : 'transparent'
              }}
            >
              Справочник
            </button>
            <button
              onClick={() => handlePageChange('status')}
              className="px-4 py-2 rounded text-sm"
              style={{ 
                backgroundColor: currentPage === 'status' ? '#A991ED' : 'transparent'
              }}
            >
              Статус
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 shadow-lg z-50" style={{ backgroundColor: '#857CE8' }}>
            <div className="flex flex-col p-4 gap-2">
              <button
                onClick={() => handlePageChange('obrasheniya')}
                className="px-4 py-3 rounded text-left"
                style={{ 
                  backgroundColor: currentPage === 'obrasheniya' ? '#A991ED' : 'transparent'
                }}
              >
                Обращения
              </button>
              <button
                onClick={() => handlePageChange('diagnozy')}
                className="px-4 py-3 rounded text-left"
                style={{ 
                  backgroundColor: currentPage === 'diagnozy' ? '#A991ED' : 'transparent'
                }}
              >
                Диагнозы
              </button>
              <button
                onClick={() => handlePageChange('spravochnik')}
                className="px-4 py-3 rounded text-left"
                style={{ 
                  backgroundColor: currentPage === 'spravochnik' ? '#A991ED' : 'transparent'
                }}
              >
                Справочник
              </button>
              <button
                onClick={() => handlePageChange('status')}
                className="px-4 py-3 rounded text-left"
                style={{ 
                  backgroundColor: currentPage === 'status' ? '#A991ED' : 'transparent'
                }}
              >
                Статус
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto p-2 sm:p-4 md:p-6">
        {currentPage === 'status' && <StatusPage />}
        {currentPage === 'obrasheniya' && <ObrasheniyaPage />}
        {currentPage === 'diagnozy' && <DiagnozyPage />}
        {currentPage === 'spravochnik' && <SpravochnikPage />}
      </main>
    </div>
  );
}