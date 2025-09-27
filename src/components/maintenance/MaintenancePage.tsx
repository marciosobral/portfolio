import { Dictionary } from '@/src/lib/dictionaries';
import { Locale } from '@/src/lib/i18n';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

interface MaintenancePageProps {
  dict: Dictionary;
}

export function MaintenancePage({ dict }: MaintenancePageProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">

        {/* Language Switcher */}
        <div className="mb-8 flex justify-center">
          <LanguageSwitcher />
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">

          {/* Status Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.maintenance.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-blue-200 mb-6">
            {dict.maintenance.subtitle}
          </p>

          {/* Contact Info */}
          <div className="mb-6">
            <p className="text-sm text-gray-300 mb-4">
              {dict.maintenance.contact}
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:contato@marciosobral.com.br"
                className="flex items-center text-blue-300 hover:text-blue-200 transition-colors"
              >
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </a>
              <a
                href="https://linkedin.com/in/marciosobral"
                className="flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Márcio Sobral • {dict.layout.footer.rights}
          </p>
        </div>

      </div>
    </div>
  );
}
