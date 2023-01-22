import './HomePageUser.css';
import CreatePost from '../../Components/CreatePost/CreatePost'
import PostList from '../../Components/PostList/PostList';
import  NavBar from '../../Components/NavBar/NavBar';
import  Search from '../../Components/Search/Search';


function HomePageUser() {

    return (
        <div className='HomePageContainerUser'>
            <div className='NavT' > <NavBar/></div>
            <div className='HomeBody'>
                    <div  className='Search' >
                        <Search/>
                    </div> 
                    <div className='CreatePost'>
                        <CreatePost/>
                    </div> 
                    <div className='PostList'>
                        <PostList/>
                    </div>
            </div>
    </div>
    );
}

export default HomePageUser ;