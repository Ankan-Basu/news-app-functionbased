import logo from './Images/logo.png';

const About = () => {
  return (
    <>
      <div className='p-4 mt-[15vh] md:mt-[30vh] flex flex-col md:flex-row gap-5 justify-center'>
        <div>
          <img src={logo} className='w-56 h-56 m-auto' alt='logo' />
        </div>
        <div className='flex flex-col gap-4 justify-center'>
          <h2 className='font-bold text-5xl text-center'>Welcome to NewsApp</h2>
          <p className='font-semibold text-3xl text-center'>Get your daily dose of news here ...</p>
          <p className='text-xl hidden md:block'>To get started select a category from the top bar</p>
          <p className='text-xl text-center md:hidden'>To get started select a category from the drop down list from the top bar</p>
        </div>
      </div>
    </>
  );
}

export default About;