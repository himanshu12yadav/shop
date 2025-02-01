import {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/images/search.svg';
import cancelIcon from '../../assets/images/cancel.svg';

export default function SearchBar(){
    const[showOverlay, setShowOverlay] = useState(false);
    const[searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleSeachChange = (e)=>{
        setSearchText(e.target.value);
        setShowOverlay(e.target.value.length > 0);
    }

    const handleCloseOverlay = ()=>{
        setShowOverlay(false);
        setSearchText('');
        setSearchResults([]);
    }

    return (
        <>
            <div className={styles['search-bar']}>
                <input type="text" placeholder="Search for product..."
                       onChange={handleSeachChange}
                       onFocus={()=> setShowOverlay(true)}
                       onBlur={()=> setShowOverlay(false)}
                        value={searchText}
                />
                <span>
                <img src={searchIcon} alt="search icon" width={20} height={20}/>
            </span>
            </div>
            {
                showOverlay && (
                    <div className={styles['overlay']}>
                    <div className={styles['overlay-content']}>
                        <div className={styles['overlay-header']}>
                            <h3>Search Results</h3>
                            <button className={styles['close-overlay']} onClick={handleCloseOverlay}>
                                <img src={cancelIcon} alt={"cancel icon"} width={20} height={20}/>
                            </button>
                        </div>
                        <div className={styles['search-results']}>
                            {
                                searchResults.length > 0 ? (
                                    searchResults.map(result =>(
                                        <div key={result.id} className={styles['result-item']}>
                                            {searchResults}
                                        </div>
                                    ))
                                ) : (
                                    <p className={styles['no-results']}>
                                        No results found for: {searchText}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>
                )
            }
        </>


    )
}
