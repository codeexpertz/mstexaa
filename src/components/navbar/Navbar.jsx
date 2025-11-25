"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about", sectionId: "codeexpert" },
  { name: "Services", href: "/services", sectionId: "services" },
  { name: "Project", href: "/project", sectionId: "heroproject" },
  { name: "Courses", href: "/course", sectionId: "courses" },
  { name: "Why Us", href: "#whyus", sectionId: "whyus" },
  { name: "Review", href: "#review", sectionId: "review" },
];

// Define allowed sections outside the effect to avoid dependency issues
const allowedSections = [
  "services",
  "heroproject",
  "codeexpert",
  "review",
  "courses",
  "whyus",
];

const getNavbarBgClass = (pathname, scrolled) => {
  if (scrolled) return "bg-white"; // Scrolled state always white
  
  if (pathname === "/") {
    return "bg-white/5 backdrop-blur-sm"; // Home page: transparent with blur
  }
  
  // All other pages (About, Services, Project, Courses, etc.): white background
  return "bg-white";
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events for active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Handle scrolled state
      setScrolled(scrollY > 30);

      // If at very top, show Home
      if (scrollY <= 100) {
        setActiveSection("");
        return;
      }

      // Check ONLY allowed sections
      let currentSection = "";
      let bestVisibility = 0;

      allowedSections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if this allowed section is prominently visible
        if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
          const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibility = visibleHeight / windowHeight;

          if (visibility > bestVisibility && visibility > 0.4) {
            bestVisibility = visibility;
            currentSection = sectionId;
          }
        }
      });

      // Only set active section if it's one of our allowed navLink sections
      if (currentSection && allowedSections.includes(currentSection)) {
        setActiveSection(currentSection);
      } else if (scrollY <= 150) {
        setActiveSection(""); // Home
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array for this effect

  const handleNavClick = (link) => {
    setIsMenuOpen(false);

    // Home link - always scroll to top
    if (link.name === "Home") {
      setActiveSection("");
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (pathname !== "/") router.push("/");
      return;
    }

    // Why Us and Review - scroll to section on home page
    if (link.name === "Why Us" || link.name === "Review") {
      if (pathname === "/") {
        // Already on home - scroll to section
        const element = document.getElementById(link.sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const scrollToPosition = elementTop - 80;

          window.scrollTo({
            top: Math.max(0, scrollToPosition),
            behavior: "smooth",
          });

          setActiveSection(link.sectionId);
        }
      } else {
        // Not on home - navigate to home first, then scroll
        router.push("/");
        setTimeout(() => {
          const element = document.getElementById(link.sectionId);
          if (element) {
            const elementTop = element.offsetTop;
            const scrollToPosition = elementTop - 80;

            window.scrollTo({
              top: Math.max(0, scrollToPosition),
              behavior: "smooth",
            });

            setActiveSection(link.sectionId);
          }
        }, 500);
      }
      return;
    }

    // Services, Project, Courses, About - redirect to page
    if (link.href && link.href !== "/" && !link.href.startsWith("#")) {
      router.push(link.href);
      setActiveSection(""); // Reset active section when navigating to new page
      return;
    }

    // All other navigation
    router.push(link.href);
  };

  const isActive = (link) => {
    // For links with sectionId (only active on home page when section is visible)
    if (link.sectionId) {
      if (pathname !== "/") return false;
      return activeSection === link.sectionId;
    }

    // For Home link
    if (link.href === "/") {
      return pathname === "/" && activeSection === "";
    }

    // For other pages (About, Services, Project, Courses)
    return pathname === link.href;
  };

  const getFilteredNavLinks = () => {
    const isProblematicRange = windowWidth >= 768 && windowWidth <= 921;
    const isAboutOrWorkPage =
      pathname === "/about" ||
      pathname === "/project" ||
      pathname === "/services" ||
      pathname === "/course";
    const hiddenLinksOnSpecialPages = [
      "Why Us",
      "Review",
    ];

    return navLinks.filter((link) => {
      if (
        isAboutOrWorkPage &&
        hiddenLinksOnSpecialPages.includes(link.name)
      )
        return false;
      if (
        isProblematicRange &&
        (link.name === "Why Us" || link.name === "Review")
      )
        return false;
      return true;
    });
  };

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
    } else {
      // On home page, use actual scroll state
      const handleScroll = () => {
        setScrolled(window.scrollY > 30);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  // Initialize window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16">
      <div className="max-w-7xl mx-4 m-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Unscrolled Navbar */}
          <AnimatePresence initial={false}>
            {!scrolled && (
              <motion.div
                key="nav-unscrolled"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`absolute px-4 inset-x-0 top-0 flex justify-between items-center h-16 ${getNavbarBgClass(pathname, scrolled)}`}
              >
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="ThemeTags Logo"
                    width={420}
                    height={120}
                    className="h-10 w-10"
                    priority // --- ADDED PRIORITY PROP ---
                  />
                </Link>

                <div className="hidden md:flex items-center space-x-1">
                  {getFilteredNavLinks().map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(link)
                          ? "bg-[#FF6400] text-white"
                          : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>

                <div className="hidden md:block">
                  <Link href="/" className="relative group inline-block">
                    <motion.div
                      initial={{
                        backgroundColor: "rgba(0,0,0,0)",
                        color: "#FF6400",
                      }}
                      whileHover={{
                        backgroundColor: "rgba(255, 100, 0, 1)",
                        color: "#ffffff",
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="relative px-6 py-2 rounded-full border border-[#FF6400] font-medium overflow-hidden"
                    >
                      <span className="relative z-10 font-semibold">
                        Contact Us
                      </span>

                      <motion.span
                        initial={{ width: 32, height: 32 }}
                        whileHover={{ width: 48, height: 48 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute bottom-0 right-0 bg-[#FF6400] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
                      />
                    </motion.div>
                  </Link>
                </div>

                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-gray-700 hover:text-[#FF6400] hover:bg-gray-100"
                  >
                    {isMenuOpen ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scrolled Navbar */}
          <AnimatePresence initial={false}>
            {scrolled && (
              <motion.div
                key="nav-scrolled"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 top-0 flex justify-center items-center h-16"
              >
                <div className="hidden md:flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg">
                  {getFilteredNavLinks().map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        isActive(link)
                          ? "bg-[#ffeed4] text-black shadow-sm border border-orange-300"
                          : "text-black hover:text-orange-500/80 hover:bg-orange-50"
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>

                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-full bg-white border border-gray-200 shadow-lg text-gray-700 hover:text-orange-500 hover:bg-gray-100"
                  >
                    {isMenuOpen ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Invisible placeholder to maintain layout */}
          {!scrolled && (
            <div className="invisible h-16 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/LOGO.png"
                  alt="ThemeTags Logo"
                  width={400}
                  height={100}
                  className="h-24 w-auto"
                  priority // --- ADDED PRIORITY PROP FOR PLACEHOLDER AS WELL ---
                />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {getFilteredNavLinks().map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(link)
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2">
              <button
                className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded-full transition-colors duration-200 font-medium"
                onClick={() => handleNavClick({ href: "/contact" })}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
