import './filteringkeyword.scss';
import Filterviewerbutton from '../filterkeywordviewer/Filterviewerbutton';

function ProductType(props) {
  const { createfilterviewer, createfilterarr, filterarrstate } = props;

  const productfilterview = () => {
    createfilterviewer(true);
  };
  const detailviewer = () => {
    const filterinfor = {
      title: 'Product Type',
      value: ' In Store Purchase',
    };
    createfilterarr([...filterarrstate, filterinfor]);
  };

  return (
    <div id="product_filtering_category">
      <div className="button_style">
        <button
          className="inner_keyword_button"
          onClick={() => {
            productfilterview();
            detailviewer();
          }}
        >
          In Store Purchase
          <div className="margin_right">(갯수)</div>
        </button>
      </div>
      <div className="button_style">
        <button
          className="inner_keyword_button"
          onClick={() => {
            productfilterview();
            detailviewer();
          }}
        >
          <div className="margin_right">Ecommerce</div>
          <div className="margin_right">(갯수)</div>
        </button>
      </div>
    </div>
  );
}

export default ProductType;
