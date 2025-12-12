import {Hero} from '@/components/hero'
import {AboutSection} from '@/components/about-section'
import {PillarsSection} from '@/components/pillars-section'
import {ServicesSection} from '@/components/services-section'
import {ApproachSection} from '@/components/approach-section'
import {StorySection} from '@/components/story-section'
import {ConsultCTA} from '@/components/consult-cta'
import {sanityFetch} from '@/sanity/lib/live'
import {forestFlowHomeQuery, forestFlowSettingsQuery} from '@/sanity/lib/queries'

export default async function IndexRoute() {
  const [{data: homeData}, {data: settings}] = await Promise.all([
    sanityFetch({query: forestFlowHomeQuery}),
    sanityFetch({query: forestFlowSettingsQuery}),
  ])

  return (
    <>
      <Hero data={homeData} settings={settings} />
      <AboutSection data={homeData} />
      <PillarsSection data={homeData} />
      <ServicesSection data={homeData} settings={settings} />
      <ApproachSection data={homeData} />
      <StorySection data={homeData} />
      <ConsultCTA data={homeData} settings={settings} />
    </>
  )
}
