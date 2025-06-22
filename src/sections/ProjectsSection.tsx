import { Container } from "@/components/Container";
import copy from "@/constants/copy";
import Button from "@/components/Button";
import Chips from "@/components/Chips";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="-mt-24">
      <Container>
        <h3 className="text-md mb-16">
          What we&apos;re building
        </h3>

        <ul className="flex flex-col gap-48">
          {copy.projects.map((project) => (
            <li className="grid grid-cols-1 md:grid-cols-[5fr_7fr] lg:grid-cols-2 gap-16" key={project.name}>
              <div className="flex flex-col gap-4">
                <div className="h-8 [&>svg]:h-full [&>svg]:w-auto" aria-role="image" aria-label={project.name} aria-hidden="true">
                  {project.logo}
                </div>
                <h4 className="text-4xl">{project.tagline}</h4>
                <Chips values={project.tags} />
                <div className="@container">
                  <div className="grid grid-cols-1 @lg:grid-cols-2 gap-8 py-8 text-sm [&>p]:text-left">
                    {project.description}
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  {project.actions?.map((action) => (
                    <Button component={Link} href={action.href} key={action.label}>
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="relative h-full">
                <div className="sticky top-40 flex flex-col gap-2">
                  <Image
                    src={project.screenshotSrc}
                    alt={`Screenshot of ${project.name}`}
                    width={1280}
                    height={640}
                    className="rounded-lg w-full h-auto object-cover object-top overflow-hidden block aspect-[16/9]"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
