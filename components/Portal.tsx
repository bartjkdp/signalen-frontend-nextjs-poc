import { useEffect, useState, ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from "@/styles/overlay.module.css"

interface PortalProps {
   children?: ReactNode
}

const Portal= ({ children }: PortalProps) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(<div className={styles.overlay}>{children}</div>,
        document.querySelector("#portal")!)
      : null
}

export default Portal