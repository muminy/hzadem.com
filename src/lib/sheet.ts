import { SheetListType, sheetRef } from ":/components/Sheet"

export function showSheet(
  modalName: SheetListType,
  props?: any
) {
  sheetRef.current?.show(modalName, props)
}

export function closeSheet() {
  sheetRef.current?.close()
}
