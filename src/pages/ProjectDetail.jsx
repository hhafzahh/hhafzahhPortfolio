import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Award, X, Maximize2 } from "lucide-react";
import { getProjectBySlug, getOrderedProjects } from "../data/projects";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const allProjects = getOrderedProjects();

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-[#4b5563]">Project not found.</p>
        <Link
          to="/#projects"
          className="text-[#9b7f5e] hover:text-[#8a6f50] underline"
        >
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-12 items-start">
        {/* ── Sidebar (desktop) ── */}
        <aside className="hidden lg:flex flex-col w-52 shrink-0 sticky top-10 self-start">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-[#9b7f5e] hover:text-[#8a6f50] transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>

          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2 pl-1">
            My Projects
          </p>

          <nav className="flex flex-col gap-0.5 max-h-[72vh] overflow-y-auto">
            {allProjects.map((p) => {
              const isActive = p.slug === slug;
              return (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-[#f5ede3] text-[#9b7f5e] font-medium"
                      : "text-[#6b7280] hover:bg-gray-100 hover:text-[#1a1a1a]"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-7 h-7 rounded object-cover shrink-0"
                  />
                  <span className="leading-snug truncate">{p.title}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* ── Main ── */}
        <div className="flex-1 min-w-0">
          {/* Mobile: back + horizontal strip */}
          <Link
            to="/#projects"
            className="inline-flex lg:hidden items-center gap-1.5 text-[#9b7f5e] hover:text-[#8a6f50] transition-colors mb-5 text-sm font-medium"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>

          <div className="flex lg:hidden gap-3 overflow-x-auto pb-3 mb-8 -mx-6 px-6">
            {allProjects.map((p) => {
              const isActive = p.slug === slug;
              return (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="flex flex-col items-center gap-1 shrink-0 w-16"
                >
                  <div
                    className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                      isActive ? "border-[#9b7f5e]" : "border-transparent"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className={`text-[9px] text-center leading-tight line-clamp-2 ${
                      isActive
                        ? "text-[#9b7f5e] font-semibold"
                        : "text-[#9ca3af]"
                    }`}
                  >
                    {p.title}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Title row */}
          <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold text-[#1a1a1a]">
              {project.title}
            </h1>
            {project.award && (
              <span className="flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-medium px-2.5 py-1 rounded-full">
                <Award size={11} />
                {project.award}
              </span>
            )}
            {project.isLive && (
              <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Live
              </span>
            )}
          </motion.div>

          <motion.p {...fadeUp(0.08)} className="text-sm text-gray-400 mb-5">
            {formatDate(project.createdAt)}
          </motion.p>

          {/* Tags */}
          <motion.div {...fadeUp(0.15)} className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-[#6b7280] text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Image(s) + Video */}
          <motion.div {...fadeUp(0.22)}>
          {project.gallery && project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm h-72">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {project.video && (
                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm h-72">
                  <video controls className="w-full h-full object-cover">
                    <source src={project.video} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          ) : project.youtubeUrl ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="relative group rounded-xl overflow-hidden border border-gray-100 shadow-sm h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setLightboxSrc(project.image)}
                  className="absolute top-2 right-2 p-1.5 bg-black/40 hover:bg-black/60 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm h-72">
                <iframe
                  src={project.youtubeUrl}
                  title={`${project.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ) : (
            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-96 object-cover"
              />
            </div>
          )}
          </motion.div>

          {/* Divider */}
          <hr className="border-gray-100 mb-8" />

          {/* Description */}
          <motion.div {...fadeUp(0.3)} className="text-[#4b5563] text-base leading-relaxed mb-10 flex flex-col gap-3">
            {(project.longDescription ?? project.description)
              .split("\n\n")
              .map((para, i) => {
                const trimmed = para.trim();
                const isHeading =
                  trimmed.length < 60 &&
                  !trimmed.includes("\n") &&
                  !/[.,;]$/.test(trimmed);
                const isNumberedList = /^\d+\./.test(trimmed);

                if (isHeading) {
                  return (
                    <h3
                      key={i}
                      className="text-[#1a1a1a] font-semibold text-base mt-4 first:mt-0"
                    >
                      {trimmed}
                    </h3>
                  );
                }

                if (isNumberedList) {
                  return (
                    <ol key={i} className="flex flex-col gap-1.5 pl-1">
                      {trimmed.split("\n").filter(Boolean).map((item, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#9b7f5e] font-medium shrink-0">
                            {item.match(/^\d+/)?.[0]}.
                          </span>
                          <span>{item.replace(/^\d+\.\s*/, "")}</span>
                        </li>
                      ))}
                    </ol>
                  );
                }

                return <p key={i}>{trimmed}</p>;
              })}
          </motion.div>

          {/* Links */}
          <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9b7f5e] text-white rounded-lg text-sm font-medium hover:bg-[#8a6f50] hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                <ExternalLink size={14} />
                View Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== project.demoUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-[#4b5563] rounded-lg text-sm font-medium hover:border-[#9b7f5e] hover:text-[#9b7f5e] transition-all"
              >
                <Github size={14} />
                View Code
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={lightboxSrc}
            alt="Full view"
            className="max-w-full max-h-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
