import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "wayve-ai",
    category: "EdTech AI Platform",
    title: "Wayve (优航AI)",
    src: "/assets/projects-screenshots/wayve-ai/main.png", // TODO: 需要添加截图
    screenshots: ["dashboard.png", "matching.png", "mentor.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://frontieracademy.co",
    github: undefined, // 私有项目
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl font-bold text-center mb-4">
            Scaling Elite Admissions Expertise with AI
          </TypographyP>
          <TypographyP className="font-mono">
            Wayve (优航AI) is an AI co-pilot that guides students from college 
            application to their first career. We&apos;re building on proven success from 
            Frontier Academy, which achieved a <strong>~90% G5 offer rate</strong> with 
            1,500+ students served.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🎯 Mission</TypographyH3>
          <p className="font-mono mb-2">
            Fixing the &ldquo;broken bridge&rdquo; between education and employment by making 
            elite guidance accessible to every ambitious student, not just the privileged few.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/wayve-ai/dashboard.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">🤖 AI-Powered Matching</TypographyH3>
          <p className="font-mono mb-2">
            Our proprietary <strong>9D matching algorithm</strong> connects students with 
            the perfect mentors from our network of 30+ experts. Powered by advanced NLP 
            and machine learning, trained on our unique dataset from Frontier Academy.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/wayve-ai/matching.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">📚 Comprehensive Database</TypographyH3>
          <p className="font-mono mb-2">
            Access to <strong>6,000+ universities</strong> globally, with detailed 
            program information, admission requirements, and success strategies. 
            All curated and validated by our expert team.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/wayve-ai/mentor.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">🚀 Traction & Growth</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li className="font-mono">
              <strong>Profitable consultancy</strong> with proven ~90% G5 offer rate
            </li>
            <li className="font-mono">
              <strong>1,500+ students</strong> successfully served
            </li>
            <li className="font-mono">
              <strong>30+ expert mentors</strong> in our network
            </li>
            <li className="font-mono">
              <strong>5+ pilot agreements</strong> secured for platform rollout
            </li>
            <li className="font-mono">
              <strong>a16z Speedrun accelerator</strong> participant
            </li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">💡 Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with cutting-edge AI/ML technologies:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li className="font-mono">
              <strong>NLP & PyTorch</strong> for intelligent matching and recommendations
            </li>
            <li className="font-mono">
              <strong>React & Next.js</strong> for blazing-fast user experience
            </li>
            <li className="font-mono">
              <strong>Firebase & PostgreSQL</strong> for scalable data management
            </li>
            <li className="font-mono">
              <strong>Custom fine-tuning</strong> on proprietary admissions dataset
            </li>
          </ul>
          
          <p className="font-mono mb-2 mt-8 text-center italic">
            &ldquo;From profitable R&D lab to globally scalable AI platform. 
            This is how we democratize access to elite guidance.&rdquo;
          </p>
        </div>
      );
    },
  },
  {
    id: "frontier-academy",
    category: "EdTech Consultancy",
    title: "Frontier Academy",
    src: "/assets/projects-screenshots/frontier-academy/main.png", // TODO: 需要添加截图
    screenshots: ["students.png", "mentors.png", "results.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://frontieracademy.co",
    github: undefined, // 私有项目
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl font-bold text-center mb-4">
            Market-Leading Elite Admissions Consultancy
          </TypographyP>
          <TypographyP className="font-mono">
            Built from zero to one as a solo founder, Frontier Academy is now 
            the market leader in elite university admissions consulting. We&apos;ve 
            created a repeatable system for success, achieving a <strong>near-90% 
            G5 offer rate</strong> in hyper-competitive programs like Imperial&apos;s 
            Bioengineering.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🎯 The Challenge</TypographyH3>
          <p className="font-mono mb-2">
            As a solo founder, I had to rapidly master every aspect of building 
            a business from scratch—marketing, sales, product design, and client 
            success. This wasn&apos;t just consulting; it was creating a repeatable 
            system for student success.
          </p>
          
          <TypographyH3 className="my-4 mt-8">📊 Results & Impact</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li className="font-mono">
              <strong>~90% G5 offer rate</strong> in hyper-competitive programs
            </li>
            <li className="font-mono">
              <strong>1,500+ students</strong> successfully guided
            </li>
            <li className="font-mono">
              <strong>30+ expert mentors</strong> recruited and trained
            </li>
            <li className="font-mono">
              <strong>Profitable from year one</strong> - bootstrapped growth
            </li>
            <li className="font-mono">
              <strong>Proprietary methodology</strong> that became the foundation for Wayve AI
            </li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/frontier-academy/students.png`,
              `${BASE_PATH}/frontier-academy/mentors.png`,
              `${BASE_PATH}/frontier-academy/results.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">💡 Key Innovations</TypographyH3>
          <p className="font-mono mb-2">
            Developed a systematic approach to admissions success:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li className="font-mono">
              <strong>Personalized guidance framework</strong> based on student profiles
            </li>
            <li className="font-mono">
              <strong>Mentor matching algorithm</strong> (manual v1.0, now AI-powered in Wayve)
            </li>
            <li className="font-mono">
              <strong>Data-driven insights</strong> from 1,500+ application cycles
            </li>
            <li className="font-mono">
              <strong>Scalable operations</strong> built for growth
            </li>
          </ul>
          
          <p className="font-mono mb-2 mt-8 text-center italic">
            &ldquo;Frontier Academy proved I have the grit and resourcefulness to build 
            a successful company. It&apos;s now our R&D lab for scaling with AI.&rdquo;
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-safety-society",
    category: "Community & Leadership",
    title: "AI Safety Society @ Imperial",
    src: "/assets/projects-screenshots/ai-safety-society/main.png", // TODO: 需要添加截图
    screenshots: ["events.png", "community.png", "partnership.png"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "https://www.linkedin.com/in/yule-yang-45596b229/", // 或社团官方链接
    github: undefined,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl font-bold text-center mb-4">
            Building Imperial&apos;s First AI Safety Community
          </TypographyP>
          <TypographyP className="font-mono">
            Founded the first-ever AI Safety society at Imperial College London, 
            identifying a critical gap in the university&apos;s ecosystem and building 
            a thriving community from nothing.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🚀 From Zero to Top 3</TypographyH3>
          <p className="font-mono mb-2">
            In our first year, we became one of the <strong>top 3 most active 
            societies</strong> on campus:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li className="font-mono">
              <strong>80+ events</strong> hosted in year one
            </li>
            <li className="font-mono">
              <strong>5,000+ attendees</strong> engaged
            </li>
            <li className="font-mono">
              <strong>Technical partnership with IC Hack</strong>
            </li>
            <li className="font-mono">
              <strong>Partnerships with leading labs</strong> - CAIS (US) and SAIL (UK)
            </li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-safety-society/events.png`,
              `${BASE_PATH}/ai-safety-society/community.png`,
              `${BASE_PATH}/ai-safety-society/partnership.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">🤝 Building Partnerships</TypographyH3>
          <p className="font-mono mb-2">
            Proactively reached out to world-class institutions and built 
            meaningful collaborations:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li className="font-mono">
              <strong>CAIS (Center for AI Safety)</strong> - US leading research lab
            </li>
            <li className="font-mono">
              <strong>SAIL (Stanford AI Lab)</strong> - UK chapter partnership
            </li>
            <li className="font-mono">
              <strong>IC Hack</strong> - Technical collaboration for hackathons
            </li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">💡 Key Learnings</TypographyH3>
          <p className="font-mono mb-2">
            This experience taught me:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li className="font-mono">
              How to <strong>build a community</strong> from scratch
            </li>
            <li className="font-mono">
              How to <strong>forge partnerships</strong> with world-class institutions
            </li>
            <li className="font-mono">
              How to <strong>execute on an ambitious vision</strong>
            </li>
            <li className="font-mono">
              That I don&apos;t wait for opportunities—<strong>I create them</strong>
            </li>
          </ul>
          
          <p className="font-mono mb-2 mt-8 text-center italic">
            &ldquo;I don&apos;t wait for opportunities; I create them. This society proved 
            I have the leadership to build something impactful at scale.&rdquo;
          </p>
        </div>
      );
    },
  },
  {
    id: "firebase-gdg",
    category: "Developer Platform",
    title: "Firebase Demo @ Google DevCon",
    src: "/assets/projects-screenshots/firebase-gdg/main.png", // TODO: 需要添加截图
    screenshots: ["platform.png", "presentation.png", "architecture.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.node,
      ],
    },
    live: undefined, // 内部项目
    github: undefined,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl font-bold text-center mb-4">
            Building for Google Developer Conference 2025
          </TypographyP>
          <TypographyP className="font-mono">
            Built the Firebase demo platform for Shanghai&apos;s Google Developer Group, 
            showcasing cutting-edge Firebase features at the 2025 Google Developer 
            Conference. Presented our architecture to executives from Alibaba Cloud 
            and other leading tech companies.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🎯 The Mission</TypographyH3>
          <p className="font-mono mb-2">
            Create a production-grade demo platform that showcases Firebase&apos;s 
            capabilities to thousands of developers and tech leaders at one of 
            Asia&apos;s premier developer conferences.
          </p>
          
          <TypographyH3 className="my-4 mt-8">🏗️ Technical Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Built a comprehensive platform demonstrating:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li className="font-mono">
              <strong>Real-time Database</strong> - Live collaboration features
            </li>
            <li className="font-mono">
              <strong>Authentication</strong> - Multi-provider auth flows
            </li>
            <li className="font-mono">
              <strong>Cloud Functions</strong> - Serverless backend logic
            </li>
            <li className="font-mono">
              <strong>Hosting & CDN</strong> - Global deployment strategy
            </li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/firebase-gdg/platform.png`,
              `${BASE_PATH}/firebase-gdg/presentation.png`,
              `${BASE_PATH}/firebase-gdg/architecture.png`,
            ]}
          />
          
          <TypographyH3 className="my-4 mt-8">🎤 Presentation Impact</TypographyH3>
          <p className="font-mono mb-2">
            Presented our architecture to senior executives from:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li className="font-mono">
              <strong>Alibaba Cloud</strong> - Cloud infrastructure leaders
            </li>
            <li className="font-mono">
              <strong>Google Developer Relations</strong> - Firebase team
            </li>
            <li className="font-mono">
              <strong>Leading Chinese tech companies</strong>
            </li>
          </ul>
          
          <TypographyH3 className="my-4 mt-8">💡 Key Achievement</TypographyH3>
          <p className="font-mono mb-2">
            This project demonstrated my ability to <strong>bridge the gap between 
            deep tech and real-world application</strong>, delivering enterprise-grade 
            solutions under tight deadlines for high-stakes events.
          </p>
          
          <p className="font-mono mb-2 mt-8 text-center italic">
            &ldquo;Bridging deep tech with real-world impact. From code to conference stage.&rdquo;
          </p>
        </div>
      );
    },
  },
];
export default projects;
