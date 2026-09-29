const { useEffect, useRef, useState } = React;

const galleryItems = [
  { id: 1, category: 'The monk', title: 'A moment of stillness', alt: 'Jain monk seated in meditation', src: 'images/marasa_im/jainmonk.JPG' },
  { id: 2, category: 'Himalayas', title: 'Snow and silence', alt: 'Snow-covered Himalayan mountains beneath a blue sky', src: 'images/marasa_im/himalayas.JPG' },
  { id: 3, category: 'The journey', title: 'Walking the high route', alt: 'Travellers walking along a rocky Himalayan route', src: 'images/marasa_im/tibet.JPG' },
  { id: 4, category: 'Nepal', title: 'River valley', alt: 'Turquoise river winding through a mountain valley', src: 'images/marasa_im/nepal_himalaya yatra.JPG' },
  { id: 5, category: 'Kailash Mansarovar', title: 'Across the snowline', alt: 'Pilgrims walking through a snowy mountain pass', src: 'images/marasa_im/10612ECD-FB7A-4A70-962A-BCDCC38410A0.jpg' },
  { id: 6, category: 'High plateau', title: 'Open country', alt: 'Two people standing on a wide snow-covered Himalayan plateau', src: 'images/marasa_im/dji_fly_20250428_124322_0_1745823502420_photo_low_quality.jpg' },
  { id: 7, category: 'Mountain path', title: 'Beyond the pass', alt: 'Snowy mountain pass and a lone pilgrim on the trail', src: 'images/marasa_im/dji_fly_20250423_100829_0_1745382209332_photo_low_quality.jpg' },
  { id: 8, category: 'The journey', title: 'Gurudev on the route', alt: 'Jain monk walking through a high mountain landscape', src: 'images/marasa_im/gurumarasa.jpg' }
];

const journeys = [
  { id: 1, tag: 'Pilgrimage', duration: 'KAILASH', title: 'The path of resolve', detail: 'A journey through snow, stone, altitude, and spiritual discipline.', img: 'images/marasa_im/gurumarasa.jpg' },
  { id: 2, tag: 'Himalayan route', duration: 'NEPAL', title: 'Stillness in motion', detail: 'Quiet landscapes and hard-won steps across the Nepal Himalaya.', img: 'images/marasa_im/tibet.JPG' },
  { id: 3, tag: 'Field notes', duration: 'TIBET', title: 'Across the high country', detail: 'Places, people, and memories gathered along the mountain route.', img: 'images/marasa_im/dji_fly_20250428_124322_0_1745823502420_photo_low_quality.jpg' },
  { id: 4, tag: 'Meditation', duration: 'WITHIN', title: 'A quiet presence', detail: 'A portrait of inward attention and the discipline of stillness.', img: 'images/marasa_im/jainmonk.JPG' }
];

const topics = [
  { id: 'himalayas', title: 'Jainism in the Himalayas', detail: 'The Himalayan landscape holds a deep place in Jain memory, pilgrimage, and spiritual imagination. These pages gather accounts of sacred places, ancient traditions, and journeys connected with the region.', paragraphs: ['Among the most important places in this tradition is Ashtapad Maha Tirth, identified in Jain accounts with Mount Kailash. Jain tradition holds that Bhagwan Rishabhdev, the first Tirthankar, attained nirvana at Ashtapad.', 'The Himalayas invite both devotion and careful historical research. This collection brings together traditional accounts, travel observations, and questions for further study.'] },
  { id: 'tibet', title: 'Jainism in Tibet', detail: 'Accounts of Ashtapad, Jain communities, and the Tibetan landscape as recorded in the writings of Digambar Jain monk Lamchidas Golalare.', paragraphs: ['In Jain tradition, Ashtapad Maha Tirth, associated with Kailash, is regarded as one of the world’s oldest tirthas. The mountain is revered as the place where Bhagwan Rishabhdev attained nirvana. In Tibet, it is known as Kang Rinpoche and is honoured as a sacred mountain.', 'The name Ashtapad is traditionally connected with the idea of liberation. Some interpretations also connect the Tibetan word “ling,” meaning an area or field, with “shiv,” meaning liberation. These linguistic connections and the identity of Ashtapad deserve continued scholarly study.', 'In 1807, the Digambar Jain monk Lamchidas Golalare travelled through Tibet and wrote about Jain communities living in the region. He described the Sonavare community in Tibet, the Vaghanare community in the Mugar area, and the Mavre community in Arul city. He also recorded the prosperity of these communities and the presence of Jain temples.', 'Golalare wrote that he saw Jain temples in Khilvan and Hanuvar before travelling onward to Kailash, or Ashtapad. His account led him to suggest that research into Ashtapad should focus on the Tibetan region.', 'Tibet is widely associated with Buddhism today, but Buddhist traditions became established there later, particularly from the tenth century onward. The religious history of the region before that period remains an important field for further research, including the possible influence and presence of Jainism.'] },
  { id: 'nepal', title: 'Jainism in Nepal', detail: 'The connection between Muktinath, the Gandaki region, and the Jain memory of Bhagwan Adinath.', paragraphs: ['During a foot pilgrimage to Muktinath, Muni Vishuddha Ratnasagar Ji Maharaj observed places and traditions that, in his account, suggest a connection between the Muktinath region and the ancient Ayodhya tradition. He also records a belief that Bhagwan Adinath, accompanied by ascetic followers, practised spiritual disciplines there.', 'The Gandaki is regarded as one of the world’s ancient rivers and is associated with the origins of Shramana culture. The region is also known for the distinctive Shaligram stones, which are found in the Gandaki basin and are considered sacred in Vaishnava tradition.', 'The Gandaki is said to rise near Damodar Kund, at an altitude of approximately 18,000 feet. The landscape, river traditions, sacred stones, and pilgrimage routes together make Muktinath an important place for comparative study of the region’s spiritual history.'], source: 'Account attributed to Muni Vishuddha Ratnasagar Ji Maharaj.' },
  { id: 'kailash-mansarovar', title: "A Jain Monk's Kailash Mansarovar Yatra", detail: 'The 2025 pilgrimage of Vishuddha Ratnasagar Ji Maharaj and Samkit Ratnasagar Ji Maharaj through the Simikot–Hilsa route.', paragraphs: ['In 2025, the revered Jain monks Vishuddha Ratnasagar Ji Maharaj and Samkit Ratnasagar Ji Maharaj undertook a pilgrimage to sacred Kailash Mansarovar through Nepal’s Simikot–Hilsa route, crossing the Lapche La Pass at an altitude of approximately 18,000 feet.', 'The pilgrimage demanded perseverance through steep mountain slopes, difficult ascents, icy terrain, extreme altitude, and severe natural conditions. Yet the journey was more than a Himalayan expedition. It became a spiritual practice shaped by restraint, sadhana, penance, inner strength, and resolve.'], source: 'Supporting materials and images', link: 'https://drive.google.com/drive/folders/1291-e6InxGrY-wF95QGvDjSCZzJmuDYb' },
  { id: 'nepal-himalaya', title: "A Jain Monk's Nepal Himalaya Yatra", detail: 'Mysterious villages, Tibetan caves, monasteries, and ancient paths encountered on the Kailash–Mansarovar route.', paragraphs: ['Gurudev Vishuddha Ratnasagar Ji Maharaj and Samkit Ratnasagar Ji Maharaj travelled through a demanding Himalayan route toward Kailash–Mansarovar. Along the way, they encountered ancient villages, caves, monasteries, and communities in places including Simikot, Yari, Hilsa, the China border region, Limi Valley, Halji, and Tunkot.', 'The route passes through snow-covered mountain ranges, quiet valleys, and sites associated with meditation and spiritual practice. It brings together Himalayan natural beauty, Tibetan culture, and living traditions of pilgrimage.', 'For the monks, moving through these remote and difficult regions became a profound spiritual experience and an enduring memory of the Kailash–Mansarovar yatra.'] }
];

const offerings = [
  { title: 'Personal Discourses', detail: 'One-on-one or small group sessions exploring Jain philosophy and daily practice.' },
  { title: 'Community Retreats', detail: 'Multi-day gatherings built around meditation, fasting, and shared reflection.' },
  { title: 'Guidance & Counsel', detail: 'Support for those seeking clarity on ahimsa-based living, ethics, and inner peace.' }
];

const reflections = [
  { name: 'A retreat participant', quote: 'The stillness he creates in a room is unlike anything I have experienced. I left lighter than I arrived.' },
  { name: 'A long-time devotee', quote: 'Every discourse feels personal, as if he already knows the question sitting in your heart.' },
  { name: 'A first-time visitor', quote: 'I came out of curiosity and stayed because the teachings were simple, honest, and easy to carry home.' }
];

const faqs = [
  { q: 'How can I attend a discourse?', a: 'Send a message with your city and preferred dates. We will share the nearest upcoming gathering and how to join.' },
  { q: 'Are retreats open to beginners?', a: 'Yes. Every retreat is paced so newcomers and long-time practitioners can take part together.' },
  { q: 'What should I bring?', a: 'Comfortable, modest clothing, a notebook, and an open mind. Everything else is provided.' },
  { q: 'Can sessions be arranged for my community?', a: 'Absolutely. Reach out with your group size and location and we will help plan a visit.' },
  { q: 'Is there a fee to attend?', a: 'Public discourses are offered freely. Multi-day retreats may include a small contribution toward food and stay.' }
];

// Reveals a wrapped element with a fade/rise transition the first time it scrolls into view.
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(node);
      }
    }, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ delay = 0, className = '', children }) {
  const [ref, inView] = useInView();
  return <div ref={ref} className={`reveal-up ${inView ? 'in-view' : ''} ${className}`} style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}>{children}</div>;
}

function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);
  return <header className={`absolute left-0 right-0 top-0 z-20 px-6 py-6 text-white sm:px-10 lg:px-[5vw] ${menuOpen ? 'max-lg:relative max-lg:bg-ink max-lg:shadow-2xl' : ''}`}>
    <div className="flex items-center justify-between">
      <a href="#top" onClick={closeMenu} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.07em]" aria-label="Samkrit Saar Marasa home">
        <span className="font-serif text-3xl leading-none text-saffron">ॐ</span>
        <span>Samkrit Saar<br />Marasa</span>
      </a>
      <button className="rounded-full border border-white/60 bg-ink/20 px-4 py-2 text-[10px] uppercase tracking-[.12em] shadow-lg backdrop-blur-sm transition hover:border-saffron hover:text-saffron lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? 'Close' : 'Menu'}</button>
      <nav className="hidden items-center gap-8 text-xs text-white/75 lg:flex" aria-label="Main navigation">
        <a href="#about" className="transition hover:text-saffron">About</a><a href="#teachings" className="transition hover:text-saffron">Teachings</a><a href="#topics" className="transition hover:text-saffron">Topics</a><a href="#reviews" className="transition hover:text-saffron">Reviews</a><a href="#gallery" className="transition hover:text-saffron">Gallery</a><a href="#faq" className="transition hover:text-saffron">FAQ</a>
      </nav>
      <a className="hidden border-b border-white/70 pb-1 text-[11px] uppercase tracking-[.1em] transition hover:border-saffron hover:text-saffron lg:block" href="#contact">Reach out <span className="ml-3 text-lg text-saffron">↗</span></a>
    </div>
    {menuOpen && <nav id="mobile-navigation" className="mt-5 grid gap-4 border-t border-white/25 pt-5 text-sm" aria-label="Mobile navigation"><a href="#about" onClick={closeMenu}>About</a><a href="#teachings" onClick={closeMenu}>Teachings</a><a href="#topics" onClick={closeMenu}>Topics</a><a href="#reviews" onClick={closeMenu}>Reviews</a><a href="#gallery" onClick={closeMenu}>Gallery</a><a href="#faq" onClick={closeMenu}>FAQ</a><a href="#contact" onClick={closeMenu}>Connect</a></nav>}
  </header>;
}

function FilterBar({ options, value, onChange }) {
  return <div className="flex flex-wrap gap-2" role="tablist">
    {['All', ...options].map((option) => <button key={option} onClick={() => onChange(option)} role="tab" aria-selected={value === option} className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[.12em] transition ${value === option ? 'control-shadow border-ink bg-ink text-paper' : 'border-ink/25 bg-white/30 text-[#5c5c5c] hover:border-saffron hover:text-saffron'}`}>{option}</button>)}
  </div>;
}

function Gallery({ onSelect }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);
  return <section id="gallery" className="bg-paper-deep px-6 py-24 sm:px-10 lg:px-[11vw] lg:py-36" aria-labelledby="gallery-title">
    <Reveal className="mb-12 flex flex-col gap-8 lg:flex-row lg:justify-between"><div><p className="mb-6 text-[10px] font-semibold uppercase tracking-[.2em] text-saffron">05 / Gallery</p><h2 id="gallery-title" className="font-serif text-5xl font-medium leading-none sm:text-6xl">Moments of<br /><em className="text-saffron">quiet presence.</em></h2></div><div className="max-w-sm self-end"><p className="mb-6 text-sm leading-7 text-muted">A visual collection of places, people, and moments that reflect the path of mindful living.</p><FilterBar options={galleryItems.map((item) => item.category)} value={filter} onChange={setFilter} /></div></Reveal>
    <div className="grid gap-10 sm:grid-cols-2">{filtered.map((item, index) => <Reveal key={item.id} delay={index * 80}><figure className="group cursor-pointer transition duration-500 hover:-translate-y-1" onClick={() => onSelect(item)}><div className="gallery-frame aspect-[4/3] overflow-hidden rounded-sm bg-paper"><img className="h-full w-full object-cover saturate-[.75] transition duration-1000 ease-out group-hover:scale-105 group-hover:saturate-100" src={item.src} alt={item.alt} loading="lazy" /></div><figcaption className="flex justify-between gap-4 pt-4 text-[10px] font-medium uppercase tracking-[.1em] text-[#5c5c5c]"><span>{String(item.id).padStart(2, '0')} / {item.category}</span><span className="text-saffron-deep">{item.title}</span></figcaption></figure></Reveal>)}</div>
  </section>;
}

function Teachings() {
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const scrollByCards = (dir) => trackRef.current && trackRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
  const startDrag = (event) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { active: true, startX: event.pageX, startScroll: track.scrollLeft };
  };
  const moveDrag = (event) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    track.scrollLeft = drag.current.startScroll - (event.pageX - drag.current.startX);
  };
  const endDrag = () => { drag.current.active = false; };
  return <section id="teachings" className="bg-white/25 px-6 py-24 shadow-[inset_0_1px_0_rgba(0,0,0,.08)] sm:px-10 lg:px-[11vw] lg:py-36" aria-labelledby="teachings-title">
    <Reveal className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[.2em] text-saffron">02 / Teachings</p>
        <h2 id="teachings-title" className="font-serif text-5xl font-medium leading-none sm:text-6xl">Gatherings which don't<br /><em className="text-saffron">exist in guidebooks.</em></h2>
      </div>
      <div className="flex gap-3 self-start lg:self-end">
        <button onClick={() => scrollByCards(-1)} aria-label="Scroll to previous teaching" className="control-shadow grid h-11 w-11 place-items-center rounded-full border border-ink/20 bg-white/40 transition hover:border-saffron hover:text-saffron">←</button>
        <button onClick={() => scrollByCards(1)} aria-label="Scroll to next teaching" className="control-shadow grid h-11 w-11 place-items-center rounded-full border border-ink/20 bg-white/40 transition hover:border-saffron hover:text-saffron">→</button>
      </div>
    </Reveal>
    <div ref={trackRef} className="carousel-track flex gap-6 overflow-x-auto pb-4" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerLeave={endDrag}>
      {journeys.map((item, index) => <Reveal key={item.id} delay={index * 90} className="group w-[270px] shrink-0 select-none sm:w-[310px]">
        <div className="gallery-frame aspect-[3/4] overflow-hidden rounded-sm bg-paper">
          <img className="h-full w-full object-cover saturate-[.8] transition duration-1000 ease-out group-hover:scale-105 group-hover:saturate-100" src={item.img} alt={item.title} loading="lazy" draggable="false" />
        </div>
        <div className="pt-4">
          <p className="mb-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-[.1em] text-[#5c5c5c]"><span>{item.tag}</span><span className="text-saffron-deep">{item.duration}</span></p>
          <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
          <p className="mt-2 text-xs leading-6 text-muted">{item.detail}</p>
          <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[.12em] text-saffron-deep transition hover:gap-3">Discover <span>↗</span></a>
        </div>
      </Reveal>)}
    </div>
  </section>;
}

function Marquee() {
  const words = ['AHIMSA', 'TRUTH', 'COMPASSION', 'NON-ATTACHMENT', 'DISCIPLINE', 'LIBERATION'];
  const track = [...words, ...words];
  return <div className="marquee-wrap border-y border-ink/15 bg-ink py-4 text-paper" aria-hidden="true">
    <div className="marquee-track">
      {track.map((word, index) => <span key={index} className="flex items-center gap-6 whitespace-nowrap px-6 text-xs font-semibold uppercase tracking-[.25em]"><span className="text-saffron">◆</span>{word}</span>)}
    </div>
  </div>;
}

function Topics() {
  return <section id="topics" className="depth-band px-6 py-24 sm:px-10 lg:px-[11vw] lg:py-36" aria-labelledby="topics-title">
    <Reveal className="mb-14 grid gap-8 lg:grid-cols-[22%_1fr]">
      <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-saffron-deep">03 / Areas of exploration</p>
      <div className="max-w-3xl"><h2 id="topics-title" className="font-serif text-5xl font-medium leading-none sm:text-6xl">Exploring Jainism<br /><em className="text-saffron-deep">through places and journeys.</em></h2><p className="mt-8 max-w-xl text-sm leading-7 text-[#5c5c5c]">A growing collection of teachings, histories, regional traditions, and pilgrimage reflections.</p></div>
    </Reveal>
    <div className="border-t border-ink/20">
      {topics.map((topic, index) => <Reveal key={topic.id} delay={index * 70}><a href={`topic.html?topic=${topic.id}`} className="group grid gap-4 border-b border-ink/20 py-7 transition hover:px-3 sm:grid-cols-[12%_1fr_auto] sm:items-center"><span className="text-[10px] font-semibold uppercase tracking-[.12em] text-saffron-deep">0{index + 1}</span><h3 className="font-serif text-2xl leading-tight sm:text-3xl">{topic.title}</h3><span className="text-xl text-saffron transition group-hover:translate-x-1">↗</span></a></Reveal>)}
    </div>
  </section>;
}

function Offerings() {
  return <><Topics /><section id="offerings" className="depth-band px-6 py-24 sm:px-10 lg:px-[11vw] lg:py-36">
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[.2em] text-saffron-deep">04 / Offerings</p>
      <h2 className="font-serif text-5xl font-medium leading-none sm:text-6xl">Ways to walk<br /><em className="text-saffron-deep">this path together.</em></h2>
    </Reveal>
    <div className="grid gap-10 border-t border-ink/20 pt-10 sm:grid-cols-3">
      {offerings.map((item, index) => <Reveal key={item.title} delay={index * 100}>
        <span className="text-[10px] font-semibold uppercase tracking-[.1em] text-saffron-deep">0{index + 1}</span>
        <h3 className="mt-4 font-serif text-2xl leading-snug">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#5c5c5c]">{item.detail}</p>
      </Reveal>)}
    </div>
  </section></>;
}

function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reflections.length;
  const go = (dir) => setIndex((current) => (current + dir + total) % total);
  const current = reflections[index];
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % total), 5000);
    return () => window.clearInterval(timer);
  }, [paused, total]);
  return <section id="reviews" className="bg-ink px-6 py-24 text-paper sm:px-10 lg:px-[11vw] lg:py-36" aria-labelledby="reviews-title" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <Reveal className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff6a3d]">05 / Reflections</p>
        <h2 id="reviews-title" className="font-serif text-5xl font-medium leading-none sm:text-6xl">Real impressions<br /><em className="text-[#ff6a3d]">of the path.</em></h2>
      </div>
      <div className="flex gap-3 self-start lg:self-end">
        <button onClick={() => go(-1)} aria-label="Previous reflection" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition hover:border-saffron hover:text-saffron">←</button>
        <button onClick={() => go(1)} aria-label="Next reflection" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition hover:border-saffron hover:text-saffron">→</button>
      </div>
    </Reveal>
    <div key={index} className="reveal max-w-3xl">
      <p className="font-serif text-3xl leading-snug sm:text-4xl">"{current.quote}"</p>
      <p className="mt-6 text-[10px] font-medium uppercase tracking-[.12em] text-[#9c9c9c]">{current.name}</p>
    </div>
  </section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section id="faq" className="bg-white/25 px-6 py-24 shadow-[inset_0_1px_0_rgba(32,37,31,.08)] sm:px-10 lg:px-[11vw] lg:py-36" aria-labelledby="faq-title">
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[.2em] text-saffron">07 / FAQ</p>
      <h2 id="faq-title" className="font-serif text-5xl font-medium leading-none sm:text-6xl">You still have<br /><em className="text-saffron">questions? We answer.</em></h2>
    </Reveal>
    <div className="border-t border-ink/20">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return <div key={item.q} className="border-b border-ink/20">
          <button className="flex w-full items-center justify-between gap-6 py-6 text-left" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
            <span className="font-serif text-xl sm:text-2xl">{item.q}</span>
            <span className={`shrink-0 text-xl text-saffron transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
            <div><p className="max-w-2xl pb-6 text-sm leading-7 text-[#5c5c5c]">{item.a}</p></div>
          </div>
        </div>;
      })}
    </div>
  </section>;
}

function Lightbox({ item, onClose }) {
  if (!item) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-ink/90 p-6" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}><div className="relative max-h-[90vh] max-w-5xl" onClick={(event) => event.stopPropagation()}><img className="max-h-[82vh] w-auto object-contain" src={item.src} alt={item.alt} /><p className="mt-3 text-xs uppercase tracking-[.12em] text-paper/70">{item.category} / {item.title}</p><button className="absolute -right-2 -top-12 text-3xl text-paper transition hover:text-saffron" onClick={onClose} aria-label="Close image">×</button></div></div>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <section id="contact" className="grid gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[22%_1fr] lg:px-[11vw] lg:py-36"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-saffron">08 / Connect</p><Reveal><h2 className="font-serif text-5xl leading-none sm:text-6xl">Let us begin<br /><em className="text-saffron">a conversation.</em></h2><form onSubmit={submit} className="mt-10 grid max-w-2xl gap-4 rounded-sm bg-white/30 p-6 shadow-[0_15px_35px_rgba(0,0,0,.08)] sm:grid-cols-2 sm:p-8"><input required aria-label="Your name" placeholder="Your name" className="border-b border-ink/30 bg-transparent px-0 py-3 text-ink outline-none placeholder:text-[#5c5c5c] focus:border-saffron" /><input required type="email" aria-label="Your email" placeholder="Email address" className="border-b border-ink/30 bg-transparent px-0 py-3 text-ink outline-none placeholder:text-[#5c5c5c] focus:border-saffron" /><textarea required aria-label="Your message" placeholder="Your message" rows="3" className="border-b border-ink/30 bg-transparent px-0 py-3 text-ink outline-none placeholder:text-[#5c5c5c] sm:col-span-2"></textarea><button className="justify-self-start border-b border-saffron pb-2 text-[11px] font-medium uppercase tracking-[.12em] text-saffron-deep transition hover:pr-3">{sent ? 'Message ready to send' : 'Prepare message ↗'}</button></form></Reveal></section>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setSelectedImage(null);
      }
    };
    document.addEventListener('keydown', closeWithEscape);
    document.body.style.overflow = menuOpen || selectedImage ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', closeWithEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen, selectedImage]);
  return <><div className="grain pointer-events-none fixed inset-0 z-40 opacity-[.08]" aria-hidden="true"></div><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main id="top"><section className="relative min-h-screen overflow-hidden bg-ink text-white"><div className="hero-image absolute inset-0"></div><div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/25"></div><div className="relative flex min-h-screen items-end px-8 pb-20 pt-36 sm:px-14 lg:px-[11vw] lg:pb-28"><div className="reveal max-w-3xl"><p className="mb-7 text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff6a3d]">A life of mindful presence</p><h1 className="font-serif text-6xl font-medium leading-[.92] sm:text-8xl lg:text-[clamp(76px,9vw,140px)]">Walk gently.<br /><em className="text-[#ff6a3d]">See deeply.</em></h1><p className="my-8 max-w-md text-sm leading-7 text-white/85 sm:text-base">Sharing the timeless wisdom of Jainism through a life rooted in ahimsa, truth, and compassion.</p><a href="#about" className="inline-flex border-b border-white/80 pb-2 text-[11px] font-medium uppercase tracking-[.1em] transition hover:border-saffron hover:text-saffron">Discover the journey <span className="ml-6 text-lg text-saffron">↓</span></a></div></div></section><Marquee /><section id="about" className="depth-band grid gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[22%_1fr] lg:px-[11vw] lg:py-36"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-saffron-deep">01 / Who I am</p><Reveal><h2 className="font-serif text-5xl leading-none sm:text-6xl">A quiet life can carry<br /><em className="text-saffron-deep">a powerful message.</em></h2><div className="mt-12 grid max-w-3xl gap-8 text-sm leading-7 text-[#5c5c5c] sm:grid-cols-2"><p>A Jain monk dedicated to spreading the teachings and principles of Jainism. Through spiritual guidance, discourses, and personal practice, he shares the path of <strong className="font-medium text-ink">Ahimsa, truth, compassion, self-discipline, and spiritual liberation.</strong></p><p>He inspires people to lead a simple, peaceful, and mindful life while encouraging them to understand and follow the timeless teachings of Jainism.</p></div></Reveal></section><Teachings /><Offerings /><section className="ink-shadow bg-ink px-6 py-28 text-center text-paper sm:px-10 lg:py-36"><Reveal><div className="font-serif text-7xl leading-none text-saffron">“</div><blockquote className="mx-auto my-8 max-w-5xl font-serif text-5xl leading-none sm:text-7xl">When the mind becomes still,<br /><em className="text-[#ff6a3d]">the world becomes clear.</em></blockquote><p className="text-[10px] uppercase tracking-[.12em] text-[#9c9c9c]">In the spirit of Jain wisdom</p></Reveal></section><Reviews /><Gallery onSelect={setSelectedImage} /><FAQ /><Contact /></main><footer className="mx-6 flex flex-col gap-4 border-t border-ink/20 py-6 text-[10px] uppercase tracking-[.08em] text-[#5c5c5c] sm:mx-10 sm:flex-row sm:items-center sm:justify-between lg:mx-[5vw]"><span>© 2026 Samkrit Saar Marasa</span><span>Made with intention</span><a href="https://www.instagram.com/samkit_saar" target="_blank" rel="noreferrer" className="transition hover:text-saffron-deep">◎ @samkit_saar</a><a href="#top" className="text-ink transition hover:text-saffron-deep">Back to top ↑</a></footer><Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} /></>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
