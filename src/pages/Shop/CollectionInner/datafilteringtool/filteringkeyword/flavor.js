import { useEffect, useState } from 'react';

function Flavor() {
  // const [goodsstate, setgoodsstate] = useState();

  // useEffect(() => {
  //   fetch('mockdata/product.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setgoodsstate(data.product);
  //     });
  // }, []);

  return (
    <div id="flavor_filtering_category">
      <div className="button_style">
        <div className="margin_right">Maccha</div>
        <div className="margin_right">(갯수)</div>
      </div>
    </div>
  );
}
export default Flavor;