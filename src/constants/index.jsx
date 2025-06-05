// =========================
// Icons and Assets Imports
// =========================

import { 
  BotMessageSquare, 
  BatteryCharging, 
  Fingerprint, 
  ShieldHalf, 
  PlugZap, 
  GlobeLock 
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

// =========================
// Navigation Menu Items
// =========================

/**
 * Navigation links used in the navbar.
 * Each object includes a label and a corresponding section link.
 */
export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

// =========================
// Testimonials Section
// =========================

/**
 * List of user testimonials.
 * Each object represents a user's feedback with personal and company details.
 */
export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer. Their attention to detail and innovative solutions helped us achieve our goals quickly.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown. They exceeded our expectations and delivered outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched.",
  },
];

// =========================
// Feature Highlights
// =========================

/**
 * Feature cards used in the Features section.
 * Each object includes an icon, title, and feature description.
 */
export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description: "Build VR applications that run seamlessly across mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description: "Jumpstart your VR projects with a variety of built-in templates for different types of applications.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description: "Preview your VR application in real-time, allowing for quick iterations and feedback.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description: "Collaborate in real-time with your team, sharing ideas and working together efficiently.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description: "Gain insights into user behavior and engagement through a built-in analytics dashboard.",
  },
];

// =========================
// Checklist Items (Workflow)
// =========================

/**
 * Checklist items shown in the Workflow section.
 * Each step briefly explains a key benefit or capability of the product.
 */
export const checklistItems = [
  {
    title: "Code merge made easy",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

// =========================
// Pricing Plans
// =========================

/**
 * Different subscription plans offered to users.
 * Each plan includes a title, price, and list of included features.
 */
export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

// =========================
// Footer Section Links
// =========================

/**
 * Resource links shown in the footer's Resources column.
 */
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

/**
 * Platform-related links shown in the footer's Platform column.
 */
export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

/**
 * Community-related links shown in the footer's Community column.
 */
export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
