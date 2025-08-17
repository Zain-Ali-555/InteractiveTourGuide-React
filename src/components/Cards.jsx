import React from "react";
import { Sparkles, Rocket, Laptop, Brain, GraduationCap, Network } from "lucide-react";

function Card({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-xl hover:scale-105 transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

export default function Cards() {
  return (
    <section
      id="features"
      data-tour="cards"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <p className="text-gray-600 mt-2 text-center">
          Do simple onboarding tours in minutes with a clean design.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card icon={Brain} title="AI Job Insights">
            Discover how AI is reshaping industries and creating new
            opportunities.
          </Card>

          <Card icon={Rocket} title="Skill Upgrade">
            Learn AI-powered tools to stay ahead in the competitive job market.
          </Card>

          <Card icon={Laptop} title="Remote AI Roles">
            Explore flexible AI-related jobs that can be done from anywhere.
          </Card>

          <Card icon={Sparkles} title="Smart Careers">
            AI is unlocking new job roles every day—be future-ready.
          </Card>

          <Card icon={GraduationCap} title="Upskilling Path">
            Master essential AI and data skills to boost your career growth.
          </Card>

          <Card icon={Network} title="Global Opportunities">
            Connect with AI-driven companies hiring talent worldwide.
          </Card>
        </div>
      </div>
    </section>
  );
}
