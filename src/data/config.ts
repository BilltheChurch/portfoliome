const config = {
  title: "Yule (Tim) Yang | Founder & CTO",
  description: {
    long: "Portfolio of Yule (Tim) Yang, Founder & CTO at Wayve (优航AI) and Imperial College AI/ML Alum. I'm an entrepreneur and engineer driven by a mission to fix the 'broken bridge' between education and employment. Discover my journey from building Frontier Academy to scaling AI-powered student success with Wayve.",
    short:
      "Founder & CTO at Wayve (优航AI) | AI Entrepreneur scaling education with cutting-edge technology",
  },
  keywords: [
    "Yule Yang",
    "Tim Yang",
    "AI entrepreneur",
    "Founder & CTO",
    "Wayve AI",
    "Frontier Academy",
    "EdTech",
    "AI/ML engineer",
    "Imperial College",
    "full-stack developer",
    "React",
    "TypeScript",
    "Python",
    "NLP",
    "PyTorch",
    "Next.js",
  ],
  author: "Yule (Tim) Yang",
  email: "billthechurch@gmail.com",
  site: "https://yule-yang.vercel.app", // 将在部署后自动更新为实际域名

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/billthechurch",
    linkedin: "https://www.linkedin.com/in/yule-yang-45596b229/",
  },
};
export { config };
