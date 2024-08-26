import Image from "next/image";
import "./index.scss";
type SearchProps = {
    [key: string]: any;
};
const Search: React.FC<SearchProps> = ({ searchProject, handleSearch }) => {
    return (
        <div className="search-header">
            <div className="search-header-left">
                <div className="search-header-left-content">
                    <Image src="/images/search.svg" width={20} height={20} alt="search" />
                    <input onChange={handleSearch} value={searchProject} placeholder="Search Project" />
                </div>

                {/* <Input size="large" placeholder="large size" prefix={<></>} /> */}
            </div>
            <div className="search-header-right">
                <Image src="/images/menu-table.svg" width={32} height={32} alt="menu" />
            </div>
        </div>
    );
};

export default Search;
