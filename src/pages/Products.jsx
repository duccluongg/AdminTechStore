import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Product.module.css';
import FormatCash from '../utils/FormatCash';
import queryString from 'query-string';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PulseLoader from 'react-spinners/PulseLoader';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [brandId, setBrandId] = useState('');
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [filters, setFilters] = useState({
    page_size: 20,
    page: 1,
  });
  const param = queryString.stringify(filters);

  useEffect(() => {
    setLoading(true);
    const getProductApi = `https://yshuynh.pythonanywhere.com/api/products?${param}&category=${categoryId}&brand=${brandId}`;
    axios
      .get(getProductApi)
      .then((response) => {
        setProduct(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId, brandId]);

  useEffect(() => {
    const getBrandApi = `https://yshuynh.pythonanywhere.com/api/categories`;
    axios.get(getBrandApi).then((response) => {
      setCategory(response.data);
    });
  }, []);

  useEffect(() => {
    const getBrandApi = `https://yshuynh.pythonanywhere.com/api/brands`;
    axios.get(getBrandApi).then((response) => {
      setBrand(response.data);
    });
  }, []);

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleChangeBrand = (event) => {
    setBrandId(event.target.value);
  };
  return (
    <div className={styles.grid__column10}>
      <div className={styles.filters}>
        <Box mr={10} sx={{ minWidth: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoryId}
              label="Category"
              onChange={handleChange}
            >
              {category.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={brandId}
              label="Brand"
              onChange={handleChangeBrand}
            >
              {brand.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={styles.home__product}>
        {loading ? (
          <div className={styles.Loading}>
            <PulseLoader loading={loading} size={10} />
          </div>
        ) : (
          <div className={styles.grid__row}>
            {product.length === 0 ? (
              <div className={styles.noItem}>
                <div className={styles.boxImg}>
                  <img
                    src="https://prague.extranet-aec.com/img/empty-cart.png"
                    alt=""
                  />
                </div>
                <div>Cửa hàng chưa có loại sản phẩm này</div>
              </div>
            ) : (
              product?.map((item) => (
                <div
                  to={`/productDetail/${item.id}`}
                  key={item.id}
                  className={styles.grid__column24}
                >
                  <div className={styles.home__productitems}>
                    <div
                      className={styles.home__productitemsimg}
                      style={{
                        backgroundImage: `url(${item.thumbnail})`,
                      }}
                    ></div>
                    <div className={styles.rating}>{item.avg_rating}</div>
                    <h4 className={styles.home__productitemsname}>
                      {item.name}
                    </h4>
                    <div className={styles.home__productprice}>
                      <span className={styles.home__productitemsprice}>
                        {FormatCash(item.sale_price.toString())} đ
                      </span>
                      <div className={styles.btn_cart}>
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
