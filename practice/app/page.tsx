import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Content />
      <div className="flex flex-row justify-center">
        <Skills />
        <form className="flex flex-col gap-4 mb-10 mt-6 ml-24">
          <h3 className="text-slate-300 underline text-xl">Contact Form</h3>
          <label className="text-slate-300">Name</label>
          <input
            className="bg-slate-400/50 rounded-sm text-slate-800 h-8 -mt-4"
            type="text"
          />
          <label className="text-slate-300">Email</label>
          <input
            className="bg-slate-400/50 rounded-sm text-slate-800 h-8 -mt-4"
            type="email"
          />
          <label className="text-slate-300">Message</label>
          <textarea className="bg-slate-400/50 rounded-sm text-slate-800 h-20 -mt-4"></textarea>
          <button
            type="submit"
            className="bg-slate-900/50 rounded-sm text-slate-300 h-8"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
