import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../store/reducers/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");
  const [discription, setdiscription] = useState("");
  const [category, setcategory] = useState("semi-silk-paithani");
  const [price, setprice] = useState(0);
  const [currentPrice, setcurrentPrice] = useState(0);

  const [image, setImage] = useState();
  const [viewimage, setViewImage] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const profiledata = new FormData();

    profiledata.append("text", text);
    profiledata.append("discription", discription);
    profiledata.append("category", category);
    profiledata.append("price", price);
    profiledata.append("currentPrice", currentPrice);
    profiledata.append("file", image);

    dispatch(createGoal(profiledata));
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
    reader.onloadend = (e) => setViewImage(reader.result);
  }

  return (
    <section className="form glasscard">
      <br /> <br />
      <form>
        <div className="form-group">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label htmlFor="text">Description</label>
          <input
            type="text"
            name="discription"
            id="text"
            value={discription}
            onChange={(e) => setdiscription(e.target.value)}
          />
          <label htmlFor="text">Category</label>
          {/* <input
            type="text"
            name="discription"
            id="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          /> */}

          <select
            name="category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="semi-silk-paithani">Semi Silk Paithani</option>
            <option value="pure-silk-paithani">Pure Silk Paithani</option>
            <option value="all-paithani">Others</option>
          </select>
          <label htmlFor="text">Price</label>
          <input
            type="number"
            name="price"
            id="text"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          <label htmlFor="text">Current Price</label>
          <input
            type="number"
            name="currentPrice"
            id="text"
            value={currentPrice}
            onChange={(e) => setcurrentPrice(e.target.value)}
          />
          {viewimage && (
            <img
              alt={"profile"}
              height="150px"
              width="150px"
              className="rounded-circle"
              src={viewimage}
            />
          )}

          <div className="custom-file">
            <label className="custom-file-label" htmlFor="customFile">
              Image
            </label>
            <input
              name="image"
              className="custom-file-input"
              type="file"
              onChange={loadimage}
            />
          </div>
        </div>
        <hr />
        <div className="form-group">
          <button
            onClick={(e) => onSubmit(e)}
            className="btn btn--rounded btn--border"
          >
            Add
          </button>
        </div>
      </form>
      <style jsx>{`
        .form,
        .content {
          width: 50%;
          margin: 50px auto;
        }

        .form-group {
          margin-bottom: 10px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #e6e6e6;
          animation: bg 10s infinite;
          border-radius: 5px;
          margin-bottom: 10px;
          font-family: inherit;
        }

        .form-group label {
          text-align: left;
          display: block;
          margin: 0 0 5px 3px;
        }

        .btn {
          width: 100%;
          margin: 10px 0;
        }

        @media (max-width: 600px) {
          .form {
            width: 100%;
          }

          .heading h1 {
            font-size: 2rem;
          }

          .heading p {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default GoalForm;
