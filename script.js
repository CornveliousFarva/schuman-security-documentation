import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Lock, Mail, Linkedin } from "lucide-react";

export default function SchumanSecurityPortfolio() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [logoBg, setLogoBg] = React.useState("slate");
  const services = [
    {
      title: "Incident Response Documentation",
      description:
        "Playbooks for compromised accounts, phishing response, access incidents, and security operations workflows.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Security Policy Writing",
      description:
        "Access control, password policies, device security standards, and compliance-ready documentation.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Security Awareness Content",
      description:
        "Employee-facing phishing guides, onboarding security checklists, and practical training resources.",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  const portfolio = [
    {
      title: "Compromised Account Response Guide",
      summary:
        "A security operations guide for account takeover incidents covering containment, investigation, and recovery.",
    },
    {
      title: "Small Business Security Policy",
      summary:
        "A practical information security baseline covering access control, MFA, authentication, and secure data handling.",
    },
    {
      title: "Phishing Awareness Guide",
      summary:
        "End-user training documentation focused on phishing detection, reporting suspicious emails, and secure habits.",
    },
  ];

  const themeClass = darkMode
    ? "min-h-screen bg-slate-950 text-slate-100"
    : "min-h-screen bg-slate-100 text-slate-900";

  const logoBgClass =
    logoBg === "blue"
      ? "bg-sky-100 border-sky-300"
      : logoBg === "white"
      ? "bg-white border-slate-300"
      : "bg-slate-900 border-slate-700";

  return (
    <div className={themeClass}>
      {/* Header */}
      <header className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl border ${logoBgClass}`}>
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Schuman Security Documentation</h1>
              <p className="text-sm text-slate-400">Clear Systems. Stronger Security.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <nav className="flex gap-6 text-sm text-slate-300">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="rounded-xl"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button>

              <select
                value={logoBg}
                onChange={(e) => setLogoBg(e.target.value)}
                className="rounded-xl border border-slate-700 bg-transparent px-3 py-2 text-sm"
              >
                <option value="slate">Logo Slate</option>
                <option value="blue">Logo Blue</option>
                <option value="white">Logo White</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sky-400 font-medium mb-3">Cybersecurity Documentation Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Clear Systems. <br /> Stronger Security.
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl">
            I translate technical systems into clear cybersecurity documentation—incident response guides, security policies, and operational procedures that help teams work securely and efficiently.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-2xl px-6 py-6 text-base">View Portfolio</Button>
            <Button variant="outline" className="rounded-2xl px-6 py-6 text-base border-slate-700 bg-transparent">
              Contact
            </Button>
          </div>
        </div>

        <Card className="rounded-3xl border-slate-800 bg-slate-900 shadow-xl">
          <CardContent className="p-8 space-y-4">
            <h3 className="text-xl font-semibold">Core Focus Areas</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• Incident Response Playbooks</li>
              <li>• GRC Documentation</li>
              <li>• Security Awareness Training</li>
              <li>• Help Desk + Security Operations Support</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold mb-10">Core Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="rounded-3xl border-slate-800 bg-slate-900">
              <CardContent className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                <p className="text-slate-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-semibold mb-10">Portfolio Samples</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <Card key={item.title} className="rounded-3xl border-slate-800 bg-slate-950">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                  <p className="text-slate-400 mb-5">{item.summary}</p>
                  <Button variant="outline" className="rounded-xl border-slate-700 bg-transparent">
                    View Sample
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">About</h3>
        <p className="text-slate-300 text-lg leading-relaxed">
          My background combines technical writing, systems documentation, and IT process improvement. I focus on making cybersecurity understandable, actionable, and operational—helping organizations reduce risk through clarity.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pb-24">
        <Card className="rounded-3xl border-slate-800 bg-slate-900">
          <CardContent className="p-10 text-center">
            <h3 className="text-3xl font-semibold mb-4">Contact</h3>
            <p className="text-slate-300 mb-8">
              Open to cybersecurity documentation, GRC, technical writing, and security operations support opportunities.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-slate-300">
              <div className="flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> your@email.com</div>
              <div className="flex items-center justify-center gap-2"><Linkedin className="w-4 h-4" /> linkedin.com/in/yourprofile</div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
