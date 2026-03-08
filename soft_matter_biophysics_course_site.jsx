export default function SoftMatterCourseSite() {
  const courseInfo = {
    title: "Introduction to Soft Matter and Biophysics",
    subtitle: "A research-paper-based graduate course",
    instructorNote:
      "This course uses landmark and recent research articles as the primary teaching materials. Each lecture introduces key concepts, standard observables, and the logic of how researchers build physical understanding from data.",
    format: [
      "16 classes, 90 minutes each",
      "Paper-driven lectures instead of a traditional textbook",
      "Emphasis on research thinking: what to calculate, why, and how to interpret it",
      "Designed for new graduate students with brief concept modules in every class",
    ],
  };

  const topics = [
    "Glass transition",
    "Rheology",
    "Self-assembly",
    "Active matter",
    "Clogging",
    "Memory effect",
    "Aging",
    "Phase transition",
    "Yield stress materials",
    "Physical learning",
    "Metamaterials",
    "Tissue mechanics",
    "Intracellular transport",
    "Biomolecular condensates",
    "Protein folding",
  ];

  const lecture1 = {
    title: "Lecture 1 — Glass Transition",
    paper:
      "Scalliet, Guiselin, and Berthier (2022), Thirty Milliseconds in the Life of a Supercooled Liquid",
    whyItMatters:
      "The glass transition is one of the central problems in soft condensed matter. A liquid becomes rigid without obvious structural ordering, while its dynamics slow down dramatically.",
    bigQuestion:
      "How does structural relaxation actually occur in a deeply supercooled liquid near the glass transition?",
    keyConcepts: [
      {
        name: "Supercooled liquid",
        text: "A liquid cooled below its melting point without crystallizing. It remains disordered like a liquid, but its motion becomes extremely slow.",
      },
      {
        name: "Glass transition",
        text: "A dramatic slowing down of dynamics during cooling, where the material falls out of equilibrium and behaves mechanically like a solid.",
      },
      {
        name: "Energy landscape",
        text: "A conceptual picture in which each many-particle configuration corresponds to a point on a high-dimensional potential-energy surface. Basins represent metastable states, and barriers separate them.",
      },
      {
        name: "Inherent structure",
        text: "The local potential-energy minimum reached by removing thermal vibrations from an instantaneous configuration. This helps distinguish real rearrangements from cage rattling.",
      },
      {
        name: "Alpha relaxation time",
        text: "The characteristic time for the system to decorrelate structurally. It captures how long it takes for the liquid to forget its initial configuration.",
      },
      {
        name: "Dynamical heterogeneity",
        text: "Relaxation is not spatially uniform. Some regions rearrange much earlier and faster than others, leading to a patchy mobility field.",
      },
      {
        name: "Dynamic facilitation",
        text: "Once a region relaxes, nearby regions become more likely to relax later. Relaxation can thus propagate through space and time.",
      },
    ],
    observables: [
      {
        name: "Mean-squared displacement (MSD)",
        why: "First quantity to check when you want to understand particle dynamics.",
        tells: "Whether motion is ballistic, caged, or diffusive.",
      },
      {
        name: "Self-intermediate scattering function",
        why: "Standard measure of structural relaxation.",
        tells: "How quickly particles lose memory of their initial positions.",
      },
      {
        name: "van Hove distribution",
        why: "Useful when average quantities hide rare events.",
        tells: "Whether particle displacements are broadly distributed and whether a small fraction of particles moves much farther than average.",
      },
      {
        name: "Cluster analysis of mobile regions",
        why: "Useful when dynamics is heterogeneous in space.",
        tells: "How localized relaxation events appear, grow, and merge.",
      },
    ],
    takeaways: [
      "Relaxation starts long before the average relaxation time.",
      "Early relaxation happens in rare localized clusters.",
      "These clusters grow and accumulate, producing dynamic heterogeneity.",
      "The results support a picture in which facilitation emerges in deeply supercooled liquids.",
    ],
    discussion: [
      "Why can a liquid become rigid without crystallizing?",
      "Why is MSD usually the first thing people compute for dynamics?",
      "What extra information does the van Hove function contain beyond the MSD?",
      "What is gained by looking at inherent structures instead of raw trajectories?",
      "Does this paper support a purely local picture of relaxation, or a cooperative one?",
    ],
  };

  const palette = {
    bg: "bg-slate-50",
    card: "bg-white",
    ink: "text-slate-800",
    soft: "text-slate-600",
    accent: "from-blue-600 to-cyan-600",
    line: "border-slate-200",
    chip: "bg-slate-100 text-slate-700",
  };

  return (
    <div className={`${palette.bg} min-h-screen ${palette.ink}`}>
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 inline-block rounded-full border border-white/20 px-3 py-1 text-sm text-white/85">
              Graduate Selective Course
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {courseInfo.title}
            </h1>
            <p className="mt-3 text-lg text-blue-100">{courseInfo.subtitle}</p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/85">
              {courseInfo.instructorNote}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-3">
          <div className={`rounded-3xl ${palette.card} p-6 shadow-sm ring-1 ring-black/5 lg:col-span-2`}>
            <h2 className="text-2xl font-semibold">Course format</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {courseInfo.format.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`rounded-3xl bg-gradient-to-br ${palette.accent} p-6 text-white shadow-sm`}>
            <h2 className="text-2xl font-semibold">Teaching philosophy</h2>
            <p className="mt-4 text-sm leading-7 text-white/90">
              Students should not only learn results. They should learn how researchers think: what question to ask first, which observable to compute, what each quantity means physically, and how figures build an argument.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Course topics</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
              15 topic lectures + 1 course intro / wrap-up
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {topics.map((topic, idx) => (
              <span
                key={topic}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
              >
                {idx + 1}. {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-700">
                First lecture module
              </p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight">
                {lecture1.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-800">Paper:</span> {lecture1.paper}
              </p>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Big question
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {lecture1.bigQuestion}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Why it matters
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {lecture1.whyItMatters}
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-6">
            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">Key concepts</h3>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-700">
                  beginner-friendly concept module
                </span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {lecture1.keyConcepts.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-slate-200 p-4">
                    <h4 className="text-base font-semibold">{item.name}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-2xl font-semibold">What researchers would calculate</h3>
              <div className="mt-5 space-y-4">
                {lecture1.observables.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h4 className="text-base font-semibold">{item.name}</h4>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                        research workflow
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      <span className="font-medium">Why compute it:</span> {item.why}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      <span className="font-medium">What it tells you:</span> {item.tells}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold">Main takeaways</h3>
                <ul className="mt-4 space-y-3">
                  {lecture1.takeaways.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-200 p-4 text-sm leading-7 text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold">Discussion prompts</h3>
                <ul className="mt-4 space-y-3">
                  {lecture1.discussion.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-200 p-4 text-sm leading-7 text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
              <h3 className="text-2xl font-semibold">How to use this site</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm font-semibold">Before class</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Preview the big question and key concepts so the paper feels less intimidating.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm font-semibold">During class</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Follow the lecture by checking definitions and observables in real time.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm font-semibold">After class</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Review takeaways, revisit discussion questions, and connect figures back to the main ideas.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
