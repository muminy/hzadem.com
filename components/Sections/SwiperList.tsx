import { AyetType } from "@/types/index"
import { SwiperSlide } from "swiper/react"
import { AyetSwiperProps } from "."
import MyArticle from "../MyVerse"
import SwiperWrapper from "../SwiperWrapper"

export default function SwiperList({ ayets }: AyetSwiperProps) {
  const renderSwiper = (item: AyetType, index: number) => {
    return (
      <SwiperSlide key={index} style={{ width: 240 }}>
        <MyArticle {...item} />
      </SwiperSlide>
    )
  }

  return (
    <SwiperWrapper spaceBetween={20} title="Ayetler">
      {ayets.map(renderSwiper)}
    </SwiperWrapper>
  )
}
