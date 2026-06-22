import VideoIntro  from "@/components/VideoIntro/VideoIntro";
import Nav from "@/components/Nav/Nav";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <VideoIntro videoSrc="/hero-video.mp4" />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
