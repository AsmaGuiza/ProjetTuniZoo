import './SearchPage.css';
import MediaCard from '../../Components/Cards/Card'
import Search from '../../Components/Search/Search'
import CardList from '../../Components/CardList/CardList';


function SearchPage() {

    return (
    <div className='SearchBody'>
        <Search />
        <div >
            <CardList/>
        </div>
        

    </div>
        


    );
}

export default SearchPage ;