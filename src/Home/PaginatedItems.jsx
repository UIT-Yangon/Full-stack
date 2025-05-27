import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useResize from '../utils/useResize';
import axios from '../utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { insertPostsData } from '../store/postsDataSlice';

const PaginatedItems = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // limit for items on each page
  const windowWidth = useResize("News");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();
  
  const url = 'posts/news';

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
        dispatch(insertPostsData(response.data));
        sessionStorage.setItem('news',JSON.stringify(response.data));
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [url,dispatch]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset to the first page when category changes
  };

  // Filter data based on the selected category
  const filteredItemsData = data.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.type === selectedCategory;
  });

  const offset = currentPage * itemsPerPage; // starting point
  const currentItems = filteredItemsData.slice(offset, offset + itemsPerPage); // items on the current page
  const pageCount = Math.ceil(filteredItemsData.length / itemsPerPage); // total pages

  const categories = [
    { title: 'All', count: data.length },
    ...Object.entries(data.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {})).map(([type, count]) => ({ title: type, count }))
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className=' pb-14  flex flex-col gap-[56px] '>
      <ul className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-x-5  sm:justify-between  w-full sm:gap-[20px] gap-[32px]'>
        {currentItems.map((item) => (
          <li key={item.id}>
            <div className='flex flex-col gap-[20px]'>
              {
                (item.image) ? 
                <Link to= {`/about/news/${item.id}`} ><Div className='w-full aspect-video rounded-[32px] bg-[#d9d9d9]' image={item.image}></Div></Link>
                
                :
                <Link to= {`/about/news/${item.id}`}  ><Div2 className='w-full aspect-video rounded-[32px] bg-[#d9d9d9]'></Div2></Link>
                
              }
              
              <div className='flex flex-col gap-[8px] '>
                <div className='flex items-center'>
                  <p className='text-[#3798a6] mt-[-6px] p-[5px]'>.</p>
                  <p className='text-[#1c1d20] opacity-50 text-[16px] ps-[5px]'>{item.type}</p>
                </div>
                <h5 className='text-[#1c1d20] text-[20px] ps-[5px]'>
                <Link to= {`/about/news/${item.id}`} className="hover:hoverMode" >{item.title}</Link>
                </h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <StyledPaginate
        previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
        nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default PaginatedItems;

const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: center;

  li {
    margin: 0 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 50%;

    &.active a {
      background-color: #3798a6;
      opacity: .7;
      color: white;
    }

    @media (max-width: 640px) {
      margin: 0 1px;
    }

    a {
      width: 40px;
      height: 40px;
      text-decoration: none;
      color: #1c1d20;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding-top: 2px;

      &:hover {
        background: #3798a6;
        color: white;
        transition: all .3s ease-in-out;
      }

      &.disabled {
        color: #ddd;
        cursor: not-allowed;
      }

      @media (max-width: 640px) {
        width: 25px;
        height: 25px;
        font-size: 12px;
      }
    }
  }

  .break-me {
    cursor: default;
  }
`;

const url = process.env.REACT_APP_NEWS_IMAGE;
const Div = styled.div`

    background: url(${props => `${url}${props.image}`});
    background-size: cover;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

    const Div2 = styled.div`
    background: url(${props => `${url}${props.image}`});
    background-size: cover;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;