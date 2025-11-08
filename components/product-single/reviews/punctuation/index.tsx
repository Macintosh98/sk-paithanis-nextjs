/* eslint-disable @typescript-eslint/no-explicit-any */
import { PunctuationType } from "../../../../types";

const Punctuation = ({
  votes,
  punctuation,
  countOpinions,
}: PunctuationType) => {
  const percentageBar = (count: number) => {
    return (count * 100) / countOpinions;
  };

  return (
    <section className="product-punctuation">
      <div className="product-punctuation__values">
        <h3>{punctuation}</h3>5 Rateing
        <p>
          <i className="icon-avatar"></i>
          {countOpinions} all opinions
        </p>
      </div>

      <div className="product-punctuation__rates">
        <ul className="punctuations-lists">
          {votes.map((vote: any) => (
            <li key={vote.count} className="punctuation-item">
              1 Rateing
              <span>{vote.value}</span>
              <div className="punctuation-item__bar">
                <div
                  style={{ width: percentageBar(vote.count) + "%" }}
                  className="punctuation-item__bar__current"
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="punctuation-btn-wrapper">
        <button type="button" className="btn btn--rounded btn--yellow">
          Add opinion
        </button>
      </div>
    </section>
  );
};

export default Punctuation;
