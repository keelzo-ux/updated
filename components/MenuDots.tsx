
'use client'
import { motion } from 'framer-motion'

export default function MenuDots() {
  return (
    <motion.div whileHover={{ scale: 1.1 }} style={{ position: 'fixed', top: 20, right: 20 }}>
      ⋮
    </motion.div>
  )
}
