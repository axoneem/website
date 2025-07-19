import Section from '@/components/Section';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import tenetSectionStyles from '@/styles/sections/TenetSection.module.scss';
import { Splash } from '@/components/Splash';


export default function TenetSection() {
    return (
        <Section className={tenetSectionStyles.root}>
            <Container className={tenetSectionStyles.logoContainer}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.45 73.45">
                    <g>
                        <path d="M13.09,0v25.76C-.71,39.55-4.15,58.48,5.41,68.04s28.49,6.12,42.28-7.68h25.76V0H13.09ZM66.45,53.36h-12.93c8.7-12.63,9.83-27.23,1.81-35.25s-22.61-6.88-35.24,1.82V7h46.36v46.36Z"/>
                    </g>
                </svg> */}
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                        <clipPath id="axoneme-clip" clipPathUnits="objectBoundingBox">
                            <path d="M 0.178,0 v 0.351 C -0.01,0.538 -0.056,0.796 0.074,0.927 s 0.388,0.083 0.576,-0.105 h 0.351 V 0 H 0.178 Z M 0.905,0.727 h -0.176 c 0.118,-0.172 0.134,-0.371 0.025,-0.48 s -0.308,-0.094 -0.48,0.025 V 0.095 h 0.631 v 0.631 Z"/>
                        </clipPath>
                    </defs>
                </svg>
                <Splash className={tenetSectionStyles.splash} />
            </Container>
            <Container>
                <Typography variant="h1" component="p" className={tenetSectionStyles.bodyText}>
                    We emerged from a simple belief: the best tools are the ones you can <span>trust</span>.
                    Software should be transparent, reliable, and <span>built to last</span>. We create applications 
                    that respect your choices and give you a degree of control that <span>means something</span>.
                </Typography>
            </Container>
        </Section>
    )
}