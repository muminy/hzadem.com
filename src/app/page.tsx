import Container from ":/components/Container/Container"
import Categories from ":/components/RightSidebars/Categories"
import TrendBlogs from ":/components/RightSidebars/TrendPost"
import HeroBlogs from ":/components/Sections/HeroBlogs"
import LatestPosts from ":/components/Sections/LatestPosts"

import { generateSeo } from ":/lib/metadata"

export async function generateMetadata() {
  return generateSeo({})
}

export default async function Home() {
  return (
    <div className="bg-secondary py-5">
      <HeroBlogs />
      <Container className="grid grid-cols-12 xl:gap-x-10 gap-x-0">
        <div className="xl:col-span-8 col-span-12">
          <LatestPosts />
        </div>
        <div className="xl:col-span-4 col-span-12 xl:pt-[140px] pt-4 space-y-10">
          <Categories />
          <TrendBlogs />
        </div>
      </Container>
    </div>
  )
}

export const revalidate = 10
