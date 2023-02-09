import Container from "@/components/Container"
import MyTitle from "@/components/MyTitle"
import MyVerse from "@/components/MyVerse"
import Repeater from "@/components/Repeater"
import SwiperWrapper from "@/components/SwiperWrapper"
import getAyets, { getAyet } from "@/lib/ayets"
import { AyetType } from "@/types/index"
import { GetStaticPropsContext } from "next"
import { SwiperSlide } from "swiper/react"

type AyetProps = {
  ayet: AyetType
  ayets: AyetType[]
}

export default function Ayet({ ayet, ayets }: AyetProps) {
  const renderVerse = (item: AyetType, index: number) => {
    return <MyVerse key={index} {...item} />
  }
  return (
    <Container>
      <MyVerse className="mb-10 block" isCurrent {...ayet} />
      <Repeater<AyetType>
        className="grid grid-cols-4 gap-4"
        items={ayets}
        renderHeader={<MyTitle title="Diğer Ayetler" />}
        renderItem={renderVerse}
      />
    </Container>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const ayet = getAyet(context.params?.slug as string)
  const ayets = getAyets()

  return {
    props: { ayet, ayets },
  }
}

export async function getStaticPaths() {
  const ayets = getAyets()
  return {
    paths: ayets.map((item) => `/ayet/${item.slug}-${item.id}`),
    fallback: false, // false or 'blocking'
  }
}
