import ProjectCard from './ProjectCard';
 
const projectData = [
  {
    id: 1,
    title: 'EquiSync',
    stack: 'Next js, supabase, tailwindcss',
    description: 'A webbapp for the equestrian community',
    image: 'images/aboutImg.svg',
    gitUrl: 'https://github.com/Aliciaolofsson/equisync',
    previewUrl: '/https://equisync.vercel.app/',
  },
  {
    id: 2,
    title: 'SjuksköterskePraktiken',
    stack: 'Next js, tailwindcss, resend',
    description: 'Website for a small vaccination clinic',
    image: 'images/heroImg.svg',
    gitUrl: '/github.com/Aliciaolofsson/sskpraktikenosd',
    previewUrl: '/vercel.com',
  },
  {
    id: 3,
    title: 'Portfolio',
    stack: 'Next js, tailwindcss, resend',
    description: 'This portfolio',
    image: 'images/heroImg.svg',
    gitUrl: '/',
    previewUrl: '/aliciaolofsson.com',
  },
];

export default function ProjectSection() {
  return (
    <div id='projects' className='drop-shadow-xl shadow-slate-300 rounded-3xl'>
      <h2 className='font-bold text-center mb-12 text-3xl'>2.0 My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20'>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            stack={project.stack}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
}
