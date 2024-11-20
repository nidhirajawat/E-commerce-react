// import React, { useState } from 'react'
// import PageHeader from '../pageheader/PageHeader'

// const showResult = "Showing 01 - 12 of 139 Results"
// import Data from "../../products.json";
// import ProductsCards from './ProductsCards';
// import Pagination from './Pagination';
// import ShopCategory from './ShopCategory';
// import PopularPost from './PopularPost';
// import Tags from './Tags';

// const Shop = () => {
//     const [GridList, setGridList] = useState(true);
//     const [products, setProducts] = useState(Data);
//     console.log(products);

//     // pagination
//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 12;

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice( indexOfFirstProduct,indexOfLastProduct);
//     // function to change the current-page
//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber)
//     };
//     // filter-product based on category
//     const [selectCategory, setSelectCategory] = useState('All');
//     const menuItems = [...new Set(Data.map((val) => val.category))];

//     const filterItem = (curCat) => {
//       const newItem = Data.filter((newVal) => {
//         return newVal.category === curCat;
//       })
//       setSelectCategory(curCat);
//       setProducts(newItem);
//     }
//   return (
//     <div>
//       <PageHeader title="Our Shop Page" curPage="Shop"/>
//       <div className='shop-page padding-tb'>
//         <div className='container'>
//             <div className="row justify-content-center">
//                 <div className="col-lg-8 col-12">
//                     <article>
//                     {/* layout-and-title-here */}
//                         <div className='shop-title d-flex flex-wrap justify-content-between'>
//                             <p>{showResult}</p>
//                             <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
//                                  <a className='grid' onClick={() => setGridList(!GridList)}>
//                                     <li className='icofont-ghost'></li>
//                                  </a>

//                                  <a className='list' onClick={() => setGridList(!GridList)}>
//                                     <li className='icofont-listine-dots'></li>
//                                  </a>
//                             </div>
//                         </div>
//                         {/* products-list */}
//                         <div>
//                             <ProductsCards GridList={GridList} products={currentProducts}/>
//                         </div>
//                         <Pagination 
//                          productsPerPage={productsPerPage}
//                          totalProducts = {products.length}
//                          paginate={paginate}
//                          activePage={currentPage}
//                         />
//                     </article>
//                 </div>
//                 <div className="col-lg-4 col-12">
//                    <aside>
//                       <Search products={products} GridList={GridList}/>
//                       <ShopCategory  
//                         filterItem={filterItem}
//                         setItem={setProducts}
//                         menuItems={menuItems}
//                         setProducts={setProducts}
//                         selectCategory={selectCategory}
//                       />
//                       <PopularPost/>
//                       <Tags/>
//                    </aside>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Shop

import React, { useState } from 'react';
import PageHeader from '../pageheader/PageHeader';
import Data from '../../products.json';
import ProductsCards from './ProductsCards';
import Pagination from './Pagination';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

// If Search is not implemented, you can stub it:
const Search = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search products..." />
        </div>
    );
};

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    // Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Filter products by category
    const [selectCategory, setSelectCategory] = useState('All');
    const menuItems = [...new Set(Data.map((val) => val.category))];

    const filterItem = (curCat) => {
        const newItem = Data.filter((newVal) => newVal.category === curCat);
        setSelectCategory(curCat);
        setProducts(newItem);
    };

    return (
        <div>
            <PageHeader title="Our Shop Page" curPage="Shop" />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>Showing 01 - 12 of {products.length} Results</p>
                                    <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                                        <a className="grid" onClick={() => setGridList(!GridList)}>
                                            <li className="icofont-ghost"></li>
                                        </a>
                                        <a className="list" onClick={() => setGridList(!GridList)}>
                                            <li className="icofont-listine-dots"></li>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <ProductsCards GridList={GridList} products={currentProducts} />
                                </div>
                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search />
                                <ShopCategory
                                    filterItem={filterItem}
                                    setItem={setProducts}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    selectCategory={selectCategory}
                                />
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
