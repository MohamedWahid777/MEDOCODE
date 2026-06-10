import { motion } from 'framer-motion'

export function Logo() {
  return (
    <div className="flex items-center gap-1 border border-[var(--color-logo-border)] px-3 py-1.5 rounded-lg hover:border-[var(--color-logo-border-hover)] transition-colors bg-surface/50 w-fit" dir="ltr">
      <motion.span
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-[var(--color-logo-bracket)] font-mono font-bold text-sm sm:text-base"
      >
        &lt;
      </motion.span>
      <span className="font-display tracking-widest text-primary text-sm sm:text-base font-bold whitespace-nowrap">
        MEDOCODE 
      </span>
      <motion.span
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
        className="text-[var(--color-logo-bracket)] font-mono font-bold text-sm sm:text-base"
      >
        / &gt;
      </motion.span>
    </div>
  )
}
