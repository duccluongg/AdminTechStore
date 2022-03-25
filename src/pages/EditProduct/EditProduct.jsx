import React, { useEffect, useState } from 'react';
import styles from './EditProduct.module.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormatCash from '../../utils/FormatCash';

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [brandId, setBrandId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const { id } = useParams();
  const handleSubmit = () => console.log('xin chào');

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleChangeBrand = (event) => {
    setBrandId(event.target.value);
  };

  useEffect(() => {
    const getProductDetailApi = `https://yshuynh.pythonanywhere.com/api/products/${id}`;
    axios.get(getProductDetailApi).then((response) => {
      setProduct(response.data);
    });
  }, []);

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

  const categoryID = '';
  return (
    <div>
      <div className={styles.header}> Chỉnh sửa thông tin sản phẩm</div>
      <ValidatorForm onSubmit={handleSubmit} className={styles.FormControl}>
        <div className={styles.editSelection}>
          <div className={styles.title}>
            <div className={styles.headerTitle}>Hình ảnh sản phẩm </div>
            <div className={styles.subTitle}>Thêm ảnh sản phẩm vào đây</div>
          </div>
          <div className={styles.formEdit}>
            <div className={styles.textAreaStyle}>
              <div className={styles.boxText}>
                <TextValidator
                  fullWidth
                  type="text"
                  label="Nhập link ảnh vào đây"
                  variant="filled"
                  name="imgProduct"
                  autoComplete="off"
                  size="large"
                  className={styles.textField}
                />
              </div>
            </div>

            <div className={styles.imgProduct}>
              <img src={product.thumbnail} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.editSelection}>
          <div className={styles.title}>
            <div className={styles.headerTitle}>Thư viện hình ảnh</div>
            <div className={styles.subTitle}>
              Tải lên thư viện hình ảnh sản phẩm của bạn tại đây
            </div>
          </div>
          <div className={styles.formEdit}>
            <div className={styles.textAreaStyle}>
              <div className={styles.boxText}>
                <TextValidator
                  fullWidth
                  type="text"
                  label="Nhập link ảnh vào đây"
                  variant="filled"
                  name="desImgProduct"
                  autoComplete="off"
                  size="large"
                  className={styles.textField}
                />
              </div>
            </div>

            <div className={styles.imgProduct}>
              {product?.images?.map((item) => (
                <img key={item.id} src={item.url} alt="" />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.editSelection}>
          <div className={styles.title}>
            <div className={styles.headerTitle}>Tên sản phẩm</div>
            <div className={styles.subTitle}>
              Chỉnh sửa tên sản phẩm của bạn tại đây
            </div>
          </div>
          <div className={styles.formEdit}>
            <div className={styles.textAreaStyle}>
              <div className={styles.boxText}>
                <TextValidator
                  fullWidth
                  type="text"
                  label="Tên sản phẩm"
                  variant="filled"
                  name="nameProduct"
                  autoComplete="off"
                  size="large"
                  className={styles.textField}
                />
              </div>
            </div>

            <div className={styles.nameProduct}>
              <div>{product?.name}</div>
            </div>
          </div>
        </div>
        <div className={styles.editSelection}>
          <div className={styles.title}>
            <div className={styles.headerTitle}>Mô tả sản phẩm</div>
            <div className={styles.subTitle}>
              Thêm mô tả sản phẩm của bạn tại đây
            </div>
          </div>
          <div className={styles.formEdit}>
            <div className={styles.textAreaStyle}>
              <div className={styles.boxText}>
                <TextValidator
                  fullWidth
                  type="text"
                  label="Mô tả sản phẩm"
                  variant="filled"
                  name="desProduct"
                  autoComplete="off"
                  size="large"
                  className={styles.textField}
                />
              </div>
            </div>
            <div className={styles.nameProduct}>
              <div>{product?.short_description}</div>
            </div>
          </div>
        </div>
        <div className={styles.editSelection}>
          <div className={styles.title}>
            <div className={styles.headerTitle}>Thể loại và Thương hiệu</div>
            <div className={styles.subTitle}>
              Thêm mô tả sản phẩm của bạn tại đây
            </div>
          </div>
          <div className={styles.formEdit}>
            <div className={styles.boxCategory}>
              <Box mr={10} sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
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
            <div className={styles.nameProduct}>
              <div>
                Loại {product?.category?.name} & Hãng {product?.brand?.name}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.editSelection}>
          <div className={styles.title}>
            <div className={styles.headerTitle}>Giá tiền</div>
            <div className={styles.subTitle}>
              Thêm giá tiền sản phẩm của bạn
            </div>
          </div>
          <div className={styles.formEdit}>
            <div className={styles.textAreaStyle1}>
              <div className={styles.boxText}>
                <TextValidator
                  fullWidth
                  type="text"
                  label="Giá tiền"
                  variant="filled"
                  name="price"
                  autoComplete="off"
                  size="large"
                  className={styles.textField}
                />
              </div>
            </div>
            <div className={styles.nameProduct}>
              <div>{FormatCash(`${product?.price}`)} đ</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <Button className={styles.btn} variant="contained">
            Contained
          </Button>
          <Button className={styles.btn} variant="outlined">
            Outlined
          </Button>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default EditProduct;
