const { useEffect, useState } = React;

const topicDetails = [
  {
    id: 'himalayas',
    title: 'Jainism in the Himalayas',
    label: '01 / Regional study',
    image: 'images/marasa_im/himalayas.JPG',
    imageAlt: 'Layered Himalayan mountain ranges under a clear sky',
    intro: 'The Himalayan landscape holds a deep place in Jain memory, pilgrimage, and spiritual imagination.',
    paragraphs: [
      'Among the most important places in this tradition is Ashtapad Maha Tirth, identified in Jain accounts with Mount Kailash. Jain tradition holds that Bhagwan Rishabhdev, the first Tirthankar, attained nirvana at Ashtapad.',
      'The Himalayas invite both devotion and careful historical research. This collection brings together traditional accounts, travel observations, and questions for further study.'
    ],
    note: 'This opening overview introduces the regional context for the Tibet, Nepal, and pilgrimage accounts that follow.'
  },
  {
    id: 'tibet',
    title: 'Jainism in Tibet',
    label: '02 / Tibet',
    image: 'images/marasa_im/tibet.JPG',
    imageAlt: 'Open mountain plateau beneath a wide sky',
    intro: 'Accounts of Ashtapad, Jain communities, and the Tibetan landscape as recorded in the writings of Digambar Jain monk Lamchidas Golalare.',
    paragraphs: [
      'In Jain tradition, Ashtapad Maha Tirth, associated with Kailash, is regarded as one of the world\'s oldest tirthas. The mountain is revered as the place where Bhagwan Rishabhdev attained nirvana. In Tibet, it is known as Kang Rinpoche and is honoured as a sacred mountain.',
      'The name Ashtapad is traditionally connected with the idea of liberation. Some interpretations also connect the Tibetan word "ling," meaning an area or field, with "shiv," meaning liberation. These linguistic connections and the identity of Ashtapad deserve continued scholarly study.',
      'In 1807, the Digambar Jain monk Lamchidas Golalare travelled through Tibet and wrote about Jain communities living in the region. He described the Sonavare community in Tibet, the Vaghanare community in the Mugar area, and the Mavre community in Arul city. He also recorded the prosperity of these communities and the presence of Jain temples.',
      'Golalare wrote that he saw Jain temples in Khilvan and Hanuvar before travelling onward to Kailash, or Ashtapad. His account led him to suggest that research into Ashtapad should focus on the Tibetan region.',
      'Tibet is widely associated with Buddhism today, but Buddhist traditions became established there later, particularly from the tenth century onward. The religious history of the region before that period remains an important field for further research, including the possible influence and presence of Jainism.'
    ],
    note: 'The historical observations on communities, temples, and place names are presented as Lamchidas Golalare\'s recorded account and remain subjects for further research.'
  },
  {
    id: 'nepal',
    title: 'Jainism in Nepal',
    label: '03 / Nepal',
    image: 'images/marasa_im/nepal_himalaya yatra.JPG',
    imageAlt: 'Mountain path leading through a Nepalese landscape',
    intro: 'The connection between Muktinath, the Gandaki region, and the Jain memory of Bhagwan Adinath.',
    paragraphs: [
      'During a foot pilgrimage to Muktinath, Muni Vishuddha Ratnasagar Ji Maharaj observed places and traditions that, in his account, suggest a connection between the Muktinath region and the ancient Ayodhya tradition. He also records a belief that Bhagwan Adinath, accompanied by ascetic followers, practised spiritual disciplines there.',
      'The Gandaki is regarded as one of the world\'s ancient rivers and is associated with the origins of Shramana culture. The region is also known for the distinctive Shaligram stones, which are found in the Gandaki basin and are considered sacred in Vaishnava tradition.',
      'The Gandaki is said to rise near Damodar Kund, at an altitude of approximately 18,000 feet. The landscape, river traditions, sacred stones, and pilgrimage routes together make Muktinath an important place for comparative study of the region\'s spiritual history.'
    ],
    note: 'Account attributed to Muni Vishuddha Ratnasagar Ji Maharaj. Traditional and historical connections described here invite deeper documentation and comparative study.'
  },
  {
    id: 'kailash-mansarovar',
    title: "A Jain Monk's Kailash Mansarovar Yatra",
    label: '04 / Pilgrimage',
    image: 'images/marasa_im/10612ECD-FB7A-4A70-962A-BCDCC38410A0.jpg',
    imageAlt: 'Snow-covered mountain range reflected in still water',
    intro: 'The 2025 pilgrimage of Vishuddha Ratnasagar Ji Maharaj and Samkit Ratnasagar Ji Maharaj through the Simikot-Hilsa route.',
    paragraphs: [
      'In 2025, the revered Jain monks Vishuddha Ratnasagar Ji Maharaj and Samkit Ratnasagar Ji Maharaj undertook a pilgrimage to sacred Kailash Mansarovar through Nepal\'s Simikot-Hilsa route, crossing the Lapche La Pass at an altitude of approximately 18,000 feet.',
      'The pilgrimage demanded perseverance through steep mountain slopes, difficult ascents, icy terrain, extreme altitude, and severe natural conditions. Yet the journey was more than a Himalayan expedition. It became a spiritual practice shaped by restraint, sadhana, penance, inner strength, and resolve.'
    ],
    note: 'Supporting materials and images are available in the archive.',
    link: 'https://drive.google.com/drive/folders/1291-e6InxGrY-wF95QGvDjSCZzJmuDYb'
  },
  {
    id: 'nepal-himalaya',
    title: "A Jain Monk's Nepal Himalaya Yatra",
    label: '05 / Route journal',
    image: 'images/marasa_im/gurumarasa.jpg',
    imageAlt: 'Mountain landscape in soft morning light',
    intro: 'Mysterious villages, Tibetan caves, monasteries, and ancient paths encountered on the Kailash-Mansarovar route.',
    paragraphs: [
      'Gurudev Vishuddha Ratnasagar Ji Maharaj and Samkit Ratnasagar Ji Maharaj travelled through a demanding Himalayan route toward Kailash-Mansarovar. Along the way, they encountered ancient villages, caves, monasteries, and communities in places including Simikot, Yari, Hilsa, the China border region, Limi Valley, Halji, and Tunkot.',
      'The route passes through snow-covered mountain ranges, quiet valleys, and sites associated with meditation and spiritual practice. It brings together Himalayan natural beauty, Tibetan culture, and living traditions of pilgrimage.',
      'For the monks, moving through these remote and difficult regions became a profound spiritual experience and an enduring memory of the Kailash-Mansarovar yatra.'
    ],
    note: 'This route journal focuses on the places and cultural encounters that shaped the pilgrimage experience.'
  }
];

function ProgressBar() {
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.querySelector('.progress').style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-ink/10"><div className="progress h-full bg-saffron transition-transform duration-150"></div></div>;
}

function TopicNav({ current }) {
  return <aside className="lg:sticky lg:top-10 lg:self-start">
    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.2em] text-saffron">Explore the collection</p>
    <nav className="grid gap-3 border-l border-ink/20 pl-5" aria-label="Topic navigation">
      {topicDetails.map((topic, index) => <a key={topic.id} href={`topic.html?topic=${topic.id}`} className={`text-xs leading-5 transition hover:text-saffron ${topic.id === current.id ? 'font-semibold text-saffron-deep' : 'text-muted'}`}><span className="mr-2 text-[10px]">0{index + 1}</span>{topic.title}</a>)}
    </nav>
  </aside>;
}

function TopicPage({ topic, index }) {
  const [noteOpen, setNoteOpen] = useState(false);
  const previous = topicDetails[(index - 1 + topicDetails.length) % topicDetails.length];
  const next = topicDetails[(index + 1) % topicDetails.length];
  return <>
    <ProgressBar />
    <header className="flex items-center justify-between px-6 py-7 sm:px-10 lg:px-[7vw]">
      <a href="index.html#topics" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.07em]"><span className="font-serif text-3xl leading-none text-saffron">ॐ</span><span>Samkrit Saar<br />Marasa</span></a>
      <a href="index.html#topics" className="border-b border-ink/50 pb-1 text-[10px] uppercase tracking-[.12em] transition hover:border-saffron hover:text-saffron">Back to topics <span className="ml-2 text-saffron">↗</span></a>
    </header>
    <main>
      <section className="px-6 pb-20 pt-16 sm:px-10 lg:px-[11vw] lg:pb-28 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[22%_1fr]">
          <TopicNav current={topic} />
          <div className="max-w-4xl"><p className="mb-7 text-[10px] font-semibold uppercase tracking-[.2em] text-saffron">{topic.label}</p><h1 className="font-serif text-5xl font-medium leading-[.95] sm:text-7xl lg:text-8xl">{topic.title}</h1><p className="mt-10 max-w-2xl text-base leading-8 text-muted sm:text-lg">{topic.intro}</p></div>
        </div>
      </section>
      <figure className="relative mx-6 aspect-[16/8] overflow-hidden sm:mx-10 lg:mx-[11vw]">
        <img className="h-full w-full object-cover saturate-[.8]" src={topic.image} alt={topic.imageAlt} />
        <figcaption className="absolute bottom-0 left-0 bg-ink/80 px-4 py-3 text-[10px] uppercase tracking-[.1em] text-paper/80">Visual reference for this topic</figcaption>
      </figure>
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-[11vw] lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[22%_1fr]">
          <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-saffron-deep">Reading notes</p>
          <div className="detail-copy max-w-3xl text-sm leading-8 text-muted">{topic.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="mt-12 border-t border-ink/20 pt-5"><button className="flex w-full items-center justify-between gap-5 text-left text-[10px] font-semibold uppercase tracking-[.12em] text-ink" onClick={() => setNoteOpen(!noteOpen)} aria-expanded={noteOpen}><span>Context and source note</span><span className={`text-xl text-saffron transition-transform ${noteOpen ? 'rotate-45' : ''}`}>+</span></button><div className={`note-answer ${noteOpen ? 'open' : ''}`}><div><p className="pt-5 text-xs leading-6 text-muted">{topic.note}{topic.link && <> <a href={topic.link} target="_blank" rel="noreferrer" className="text-saffron-deep underline underline-offset-4">Open archive ↗</a></>}</p></div></div></div></div>
        </div>
      </section>
      <nav className="grid gap-px bg-ink/15 sm:grid-cols-2" aria-label="Adjacent topics"><a href={`topic.html?topic=${previous.id}`} className="bg-paper-deep p-8 transition hover:bg-white sm:p-12"><p className="text-[10px] uppercase tracking-[.12em] text-saffron-deep">Previous topic</p><p className="mt-5 font-serif text-2xl sm:text-3xl">{previous.title} <span className="text-saffron">↗</span></p></a><a href={`topic.html?topic=${next.id}`} className="bg-ink p-8 text-paper transition hover:bg-[#242424] sm:p-12"><p className="text-[10px] uppercase tracking-[.12em] text-[#ff6a3d]">Next topic</p><p className="mt-5 font-serif text-2xl sm:text-3xl">{next.title} <span className="text-[#ff6a3d]">↗</span></p></a></nav>
    </main>
    <footer className="flex flex-col gap-4 px-6 py-7 text-[10px] uppercase tracking-[.08em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-[7vw]"><span>Samkrit Saar Marasa</span><a href="index.html#topics" className="transition hover:text-saffron">Return to the collection ↑</a></footer>
  </>;
}

function App() {
  const slug = new URLSearchParams(window.location.search).get('topic') || topicDetails[0].id;
  const index = Math.max(0, topicDetails.findIndex((topic) => topic.id === slug));
  const topic = topicDetails[index];
  document.title = `${topic.title} | Samkrit Saar Marasa`;
  return <TopicPage topic={topic} index={index} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
