import { Code, Eye } from 'lucide-react';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

export default function ProjectCard({
  imgUrl,
  title,
  description,
  previewUrl,
  gitUrl,
}: ProjectCardProps) {
  return (
    <div className='bg-pink-100 rounded-xl '>
      <div
        className='h-52 md:h-72 rounded-t-xl group bg-cover'
        style={{ background: `url(${imgUrl})` }}
      >
        <div className='overlay hidden w-full h-full bg-opacity-0 rounded-t-xl bg-[#181818] group-hover:block group-hover:bg-opacity-80 transition-all duration-500'>
          <div className='flex h-full justify-center items-center'>
            <a href={gitUrl}>
              <Code className='text-white m-2 py-1 px-2 h-10 w-10 border-2 border-white rounded-xl hover:border-purple-300 hover:text-purple-300' />
            </a>
            <a href={previewUrl}>
              <Eye className='text-white m-2 py-1 px-2 h-10 w-10 border-2 border-white rounded-xl hover:border-purple-300 hover:text-purple-300' />
            </a>
          </div>
        </div>
      </div>
      <div className='bg-white py-3 px-4 rounded-b-xl'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
