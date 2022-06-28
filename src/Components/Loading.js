import loadingImg from './Images/loading.gif';

const Loading = () => {
  return (
    <div className='my-4'>
      <img src={loadingImg} alt="Loading ..." className='m-auto'></img>
    </div>
  );
}

export default Loading;