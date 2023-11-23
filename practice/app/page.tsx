"use client";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";

export default function Home() {
  async function handleSubmit(event: Event) {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json", 
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      console.log("Message sent successfuly")
    }
    if (!response.ok) {
      console.log("Error sending message")
    }
  }

  return (
    <main>
      <Navbar />
      <Content />
      <div className="flex flex-row justify-center">
        <Skills />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mb-10 mt-6 ml-24"
        >
          <h3 className="text-slate-300 underline text-xl">Contact Form</h3>
          <label className="text-slate-300" htmlFor="name">
            Name
          </label>
          <input
            className="bg-slate-400/50 rounded-sm text-slate-800 h-8 -mt-4"
            type="text"
            id="name"
          />
          <label className="text-slate-300" htmlFor="email">
            Email
          </label>
          <input
            className="bg-slate-400/50 rounded-sm text-slate-800 h-8 -mt-4"
            type="email"
            id="email"
          />
          <label className="text-slate-300" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-slate-400/50 rounded-sm text-slate-800 h-20 -mt-4"
            id="message"
          ></textarea>
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
