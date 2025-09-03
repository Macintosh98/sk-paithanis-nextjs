import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../store/reducers/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  const [base64, setBase64] = useState("");

  useEffect(() => {
    const a = new Uint8Array(goal.img?.data.data);
    const b = a.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, "");
    setBase64(btoa(b));
  }, [goal]);

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2
        style={{
          backgroundColor: "black",
          padding: "10px",
          marginTop: "10px",
          color: "white",
        }}
      >
        {goal.text}
      </h2>
      <br />
      <h5 style={{ color: "#555" }}>
        {goal.discription} - {goal.category}
      </h5>
      <br />
      <img
        alt=""
        width={"80%"}
        style={{ borderRadius: "20px" }}
        src={"data:" + goal.img.contentType + ";base64," + base64}
      />
      <h4 className="">
        Rs. {goal.currentPrice}/{goal.price}
      </h4>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #000;
        }

        p {
          line-height: 1.7;
        }

        ul {
          list-style: none;
        }

        li {
          line-height: 2.2;
        }

        h1,
        h2,
        h3 {
          font-weight: 600;
          margin-bottom: 10px;
        }

        .container {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #e6e6e6;
          margin-bottom: 60px;
          margin-top: 20px;
          background-color: #000;
          border-radius: 50px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .header ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header ul li {
          margin-left: 20px;
        }

        .header ul li a {
          display: flex;
          align-items: center;
        }

        .header ul li a:hover {
          color: #777;
        }

        .header ul li a svg {
          margin-right: 5px;
        }

        .heading {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 50px;
          padding: 0 20px;
        }

        .heading p {
          color: #828282;
        }

        .goals {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 10px;
        }

        .goal {
          background-color: #f4f4f4;
          margin: 10px 0;
          padding: 20px 0 10px;
          position: relative;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border-radius: 20px;
        }

        .goal .close {
          position: absolute;
          top: 10px;
          right: 15px;
          cursor: pointer;
          border: none;
          background: none;
        }

        .form,
        .content {
          width: 70%;
          margin: 0 auto;
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
          padding: 10px 20px;
          border: 1px solid #000;
          border-radius: 5px;
          background: #000;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          appearance: button;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn svg {
          margin-right: 8px;
        }

        .btn-reverse {
          background: #fff;
          color: #000;
        }

        .btn-block {
          width: 100%;
          margin-bottom: 20px;
        }

        .btn:hover {
          transform: scale(0.98);
        }

        .loadingSpinnerContainer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 5000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .loadingSpinner {
          width: 64px;
          height: 64px;
          border: 8px solid;
          border-color: #000 transparent #555 transparent;
          border-radius: 50%;
          animation: spin 1.2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 600px) {
          .form {
            width: 90%;
          }

          .heading h1 {
            font-size: 2rem;
          }

          .heading p {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default GoalItem;
