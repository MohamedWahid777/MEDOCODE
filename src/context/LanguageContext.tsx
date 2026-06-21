import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

type Language = 'en' | 'ar'

type LanguageProviderProps = {
  children: React.ReactNode
}

type LanguageProviderState = {
  language: Language
  setLanguage: (lang: Language) => void
  isRtl: boolean
}

const initialState: LanguageProviderState = {
  language: 'en',
  setLanguage: () => null,
  isRtl: false,
}

const LanguageContext = createContext<LanguageProviderState>(initialState)

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation()
  const [language, setLanguageState] = useState<Language>(
    (i18n.language as Language) || 'en'
  )

  const isRtl = language === 'ar'

  useEffect(() => {
    const root = window.document.documentElement
    root.dir = isRtl ? 'rtl' : 'ltr'
    root.lang = language
  }, [language, isRtl])

  const setLanguage = useCallback((lang: Language) => {
    i18n.changeLanguage(lang)
    setLanguageState(lang)
  }, [i18n])

  const value = useMemo(() => ({
    language,
    setLanguage,
    isRtl,
  }), [language, setLanguage, isRtl])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (context === undefined)
    throw new Error('useLanguage must be used within a LanguageProvider')

  return context
}
