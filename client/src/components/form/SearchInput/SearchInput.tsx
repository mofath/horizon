import { FaSearch } from "react-icons/fa";
import "./SearchInput.scss";

const SearchInput: React.FC = () => {
  return (
    <div className="search-box">
      <div className="search-container">
        <span className="search-container__icon">
          <FaSearch />
        </span>
        <input
          type="search"
          id="search"
          className="search-container__input"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchInput;
