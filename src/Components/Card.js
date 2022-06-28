const Card = (props) => {
  const clipString = (inpStr, maxSize) => {
    if (inpStr === null) return;
    if (inpStr.length <= maxSize) {
      return inpStr;
    }
    let resStr = inpStr.slice(0, maxSize);
    resStr += '...';
    return resStr;
  }

  const formatDate = (isoDateString) => {
    if (!isoDateString) return 'Time not available';
    let tmpDate = Date(isoDateString);
    let dateArray = tmpDate.split(' ');
    let date = '';
    for (let i = 0; i < 5; i++) {
      date = date + dateArray[i] + ' ';
    }
    return date;
  }

  let { title, desc, imgUrl, newsUrl } = props;

  return (
    <div className="flex flex-col w-[300px] h-[32rem] bg-white rounded-xl border drop-shadow-xl hover:drop-shadow-2xl">
      <div className="p-4 h-[40%]">
        <img src={imgUrl} alt="Image not found" className='h-[100%] max-w-[100%] m-auto'></img>
      </div>

      <div className="p-4 flex flex-col justify-between h-[60%] pb-3">
        <div>
          <h3 className="font-bold break-words">{clipString(title, 70)}</h3>
          <p className="mt-2 break-words">
            {clipString(desc, 120)}
          </p>
          <p className='pt-3 text-gray-800'>Time: {formatDate(props.time)}</p>
        </div>
        <div className=''>
          <a href={newsUrl} target="_blank">
            <button className='bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white rounded-md px-4 py-1 mt-4' onClick={props.onClick}>Read</button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Card;