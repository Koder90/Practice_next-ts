import  Content  from "./components/content/content"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import Skills from "./components/skills/skills"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Content />
      <Skills />
      <Footer />
    </main>
  )
}
