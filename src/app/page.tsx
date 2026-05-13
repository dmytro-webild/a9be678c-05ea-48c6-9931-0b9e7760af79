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
import { Award, TrendingUp, Trophy, Zap, Star, Dumbbell, Heart, Lightbulb, Compass, Mail } from "lucide-react";

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
                            { name: "خانه", id: "home" },
                            { name: "درباره ما", id: "about" },
                            { name: "گواهینامه‌ها", id: "achievements" },
                            { name: "خدمات", id: "services" },
                        ]}
                        brandName="مربی شخصی"
                        bottomLeftText="متخصص معتبر"
                        bottomRightText="contact@trainer.com"
                    />
                </div>

                <div id="hero" data-section="hero">
                    <HeroSplitKpi
                        title="بدن خود را متحول کنید، زندگی خود را دگرگون کنید"
                        description="تمرینات تخصصی شخصی طراحی شده برای اهداف شما. چه در حال شروع سفر تناسب اندام خود باشید و چه در حال رساندن عملکرد خود به سطح بعدی، من مربیگری شخصی، روش‌های اثبات‌شده و حمایت بی‌دریغ را برای کمک به شما در دستیابی به نتایج ماندگار ارائه می‌دهم."
                        background={{ variant: "rotated-rays-static-grid" }}
                        kpis={[
                            { value: "۵۰۰+", label: "مشتری موفق" },
                            { value: "۱۰+", label: "سال تجربه" },
                            { value: "۹۵٪", label: "نرخ موفقیت در اهداف" }
                        ]}
                        enableKpiAnimation={true}
                        tag="مربی حرفه‌ای"
                        tagIcon={Award}
                        imageSrc="https://img.b2bpic.net/premium-photo/portrait-men-happy-sports-court-with-squash-racket-fitness-game-exercise-performance-smile-athlete-people-equipment-play-match-club-tournament-practice-competition_590464-483720.jpg?id=382939786"
                        imageAlt="مربی شخصی حرفه‌ای"
                        imagePosition="right"
                        buttons={[
                            { text: "شروع سفر شما", href: "#about" },
                            { text: "مشاهده برنامه‌ها", href: "#services" }
                        ]}
                        mediaAnimation="slide-up"
                    />
                </div>

                <div id="about" data-section="about">
                    <TextAbout
                        title="تعهد من به موفقیت شما: هر مشتری شایسته رویکردی شخصی است. با بیش از یک دهه تجربه در مربیگری تناسب اندام، من روش‌های تمرینی مبتنی بر شواهد را با اشتیاق واقعی برای کمک به شما در رسیدن به پتانسیل خود ترکیب می‌کنم. فلسفه من بر نتایج پایدار، پیشگیری از آسیب و ایجاد عاداتی است که یک عمر باقی می‌مانند."
                        useInvertedBackground={false}
                        buttons={[
                            { text: "داستان من", href: "#achievements" },
                            { text: "روش‌های کار", href: "#philosophy" }
                        ]}
                    />
                </div>

                <div id="achievements" data-section="achievements">
                    <MetricCardOne
                        title="مدارک حرفه‌ای و تجربه"
                        description="تخصص معتبر در آموزش شخصی و توسعه ورزشی"
                        tag="مدارک"
                        tagIcon={TrendingUp}
                        metrics={[
                            { id: "1", value: "۱۵۰", title: "مربی شخصی معتبر", description: "گواهینامه آکادمی ملی پزشکی ورزشی", icon: Trophy },
                            { id: "2", value: "۵۰۰", title: "تخصص‌ها", description: "قدرت، آمادگی جسمانی، تغذیه، تحرک، ریکاوری", icon: Zap },
                            { id: "3", value: "۹۵۰", title: "داستان‌های موفقیت", description: "مشتریانی که با راهنمایی به اهداف خود رسیدند", icon: Star },
                        ]}
                        gridVariant="uniform-all-items-equal"
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                    />
                </div>

                <div id="services" data-section="services">
                    <FeatureCardSeven
                        title="برنامه‌های آموزشی شخصی‌سازی شده"
                        description="راه‌حل‌های تناسب اندام سفارشی متناسب با اهداف و سبک زندگی منحصر به فرد شما"
                        tag="خدمات ما"
                        tagIcon={Dumbbell}
                        features={[
                            {
                                title: "آموزش شخصی یک‌به‌یک",                                description: "جلسات مربیگری انفرادی که کاملاً بر اهداف، فرم و پیشرفت شما متمرکز است. هر تمرین بر اساس سطح تناسب اندام و اهداف شما با بازخورد و تنظیمات در زمان واقعی طراحی می‌شود.",                                imageSrc: "https://img.b2bpic.net/free-photo/group-people-working-out-together-outdoors_23-2149891467.jpg?id=34137118",                                imageAlt: "جلسه آموزشی شخصی یک‌به‌یک"
                            },
                            {
                                title: "کلاس‌های آموزش گروهی کوچک",                                description: "در محیطی کوچک و متمرکز، در حالی که به اهداف تناسب اندام خود می‌رسید، جامعه بسازید. در محیطی انگیزشی با سایر افراد هم‌فکر که به تحول متعهد هستند، توجه شخصی دریافت کنید.",                                imageSrc: "https://img.b2bpic.net/premium-photo/coach-reviewing-playbook-with-team_1314467-168780.jpg?id=324598511",                                imageAlt: "کلاس تناسب اندام گروهی"
                            },
                            {
                                title: "برنامه‌های مربیگری آنلاین",                                description: "از هر کجا با برنامه‌های تمرینی سفارشی، راهنمایی‌های تغذیه‌ای و بررسی ویدئویی فرم بدن، تمرین کنید. با ارزیابی‌های منظم پیشرفت و تنظیمات برنامه بر اساس نتایج و بازخورد خود، در ارتباط بمانید.",                                imageSrc: "https://img.b2bpic.net/free-photo/people-training-athletics_23-2151077709.jpg?id=150856792",                                imageAlt: "پلتفرم مربیگری آنلاین"
                            }
                        ]}
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        buttons={[
                            { text: "رزرو مشاوره", href: "#contact" }
                        ]}
                    />
                </div>

                <div id="philosophy" data-section="philosophy">
                    <FeatureBento
                        title="فلسفه آموزشی من"
                        description="رویکردی جامع به تناسب اندام و سلامتی"
                        tag="روش آموزش"
                        tagIcon={Compass}
                        features={[
                            {
                                title: "اضافه‌بار پیش‌رونده",                                description: "به‌طور سیستماتیک شدت و چالش را افزایش دهید تا پیشرفت مستمر داشته باشید و از توقف در مسیر تناسب اندام خود جلوگیری کنید",                                bentoComponent: "animated-bar-chart"
                            },
                            {
                                title: "تناسب اندام کاربردی",                                description: "تمریناتی که قدرت، تحرک و الگوهای حرکتی واقعی را برای عملکرد بهتر در زندگی روزمره بهبود می‌بخشد",                                bentoComponent: "3d-stack-cards",                                items: [
                                    { icon: Dumbbell, title: "قدرت", subtitle: "ساختن توان", detail: "حرکات ترکیبی برای دستاوردهای ماندگار" },
                                    { icon: Heart, title: "استقامت", subtitle: "افزایش توان", detail: "آمادگی قلبی عروقی و عضلانی" },
                                    { icon: Lightbulb, title: "تحرک", subtitle: "بهبود دامنه", detail: "افزایش انعطاف‌پذیری و سلامت مفاصل" }
                                ]
                            },
                            {
                                title: "عادات پایدار",                                description: "روتین‌های منظمی بسازید که با سبک زندگی شما مطابقت داشته باشد و منجر به نتایج طولانی‌مدت شود، نه راه‌حل‌های سریع",                                bentoComponent: "timeline",                                heading: "سفر آموزشی شما",                                subheading: "سه مرحله تا تحول",                                items: [
                                    { label: "زیربنا", detail: "ساختن فرم مناسب و ایجاد آمادگی جسمانی پایه" },
                                    { label: "پیشرفت", detail: "افزایش تدریجی شدت و پیچیدگی" },
                                    { label: "تسلط", detail: "اوج عملکرد و حفظ نتایج طولانی‌مدت" }
                                ],
                                completedLabel: "تحول شما آغاز می‌شود"
                            }
                        ]}
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={true}
                        buttons={[
                            { text: "شروع تمرین", href: "#contact" }
                        ]}
                    />
                </div>

                <div id="testimonials" data-section="testimonials">
                    <TestimonialCardFifteen
                        testimonial="کار با این مربی رابطه من با تناسب اندام را کاملاً تغییر داد. رویکرد شخصی، تشویق مداوم و تخصص حرفه‌ای تفاوت را ایجاد کرد. من نه‌تنها به اهدافم رسیدم، بلکه اشتیاقی به تمرین کشف کردم که هرگز نمی‌دانستم دارم."
                        rating={5}
                        author="جسیکا چن، علاقه‌مند به تناسب اندام"
                        avatars={[
                            { src: "https://img.b2bpic.net/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-5321.jpg", alt: "جسیکا چن" },
                            { src: "https://img.b2bpic.net/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-19200.jpg", alt: "مارکوس آر." },
                            { src: "https://img.b2bpic.net/free-photo/masculanity-strength-power-concept-picture-handsome-fit-young-afro-american-bodybuilder-with-bald-head-smoothly-shaven-face-looking-camera-with-confident-serious-facial-expression_343059-336.jpg", alt: "دیوید دبلیو." },
                            { src: "https://img.b2bpic.net/free-photo/portrait-smiling-afro-american-sports-man-with-arms-folded-looking-camera_171337-8263.jpg", alt: "الکس کی." }
                        ]}
                        ratingAnimation="slide-up"
                        avatarsAnimation="slide-up"
                        useInvertedBackground={true}
                    />
                </div>

                <div id="contact" data-section="contact">
                    <ContactSplit
                        background={{ variant: "plain" }}
                        tag="آماده تحول هستید؟"
                        title="سفر تناسب اندام خود را امروز شروع کنید"
                        description="اولین قدم را به سوی نسخه سالم‌تر و قوی‌تر خود بردارید. یک مشاوره رایگان برای بحث در مورد اهداف خود، یادگیری در مورد گزینه‌های تمرینی شخصی و کشف اینکه چگونه می‌توانیم برای دستیابی به نتایج با هم کار کنیم، برنامه‌ریزی کنید."
                        useInvertedBackground={false}
                        imageSrc="https://img.b2bpic.net/free-photo/front-view-man-with-swimming-equipment_23-2150465483.jpg"
                        imageAlt="الهام‌بخش تمرینات تناسب اندام"
                        mediaPosition="right"
                        mediaAnimation="slide-up"
                        tagIcon={Mail}
                        inputPlaceholder="ایمیل شما"
                        buttonText="شروع کنید"
                        termsText="ما به حریم خصوصی شما احترام می‌گذاریم. در هر زمان می‌توانید لغو اشتراک کنید."
                    />
                </div>

                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="مربی شخصی"
                        leftLink={{ text: "خیابان ۱۲۳ تناسب اندام، شهر ورزش", href: "#" }}
                        rightLink={{ text: "شنبه-پنجشنبه: ۶ صبح تا ۱۰ شب", href: "#" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}