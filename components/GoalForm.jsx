/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import axios from "axios";
// import products1 from "../utils/data/products";
import { useRouter } from "next/navigation";
import { Button, TextField, Select, MenuItem, Divider } from "@mui/material";
function GoalForm() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [discription, setdiscription] = useState("");
  const [category, setcategory] = useState("semi-silk-paithani");
  const [price, setprice] = useState(0);
  const [currentPrice, setcurrentPrice] = useState(0);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState();
  const [viewimage, setViewImage] = useState();

  const create = async (profiledata) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${token}`,
      },
    };

    // try {
    const response = await axios.post("/api/product/", profiledata, config);
    router.refresh();
    if (response.status == 200) {
      setAdded(true);
    } else {
      setError(true);
    }
    // } catch {
    //   setError(true);
    // }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // const temp = {
    //   ...products1[0],
    //   ...{
    //     text,
    //     discription,
    //     currentPrice,
    //     category,
    //     price,
    //     img: {
    //       //not using in local
    //       data: false,
    //       // contentType: image.mimetype,
    //       file: image,
    //     },
    //     _id: Math.random() * 100000,
    //     local: true,
    //   },
    // };

    const profiledata = new FormData();

    profiledata.append("text", text);
    profiledata.append("discription", discription);
    profiledata.append("category", category);
    profiledata.append("price", price);
    profiledata.append("currentPrice", currentPrice);
    profiledata.append("file", image);

    // dispatch(createGoal(profiledata));
    create(profiledata);

    setText("");
    setdiscription("");
    setcategory("semi-silk-paithani");
    setprice(0);
    setcurrentPrice(0);
    setImage();
    setViewImage();
  };

  function loadimage(e) {
    setImage(e.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => setViewImage(reader.result);
  }

  return (
    <>
      <form>
        <label htmlFor="text">Name</label>
        <TextField
          variant="filled"
          fullWidth
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="text">Description</label>
        <TextField
          variant="filled"
          fullWidth
          type="text"
          name="discription"
          value={discription}
          onChange={(e) => setdiscription(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="text">Category</label>
        {/* <input
            type="text"
            name="discription"
            
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          /> */}

        <Select
          name="category"
          value={category}
          fullWidth
          onChange={(e) => setcategory(e.target.value)}
        >
          <MenuItem value="semi-silk-paithani">Semi Silk Paithani</MenuItem>
          <MenuItem value="pure-silk-paithani">Pure Silk Paithani</MenuItem>
          <MenuItem value="all-paithani">Others</MenuItem>
        </Select>
        <br />
        <br />
        <label htmlFor="text">Price</label>
        <TextField
          variant="filled"
          fullWidth
          type="number"
          name="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="text">Current Price</label>
        <TextField
          variant="filled"
          fullWidth
          type="number"
          name="currentPrice"
          value={currentPrice}
          onChange={(e) => setcurrentPrice(e.target.value)}
        />
        <br />
        <br />
        {viewimage && (
          <img alt={"profile"} height="150px" width="150px" src={viewimage} />
        )}

        <div>
          <label>Image</label>
          <TextField
            variant="filled"
            fullWidth
            name="image"
            type="file"
            onChange={loadimage}
          />
        </div>
        <br />
        <Divider />
        <br />
        <div>
          {error && "unable to add the product"}
          {added && "product added refresh th page"}
          <Button
            variant="contained"
            fullWidth
            onClick={(e) => onSubmit(e)}
            className="fg"
            sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
}

export default GoalForm;
