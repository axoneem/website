// 'use client';

import Container from "@/components/Container";
import copy from "@/constants/copy";
import Typography from "@/components/Typography";
import SectionHeading from "@/components/SectionHeading";
import Section from "@/components/Section";
import projectsSectionStyles from "@/styles/sections/ProjectsSection.module.scss";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          headingText={<>What We&apos;re Building</>}
          descriptionText={<>There&apos;s a simple credo behind every project we build: user-first, privacy-conscious, and built to last. Every project reflects a commitment to care, clarity, and respect for the people who use it.</>}
        />

        <ul className={projectsSectionStyles.projectsList}>
          {copy.projects.filter((project) => !project.disabled).map((project) => (
            <li
              className={projectsSectionStyles.projectsListItem}
              key={project.name}
              // initial={{ opacity: 0.25 }}
              // whileInView={{ opacity: 1 }}
              // transition={{ duration: 0.6, ease: "easeOut" }}
              // viewport={{ once: false, amount: 0.01, margin: "-50% 0px -25% 0px" }}
            >
              <div className={projectsSectionStyles.projectDetails}>
                <div className={projectsSectionStyles.projectLogo} aria-label={project.name}>
                  {project.logo}
                </div>
                <Typography className={projectsSectionStyles.projectHeadline} variant="h3">
                  {project.headline}
                </Typography>
                <Typography className={projectsSectionStyles.projectDescription} variant="body1">
                  {project.description}
                </Typography>
                {/* <Chips values={project.tags} /> */}
                {/* <div className="@container">
                  <div className="grid grid-cols-1 @lg:grid-cols-2 gap-8 py-8 text-sm [&>p]:text-left">
                    {project.description}
                  </div>
                </div> */}
                {/* <div className="flex flex-row gap-2">
                  {project.actions?.map((action) => (
                    <Button component={Link} href={action.href} key={action.label}>
                      {action.label}
                    </Button>
                  ))}
                </div> */}
              </div>
              <div className={projectsSectionStyles.projectScreenshots}>
                {project.screenshots.map((screenshot, index) => (
                  <Image
                    key={index}
                    src={screenshot}
                    alt={`Screenshot of ${project.name}`}
                    width={1080}
                    quality={100}
                  />
                ))}
              </div>
              {/* <div className="relative h-full">
                <div className="sticky top-40 flex flex-col gap-2">
                  <Image
                    src={project.screenshotSrc}
                    alt={`Screenshot of ${project.name}`}
                    width={1280}
                    height={640}
                    className="rounded-lg w-full h-auto object-cover object-top overflow-hidden block aspect-[16/9]"
                  />
                </div>
              </div> */}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
