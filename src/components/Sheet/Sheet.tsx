"use client"

import { AnimatePresence, Variants, motion } from "framer-motion"
import {
  useImperativeHandle,
  forwardRef,
  useRef,
  useState,
  useEffect,
} from "react"
import { SheetListType, SheetRefType } from "."
import Modals from "./pages"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const Sheet = forwardRef<SheetRefType>(({}, ref) => {
  const modalRef = useRef<SheetListType>()
  const modalProps = useRef<any>()
  const [showModal, setShowModal] = useState(false)
  const router = usePathname()

  const Modal = () => {
    if (!modalRef.current) {
      return null
    }
    const SheetContent = Modals[modalRef.current]
    return <SheetContent {...modalProps.current} />
  }
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto"
  }, [showModal])

  useEffect(() => {
    setShowModal(false)
  }, [router])

  useImperativeHandle(ref, () => ({
    show: (modalName: SheetListType, props: any) => {
      modalRef.current = modalName
      modalProps.current = props
      setShowModal(true)
    },
    close: () => {
      setShowModal(false)
    },
  }))

  const variables: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  const sheetVars: Variants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
      transition: {
        type: "just",
        duration: 0.25,
      },
    },
    exit: {
      x: "100%",
    },
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          {...variables}
          className={clsx(
            "fixed top-0 overflow-y-auto left-0 w-full h-full z-50",
            "bg-black bg-opacity-30 backdrop-blur-xl",
            "flex justify-end lg:p-5 p-2 overflow-hidden"
          )}>
          <button
            onClick={() => {
              setShowModal(false)
            }}
            className="absolute left-0 z-10 top-0 h-full w-full "
          />
          <motion.div
            {...sheetVars}
            className={clsx(
              "bg-background w-full h-full z-40 rounded-xl max-w-xl overflow-y-auto"
            )}>
            <Modal />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Sheet.displayName = "Sheet"
export default Sheet
