import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      id: 1,
      title: "Web Development",
      icon: "🖥️",
      description:
        "Custom websites and web applications built using modern technologies like React, Node.js, and Django.",
      features: [
        "Responsive Design",
        "E-commerce Integration",
        "SEO Optimization",
        "API Development",
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "📱",
      description:
        "iOS and Android app development using native and cross-platform frameworks such as Flutter and React Native.",
      features: [
        "Cross-platform Apps",
        "User-friendly UI/UX",
        "Push Notifications",
        "App Store Deployment",
      ],
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: "📈",
      description:
        "Boost your online presence with our digital marketing services including SEO, SEM, and social media marketing.",
      features: [
        "Search Engine Optimization",
        "Google Ads Campaigns",
        "Content Strategy",
        "Social Media Management",
      ],
    },
    {
      id: 4,
      title: "Cloud Solutions",
      icon: "☁️",
      description:
        "Deploy, scale, and manage your infrastructure and applications on the cloud with AWS, Azure, or GCP.",
      features: [
        "Cloud Migration",
        "CI/CD Pipelines",
        "Serverless Architecture",
        "Cost Optimization",
      ],
    },
    {
      id: 5,
      title: "UI/UX Design",
      icon: "🎨",
      description:
        "Crafting visually appealing and intuitive user experiences through wireframes, prototypes, and interactive designs.",
      features: [
        "User Research",
        "Prototyping",
        "Design Systems",
        "Figma & Adobe XD",
      ],
    },
  ];

  return (
    <div>
      <p className="text-3xl font-bold mb-4">Services Page</p>
      {data.map((d) => (
        <div key={d.id} className="mb-4">
          <Link href={`/services/${d.id}`}>
            <p className="text-xl hover:underline cursor-pointer">
              {d.icon} {d.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
