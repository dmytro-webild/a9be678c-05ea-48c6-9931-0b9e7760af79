"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Award, TrendingUp, Trophy, Zap, Star, Dumbbell, Heart, Lightbulb, Compass, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export default function PersonalTrainerPage() {
    return (
        <ThemeProvider
            defaultButtonVariant="directional-hover"
            defaultTextAnimation="background-highlight"
            borderRadius="pill"
            contentWidth="medium"
            sizing="mediumLarge"
            background="aurora"
            cardStyle="gradient-bordered"
            primaryButtonStyle="primary-glow"
            secondaryButtonStyle="layered"
            headingFontWeight="semibold"
        >
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleFullscreen
                        navItems={[
                            { name: "Home", id: "home" },
                            { name: "About", id: "about" },
                            { name: "Certifications", id: "achievements" },
                            { name: "Services", id: "services" },
                        ]}
                        brandName="Personal Trainer"
                        bottomLeftText="Certified Professional"
                        bottomRightText="contact@trainer.com"
                    />
                </div>

                <div id="hero" data-section="hero">
                    <HeroSplitKpi
                        title="Transform Your Body, Transform Your Life"
                        description="Expert personal training designed for your goals. Whether you're starting your fitness journey or taking your performance to the next level, I provide personalized coaching, proven methods, and unwavering support to help you achieve lasting results."
                        background={{ variant: "rotated-rays-static-grid" }}
                        kpis={[
                            { value: "500+", label: "Clients Transformed" },
                            { value: "10+", label: "Years Experience" },
                            { value: "95%", label: "Goal Achievement Rate" }
                        ]}
                        enableKpiAnimation={true}
                        tag="Professional Coach"
                        tagIcon={Award}
                        imageSrc="https://img.b2bpic.net/premium-photo/portrait-men-happy-sports-court-with-squash-racket-fitness-game-exercise-performance-smile-athlete-people-equipment-play-match-club-tournament-practice-competition_590464-483720.jpg?id=382939786"
                        imageAlt="Professional Personal Trainer"
                        imagePosition="right"
                        buttons={[
                            { text: "Start Your Journey", href: "#about" },
                            { text: "View Training Programs", href: "#services" }
                        ]}
                        mediaAnimation="slide-up"
                    />
                </div>

                <div id="about" data-section="about">
                    <TextAbout
                        title="My Commitment to Your Success: Every client deserves a personalized approach. With over a decade of experience in fitness coaching, I combine evidence-based training methods with genuine passion for helping you reach your potential. My philosophy centers on sustainable results, injury prevention, and building habits that last a lifetime."
                        useInvertedBackground={false}
                        buttons={[
                            { text: "Learn My Story", href: "#achievements" },
                            { text: "Explore Methods", href: "#philosophy" }
                        ]}
                    />
                </div>

                <div id="achievements" data-section="achievements">
                    <MetricCardOne
                        title="Professional Credentials & Experience"
                        description="Certified expertise in personal training and athletic development"
                        tag="Qualifications"
                        tagIcon={TrendingUp}
                        metrics={[
                            { id: "1", value: "150", title: "Certified Personal Trainer", description: "National Academy of Sports Medicine certification", icon: Trophy },
                            { id: "2", value: "500", title: "Specializations", description: "Strength, conditioning, nutrition, mobility, recovery", icon: Zap },
                            { id: "3", value: "950", title: "Success Stories", description: "Clients who achieved their fitness goals with guidance", icon: Star },
                        ]}
                        gridVariant="uniform-all-items-equal"
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                    />
                </div>

                <div id="services" data-section="services">
                    <FeatureCardSeven
                        title="Personalized Training Programs"
                        description="Customized fitness solutions tailored to your unique goals and lifestyle"
                        tag="Service Offerings"
                        tagIcon={Dumbbell}
                        features={[
                            {
                                title: "One-on-One Personal Training",                                description: "Individual coaching sessions focused entirely on your goals, form, and progression. Each workout is designed based on your fitness level, preferences, and objectives with real-time feedback and adjustments.",                                imageSrc: "https://img.b2bpic.net/free-photo/group-people-working-out-together-outdoors_23-2149891467.jpg?id=34137118",                                imageAlt: "One-on-one personal training session"
                            },
                            {
                                title: "Small Group Training Classes",                                description: "Build community while reaching your fitness goals in small, focused groups. Receive personalized attention in a motivating environment with other like-minded individuals committed to transformation.",                                imageSrc: "https://img.b2bpic.net/premium-photo/coach-reviewing-playbook-with-team_1314467-168780.jpg?id=324598511",                                imageAlt: "Small group fitness class"
                            },
                            {
                                title: "Online Coaching Programs",                                description: "Train from anywhere with customized workout plans, nutrition guidance, and video form checks. Stay connected with regular progress assessments and program adjustments based on your results and feedback.",                                imageSrc: "https://img.b2bpic.net/free-photo/people-training-athletics_23-2151077709.jpg?id=150856792",                                imageAlt: "Online fitness coaching platform"
                            }
                        ]}
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        buttons={[
                            { text: "Book Consultation", href: "#contact" }
                        ]}
                    />
                </div>

                <div id="philosophy" data-section="philosophy">
                    <FeatureBento
                        title="My Training Philosophy"
                        description="Holistic approach to fitness and wellness"
                        tag="Training Method"
                        tagIcon={Compass}
                        features={[
                            {
                                title: "Progressive Overload",                                description: "Systematically increase intensity and challenge to drive continuous improvement and prevent plateaus in your fitness journey",                                bentoComponent: "animated-bar-chart"
                            },
                            {
                                title: "Functional Fitness",                                description: "Training that improves real-world strength, mobility, and movement patterns for better performance in daily life",                                bentoComponent: "3d-stack-cards",                                items: [
                                    { icon: Dumbbell, title: "Strength", subtitle: "Build Power", detail: "Compound movements for lasting gains" },
                                    { icon: Heart, title: "Endurance", subtitle: "Boost Stamina", detail: "Cardiovascular and muscular conditioning" },
                                    { icon: Lightbulb, title: "Mobility", subtitle: "Improve Range", detail: "Enhanced flexibility and joint health" }
                                ]
                            },
                            {
                                title: "Sustainable Habits",                                description: "Build consistent routines that fit your lifestyle and lead to long-term results, not quick fixes",                                bentoComponent: "timeline",                                heading: "Your Training Journey",                                subheading: "Three phases to transformation",                                items: [
                                    { label: "Foundation", detail: "Building proper form and establishing baseline fitness" },
                                    { label: "Progression", detail: "Gradually increasing intensity and complexity" },
                                    { label: "Mastery", detail: "Peak performance and maintaining long-term results" }
                                ],
                                completedLabel: "Your transformation begins"
                            }
                        ]}
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={true}
                        buttons={[
                            { text: "Start Training", href: "#contact" }
                        ]}
                    />
                </div>

                <div id="testimonials" data-section="testimonials">
                    <TestimonialCardFifteen
                        testimonial="Working with this trainer completely changed my relationship with fitness. The personalized approach, constant encouragement, and professional expertise made all the difference. I not only achieved my goals but discovered a passion for training I never knew I had."
                        rating={5}
                        author="Jessica Chen, Fitness Enthusiast"
                        avatars={[
                            { src: "https://img.b2bpic.net/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-5321.jpg", alt: "Jessica Chen" },
                            { src: "https://img.b2bpic.net/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-19200.jpg", alt: "Marcus R." },
                            { src: "https://img.b2bpic.net/free-photo/masculanity-strength-power-concept-picture-handsome-fit-young-afro-american-bodybuilder-with-bald-head-smoothly-shaven-face-looking-camera-with-confident-serious-facial-expression_343059-336.jpg", alt: "David W." },
                            { src: "https://img.b2bpic.net/free-photo/portrait-smiling-afro-american-sports-man-with-arms-folded-looking-camera_171337-8263.jpg", alt: "Alex K." }
                        ]}
                        ratingAnimation="slide-up"
                        avatarsAnimation="slide-up"
                        useInvertedBackground={true}
                    />
                </div>

                <div id="contact" data-section="contact">
                    <ContactSplit
                        background={{ variant: "plain" }}
                        tag="Ready to Transform?"
                        title="Start Your Fitness Journey Today"
                        description="Take the first step toward the healthier, stronger version of yourself. Schedule a free consultation to discuss your goals, learn about personalized training options, and discover how we can work together to achieve results."
                        useInvertedBackground={false}
                        imageSrc="https://img.b2bpic.net/free-photo/front-view-man-with-swimming-equipment_23-2150465483.jpg"
                        imageAlt="Fitness training inspiration"
                        mediaPosition="right"
                        mediaAnimation="slide-up"
                        tagIcon={Mail}
                        inputPlaceholder="your@email.com"
                        buttonText="Get Started"
                        termsText="We respect your privacy. Unsubscribe at any time."
                    />
                </div>

                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Personal Trainer"
                        leftLink={{ text: "123 Fitness Way, Gym City", href: "#" }}
                        rightLink={{ text: "Mon-Sun: 6am - 10pm", href: "#" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}