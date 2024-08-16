"use client"

import { sheetRef } from "."
import Sheet from "./Sheet"

export default function SheetContext() {
  return <Sheet ref={sheetRef} />
}
