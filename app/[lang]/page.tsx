import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default async function Home({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <Hero dict={dict} lang={params.lang} />
      <About dict={dict} lang={params.lang} />
      <Projects dict={dict} lang={params.lang} />
      <Blog dict={dict} lang={params.lang} />
      <Contact dict={dict} lang={params.lang} />
    </>
  )
}
