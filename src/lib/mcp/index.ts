import { defineMcp } from "@lovable.dev/mcp-js";
import getAbout from "./tools/get-about";
import getCaseStudies from "./tools/get-case-studies";
import getContactInfo from "./tools/get-contact-info";
import getResume from "./tools/get-resume";
import getSkillsMatrix from "./tools/get-skills-matrix";
import searchCaseStudies from "./tools/search-case-studies";

export default defineMcp({
  name: "senthil-nagappan-portfolio",
  title: "Senthil Nagappan · Portfolio",
  version: "0.1.0",
  instructions:
    "Public read-only tools exposing Senthil Nagappan's portfolio: case studies, keyword search, AI skills matrix, résumé link, contact info, and about/positioning. All data is already public on senthilnagappan.com. Use these to answer hiring-manager questions, summarize experience, or link back to full write-ups.",
  tools: [getCaseStudies, searchCaseStudies, getSkillsMatrix, getAbout, getResume, getContactInfo],
});
