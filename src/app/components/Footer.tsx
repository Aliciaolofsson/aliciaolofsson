import SocialMedia from './SocialMedia'; // Adjust the import path

export default function Footer() {
  return (
    <div className='p-10 md:p-10 flex flex-col md:flex-row items-center bg-indigo-200'>
      <SocialMedia />
    </div>
  );
}
