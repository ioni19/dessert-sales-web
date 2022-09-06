import React, { useState } from 'react';
import './shop.scss';
import CollectionInner from './CollectionInner/CollectionInner';
import Sortselector from './sortselector/Sortselector';

function Shop() {
  const [sortButton, setSortButton] = useState(true);
  const [sortSelector, setSortSelector] = useState(false);

  return (
    <div id="shop_choc">
      <div id="category_bar">
        <span className="tool_line" id="left_tool">
          <button className="sortbutton" onClick={() => setSortButton(false)}>
            <img id="menu_box" src="images/menu.png" alt="menu" />
          </button>
          <button className="sortbutton" onClick={() => setSortButton(true)}>
            <img id="menu_box2" src="images/menu2.png" alt="menu2" />
          </button>
        </span>
        <div>
          <button id="right_tool" onClick={() => setSortSelector(p => !p)}>
            SORT
          </button>
          <div id="selector_position">{sortSelector && <Sortselector />}</div>
        </div>
      </div>
      <CollectionInner sortbutton={sortButton} />
    </div>
  );
}

export default Shop;