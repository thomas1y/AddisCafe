import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./AddPage.css";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";

const AddPage = () => {
  const { url } = useContext(AdminContext);
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.status === 200 || response.status === 201) {
        toast.success("✅ Product added successfully");
        setData({ name: "", description: "", price: "", category: "Salad" });
        setImage("");
      } else {
        toast.error("⚠️ Unexpected server response");
      }
    } catch (error) {
      toast.error("❌ Error adding product");
      console.error("Add product error:", error);
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=''
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </div>

        <div className='add-product-name flex-col'>
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type='text'
            name='name'
            placeholder='Type here'
            required
          />
        </div>

        <div className='add-product-description flex-col'>
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name='description'
            rows='6'
            placeholder='Write content here'
            required
          />
        </div>

        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              name='category'
              value={data.category}
              required
            >
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Deserts'>Deserts</option>
              <option value='Sandwich'>Sandwich</option>
              <option value='Cake'>Cake</option>
              <option value='Pure Veg Pasta'>Pure Veg Pasta</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>

          <div className='add-price flex-col'>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type='number'
              name='price'
              placeholder='$'
              required
            />
          </div>
        </div>

        <button type='submit' className='add-btn'>
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddPage;
