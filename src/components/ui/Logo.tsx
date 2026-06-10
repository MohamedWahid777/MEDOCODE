import { motion } from 'framer-motion'

export function Logo() {
  return (
    <div className="flex items-center gap-1 border border-white/10 px-3 py-1.5 rounded-lg hover:border-white/20 transition-colors bg-surface/50 w-fit" dir="ltr">
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-primary font-mono font-bold text-sm sm:text-base"
      >
        &lt;
      </motion.span>
      <span className="font-display tracking-widest text-primary text-sm sm:text-base font-bold whitespace-nowrap">
        MEDOCODE 
      </span>
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
        className="text-primary font-mono font-bold text-sm sm:text-base"
      >
        / &gt;
      </motion.span>
    </div>
  )
}
