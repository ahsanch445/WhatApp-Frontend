
import SearchIcon from '@mui/icons-material/Search';

const Search = ({setText}) => {
 


  return (
    <div className='h- w-full bg-white'>
      <div className='flex justify-center '>
        <div id='Sid' className="relative mt-2 bg-[#F0F2F5] flex justify-center  items-center w-[90%] h-9 border border-gray-300 rounded-lg px-2">
          <SearchIcon id="id" style={{fontSize:"2.2vw"}} />
          <input 
            type="text"
            placeholder="Search or start new chat"
            className="text-[1.5vw] flex-grow outline-none bg-transparent px-4"
            onChange={(e)=>setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
