import React from 'react';
import styles from './EditProduct.module.css';
const EditProduct = () => {
  return (
    <div>
      <div className={styles.header}> Chỉnh sửa thông tin sản phẩm</div>
      <div className={styles.editSelection}>
        <div className={styles.title}>
          <div className={styles.headerTitle}>Hình ảnh sản phẩm </div>
          <div className={styles.subTitle}>Thêm ảnh sản phẩm vào đây</div>
        </div>
        <div className={styles.formEdit}>
          <form>
            <div className={styles.textAreaStyle}>
              <textarea
                placeholder="Nhập link ảnh vào đây"
                className={styles.form}
              />
            </div>
          </form>
          <div className={styles.imgProduct}>
            <img
              src="https://lh3.googleusercontent.com/k6LaoZTSi68Atu1eCjTliBR_dCejX--wxPDywbrn7QdVWYHvPIUtZ1-0Ia7qE30RzugvKPPlLUYuv8w_6HFl"
              alt=""
            />
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
          <form>
            <div className={styles.textAreaStyle}>
              <textarea
                placeholder="Nhập link ảnh vào đây"
                className={styles.form}
              />
            </div>
          </form>
          <div className={styles.imgProduct}>
            <img
              src="https://lh3.googleusercontent.com/k6LaoZTSi68Atu1eCjTliBR_dCejX--wxPDywbrn7QdVWYHvPIUtZ1-0Ia7qE30RzugvKPPlLUYuv8w_6HFl"
              alt=""
            />
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
          <form>
            <div className={styles.textAreaStyle}>
              <textarea
                placeholder="Nhập tên sản phẩm"
                className={styles.form}
              />
            </div>
          </form>
          <div className={styles.nameProduct}>
            <div>
              Laptop HP Pavilion 14-bf016TU (2GE48PA) (14" FHD/i3-7100U/4GB/1TB
              HDD/HD 620/Free DOS/1.6 kg)
            </div>
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
          <form>
            <div className={styles.textAreaStyle}>
              <textarea
                placeholder="Nhập mô tả sản phẩm"
                className={styles.form}
              />
            </div>
          </form>
          <div className={styles.nameProduct}>
            <div>
              Laptop HP Pavilion 14-bf016TU (2GE48PA) (14" FHD/i3-7100U/4GB/1TB
              HDD/HD 620/Free DOS/1.6 kg)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
